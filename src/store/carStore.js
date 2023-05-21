import axios from 'axios';
import { defineStore } from 'pinia';

const useCartStore = defineStore('cartStore', {
    state: () => {
        return {
            products: [],  
        }
    },
    getters: {
        totalAmount: (state) => {
            const total = state.products.reduce((prev, curr) => {
                return prev + curr.price * (curr.count || 1)
            }, 0);
            return total || 0;
        },
        productCount: (state) => {
           return state.products.reduce((prev, curr) => {
            return prev + (curr.count || 0)
        }, 0);
        },
    },
    actions: {
        addCart(product) {
            const currentProduct = this.products.find((item) => {
                return item.id === product.id;
            })
            if (currentProduct) {
                currentProduct.count++;
            } else {
                this.products.push({ ...product, count: 1 })
            }
        }
    }
})

export default useCartStore;