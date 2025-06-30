import icons from "@/constants/icons";
import {
  Image,
  ImageSourcePropType,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

interface PropertyAgentProps {
  name: string;
  profileImage: ImageSourcePropType;
}

const PropertyAgent = ({ name, profileImage }: PropertyAgentProps) => {
  return (
    <View className="gap-y-3">
      <Text className="text-2xl font-rubik-semibold text-dark">Agent</Text>
      <View className="flex-row items-center gap-4">
        <View className="flex-row justify-between items-center ">
          <View className="flex-row gap-4 items-center flex-1">
            <Image
              source={profileImage}
              className="w-20 h-20"
              resizeMode="cover"
            />
            <View>
              <Text className="font-rubik-medium text-xl tracking-wide mt-1 text-dark">
                {name}
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
  );
};

export default PropertyAgent;
