import icons from "@/constants/icons";
import { Tabs } from "expo-router";
import { Image, ImageSourcePropType, Platform, Text, View } from "react-native";

export default function RootLayout() {
  const TabIcon = ({
    focused,
    icon,
    title,
  }: {
    focused: boolean;
    title: string;
    icon: ImageSourcePropType;
  }) => {
    return (
      <View className="w-full min-w-[112px] h-[52px] mt-4 justify-center items-center gap-1 rounded-full overflow-hidden">
        <Image
          source={icon}
          tintColor={focused ? "#0061FF" : ""}
          className="size-7"
        />
        <Text
          className={`font-rubik text-sm ${focused ? "text-primary" : "text-dark"}`}
        >
          {title}
        </Text>
      </View>
    );
  };
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#FFFFFF",
          paddingTop: Platform.OS === "ios" ? 10 : 10,
          paddingBottom: Platform.OS === "ios" ? 20 : 10,
          height: Platform.OS === "ios" ? 80 : 60,
          borderTopWidth: 0,
          elevation: 5,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: -1 },
          shadowOpacity: 0.1,
          shadowRadius: 4,
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.home} title="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={icons.search} title="Search" />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} title="Profile" icon={icons.person} />
          ),
        }}
      />
    </Tabs>
  );
}
