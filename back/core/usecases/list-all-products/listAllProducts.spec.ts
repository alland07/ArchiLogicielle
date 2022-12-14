import { listAllProducts } from "./listAllProducts";
import { InMemoryProductGateway } from "../../../adapters/secondary/inMemoryProductGateway";
import { Product } from "../../entities/product";
import { NodeCryptographyGateway } from "../../../adapters/secondary/nodeCryptographyGateway";

describe("List all products", () => {
  let productGateway: InMemoryProductGateway;
  beforeEach(() => {
    productGateway = new InMemoryProductGateway(new NodeCryptographyGateway());
  });
  it("should return [] when there is no products", async () => {
    const allProducts = await listAllProducts(productGateway);
    expect(allProducts).toEqual([]);
  });
  it("should return all products when there is products", async () => {
    const tshirt: Product = {
      id: "abc123",
      name: "T-shirt",
      imgUrl: "assets/t-shirt.png"
    };
    const pull: Product = {
      id: "def456",
      name: "Pull",
      imgUrl: "assets/pull.png"
    };
    productGateway.feedWith(tshirt, pull);
    const allProducts = await listAllProducts(productGateway);
    const expectedProducts: Array<Product> = [ tshirt, pull ];
    expect(allProducts).toEqual(expectedProducts);
  });
});
