import { CartStore, useCartStore } from "@/store/cartStore";
import { ProductStore, useProductStore } from "@/store/productStore";
import { createPinia, setActivePinia } from "pinia";
import { cartListProductsVM } from "./cartProductListVM";

describe("Get a list of all products inside the cart", function (): void {
  setActivePinia(createPinia());
  const cartStore: CartStore = useCartStore();
  const productStore: ProductStore = useProductStore();
  productStore.setItems([
    {
      id: "abc123",
      name: "T-shirt",
      price: 1500,
    },
  ]);

  beforeEach((): void => {
    cartStore.items = [];
  });

  it("should return an empty array if the cart is empty", function (): void {
    expect(cartListProductsVM()).toEqual({ items: [] });
  });

  it("should return an array of products if the cart is not empty", (): void => {
    cartStore.items = ["abc123"];
    expect(cartListProductsVM()).toEqual({
      items: [
        {
          id: "abc123",
          name: "T-SHIRT",
          price: "15 €",
        },
      ],
    });
  });
});
