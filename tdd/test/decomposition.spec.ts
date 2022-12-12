import { Decomposition } from "../decomposition";

describe('Decomposition', () => {
  describe('Nombres premiers', () => {
    it('should return [0] when 0 provided', () => {
      expect(Decomposition(0)).toEqual([0]);
    });
    it('should return [] when 1 provided', () => {
      expect(Decomposition(1)).toEqual([]);
    });
    it('should return [2] when 2 is provided', function () {
      expect(Decomposition(2)).toEqual([2]);
    });
    it('should return [7] when 7 is provided', function () {
      expect(Decomposition(7)).toEqual([7]);
    });
  });

  describe('Nombres composés', () => {
    it('should return [2, 2] when 4 is provided', function () {
      expect(Decomposition(4)).toEqual([2, 2]);
    });
    it('should return [2, 2, 2] when 8 is provided', function () {
      expect(Decomposition(8)).toEqual([2, 2, 2]);
    });
    it('should return [2, 3] when 6 is provided', function () {
      expect(Decomposition(6)).toEqual([2, 3]);
    });
    it('should return [3, 5] when 15 is provided', function () {
      expect(Decomposition(15)).toEqual([3, 5]);
    });
    it('should return [2, 2, 3, 5, 7, 11, 13] when 30030 is provided', function () {
      expect(Decomposition(2 * 2 * 3 * 5 * 7 * 11 * 13)).toEqual([2, 2, 3, 5, 7, 11, 13]);
    });
  })
});
