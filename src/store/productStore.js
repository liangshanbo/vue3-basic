import axios from 'axios';
import { defineStore } from 'pinia';

const useProductStore = defineStore('productStore', {
    state: () => {
        return {
            products: []
                
        }
    },
    actions: {
        loadData() {
            axios.get('http://localhost:9000/data').then(result => {
                console.log('result', result);
                this.products = result.data;
            })
        }
    }
})

export default useProductStore;