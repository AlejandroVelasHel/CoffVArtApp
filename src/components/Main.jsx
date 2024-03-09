import React, { useEffect } from "react";
import Constants from "expo-constants";
import { getRequests } from "../../data/api";
import { Alert, StyleSheet, Text, View,TouchableNativeFeedback, ImageBackgroundBase } from 'react-native';
import RequestsList from "./requestsList.jsx";
import { ImageBackground } from "react-native";
import {BlurView} from '@react-native-community/blur';
import CustomAppBar from "./AppBar.jsx";


const Main = () => {
  return (
    <ImageBackground source={require('../../assets/coffee.jpg')} style={{flex:1, resizeMode: "cover", justifyContent: "center", marginTop:45}}>
    <View style={{flexGrow:1}}>
      <RequestsList/>
      <CustomAppBar/>
    </View>
    </ImageBackground>
  );
}

export default Main;