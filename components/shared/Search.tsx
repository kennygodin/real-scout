import icons from "@/constants/icons";
import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

const Search = () => {
  return (
    <View className="bg-primary/5 flex-row items-center rounded-md mx-2 px-3">
      <Image source={icons.search} className="size-6" />
      <TextInput
        placeholder="Search something"
        className="flex-1 px-2 py-5 text-[15px] font-rubik"
      />
      <TouchableOpacity>
        <Image source={icons.filter} className="size-6" />
      </TouchableOpacity>
    </View>
  );
};

export default Search;
