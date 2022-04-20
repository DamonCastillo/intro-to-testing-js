// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// plusOne

describe('plusOne', function () {
    it('should be a defined function', function () {
        expect(typeof plusOne).toBe("function")
    });
    it('should return a number', function () {
        expect(typeof plusOne()).toBe("number")
    });
    it('should return 5 when passed 4', function () {
        expect(plusOne(4)).toBe(5);
    });
    it('should return 5 when passed 6', function () {
        expect(plusOne(5)).toBe(6);
    });

})
describe('sayHello', function (){
    it('should be a defined function ', function () {
       expect(typeof sayHello).toBe("function")
    });
    it('should return a string when when called ', function () {
        expect(typeof sayHello()).toBe("string")
    });
    it('should return "Hello, Jane!"', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!")
    });
    it('should return "Hello, Alex!"', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should return "Hello, Pat!"', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return "Hello, World!"', function () {
        expect(sayHello("World")).toBe("Hello, World!")
    });
    it('should return true', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return false', function () {
        expect(sayHello(false)).toBe("Hello, World!")
    });

})
describe("isFive", function (){
    it('should be defined function', function () {
        expect(typeof isFive).toBe('function')
    });
    it('should return a boolean', function () {
        expect(isFive()).toBe(false)
    });
    it('should return true when 5 is passed', function () {
        expect(isFive(5)).toBe(true)
    });
    it('should return true when the string of 5 is passed', function () {
        expect(isFive("5")).toBe(true)
    });
})
