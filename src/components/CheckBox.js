import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Checkbox } from "react-native-paper";
import TextGray from "./TextGray";
import { XMarkIcon } from "react-native-heroicons/solid";

const CheckBox = ({ task, deleteTodo }) => {
  const [checked, setChecked] = useState(false);
  
  return (
    <View className=" flex-row items-center space-x-5 p-3 border-b-[1px] border-gray-600">
      <Checkbox
        status={checked ? "checked" : "unchecked"}
        onPress={() => {
          setChecked(!checked);
        }}
      />
      <TextGray className={checked ? "line-through" : ""}>{task.task}</TextGray>
      <TouchableOpacity onPress={() => deleteTodo(task.id)}>
        <XMarkIcon color="gray" />
      </TouchableOpacity>
    </View>
  );
};

export default CheckBox;
