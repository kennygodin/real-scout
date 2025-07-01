import { categories } from "@/constants/data";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { usePathname, useRouter } from "expo-router";
import { useState } from "react";
import {
  Image,
  Modal,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import SizeBuildingFilter from "../ui/filters/BuildingSizeFilter";
import PriceFilter from "../ui/filters/PriceFilter";
import CategoryTab from "./CategoryTab";

const Search = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [openModal, setOpenModal] = useState(false);

  const [priceRange, setPriceRange] = useState([200, 300]);
  const [buildingSizeRange, setBuildingSizeRange] = useState([2000, 3000]);
  const [selectedPropertyType, setSelectedPropertyType] = useState<string[]>(
    []
  );
  const [bedroomCount, setBedroomCount] = useState<number>(0);
  const [bathroomCount, setBathroomCount] = useState<number>(0);

  const handleSearchPress = () => {
    console.log("Search pressed, current pathname:", pathname);
    if (pathname !== "/search") {
      router.push("/search");
    }
  };

  const toggleCategory = (category: string) => {
    setSelectedPropertyType((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const resetFilters = () => {
    setPriceRange([200, 300]);
    setBuildingSizeRange([2000, 3000]);
    setSelectedPropertyType([]);
    setBathroomCount(0);
    setBedroomCount(0);
  };

  const applyFilter = () => {
    console.log({
      priceRange,
      buildingSizeRange,
      selectedPropertyType,
      bedroomCount,
      bathroomCount,
    });

    setOpenModal(false);
  };

  return (
    <View className="">
      <View className="bg-primary/5 flex-row items-center rounded-md mx-2 px-3">
        <Image source={icons.search} className="size-6" />

        {pathname === "/search" ? (
          <TextInput
            placeholder="Search something"
            className="flex-1 px-2 py-5 text-[15px] font-rubik"
            autoFocus={true}
          />
        ) : (
          <TouchableOpacity
            onPress={handleSearchPress}
            className="flex-1 px-2 py-5"
          >
            <Text className="text-[15px] font-rubik text-gray-500">
              Search something
            </Text>
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={() => setOpenModal(true)}>
          <Image source={icons.filter} className="size-6" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={openModal}
        onRequestClose={() => setOpenModal(false)}
      >
        <View className="flex-1 justify-end bg-dark/50">
          <View className="bg-white rounded-t-3xl p-5 gap-y-6">
            <View className="flex-row justify-between items-center">
              <TouchableOpacity
                onPress={() => setOpenModal(false)}
                className="bg-primary/5 rounded-full p-3"
              >
                <Image
                  source={icons.backArrow}
                  className="w-8 h-8"
                  resizeMode="cover"
                />
              </TouchableOpacity>

              <Text className="font-rubik-medium text-xl tracking-wide text-dark">
                Filter
              </Text>

              <TouchableOpacity onPress={resetFilters} className="relative">
                <Text className="text-center text-primary font-rubik-medium">
                  Reset
                </Text>
              </TouchableOpacity>
            </View>

            <View className="gap-y-3">
              <Text className="font-rubik-medium text-xl tracking-wide text-dark">
                Price Range
              </Text>
              <View className="">
                <Image source={images.barChart} className="w-full h-20 -mb-7" />
                <PriceFilter
                  priceRange={priceRange}
                  setPriceRange={setPriceRange}
                />
              </View>
            </View>

            <View className="gap-y-3">
              <Text className="font-rubik-medium text-xl tracking-wide text-dark">
                Property Type
              </Text>
              <View className="flex-row flex-wrap gap-x-2 gap-y-3">
                {categories.map((item) => (
                  <CategoryTab
                    key={item.id}
                    category={item.category}
                    isActive={selectedPropertyType.includes(item.category)}
                    onPress={() => toggleCategory(item.category)}
                  />
                ))}
              </View>
            </View>

            <View className="gap-y-3">
              <Text className="font-rubik-medium text-xl tracking-wide text-dark">
                Home Details
              </Text>
              <View className="gap-y-2">
                <View className="flex-row justify-between items-center">
                  <Text className="font-rubik text-lightdark text-xl">
                    Bedrooms
                  </Text>
                  <View className="flex-row items-center gap-3">
                    <TouchableOpacity
                      onPress={() =>
                        setBedroomCount(bedroomCount < 1 ? 0 : bedroomCount - 1)
                      }
                      className="bg-primary/5 p-2 rounded-full"
                    >
                      <Image source={icons.minus} className="size-7" />
                    </TouchableOpacity>
                    <Text className="font-rubik text-dark text-xl">
                      {bedroomCount}
                    </Text>
                    <TouchableOpacity
                      onPress={() => setBedroomCount(bedroomCount + 1)}
                      className="bg-primary/5 p-2 rounded-full"
                    >
                      <Image source={icons.plus} className="size-7" />
                    </TouchableOpacity>
                  </View>
                </View>

                <View className="flex-row justify-between items-center">
                  <Text className="font-rubik text-lightdark text-xl">
                    Bathrooms
                  </Text>
                  <View className="flex-row items-center gap-3">
                    <TouchableOpacity
                      onPress={() =>
                        setBathroomCount(
                          bathroomCount < 1 ? 0 : bathroomCount - 1
                        )
                      }
                      className="bg-primary/5 p-2 rounded-full"
                    >
                      <Image source={icons.minus} className="size-7" />
                    </TouchableOpacity>
                    <Text className="font-rubik text-dark text-xl">
                      {bathroomCount}
                    </Text>
                    <TouchableOpacity
                      onPress={() => setBathroomCount(bathroomCount + 1)}
                      className="bg-primary/5 p-2 rounded-full"
                    >
                      <Image source={icons.plus} className="size-7" />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>

            <View className="gap-y-3">
              <Text className="font-rubik-medium text-xl tracking-wide text-dark">
                Building Size
              </Text>
              <View className="">
                <SizeBuildingFilter
                  buildingSizeRange={buildingSizeRange}
                  setBuildingSizeRange={setBuildingSizeRange}
                />
              </View>
            </View>

            <TouchableOpacity
              onPress={applyFilter}
              className="p-5 bg-primary py-4 rounded-full"
            >
              <Text className="text-center text-xl text-white font-rubik-medium">
                Apply Filters
              </Text>
            </TouchableOpacity>
            {Platform.OS === "ios" && <View className="h-1" />}
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Search;
