import React, {ReactNode, useEffect, useState} from "react";
import ProductContext, {Product, Transaction} from "./product-context";

interface ProductsContextProviderProps {
    children: ReactNode;
}

const ProductsContextProvider: React.FC<ProductsContextProviderProps> = (props) => {
    const [products, setProducts] = useState<Product[]>([
        {
            id: 1,
            title: 'Cinnamoroll',
            price: 1000,
            img: './img/products/cinnamoroll.jpg',
            qty: 0
        },
        {
            id: 2,
            title: 'Hello Kitty',
            price: 2000,
            img: './img/products/helloKitty.jpg',
            qty: 0
        },
        {
            id: 3,
            title: 'Keroppi',
            price: 3000,
            img: './img/products/keroppi.jpg',
            qty: 0
        },
        {
            id: 4,
            title: 'Kuromi',
            price: 4000,
            img: './img/products/kuromi.jpg',
            qty: 0
        },
        {
            id: 5,
            title: 'My Melody',
            price: 5000,
            img: './img/products/myMelody.jpg',
            qty: 0
        },
        {
            id: 6,
            title: 'Pompompurin',
            price: 6000,
            img: './img/products/pompompurin.jpg',
            qty: 0
        }
    ]);

    const [cart, setCart] = useState<Product[]>([]);

    const [wishlist, setWishlist] = useState<Product[]>([]);

    const [qty, setQty] = useState({productId: 1, productQty: 1});

    const [transactions, setTransactions] = useState<Transaction[]>([
        {
            id: 1,
            code: '123ABC',
            products: [
                {
                    id: 1,
                    title: 'Cinnamoroll',
                    price: 1000,
                    img: './img/products/cinnamoroll.jpg',
                    qty: 1
                }
            ]
        }
    ]);

    useEffect(() => {
        console.log('cart: ', cart);
        console.log('wishlist: ', wishlist);
        console.log(`Qty: ${qty.productId} - ${qty.productQty}`);
        console.log('transactions: ', transactions);
    }, [qty, cart, wishlist, transactions]);

    const addToCart = (productId: number, qty: number) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const newCart: Product = {
            ...product,
            qty
        };
        
        setCart(curCart => [...curCart, newCart]);
    }

    const addToWishlist = (productId: number) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        setWishlist(curwishlist => [...curwishlist, product]);
    }

    const removeFromCart = (productId: number) => {
        setCart((curCart) => {
            return curCart.filter(p => p.id !== productId);
        });
    }

    const removeFromWishlist = (productId: number) => {
        setWishlist((curWishlist) => {
            return curWishlist.filter(p => p.id !== productId);
        });
    }

    const increment = (productId: number) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        setQty({productId, productQty: product.qty += 1});
        editQty(productId, product.qty);
    }

    const decrement = (productId: number) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        if (qty.productQty > 1) {
            setQty({productId: product.id, productQty: product.qty -= 1});
            editQty(productId, product.qty);
        } else {
            removeFromCart(productId);
            setQty({productId: 0, productQty: 0});
        }
    }

    const editQty = (productId: number, qty: number) => {
        const product = products.find(p => p.id === productId);
        if (!product) return;

        const editedCart: Product = {
            ...product,
            qty : qty
        };

        setCart((curCart) => {
            const productIndex = curCart.findIndex(p => p.id === productId);
            const updatedCart = [...curCart];
            updatedCart[productIndex] = editedCart;
            return updatedCart;
        });
    }

    const addTransaction = (code: string) => {

        const newTransaction = {
            id: Math.random(),
            code: code,
            products : cart
        };

        setTransactions(curTransactions => [...curTransactions, newTransaction]);
    }

    return (
        <ProductContext.Provider value={{
            products,
            cart,
            wishlist,
            transactions,
            addToCart,
            addToWishlist,
            removeFromCart,
            removeFromWishlist,
            editQty,
            increment,
            decrement,
            addTransaction
        }}>
            {props.children}
        </ProductContext.Provider>
    )
};

export default ProductsContextProvider;