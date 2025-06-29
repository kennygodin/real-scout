import { ImageSourcePropType } from "react-native";

export interface Property {
  id: number;
  title: string;
  description?: string;
  image: ImageSourcePropType;
  location: string;
  price: string;
  rating: number;
  category: string;
}
