import { Request, Response } from "express";
import { Product } from "./model";

const getAllProducts = async (req: Request, res: Response) => {
  try {
    const result = await Product.find();
    res.status(200).send(result);
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching products." });
  }
};
const getProductById = async (req: Request, res: Response) => {
  const { id } = req.params; // Get the product ID from the request params

  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).send({ error: "Product not found." });
    }
    res.status(200).send(product);
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while fetching the product." });
  }
};

const createProduct = async (req: Request, res: Response) => {
  const { ...ProductData } = req.body;

  try {
    const savedProduct = await Product.create(ProductData);
    res.status(201).send(savedProduct);
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while creating the product." });
  }
};

const updateProduct = async (req: Request, res: Response) => {
  const { id } = req.params;
  const { ...updateData } = req.body;

  try {
    const updatedProduct = await Product.findByIdAndUpdate(id, updateData, {
      new: true,
    });

    if (!updatedProduct) {
      return res.status(404).send({ error: "Product not found." });
    }

    res.status(200).send(updatedProduct);
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while updating the product." });
  }
};

const deleteProduct = async (req: Request, res: Response) => {
  const { id } = req.params; // Get the product ID from the request params

  try {
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).send({ error: "Product not found." });
    }

    res.status(200).send({ message: "Product deleted successfully." });
  } catch (error) {
    res
      .status(500)
      .send({ error: "An error occurred while deleting the product." });
  }
};

export const ProductController = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
};
