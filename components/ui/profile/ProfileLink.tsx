import icons from "@/constants/icons";
import React from "react";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface ProfileLinkProps {
  icon: ImageSourcePropType;
  label: string;
  logout?: boolean;
}
const ProfileLink = ({ icon, label, logout }: ProfileLinkProps) => {
  return (
    <TouchableOpacity className="flex-row justify-between items-center">
      <View className="flex-row items-center gap-4">
        <Image className="size-8" source={icon} />
        <Text
          className={`font-rubik text-xl font-dark ${logout ? "text-rose-500" : "text-dark"}`}
        >
          {label}
        </Text>
      </View>
      {!logout && <Image className="size-5" source={icons.rightArrow} />}
    </TouchableOpacity>
  );
};

export default ProfileLink;
