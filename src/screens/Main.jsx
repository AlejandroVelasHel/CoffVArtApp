import React, { useEffect } from "react";
import { Alert, StyleSheet, Text, View,TouchableNativeFeedback, ImageBackgroundBase } from 'react-native';
import CustomAppBar from "../components/AppBar.jsx";
import {Main } from "../screens/Main.jsx";

const Main = () => {
  return (
    
    <View style={styles.container}>
      <CustomAppBar/>
    </View>
  );
}

export default Main;