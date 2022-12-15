import { InMemoryProductGateway } from "@/adapters/secondary/inMemoryProductGateway";
import { NodeCryptographyGateway } from "@/adapters/secondary/nodeCryptographyGateway";
import { Product } from "@/core/entities/product";
import { listAllProducts } from "./listAllProducts";

describe("List all products", () => {
  let productGateway: InMemoryProductGateway;

  beforeEach(() => {
    productGateway = new InMemoryProductGateway(new NodeCryptographyGateway());
  });

  //Tests
  it("should have [] when there is no items", async () => {
    await listAllProducts(productGateway);
    expect(await productGateway.listAll()).toEqual([]);
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
    expect(await productGateway.listAll()).toEqual([tshirt, pull]);
  });
});
