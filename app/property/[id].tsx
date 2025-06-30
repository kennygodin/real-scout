import PropertyAgent from "@/components/ui/property-details/PropertyAgent";
import PropertyFacilities from "@/components/ui/property-details/PropertyFacilities";
import PropertyGallery from "@/components/ui/property-details/PropertyGallery";
import PropertyInfo from "@/components/ui/property-details/PropertyInfo";
import PropertyLocation from "@/components/ui/property-details/PropertyLocation";
import PropertyReview from "@/components/ui/property-details/PropertyReview";
import PropertySlider from "@/components/ui/property-details/PropertySlider";
import { facilities, gallery } from "@/constants/data";
import images from "@/constants/images";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Image,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ImageView from "react-native-image-viewing";

const PropertyDetails = () => {
  const router = useRouter();

  const [isImageViewVisible, setIsImageViewVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const imageViewerImages = gallery.map((item) => {
    if (typeof item.image === "number") {
      const resolvedSource = Image.resolveAssetSource(item.image);
      return { uri: resolvedSource.uri };
    }
    return { uri: item.image };
  });

  const handleBookingPress = () => {
    console.log("Booking pressed");
    // router.push('/booking') or your booking logic
  };

  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1 mb-24" showsVerticalScrollIndicator={false}>
        <PropertySlider />
        <View className="m-4 gap-y-8">
          <PropertyInfo
            title="Modernica Apartment"
            category="Apartment"
            bedNumber={8}
            bathNumber={3}
            area={2000}
            reviews={1275}
          />

          <View className="h-0.5 bg-primary/10" />

          <PropertyAgent name="Natasya Wilodra" profileImage={images.avatar} />

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

          <PropertyFacilities facilities={facilities} />

          <PropertyGallery
            setCurrentImageIndex={setCurrentImageIndex}
            setIsImageViewVisible={setIsImageViewVisible}
          />

          <PropertyLocation
            latitude={40.7128}
            longitude={-74.006}
            latitudeDelta={0.01}
            longitudeDelta={0.01}
            address="Grand City St. 100, New York, United States"
          />

          <PropertyReview
            name="Charolette Hanlin"
            comment="The apartment is very clean and modern. I really like the interior design. Looks like I will feel at home 😍"
            profileImage={images.avatar}
            reviews={1275}
            commentLikes={987}
            time="6 hours ago"
          />
        </View>
      </ScrollView>

      <View className="absolute bottom-0 left-0 right-0 bg-white border-t border-r border-l border-gray-200 rounded-[30px] px-4 py-3">
        <View className="flex-row items-center justify-between">
          <View className="flex-1">
            <Text className="text-sm font-rubik text-gray-500 uppercase tracking-wide">
              PRICE
            </Text>
            <Text className="text-2xl font-rubik-bold text-primary">
              $17821
            </Text>
          </View>

          <TouchableOpacity
            onPress={handleBookingPress}
            className="bg-primary px-8 py-4 rounded-full ml-4"
            activeOpacity={0.8}
          >
            <Text className="text-white font-rubik-semibold text-lg">
              Booking Now
            </Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            height: Platform.OS === "ios" ? 20 : 0,
          }}
        />
      </View>

      <ImageView
        images={imageViewerImages}
        imageIndex={currentImageIndex}
        visible={isImageViewVisible}
        onRequestClose={() => setIsImageViewVisible(false)}
        swipeToCloseEnabled={true}
        doubleTapToZoomEnabled={true}
      />
    </View>
  );
};

export default PropertyDetails;
