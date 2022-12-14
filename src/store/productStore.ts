import { Product } from "@/core/entities/product";
import { defineStore } from "pinia";

export const useProductStore = defineStore("ProductStore", {
  state: () => {
    return {
      items: [] as Product[],
    };
  },
  actions: {
    setItems(items: Product[]) {
      this.items = items;
    },
    addItem(item: Product) {
      this.items.push(item);
    },
  },
});

export type ProductStore = ReturnType<typeof useProductStore>;
