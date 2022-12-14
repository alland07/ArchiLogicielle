import { createOneProduct } from "./createOneProduct";
import { InMemoryProductGateway } from "../../../adapters/secondary/inMemoryProductGateway";
import { CreateProduct, Product } from "../../entities/product";
import { NodeCryptographyGateway } from "../../../adapters/secondary/nodeCryptographyGateway";

const tshirt: Product = {
  id: "abc123",
  name: "T-shirt",
  imgUrl: "assets/t-shirt.png"
};

const newProduct: CreateProduct = {
  name: tshirt.name,
  imgUrl: tshirt.imgUrl
};

describe("CreateOneProduct", () => {
  let productGateway: InMemoryProductGateway;
  beforeEach((): void => {
    productGateway = new InMemoryProductGateway(new NodeCryptographyGateway());
  });
  it("should successfully create a new product and return it", async (): Promise<void> => {
    const result: Product = await createOneProduct(productGateway, newProduct);
    expect(result).toHaveProperty("name", newProduct.name);
    expect(result).toHaveProperty("imgUrl", newProduct.imgUrl);
    expect(result).toHaveProperty("id");
    // console.log(await productGateway.listAll());
  });
  it("should throw a ProductAlreadyExists error when the product is already present", (): void => {
    productGateway.feedWith(tshirt);
    expect(() => createOneProduct(productGateway, newProduct))
      .toThrow("Product already exists");
  });
  it("should not affect already existing products", async (): Promise<void> => {
    productGateway.feedWith(tshirt);

    const product2: CreateProduct = {
      name: "Pull",
      imgUrl: "assets/pull.png"
    };

    const cryptoGateway = new NodeCryptographyGateway();
    const id2 = cryptoGateway.createId(product2.name, product2.imgUrl);
    const newProduct2: Product = {
      id: id2,
      name: product2.name,
      imgUrl: product2.imgUrl
    };

    await createOneProduct(productGateway, product2);
    const products = await productGateway.listAll();
    expect(products).toEqual([ tshirt, newProduct2 ]);
  });
});
