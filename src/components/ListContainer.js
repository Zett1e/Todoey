import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import TextGray from "./TextGray";
import { TextInput } from "react-native";
import { LightBulbIcon, PlusIcon } from "react-native-heroicons/solid";
import TextGray2 from "./TextGray2";
import CheckBox from "./CheckBox";
import { todos } from "../todos";
import { ScrollView } from "react-native";
import { ThemeContext } from "../context/ThemeProvider";

const ListContainer = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState(todos);
  const { isDark } = useContext(ThemeContext);

  const addTodo = () => {
    setTasks((prev) => {
      return [...prev, { id: tasks.length + 1, task: input }];
    });
    setInput("");
  };

  const deleteTodo = (id) => {
    const tasksRemain = tasks.filter((task) => task.id !== id);
    setTasks(tasksRemain);
    console.log(id);
  };

  return (
    <View className="w-[85%] mx-auto -mt-24 space-y-5">
      <View
        className={`${
          isDark ? "bg-[#25273c]" : "bg-white"
        } flex-row justify-between items-center space-x-5 rounded-md p-3 w-full`}
      >
        <LightBulbIcon color="gray" />
        <TextInput
          style={{
            fontFamily: "JosefinSans",
            color: "gray",
            flex: 1,
          }}
          placeholderTextColor="gray"
          placeholder="Create a new todo..."
          value={input}
          onChangeText={setInput}
          onEndEditing={addTodo}
        />
        <TouchableOpacity onPress={addTodo}>
          <PlusIcon color="gray" className="ml-auto" />
        </TouchableOpacity>
      </View>
      <View className="rounded-md overflow-hidden h-96">
        <ScrollView className={isDark ? "bg-[#25273c]" : "bg-white"}>
          {tasks
            .map((task) => (
              <CheckBox key={task.id} task={task} deleteTodo={deleteTodo} />
            ))
            .reverse()}
        </ScrollView>

        <View
          className={`${
            isDark ? "bg-[#25273c]" : "bg-white"
          } flex-row items-center justify-between space-x-5 px-3 py-5 `}
        >
          <TextGray2>{tasks.length} items left</TextGray2>
          <TouchableOpacity>
            <TextGray2>Clear Completed</TextGray2>
          </TouchableOpacity>
        </View>
      </View>
      <View>
        <View
          className={`${
            isDark ? "bg-[#25273c]" : "bg-white"
          } flex-row items-center justify-center space-x-5 rounded-md px-3 py-5 `}
        >
          <TextGray2>All</TextGray2>
          <TextGray2>Active</TextGray2>
          <TextGray2>Completed</TextGray2>
        </View>
      </View>
    </View>
  );
};

export default ListContainer;
