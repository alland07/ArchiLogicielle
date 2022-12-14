<script type="module" lang="ts" setup>
import { computed, onMounted, ref } from "vue";

import { listAllProducts } from "@/core/usecases/list-all-products/listAllProducts";
import { listAllProductsVM } from "@/adapters/primary/view-models/list-all-products-vm/listAllProductsVM";
import productGateway from "@/dependencies/productGateway";
import { createProductVM } from "@/adapters/primary/view-models/create-product-vm/createProductVM";
import { addToCart } from "@/core/usecases/add-to-cart/addToCart";
import { cartListProductsVM } from "@/adapters/primary/view-models/cart-product-list-vm/cartProductListVM";

onMounted(() => {
  listAllProducts(productGateway);
});

const handleNameChanged = (e: any) => {
  createVM.value.name = e.target.value;
};
const createVM = ref(createProductVM());

const allProductsVM = computed(() => {
  return listAllProductsVM();
});

const cartProductsVM = computed(() => {
  return cartListProductsVM();
});
</script>

<template>
  <h1>Catalogue</h1>
  <div v-for="product in allProductsVM.items" :key="product.id">
    <div>{{ product.name }}: {{ product.price }}</div>
    <button @click="addToCart(product.id)">Add to cart</button>
  </div>

  <h2>Add product</h2>
  <div>
    <input :value="createVM.name" @input="handleNameChanged" />
    <p v-if="!createVM.isNameValid">Erreur du nom</p>
  </div>

  <div>
    <h2>Cart</h2>
    <div v-for="cartProduct in cartProductsVM.items">
      <span>{{ cartProduct.name }} : {{ cartProduct.price }}</span>
    </div>
    <h3>Total ({{ cartProductsVM.items.length }} items)</h3>
    <div>{{ cartProductsVM.total }}</div>
  </div>
</template>
