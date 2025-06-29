import PageWrapper from "@/components/layouts/PageWrapper";
import CategoryTab from "@/components/shared/CategoryTab";
import Search from "@/components/shared/Search";
import FeaturedCards from "@/components/ui/cards/FeaturedCard";
import PropertyCard from "@/components/ui/cards/PropertyCard";
import { categories, featuredCards, propertyCards } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const Home = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  return (
    <PageWrapper>
      <ScrollView className="flex-1 mt-3" showsVerticalScrollIndicator={false}>
        <View className="gap-y-5">
          <View className="flex-row justify-between items-center mx-2">
            <View className="flex-row gap-2 items-center">
              <Image
                source={images.avatar}
                className="w-14 h-14"
                resizeMode="cover"
              />
              <View>
                <Text className="font-rubik-light tracking-tight text-lightdark">
                  Good Morning
                </Text>
                <Text className="font-rubik-medium text-xl tracking-wide mt-1 text-dark">
                  Adrian Hajdin
                </Text>
              </View>
            </View>

            <TouchableOpacity className="relative">
              <Image source={icons.bell} className="size-8" />
              <View className="bg-primary w-3 h-3 rounded-full absolute top-0.5 right-0.5" />
            </TouchableOpacity>
          </View>

          <Search />

          <View className="mx-2">
            <View className="flex-row justify-between items-center mb-3">
              <Text className="text-2xl font-rubik-medium">Featured</Text>
              <Text className="text-primary font-rubik">See all</Text>
            </View>

            <FlatList
              data={featuredCards}
              horizontal
              showsHorizontalScrollIndicator={false}
              scrollEnabled={true}
              nestedScrollEnabled={true}
              ItemSeparatorComponent={() => <View className="w-4" />}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => <FeaturedCards property={item} />}
              ListEmptyComponent={() => (
                <View className="items-center py-8">
                  <Text className="text-gray-400">No featured properties</Text>
                </View>
              )}
              contentContainerStyle={{ paddingHorizontal: 4 }}
            />
          </View>

          <View className="mx-2 gap-y-3">
            <View className="flex-row justify-between items-center">
              <Text className="text-2xl font-rubik-medium">
                Our Recommendation
              </Text>
              <Text className="text-primary font-rubik">See all</Text>
            </View>

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
              columnWrapperStyle={{ gap: 8 }}
              renderItem={({ item }) => <PropertyCard property={item} />}
              numColumns={2}
            />
          </View>
        </View>
      </ScrollView>
    </PageWrapper>
  );
};

export default Home;
