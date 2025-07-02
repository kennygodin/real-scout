import PageWrapper from "@/components/layouts/PageWrapper";
import ProfileLink from "@/components/ui/profile/ProfileLink";
import icons from "@/constants/icons";
import images from "@/constants/images";

import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: "images",
      allowsEditing: true,
      aspect: [1, 1],
      quality: 0.8,
    });

    if (!result.canceled) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  return (
    <PageWrapper>
      <ScrollView className="flex-1 mt-3" showsVerticalScrollIndicator={false}>
        <View className="mx-4">
          <View className="flex-row justify-between items-center">
            <Text className="font-rubik-medium text-2xl tracking-wide">
              Profile
            </Text>

            <TouchableOpacity className="relative">
              <Image source={icons.bell} className="size-8" />
              <View className="bg-primary w-3 h-3 rounded-full absolute top-0.5 right-0.5" />
            </TouchableOpacity>
          </View>

          <View className="gap-y-5">
            <View className="items-center gap-y-2">
              <TouchableOpacity onPress={pickImage}>
                <Image
                  source={images.avatar}
                  className="w-40 h-40"
                  resizeMode="cover"
                />
                <View className="absolute bottom-0 right-0 bg-white rounded-full p-2">
                  <Image className="size-9" source={icons.edit} />
                </View>
              </TouchableOpacity>
              <View className="">
                <Text className="font-rubik-medium text-3xl tracking-wide mt-1 text-dark">
                  Adrian Hajdin
                </Text>
              </View>
            </View>

            <View className="h-0.5 bg-primary/10" />
            <ProfileLink label="My Booking" icon={icons.calendar} />

            <ProfileLink label="Payments" icon={icons.wallet} />
            <View className="h-0.5 bg-primary/10" />

            <ProfileLink label="Profile" icon={icons.person} />
            <ProfileLink label="Notification" icon={icons.bell} />
            <ProfileLink label="Security" icon={icons.shield} />
            <ProfileLink label="Language" icon={icons.language} />
            <ProfileLink label="Help Center" icon={icons.info} />
            <ProfileLink label="Invite Friends" icon={icons.people} />
            <ProfileLink logout label="Logout" icon={icons.logout} />
          </View>
        </View>
      </ScrollView>
    </PageWrapper>
  );
};

export default Profile;
