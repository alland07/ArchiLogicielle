import { ProductVM } from "../../../../core/entities/product";
import { CartStore, useCartStore } from "../../../../store/cartStore";
import { ProductStore, useProductStore } from "../../../../store/productStore";

export interface CartListProductsVMData {
  items: ProductVM[];
  total: string;
}

export const cartListProductsVM = (): CartListProductsVMData => {
  const cartStore: CartStore = useCartStore();
  const productStore: ProductStore = useProductStore();

  let total = 0;
  return {
    items: cartStore.items
      .map((id: string) => {
        const product = productStore.items.find((product) => product.id === id);

        total += product.price;

        return ({
          id: product.id,
          name: product.name.toUpperCase(),
          price: `${ product.price / 100 } €`,
        });
      }),
    total: `${total / 100} €`,
  };
};
