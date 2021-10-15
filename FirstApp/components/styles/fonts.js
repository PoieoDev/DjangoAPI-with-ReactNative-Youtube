import React, { useContext } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const fonts = (appSettings) => StyleSheet.create({

  h1: {
    color: ("foregroundColor" in appSettings)? appSettings['foregroundColor'] : "#ffffff",
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: "center",
    width: "100%"
  },

  p: {
    color: ("foregroundColor" in appSettings)? appSettings['foregroundColor'] : "#ffffff",
    fontSize: 12,
    width: "100%"

  }





});

export default fonts;
