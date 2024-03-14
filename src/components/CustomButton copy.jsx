import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButtonA = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#00416A",
    paddingVertical: 10,
    paddingHorizontal: 80,
    borderRadius: 5,
    alignItems: "center",
    marginTop:5,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default CustomButtonA;
