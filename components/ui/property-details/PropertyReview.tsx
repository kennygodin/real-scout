import icons from "@/constants/icons";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface PropertyReviewProps {
  reviews: number;
  name: string;
  comment: string;
  commentLikes: number;
  time: string;
  profileImage: ImageSourcePropType;
}
const PropertyReview = ({
  reviews,
  profileImage,
  name,
  comment,
  commentLikes,
  time,
}: PropertyReviewProps) => {
  return (
    <View className="gap-y-4">
      <View className="flex-row justify-between items-center">
        <View className="flex-row items-center gap-2">
          <Image source={icons.star} className="size-8" />
          <Text className="text-2xl font-rubik-semibold text-dark">
            4.8 ({reviews} reviews)
          </Text>
        </View>
        <TouchableOpacity>
          <Text className="font-rubik-medium text-primary">See all</Text>
        </TouchableOpacity>
      </View>

      <View className="gap-y-3">
        <View className="flex-row items-center gap-2">
          <Image source={profileImage} className="w-12 h-12" />
          <Text className="font-rubik-semibold">{name}</Text>
        </View>
        <Text className="font-rubik text-lightdark leading-8 text-lg">
          {comment}
        </Text>
        <View className="flex-row items-center justify-between">
          <View className="flex-row items-center gap-2">
            <Image
              source={icons.heart}
              className="size-8"
              tintColor="#0061FF"
            />
            <Text className="font-rubik text-dark leading-9 text-lg">
              {commentLikes}
            </Text>
          </View>
          <Text className="font-rubik text-dark">{time}</Text>
        </View>
      </View>
    </View>
  );
};

export default PropertyReview;
