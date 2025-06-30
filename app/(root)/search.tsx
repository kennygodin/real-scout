import PageWrapper from "@/components/layouts/PageWrapper";
import CategoryTab from "@/components/shared/CategoryTab";
import Search from "@/components/shared/Search";
import SearchPropertyCard from "@/components/ui/cards/SearchPropertyCard";
import { categories, propertyCards } from "@/constants/data";
import icons from "@/constants/icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const SearchPage = () => {
  const router = useRouter();
  const [activeCategory, setActiveCategory] = useState<string>("All");
  return (
    <PageWrapper>
      <ScrollView className="flex-1 mt-3" showsVerticalScrollIndicator={false}>
        <View className="gap-y-5 mx-2">
          <View className="flex-row justify-between items-center">
            <TouchableOpacity
              onPress={() => router.back()}
              className="bg-primary/5 rounded-full p-3"
            >
              <Image
                source={icons.backArrow}
                className="w-8 h-8"
                resizeMode="cover"
              />
            </TouchableOpacity>

            <Text className="font-rubik-medium text-xl tracking-wide text-dark">
              Search for Your Ideal Home
            </Text>

            <TouchableOpacity className="relative">
              <Image source={icons.bell} className="size-8" />
              <View className="bg-primary w-3 h-3 rounded-full absolute top-0.5 right-0.5" />
            </TouchableOpacity>
          </View>

          <Search />

          <FlatList
            data={categories}
            horizontal
            showsHorizontalScrollIndicator={false}
            scrollEnabled={true}
            nestedScrollEnabled={true}
            ItemSeparatorComponent={() => <View className="w-4" />}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CategoryTab
                category={item.category}
                isActive={activeCategory === item.category}
                onPress={() => setActiveCategory(item.category)}
              />
            )}
          />

          <FlatList
            data={propertyCards}
            scrollEnabled={false}
            nestedScrollEnabled={false}
            ItemSeparatorComponent={() => <View className="h-2" />}
            ListHeaderComponent={() => (
              <View className="">
                <Text className="text-2xl font-rubik-semibold text-dark">
                  Found 182 Apartments
                </Text>
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponentStyle={{ marginBottom: 10 }}
            renderItem={({ item }) => <SearchPropertyCard property={item} />}
            numColumns={1}
          />
        </View>
      </ScrollView>
    </PageWrapper>
  );
};

export default SearchPage;
