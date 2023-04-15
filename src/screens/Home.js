import { View, Text, Image } from "react-native";
import React, { useContext } from "react";
import { SunIcon, MoonIcon } from "react-native-heroicons/solid";
import ListContainer from "../components/ListContainer";
import TextGray2 from "../components/TextGray2";
import { ThemeContext } from "../context/ThemeProvider";
import { TouchableOpacity } from "react-native";

const Home = () => {
  const { isDark, setIsDark } = useContext(ThemeContext);
  const toggleTheme = () => {
    setIsDark(!isDark);
  };
  return (
    <View className={`${isDark? 'bg-[#161722]': 'bg-slate-200'} h-screen`}>
      <View className="relative">
        <Image source={require("../../assets/image/bg-mobile-dark.jpg")} />
        <View className="absolute top-8 w-full flex-row items-center justify-between px-5">
          <Text className="text-white font-bold text-2xl tracking-[10px]">
            TODOEY
          </Text>
          {isDark ? (
            <SunIcon color="white" onPress={toggleTheme} />
          ) : (
            <MoonIcon color="white" onPress={toggleTheme} />
          )}
        </View>
      </View>
      <ListContainer />
      <TextGray2 className="text-center mt-5">
        Drag and drop to reorder list
      </TextGray2>
    </View>
  );
};

export default Home;
