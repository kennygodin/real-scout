import {
  Dimensions,
  Image,
  ImageSourcePropType,
  Text,
  View,
} from "react-native";
const { width } = Dimensions.get("window");

export interface FacilityItemProps {
  title: string;
  icon: ImageSourcePropType;
}

interface FacilityItemsProps {
  facilities: FacilityItemProps[];
}

const FacilityItem = ({ title, icon }: FacilityItemProps) => (
  <View
    className="items-center justify-center mb-4 px-2"
    style={{ width: width / 4 - 16 }}
  >
    <View className="p-3 bg-primary/5 rounded-full mb-2">
      <Image source={icon} className="size-8" />
    </View>
    <Text
      className="font-rubik text-center text-dark text-sm"
      numberOfLines={1}
      ellipsizeMode="tail"
    >
      {title}
    </Text>
  </View>
);

const PropertyFacilities = ({ facilities }: FacilityItemsProps) => {
  return (
    <View className="gap-y-3">
      <Text className="text-2xl font-rubik-semibold text-dark">Facilities</Text>

      <View className="flex-row flex-wrap justify-between">
        {facilities.map((item, index) => (
          <FacilityItem key={index} icon={item.icon} title={item.title} />
        ))}
      </View>
    </View>
  );
};

export default PropertyFacilities;
