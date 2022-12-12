import { Decomposition } from "../decomposition";

describe('Decomposition', () => {
  describe('Nombres premiers', () => {
    // it('should return [0] when 0 provided', () => {
    //   expect(Decomposition(0)).toEqual([0]);
    // });toEqual
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
  describe('Nombres non premiers', () => {
    it('should return [2, 2] when 4 is provided', function () {
      expect(Decomposition(4)).toEqual([2, 2]);
    });
    // it('should return [2, 2, 2] when 8 is provided', function () {
    //   expect(Decomposition(8)).toEqual([2, 2, 2]);
    // });
    // it('should return [2, 3] when 6 is provided', function () {
    //   expect(Decomposition(6)).toEqual([2, 3]);
    // });
    // it('should return [2, 7] when 14 is provided', function () {
    //   expect(Decomposition(14)).toEqual([2, 7]);
    // });
  })
});