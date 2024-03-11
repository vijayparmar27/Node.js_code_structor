import validate from "../middlewares/validator";
import { body } from 'express-validator';

export const getProductsValidation = () =>
    validate([
        body('page')
            .notEmpty()
            .matches(/^[0-9]*$/)
            .withMessage("its must be number."),
        body('pageSize')
            .notEmpty()
            .matches(/^[0-9]*$/)
            .withMessage("its must be number."),
    ]);
export const productsValidation = () =>
    validate([
        body('price')
            .notEmpty()
            // .matches(/^[0-9]*$/)
            .withMessage("price is require."),
        body('unitQuantity')
            .notEmpty()
            .withMessage("unitQuantity is require."),
        body('productName')
            .notEmpty()
            .withMessage("productName is require."),
        body('category')
            .notEmpty()
            .withMessage("category is require."),
        body('brandName')
            .notEmpty()
            .withMessage("brandName is require."),
        body('unitName')
            .notEmpty()
            .withMessage("productName is require."),
        body('productDescription')
            .notEmpty()
            .withMessage("productDescription is require."),
    ]);

