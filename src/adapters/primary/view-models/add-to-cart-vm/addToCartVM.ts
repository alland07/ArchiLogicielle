import { useProductStore } from "@/store/productStore";

export class AddToCartVM {
  public constructor(
    private _id: string = "",
    private _isIdValid: boolean = true
  ) {}

  get id(): string {
    return this._id;
  }

  set id(id: string) {
    this._id = id;
    const productStore = useProductStore();
    this._isIdValid = productStore.items.some((product) => product.id === id);
  }

  get isIdValid(): boolean {
    return this._isIdValid;
  }
}

export const addToCartVM = () => {
  return new AddToCartVM();
};
