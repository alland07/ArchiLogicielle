import { BrowserCryptographyGateway } from "@/adapters/secondary/browserCryptographyGateway";
import { InMemoryProductGateway } from "@/adapters/secondary/inMemoryProductGateway";

const productGateway = new InMemoryProductGateway(
  new BrowserCryptographyGateway()
);
const tshirt = {
  id: "abc123",
  name: "Tshirt super cool",
  price: 1000,
};
const pull = {
  id: "def465",
  name: "Pull de noel",
  price: 2999,
};
productGateway.feedWith(tshirt, pull);
export default productGateway;
