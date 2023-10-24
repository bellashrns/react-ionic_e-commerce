import React from "react";

export interface Product {
    id: number;
  title: string;
  price: number;
  img: string;
    qty: number;
}

export interface Transaction {
    id: number;
    code: string;
    products: Product[];
}

interface Context {
    products: Product[];
    cart: Product[];
    wishlist: Product[];
    transactions: Transaction[];
    addToCart: (productId: number, qty: number) => void;
    addToWishlist: (productId: number) => void;
    removeFromCart: (productId: number) => void;
    removeFromWishlist: (productId: number) => void;
    editQty: (productId: number, qty: number) => void;
    increment: (productId: number) => void;
    decrement: (productId: number) => void;
    addTransaction: (code: string) => void;
}

const ProductContext = React.createContext<Context>({
    products: [],
    cart: [],
    wishlist: [],
    transactions: [],
    addToCart: () => {},
    addToWishlist: () => {},
    removeFromCart: () => {},
    removeFromWishlist: () => {},
    editQty: () => {},
    increment: () => {},
    decrement: () => {},
    addTransaction: () => {},
});

export default ProductContext;