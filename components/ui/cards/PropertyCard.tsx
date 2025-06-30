import icons from "@/constants/icons";
import { Property } from "@/types/property.types";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  const router = useRouter();
  const [isBookmark, setIsBookmark] = useState(false);

  return (
    <TouchableOpacity
      onPress={() => router.push(`/property/${property.id}`)}
      className="relative flex-1 rounded-xl py-4 px-4 bg-white"
      style={{
        // iOS Shadow
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 0.5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        // Android Shadow
        elevation: 1,
      }}
    >
      <Image
        source={property.image}
        className="w-full h-[154px] rounded-lg mb-3"
      />
      <View className="absolute top-10 right-5 bg-white flex-row items-center gap-2 px-2 py-0.5 rounded-full">
        <Image source={icons.star} className="size-4" />
        <Text className="text-primary font-rubik-semibold">
          {property.rating}
        </Text>
      </View>
      <View className="gap-y-3">
        <Text className="text-dark font-rubik-semibold text-2xl">
          {property.title}
        </Text>
        <Text className="text-lightdark font-rubik text-lg">
          {property.location}
        </Text>
        <View className="flex-row justify-between items-center">
          <Text className="text-primary font-rubik-bold text-2xl">
            ${property.price}
          </Text>
          <TouchableOpacity onPress={() => setIsBookmark(!isBookmark)}>
            <Image
              source={icons.heart}
              tintColor={isBookmark ? "red" : "#666876"}
              className="size-6"
            />
          </TouchableOpacity>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default PropertyCard;
