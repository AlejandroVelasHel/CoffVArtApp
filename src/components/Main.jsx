import React, { useEffect } from "react";
import Constants from "expo-constants";
import { getRequests } from "../../data/api";
import { Alert, StyleSheet, Text, View,TouchableNativeFeedback, ImageBackgroundBase } from 'react-native';
import RequestsList from "./requestsList.jsx";
import { ImageBackground } from "react-native";
import {BlurView} from '@react-native-community/blur';



const Main = () => {
  return (
    <ImageBackground source={require('../../assets/coffee.jpg')} style={{flex:1, resizeMode: "cover", justifyContent: "center", marginTop:45, opacity: 0.95, }}>
    <View style={{marginTop:Constants.statusBarHeight,flexGrow:1,opacity:0.1}}>
        <RequestsList/>
    </View>
    </ImageBackground>
  );
}

export default Main;