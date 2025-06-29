import React from "react";
import { Text, TouchableOpacity } from "react-native";

interface CategoryTabProps {
  category: string;
  isActive: boolean;
  onPress: () => void;
}

const CategoryTab = ({ category, isActive, onPress }: CategoryTabProps) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`border px-5 py-2 rounded-full ${
        isActive ? "bg-primary border-primary" : "border-slate-200 bg-primary/5"
      }`}
    >
      <Text
        className={`text-base font-rubik ${isActive ? "text-white" : "text-dark"}`}
      >
        {category}
      </Text>
    </TouchableOpacity>
  );
};

export default CategoryTab;
