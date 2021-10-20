from django.shortcuts import render

from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate
from django.contrib.auth.models import User
from .serializers import UserSerializer
# Create your views here.

class TestView(APIView):
    def get(self, request, format=None):
        print("API Was Called")
        return Response("You Made It", status=200)


class UserView(APIView):
    def post(self, request, format=None):
        print("Creating a user")

        user_data = request.data
        print(request.data)

        user_serializer = UserSerializer(data=user_data)
        if user_serializer.is_valid(raise_exception=False):
            user_serializer.save()

            return Response({"user":user_serializer.data}, status=200)


        return Response({"msg":"ERR"}, status=400)




class UserLoginView(APIView):
    # Convert a user token into user data
    def get(self, request, format=None):

        if request.user.is_authenticated == False or request.user.is_active == False:
            return Response("Invalid Credentials", status=403)

        user = UserSerializer(request.user)
        return Response(user.data, status=200)

    def post(self, request, format=None):
        print("Login Class")

        user_obj = User.objects.filter(email=request.data['username']).first() or User.objects.filter(username=request.data['username']).first()

        if user_obj is not None:
            credentials = {
                'username': user_obj.username,
                'password': request.data['password']
            }
            user = authenticate(**credentials)

            if user and user.is_active:
                user_serializer = UserSerializer(user)
                return Response(user_serializer.data, status=200)

        return Response("Invalid Credentials", status=403)
