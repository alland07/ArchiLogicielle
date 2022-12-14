import { createPinia, setActivePinia } from "pinia";
import { ProductStore, useProductStore } from "../../../store/productStore";
import { Product } from "../../entities/product";
import { addToCart } from "./addToCart";
import { CartStore, useCartStore } from "../../../store/cartStore";

describe("AddToCart", function () {
  setActivePinia(createPinia());
  const tshirt: Product = {
    id: "abc123",
    name: "T-shirt",
    price: 1500
  };
  const productStore: ProductStore = useProductStore();
  productStore.setItems([ tshirt, tshirt ]);
  const cartStore: CartStore = useCartStore();

  beforeEach((): void => {
    cartStore.items = [];
  });

  it("should add a product to the cart", async () => {
    expect(await addToCart(tshirt.id)).toEqual([ tshirt.id ]);
  });

  it("should fail when we pass a non-existant product", async () => {
    await expect(addToCart("idazzi")).rejects.toThrow("Item does not exist");
  });
});
