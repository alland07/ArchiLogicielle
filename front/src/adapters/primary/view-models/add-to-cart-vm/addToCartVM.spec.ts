import { addToCartVM, AddToCartVM } from "./addToCartVM";
import { useProductStore } from "../../../../store/productStore";
import { createPinia, setActivePinia } from "pinia";

describe("Add To Cart VM", () => {
  setActivePinia(createPinia());
  const productStore = useProductStore();
  productStore.setItems([
    {
      id: "abc123",
      name: "T-shirt",
      price: 1500,
    }
  ]);
  let vm: AddToCartVM;
  beforeEach(() => {
    vm = addToCartVM();
  });

  describe("Initially", () => {
    it("should initialize the VM", () => {
      expect(vm.id).toEqual("");
      expect(vm.isIdValid).toBeTruthy();
    });
  });

  describe("Update id", () => {
    it("should update id", () => {
      vm.id = "abc123";
      expect(vm.id).toEqual("abc123");
    });
    it("should set an error if id is not valid", () => {
      vm.id = "idazzi";
      expect(vm.isIdValid).toBeFalsy();
    });
    it("should not set an error if id is valid", () => {
      vm.id = "abc123";
      expect(vm.isIdValid).toBeTruthy();
    });
  });
});
