export class CreateProductVM {
  public constructor(
    private _name: string = "",
    private _price: number = 0,
    private _isNameValid: boolean = true,
  ) {}

  get name(): string {
    return this._name;
  }

  set name(name: string) {
    this._name = name;
    this._isNameValid = this._name.length >= 3;
  }

  get isNameValid(): boolean {
    return this._isNameValid;
  }

  get price(): number {
    return this._price;
  }
}

export const createProductVM = () => {
  return new CreateProductVM();
};
