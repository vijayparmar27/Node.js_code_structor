import express from "express";
import { addProduct, getProduct } from "../controllers/product.controller";
import { getProductsValidation, productsValidation } from "../validators/product.validator";
import { multerUpload } from "../services/multer.service";

const router = express.Router();

router.post(
    '/addproducts',
    [multerUpload.single('file'), productsValidation()],
    addProduct);

router.post('/getProducts', getProductsValidation(), getProduct);


export default router;