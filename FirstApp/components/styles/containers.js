import React, { useContext } from 'react';
import { StyleSheet, Dimensions } from 'react-native';

const containers = (appSettings) => StyleSheet.create({

  outerPage: {
    backgroundColor: ("backgroundColor" in appSettings)? appSettings['backgroundColor'] : "#ffffff",
    color: ("foregroundColor" in appSettings)? appSettings['foregroundColor'] : "#000000",
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width,
  }





});

export default containers;
