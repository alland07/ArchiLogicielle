import { Product } from "@/core/entities/product";
import { useProductStore } from "@/store/productStore";
import { createPinia, setActivePinia } from "pinia";
import { listAllProductsVM, ListAllProductsVMData } from "./listAllProductsVM";

describe("List all products VM", () => {
  beforeEach(() => {
    setActivePinia(createPinia());
  });

  it("should return nothing when there is no product", () => {
    const items: Product[] = [
      {
        id: "czefz",
        name: "tshirt de noel",
        price: 1000,
      },
      {
        id: "azrazr",
        name: "pull de noel",
        price: 2999,
      },
    ];
    const productStore = useProductStore();
    productStore.setItems(items);

    const expectedProducts: ListAllProductsVMData = {
      items: [
        {
          id: "czefz",
          name: "TSHIRT DE NOEL",
          price: "10 €",
        },
        {
          id: "azrazr",
          name: "PULL DE NOEL",
          price: "29.99 €",
        },
      ],
    };
    expect(listAllProductsVM()).toEqual(expectedProducts);
  });
  it("should return nothing when there is no product", () => {
    expect(listAllProductsVM()).toEqual({
      items: [],
    });
  });
});
