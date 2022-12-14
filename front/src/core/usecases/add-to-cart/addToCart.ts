import { CartStore, useCartStore } from "../../../store/cartStore";
import { FailedAddToCart } from "../../errors/failedAddToCart";
import { ProductStore, useProductStore } from "../../../store/productStore";

export const addToCart = async (id: string): Promise<string[]> => {
  const productStore: ProductStore = useProductStore();
  if (productStore.items.some((product) => product.id === id)) {
    const cartStore: CartStore = useCartStore();
    cartStore.addToCart(id);
    return cartStore.items;
  } else {
    throw new FailedAddToCart();
  }
};
