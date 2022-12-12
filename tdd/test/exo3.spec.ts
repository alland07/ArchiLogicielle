import { exo3 } from "../exo3";

describe("Exo3", () => {
  describe("Point 1", () => {
    it("should return 0 when \"\" provided", () => {
      expect(exo3("")).toBe(0);
    });
    it("should return 0 when \"    \" provided", () => {
      expect(exo3("    ")).toBe(0);
    });
    it("should return 2 when \"2\" provided", () => {
      expect(exo3("2")).toBe(2);
    });
    it("should return 4 when \"4\" provided", () => {
      expect(exo3("4")).toBe(4);
    });
    it("should return 4 when \"1,3\" provided", () => {
      expect(exo3("1,3")).toBe(4);
    });
    it("should return 5 when \"1,4\" provided", () => {
      expect(exo3("1,4")).toBe(5);
    });
    it("should return 7 when \"1,4,2\" provided", () => {
      expect(exo3("1,4,2")).toBe(7);
    });
  });
  describe("Point 2", () => {
    it("should return 7 when \"1\n4,2\" provided", () => {
      expect(exo3("1\n4,2")).toBe(7);
    });
    it("should return 7 when \"1,2\n4\" provided", () => {
      expect(exo3("1,2\n4")).toBe(7);
    });
    it("should return 7 when \"1\n4\n2\" provided", () => {
      expect(exo3("1\n4\n2")).toBe(7);
    });
  });
  describe("Point 3", () => {
    it("should return 3 when //;\n1;2 provided", () => {
      expect(exo3("//;\n1;2")).toBe(3);
    });
    it("should return 3 when //:\n1:2 provided", () => {
      expect(exo3("//:\n1:2")).toBe(3);
    });
    it("should return 5 when //:\n1:2:2 provided", () => {
      expect(exo3("//:\n1:2:2")).toBe(5);
    });
    it("should return 5 when //:\n1:2\n2 provided", () => {
      expect(exo3("//:\n1:2\n2")).toBe(5);
    });
  });
});
