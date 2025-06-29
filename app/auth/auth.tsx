import PageWrapper from "@/components/layouts/PageWrapper";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useRouter } from "expo-router";
import React from "react";
import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";

const { height } = Dimensions.get("window");
const IMAGE_HEIGHT = height * (2 / 3);

const AuthPage = () => {
  const router = useRouter();
  return (
    <PageWrapper>
      <View className="relative mt-3">
        <Image
          className="w-full"
          style={{ height: IMAGE_HEIGHT }}
          source={images.onboarding}
          resizeMode="cover"
        />
        <Text className="absolute bottom-8  w-full text-xl text-center font-rubik-light tracking-widest text-lightdark">
          WELCOME TO REAL SCOUT
        </Text>
      </View>
      <View className="px-10">
        <Text className="text-4xl font-rubik-semibold text-center capitalize text-dark">
          Let’s get you closer to
        </Text>
        <Text className="mt-2 text-4xl font-rubik-semibold text-center capitalize text-primary">
          your ideal home
        </Text>
        <Text className="my-4 w-full text-xl text-center font-rubik-light tracking-widest text-lightdark">
          Signin with Real Scout with Google
        </Text>
      </View>

      <TouchableOpacity
        onPress={() => router.replace("/home")}
        className="rounded-full mx-2 p-5 justify-center items-center bg-white flex-row gap-4"
        style={{
          // iOS Shadow
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 0.5,
          },
          shadowOpacity: 0.15,
          shadowRadius: 5.84,
          // Android Shadow
          elevation: 2,
        }}
      >
        <Image className="w-8 h-8" source={icons.google} />
        <Text className="text-xl text-dark font-rubik">
          Sign In with Google
        </Text>
      </TouchableOpacity>
    </PageWrapper>
  );
};

export default AuthPage;
