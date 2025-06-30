import { gallery } from "@/constants/data";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";

interface PropertyGalleryProps {
  setCurrentImageIndex: (index: number) => void;
  setIsImageViewVisible: (type: true) => void;
}

const PropertyGallery = ({
  setCurrentImageIndex,
  setIsImageViewVisible,
}: PropertyGalleryProps) => {
  return (
    <View className="gap-y-3">
      <Text className="text-2xl font-rubik-semibold text-dark">Gallery</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="flex-row"
        contentContainerStyle={{ paddingRight: 16 }}
      >
        {gallery.slice(0, 3).map((item, index) => (
          <TouchableOpacity
            key={`gallery-${item.id}-${index}`}
            onPress={() => {
              setCurrentImageIndex(index);
              setIsImageViewVisible(true);
            }}
            className="mr-3"
            style={{ position: "relative" }}
          >
            <Image
              source={{ uri: item.image }}
              className="w-32 h-24 rounded-xl"
              resizeMode="cover"
            />
            {index === 2 && gallery.length > 3 && (
              <View className="absolute inset-0 bg-black/50 rounded-xl items-center justify-center">
                <Text className="text-white font-rubik-semibold text-lg">
                  +{gallery.length - 3}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default PropertyGallery;
