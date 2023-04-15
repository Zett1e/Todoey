import { View, Text, StyleSheet } from "react-native";
import React from "react";

const TextGray = ({ children,style }) => {
  return (
    <Text style={[styles.text,style]} className="text-gray-600">
      {children}
    </Text>
  );
};

export default TextGray;

const styles = StyleSheet.create({
  text: {
    fontFamily: "JosefinSans",
  },
});
