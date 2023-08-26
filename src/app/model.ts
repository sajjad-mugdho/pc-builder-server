import { Schema, model } from "mongoose";
import { IProduct, ProductModel } from "./interface";

const ProductSchema = new Schema<IProduct>({
  image: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["In Stock", "Out of Stock"],
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  keyFeatures: {
    type: [String],
    required: true,
  },

  individualRating: {
    type: Number,
    required: true,
  },
  averageRating: {
    type: Number,
    required: true,
  },
  reviews: {
    type: [String],
    required: true,
  },
});

export const Product = model<IProduct, ProductModel>("product", ProductSchema);
