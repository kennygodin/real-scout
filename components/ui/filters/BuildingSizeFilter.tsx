import MultiSlider from "@ptomasroos/react-native-multi-slider";
import React from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";

interface SizeBuildingFilterProps {
  buildingSizeRange: number[];
  setBuildingSizeRange: (newValues: number[]) => void;
}
const SizeBuildingFilter = ({
  buildingSizeRange,
  setBuildingSizeRange,
}: SizeBuildingFilterProps) => {
  const screenWidth = Dimensions.get("window").width;
  const sliderWidth = screenWidth - 40;

  return (
    <View style={[styles.container, { paddingHorizontal: 20 }]}>
      <MultiSlider
        values={buildingSizeRange}
        min={0}
        max={5000}
        step={1}
        sliderLength={sliderWidth}
        onValuesChange={(newValues) => setBuildingSizeRange(newValues)}
        selectedStyle={styles.railSelected}
        trackStyle={styles.rail}
        markerStyle={styles.thumb}
        pressedMarkerStyle={styles.thumbPressed}
        containerStyle={styles.sliderContainer}
      />

      <View style={styles.values}>
        <Text className="font-rubik-medium text-primary">
          {buildingSizeRange[0]} sqft
        </Text>
        <Text className="font-rubik-medium text-primary">
          {buildingSizeRange[1]} sqft
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    width: "100%",
  },
  sliderContainer: {
    width: "100%",
  },
  thumb: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#fff",
    borderWidth: 2,
    borderColor: "#0061FF",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  thumbPressed: {
    width: 24,
    height: 24,
    borderRadius: 12,
  },
  rail: {
    height: 4,
    backgroundColor: "#0061FF1A",
    borderRadius: 2,
  },
  railSelected: {
    height: 4,
    backgroundColor: "#0061FF",
    borderRadius: 2,
  },
  values: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    paddingHorizontal: 20,
  },
});

export default SizeBuildingFilter;
