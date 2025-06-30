import icons from "@/constants/icons";
import { Image, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

interface PropertyLocationProps {
  address: string;
  longitude: number;
  latitude: number;
  latitudeDelta: number;
  longitudeDelta: number;
}
const PropertyLocation = ({
  address,
  latitude,
  longitude,
  latitudeDelta,
}: PropertyLocationProps) => {
  return (
    <View className="gap-y-3">
      <Text className="text-2xl font-rubik-semibold text-dark">Location</Text>

      <View className="flex-row items-center gap-2">
        <Image source={icons.location} className="size-7" />
        <Text className="font-rubik text-lightdark leading-9 text-xl">
          {address}
        </Text>
      </View>

      <MapView
        style={{ height: 200, width: "100%", borderRadius: 12 }}
        initialRegion={{
          latitude,
          longitude,
          latitudeDelta,
          longitudeDelta: 0.01,
        }}
      >
        <Marker
          coordinate={{
            latitude: 40.7128,
            longitude: -74.006,
          }}
          title="Modernica Apartment"
          description="Grand City St. 100, New York"
        ></Marker>
      </MapView>
    </View>
  );
};

export default PropertyLocation;
