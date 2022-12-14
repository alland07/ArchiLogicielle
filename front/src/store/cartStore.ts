import { defineStore } from "pinia";

export const useCartStore = defineStore('CartStore',{
  state: () => {
    return {
      items:  [] as Array<string>    }
  },
  actions: {
    addToCart(id: string): void {
      this.items.push(id);
    }
  }
});

export type CartStore = ReturnType<typeof useCartStore>
