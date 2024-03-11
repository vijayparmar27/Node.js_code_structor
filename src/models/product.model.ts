import { ProductIf } from "../@types/model.interce";
import mongoose from "mongoose";


const ProductSchema = new mongoose.Schema<ProductIf>({
    productName: { type: String, required: true },
    category: { type: String, required: true },
    brandName: { type: String, required: true },
    productImage: { type: String, required: true },
    price: { type: Number, required: true },
    unitName: { type: String, required: true },
    unitQuantity: { type: Number, required: true },
    productDescription: { type: String, required: true },
});

export const ProductModel = mongoose.model<ProductIf>('Product', ProductSchema);