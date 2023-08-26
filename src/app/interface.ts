import { Model } from "mongoose";

export type IProduct = {
  image: string;
  productName: string;
  category: string;
  status: "In Stock" | "Out of Stock";
  price: number;
  description: string;
  keyFeatures: string[];
  individualRating: number;
  averageRating: number;
  reviews: string[];
};

export type ProductModel = Model<IProduct, Record<string, unknown>>;
