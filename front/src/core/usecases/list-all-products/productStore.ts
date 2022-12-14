import {defineStore} from "pinia";

export const useProductStore = defineStore('ProductStore', {
  state: () => {
    return {
      items: []
    }
  }
});

export type ProductStore = ReturnType<typeof useProductStore>
