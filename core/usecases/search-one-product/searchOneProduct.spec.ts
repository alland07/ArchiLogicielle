import { InMemoryProductGateway } from "../../../adapteurs/secondary/inMemoryProductGateway";
import { searchOneProduct } from "./searchOneProduct";
import { Product } from "../../entities/product";
import { ProductNotFound } from "../../errors/productNotFound";

describe("Search one product", () => {
  // Setup
  let productGateway: InMemoryProductGateway;
  beforeEach(() => {
    productGateway = new InMemoryProductGateway();
  });  
  
  it("should throw a ProductNotFound error when the product is not present", () => {
    expect(() => searchOneProduct(productGateway, 'doesnotexist'))
      .toThrow(ProductNotFound);
  });
  it("should return the product when it is present", async () => {
    const tshirt: Product = {
      id: "abc123",
      name: "T-shirt",
      imgUrl: "assets/t-shirt.png"
    };
    productGateway.feedWith(tshirt);
    expect(await searchOneProduct(productGateway, 'abc123'))
      .toEqual(tshirt);
  });
});
