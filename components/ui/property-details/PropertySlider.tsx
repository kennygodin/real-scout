import { gallery } from "@/constants/data";
import icons from "@/constants/icons";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import {
  Dimensions,
  Image,
  Platform,
  TouchableOpacity,
  View,
} from "react-native";
import Swiper from "react-native-swiper";

const PropertySlider = () => {
  const swiperRef = useRef<Swiper>(null);
  const router = useRouter();
  const { height } = Dimensions.get("window");
  const IMAGE_HEIGHT = height * (3 / 5);

  return (
    <View style={{ height: IMAGE_HEIGHT }} className="relative">
      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View className="w-2.5 h-2.5 mx-1 bg-[#E2E8F0] rounded-full" />}
        activeDot={<View className="w-7 h-2.5 mx-1 bg-primary rounded-full" />}
        paginationStyle={{
          zIndex: 1,
          bottom: 20,
        }}
      >
        {gallery.map((item, index) => (
          <View key={`swiper-${item.id}-${index}`}>
            <Image
              source={{ uri: item.image }}
              className="w-full"
              style={{ height: IMAGE_HEIGHT }}
              resizeMode="cover"
            />
          </View>
        ))}
      </Swiper>
      <View
        className={`flex-row gap-2 items-center absolute ${Platform.OS === "ios" ? "top-14" : "top-2"} left-4 right-4`}
      >
        <TouchableOpacity onPress={() => router.back()}>
          <Image source={icons.backArrow} className="size-8" />
        </TouchableOpacity>
        <View className="flex-row gap-4 items-center ml-auto">
          <TouchableOpacity>
            <Image source={icons.heart} tintColor="black" className="size-8" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={icons.send} className="size-8" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PropertySlider;
