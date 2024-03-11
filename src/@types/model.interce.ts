import { Document } from "mongoose"

export interface ProductIf extends Document {
    productName: string;
    category: string;
    brandName: string;
    productImage: string;
    price: number;
    unitName: string;
    unitQuantity: number;
    productDescription: string;
}