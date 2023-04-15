import { View, Text, StyleSheet } from "react-native";
import React from "react";

const TextGray2 = ({ children,style }) => {
  return (
    <Text style={[styles.text,style]} className="text-gray-400">
      {children}
    </Text>
  );
};

export default TextGray2;

const styles = StyleSheet.create({
  text: {
    fontFamily: "JosefinSans",
    flex: 1,
    lineHeight: 20
  },
});
