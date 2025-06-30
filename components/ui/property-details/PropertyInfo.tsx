import icons from "@/constants/icons";
import { Image, Text, View } from "react-native";

interface PropertyInfoProps {
  title: string;
  category: string;
  bedNumber: number;
  bathNumber: number;
  area: number;
  reviews: number;
}

const PropertyInfo = ({
  title,
  category,
  bedNumber,
  bathNumber,
  area,
  reviews,
}: PropertyInfoProps) => {
  return (
    <View className="gap-y-3">
      <Text className="text-2xl font-rubik-semibold text-dark">{title}</Text>
      <View className="flex-row items-center gap-4">
        <View className="bg-primary/5 rounded-full p-3">
          <Text className="text-primary font-rubik-medium uppercase">
            {category}
          </Text>
        </View>
        <View className="flex-row items-center gap-2">
          <Image source={icons.star} />
          <Text className="font-rubik text-lightdark">
            4.8 ({reviews} reviews)
          </Text>
        </View>
      </View>
      <View className="flex-row items-center gap-8">
        <View className="flex-row items-center gap-2">
          <View className="bg-primary/5 rounded-full p-3">
            <Image source={icons.bed} className="size-6" />
          </View>
          <Text className="font-rubik text-dark">{bedNumber} Beds</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <View className="bg-primary/5 rounded-full p-3">
            <Image source={icons.bath} className="size-6" />
          </View>
          <Text className="font-rubik text-dark">{bathNumber} bath</Text>
        </View>
        <View className="flex-row items-center gap-2">
          <View className="bg-primary/5 rounded-full p-3">
            <Image source={icons.area} className="size-6" />
          </View>
          <Text className="font-rubik text-dark">{area} sqft</Text>
        </View>
      </View>
    </View>
  );
};

export default PropertyInfo;
