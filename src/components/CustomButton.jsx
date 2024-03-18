import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const CustomButton = ({ title, onPress, buttonStyle, textStyle }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, buttonStyle]}>
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#9F212F",
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

export default CustomButton;
