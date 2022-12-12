import {Fizzbuzz} from "../fizzbuzz";

describe('FizzBuzz', () => {
  //Non divisible
  describe('Non divisble Numbers', () => {
    it('should return "0" when 0 provided', ()=> {
      expect(Fizzbuzz(0)).toBe("0");
    });
    it('should return "1" when 1 provided', ()=> {
      expect(Fizzbuzz(1)).toBe("1");
    });
  });
  //Divisible numbers
 describe('Divisible Numbers', () => {
   describe('Divisible by 3', () => {
     it('should return "FIZZ" when 6 provided', ()=> {
       expect(Fizzbuzz(3)).toBe("FIZZ");
     });
     it('should return "FIZZ" when 6 provided', ()=> {
       expect(Fizzbuzz(3)).toBe("FIZZ");
     });
   });
   //Divisible by 5
   describe('divisible by 5', () => {
     it('should return "BUZZ" when 5 provided', ()=> {
       expect(Fizzbuzz(5)).toBe("BUZZ");
     });
     it('should return "BUZZ" when 10 provided', ()=> {
       expect(Fizzbuzz(10)).toBe("BUZZ");
     });
   });
   //Divisible by 15
   describe('Divisible by 15', () => {
     it('should return "FIZZBUZZ" when 15 provided', ()=> {
       expect(Fizzbuzz(15)).toBe("FIZZBUZZ");
     });
     it('should return "FIZZBUZZ" when 30 provided', ()=> {
       expect(Fizzbuzz(30)).toBe("FIZZBUZZ");
     });
   });
 });
});