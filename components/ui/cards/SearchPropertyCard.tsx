import icons from "@/constants/icons";
import { Property } from "@/types/property.types";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface PropertyCardProps {
  property: Property;
}

const SearchPropertyCard = ({ property }: PropertyCardProps) => {
  const router = useRouter();
  const [isBookmark, setIsBookmark] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => router.push(`/property/${property.id}`)}
      className="flex-1 flex-row items-center justify-between gap-x-2 rounded-xl p-4 bg-white"
      style={{
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0.5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 1,
      }}
    >
      <View className="relative w-[100px] h-[100px]">
        <Image
          source={property.image}
          className="w-full h-full rounded-lg mb-3"
        />

        <View className="absolute top-2 right-2 bg-white flex-row items-center gap-2 px-2 py-0.5 rounded-full">
          <Image source={icons.star} className="size-3" />
          <Text className="text-primary text-sm font-rubik-semibold">
            {property.rating}
          </Text>
        </View>
      </View>

      <View className="gap-y-3 flex-1">
        <Text className="text-dark font-rubik-semibold text-2xl">
          {property.title}
        </Text>
        <Text className="text-lightdark font-rubik text-lg">
          {property.location}
        </Text>
      </View>

      <View className="items-end justify-between h-full">
        <TouchableOpacity onPress={() => setIsBookmark(!isBookmark)}>
          <Image
            source={icons.heart}
            tintColor={isBookmark ? "red" : "#666876"}
            className="size-6"
          />
        </TouchableOpacity>
        <Text className="text-primary font-rubik-bold text-2xl">
          ${property.price}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default SearchPropertyCard;
