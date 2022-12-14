import { ProductStore, useProductStore } from "./productStore";
import { createPinia, setActivePinia } from "pinia";
import { Product } from "../../entities/product";
import { InMemoryProductGateway } from "../../../adapters/secondary/inMemoryProductGateway";
import { NodeCryptographyGateway } from "../../../adapters/secondary/nodeCryptographyGateway";
import { listAllProducts } from "./listAllProducts";

describe("List all products", () => {
  //propre
  let productGateway: InMemoryProductGateway;
  let productStore: ProductStore;
  beforeEach(() => {
    const pinia = createPinia();
    setActivePinia(pinia);
    productStore = useProductStore();
    productGateway = new InMemoryProductGateway(new NodeCryptographyGateway());
  });

  //Tests
  it("should have [] when there is no items", async () => {
    await listAllProducts(productGateway, productStore);
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
    await listAllProducts(productGateway, productStore);
    expect(productStore.items).toEqual([tshirt, pull]);
  });
});
