import { createPinia, setActivePinia } from "pinia";
import { ProductStore, useProductStore } from "../../../store/productStore";
import { InMemoryProductGateway } from "../../../adapters/secondary/inMemoryProductGateway";
import { BrowserCryptographyGateway } from "../../../adapters/secondary/browserCryptographyGateway";
import { CreateProduct, Product } from "../../entities/product";
import { createProduct } from "./createProduct";


describe("Create Product front", () => {
  let productGateway: InMemoryProductGateway;
  let productStore: ProductStore;
  let products: Product[];
  const tshirt: Product = {
    id: "abc123",
    name: "T-shirt",
    price: 1500
  };
  const newProduct: CreateProduct = {
    name: tshirt.name,
    price: tshirt.price
  };

  beforeEach((): void => {
    productGateway = new InMemoryProductGateway(new BrowserCryptographyGateway());
    setActivePinia(createPinia());
    productStore = useProductStore();
    productStore.setItems([]);
  });

  describe("When a product is created", () => {
      const id = new BrowserCryptographyGateway().createId(newProduct.name, newProduct.price.toString());

      beforeEach(async () => {
        products = [];
        await createProduct(productGateway, newProduct);
      });

      it("should successfully create a new product and save it in the store", async (): Promise<void> => {
        products = productStore.items;
        expect(products).toEqual([ { id, name: newProduct.name, price: newProduct.price } ]);
      });

      it("should successfully create a new product and save it in the gateway", async (): Promise<void> => {
        products = await productGateway.listAll();
        expect(products).toEqual([ { id, name: newProduct.name, price: newProduct.price } ]);
      });

      it("should not affect already existing products", async (): Promise<void> => {
        productGateway.feedWith(tshirt);

        const product2: CreateProduct = {
          name: "Pull",
          price: 2000
        };

        const id2 = new BrowserCryptographyGateway().createId(product2.name, product2.price.toString());
        const newProduct2: Product = {
          id: id2,
          name: product2.name,
          price: product2.price
        };

        await createProduct(productGateway, product2);
        const products = await productGateway.listAll();
        expect(products).toEqual([ tshirt, newProduct2 ]);
      });
    }
  );

  it("should throw a ProductAlreadyExists error when the product is already present", async () => {
    productGateway.feedWith(tshirt);
    await expect(createProduct(productGateway, tshirt)).rejects.toThrow();
  });
});
