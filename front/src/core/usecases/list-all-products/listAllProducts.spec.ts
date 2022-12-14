import { ProductStore, useProductStore } from "../../../store/productStore";
import { createPinia, setActivePinia } from "pinia";
import { Product } from "../../entities/product";
import { InMemoryProductGateway } from "../../../adapters/secondary/inMemoryProductGateway";
import { listAllProducts } from "./listAllProducts";
import { BrowserCryptographyGateway } from "../../../adapters/secondary/browserCryptographyGateway";

describe("List all products", () => {
  //propre
  const pinia = createPinia();
  setActivePinia(pinia);
  let productGateway: InMemoryProductGateway;
  const productStore: ProductStore = useProductStore();

  beforeEach(() => {
    productStore.items = [];
    productGateway = new InMemoryProductGateway(new BrowserCryptographyGateway());
  });

  //Tests
  it("should have [] when there is no items", async () => {
    await listAllProducts(productGateway);
    expect(productStore.items).toEqual([]);
  });

  it("should store products when there is items", async () => {
    const tshirt: Product = {
      id: "123Efh",
      name: "T-shirt de Noel",
      price: 10,
    };
    const pull: Product = {
      id: "azratae",
      name: "Pull de Noel",
      price: 20,
    };
    productGateway.feedWith(tshirt, pull);
    await listAllProducts(productGateway);
    expect(productStore.items).toEqual([ tshirt, pull ]);
  });
});
