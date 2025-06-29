import { facilities, gallery } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import React, { useRef } from "react";
import {
  Dimensions,
  Image,
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Swiper from "react-native-swiper";

const PropertyDetails = () => {
  const { height, width } = Dimensions.get("window");
  const IMAGE_HEIGHT = height * (3 / 5);

  const swiperRef = useRef<Swiper>(null);

  const RenderFacilityItem = ({ item }: { item: any }) => (
    <View
      className="items-center justify-center mb-4 px-2"
      style={{ width: width / 4 - 16 }}
    >
      <View className="p-3 bg-primary/5 rounded-full mb-2">
        <Image source={item.icon} className="size-8" />
      </View>
      <Text
        className="font-rubik text-center text-dark text-sm"
        numberOfLines={1}
        ellipsizeMode="tail"
      >
        {item.title}
      </Text>
    </View>
  );

  return (
    <ScrollView className="relative">
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />

      <View style={{ height: IMAGE_HEIGHT }}>
        <Swiper
          ref={swiperRef}
          loop={false}
          dot={<View className="w-2.5 h-2.5 mx-1 bg-[#E2E8F0] rounded-full" />}
          activeDot={
            <View className="w-7 h-2.5 mx-1 bg-primary rounded-full" />
          }
          paginationStyle={{
            zIndex: 1,
            bottom: 20,
          }}
        >
          {gallery.map((item) => (
            <View key={item.id}>
              <Image
                source={item.image}
                className="w-full"
                style={{ height: IMAGE_HEIGHT }}
                resizeMode="cover"
              />
            </View>
          ))}
        </Swiper>
      </View>

      <View className="flex-row gap-2 items-center absolute top-14 left-4 right-4">
        <Image source={icons.backArrow} className="size-8" />
        <View className="flex-row gap-4 items-center ml-auto">
          <Image source={icons.heart} tintColor="black" className="size-8" />
          <Image source={icons.send} className="size-8" />
        </View>
      </View>

      <View className="m-4 gap-y-6">
        <View className="gap-y-3">
          <Text className="text-2xl font-rubik-semibold text-dark">
            Modernica Apartment
          </Text>
          <View className="flex-row items-center gap-4">
            <View className="bg-primary/5 rounded-full p-3">
              <Text className="text-primary font-rubik-medium uppercase">
                Apartment
              </Text>
            </View>
            <View className="flex-row items-center gap-2">
              <Image source={icons.star} />
              <Text className="font-rubik text-lightdark">
                4.8 (1,275 reviews)
              </Text>
            </View>
          </View>
          <View className="flex-row items-center gap-8">
            <View className="flex-row items-center gap-2">
              <View className="bg-primary/5 rounded-full p-3">
                <Image source={icons.bed} className="size-6" />
              </View>
              <Text className="font-rubik text-dark">8 Beds</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <View className="bg-primary/5 rounded-full p-3">
                <Image source={icons.bath} className="size-6" />
              </View>
              <Text className="font-rubik text-dark">3 bath</Text>
            </View>
            <View className="flex-row items-center gap-2">
              <View className="bg-primary/5 rounded-full p-3">
                <Image source={icons.area} className="size-6" />
              </View>
              <Text className="font-rubik text-dark">2000 sqft</Text>
            </View>
          </View>
        </View>
        <View className="h-0.5 bg-primary/10" />

        <View className="gap-y-3">
          <Text className="text-2xl font-rubik-semibold text-dark">Agent</Text>
          <View className="flex-row items-center gap-4">
            <View className="flex-row justify-between items-center ">
              <View className="flex-row gap-4 items-center flex-1">
                <Image
                  source={images.avatar}
                  className="w-20 h-20"
                  resizeMode="cover"
                />
                <View>
                  <Text className="font-rubik-medium text-xl tracking-wide mt-1 text-dark">
                    Natasya Wilodra
                  </Text>
                  <Text className="font-rubik tracking-tight text-lg text-lightdark">
                    Owner
                  </Text>
                </View>
              </View>

              <View className="flex-row items-center gap-5 ml-auto">
                <TouchableOpacity>
                  <Image source={icons.chat} className="size-8" />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Image source={icons.phone} className="size-8" />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View className="gap-y-3">
          <Text className="text-2xl font-rubik-semibold text-dark">
            Overview
          </Text>
          <Text className="font-rubik text-lightdark leading-9 text-xl">
            Sleek, modern 2-bedroom apartment with open living space, high-end
            finishes, and city views. Minutes from downtown, dining, and
            transit.
          </Text>
        </View>

        <View className="gap-y-3">
          <Text className="text-2xl font-rubik-semibold text-dark">
            Facilities
          </Text>

          <View className="flex-row flex-wrap justify-between">
            {facilities.map((item, index) => (
              <RenderFacilityItem key={index} item={item} />
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default PropertyDetails;
