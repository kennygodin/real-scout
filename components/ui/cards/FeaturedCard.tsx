import icons from "@/constants/icons";
import { Property } from "@/types/property.types";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface FeaturedCardsProps {
  property: Property;
}

const FeaturedCards = ({ property }: FeaturedCardsProps) => {
  const router = useRouter();
  const [isBookmark, setIsBookmark] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => router.push(`/property/${property.id}`)}
      className="relative h-[340px] rounded-3xl overflow-hidden"
    >
      <Image source={property.image} className="w-[250px] h-full" />
      <View className="absolute top-10 right-5 bg-white flex-row items-center gap-2 px-3 py-1 rounded-full">
        <Image source={icons.star} className="size-6" />
        <Text className="text-primary font-rubik-semibold">
          {property.rating}
        </Text>
      </View>
      <View className="absolute bottom-10 left-5 right-5 gap-y-3">
        <Text className="text-white font-rubik-semibold text-2xl">
          {property.title}
        </Text>
        <Text className="text-white font-rubik text-lg">
          {property.location}
        </Text>
        <View className="flex-row justify-between items-center">
          <Text className="text-white font-rubik-bold text-2xl">
            ${property.price}
          </Text>
          <TouchableOpacity onPress={() => setIsBookmark(!isBookmark)}>
            <Image
              source={icons.heart}
              tintColor={isBookmark ? "red" : "white"}
              className="size-6"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default FeaturedCards;
