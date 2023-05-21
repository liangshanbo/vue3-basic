<script setup>
import { storeToRefs } from 'pinia';
import { ref, onMounted } from 'vue';
import useCartStore from '@/store/carStore';
import useProductStore from '@/store/productStore';

console.log(useProductStore())
const productStore = useProductStore();
const { products } = storeToRefs(productStore);
const { loadData } = productStore;

const carStore = useCartStore();
const { totalAmount, productCount } = storeToRefs(carStore);

onMounted(() => {
    loadData();
})

const addCart = (item) => {
    console.log('item', item);
    carStore.addCart(item);
}

</script>

<template>
    <div>
        <h2>商品列表</h2>
        <ul>
            <li v-for="item in products" :key="item.id">
               <p><label>商品名称：</label>{{item.name}}</p>
               <p><label>商品价格：</label>¥{{item.price}}</p>
               <p><label>商品库存：</label>{{item.inventory}}</p>
               <button @click="addCart(item)">加入购物车</button>
            </li>
        </ul>
        <div>
            <h2>商品数量：{{productCount}}</h2>
            <h2>商品金额：{{totalAmount}}</h2>
        </div>
    </div>
</template>
