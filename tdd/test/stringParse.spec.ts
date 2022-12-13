import { stringParse } from "../stringParse";

describe("Exo3", () => {
  describe("Point 1", () => {
    it("should return 0 when \"\" provided", () => {
      expect(stringParse("")).toBe(0);
    });
    it("should return 0 when \"    \" provided", () => {
      expect(stringParse("    ")).toBe(0);
    });
    it("should return 2 when \"2\" provided", () => {
      expect(stringParse("2")).toBe(2);
    });
    it("should return 4 when \"4\" provided", () => {
      expect(stringParse("4")).toBe(4);
    });
    it("should return 4 when \"1,3\" provided", () => {
      expect(stringParse("1,3")).toBe(4);
    });
    it("should return 5 when \"1,4\" provided", () => {
      expect(stringParse("1,4")).toBe(5);
    });
    it("should return 7 when \"1,4,2\" provided", () => {
      expect(stringParse("1,4,2")).toBe(7);
    });
  });
  describe("Point 2", () => {
    it("should return 7 when \"1\n4,2\" provided", () => {
      expect(stringParse("1\n4,2")).toBe(7);
    });
    it("should return 7 when \"1,2\n4\" provided", () => {
      expect(stringParse("1,2\n4")).toBe(7);
    });
    it("should return 7 when \"1\n4\n2\" provided", () => {
      expect(stringParse("1\n4\n2")).toBe(7);
    });
  });
  describe("Point 3", () => {
    it("should return 3 when //;\n1;2 provided", () => {
      expect(stringParse("//;\n1;2")).toBe(3);
    });
    it("should return 3 when //:\n1:2 provided", () => {
      expect(stringParse("//:\n1:2")).toBe(3);
    });
    it("should return 5 when //:\n1:2:2 provided", () => {
      expect(stringParse("//:\n1:2:2")).toBe(5);
    });
    it("should return 5 when //:\n1:2\n2 provided", () => {
      expect(stringParse("//:\n1:2\n2")).toBe(5);
    });
  });
  describe("Point 4", () => {
    it("should throw an error when -1 provided", () => {
      expect(() => stringParse("-1")).toThrowError();
    });
    it("should throw an error when -1,-2 provided", () => {
      expect(() => stringParse("-1,-2")).toThrow('Negative value [-1,-2]');
    });
    it("should throw an error when -1\n-2 provided", () => {
      expect(() => stringParse("-1\n-2")).toThrow('Negative value [-1,-2]');
    });
    it("should throw an error when 1\n-2 provided", () => {
      expect(() => stringParse("1\n-2")).toThrow('Negative value [-2]');
    });
    it("should throw an error when //;\n1;-2 provided", () => {
      expect(() => stringParse("//;\n1;-2")).toThrow('Negative value [-2]');
    });
  });
  describe("Point 5", () => {
    // ignorer les nombres plus grands que 1000
    it("should return 2 when 2,1001 provided", () => {
      expect(stringParse("2,1001")).toBe(2);
    });
    it("should return 2 when 1001,2 provided", () => {
      expect(stringParse("1001,2")).toBe(2);
    });
    it('should return 1002 when 1000,2 provided', () => {
      expect(stringParse("1000,2")).toBe(1002);
    });
  });
});
