import * as mongoose from 'mongoose';
import { orderProductType } from 'src/consts/types';

export type OrderDocument = mongoose.Document & {
    userId: string
    products: orderProductType[]
    address: string
    contactNumber: string
};

const orderProductSchema = new mongoose.Schema({
    productId: {
        type: String,
        required: true
    },
    shopId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    size: {
        type: String,
        required: true
    },
    qty: {
        type: Number,
        required: true,
        default: 1
    },
    price: {
        type: Number,
        required: true
    }
});

export const orderSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    products: [{
        type: orderProductSchema,
        required: true
    }],
    address: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    }
}, { timestamps: true });

export const Order = mongoose.model<OrderDocument>("Order", orderSchema);