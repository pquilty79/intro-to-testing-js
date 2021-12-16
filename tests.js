
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

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
});

describe("isFive", function () {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return true when passed a 5', function () {
        expect(isFive(5)).toBe(true);
    });
    it('should return false when passed the string "5"', function () {
        expect(isFive("5")).toBe(false);
    });
});

describe("isEven", function () {
    it('should be a defined function', function () {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isEven()).toBe("boolean");
    });
    it('should return true when passed a 2', function () {
        expect(isEven(2)).toBe(true);
    });
    it('should return true when passed a -4', function () {
        expect(isEven(-4)).toBe(true);
    });
    it('should return false when passed a 3', function () {
        expect(isEven(3)).toBe(false);
    });
    it('should return false when passed "banana"', function () {
        expect(isEven("banana")).toBe(false);
    });
    it('should return true when passed an "8"', function () {
        expect(isEven("8")).toBe(true);
    });
    it('should return false when passed Infinity', function () {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return false when passed a boolean input', function () {
        expect(isEven(true)).toBe(false);
    });
    it('should return false when passed a boolean input', function () {
        expect(isEven(false)).toBe(false);
    });
    it('should return false when called without an argument', function () {
        expect(isEven()).toBe(false);
    });
});
//
describe("isVowel", function () {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isVowel()).toBe("boolean");
    });
    it('should return true when passed an "a"', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return true when passed an "A"', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return false when passed an "y"', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return false when passed an 4', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return false when passed true', function () {
        expect(isVowel(true)).toBe(false);
    });
    it('should return false when passed false', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return false when passed "banana"', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return false when called without an argument', function () {
        expect(isVowel()).toBe(false);
    });
});


describe("add", function () {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return a number when called', function () {
        expect(typeof add()).toBe("number");
    });
    it('should return a 5 when 2 + 3 is called', function () {
        expect(add(2, 3)).toBe(5);
    });
    it('should return a -12 when -3 + -9 is called', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return a 11 when 5 + 6 is called', function () {
        expect(add(5, 6)).toBe(11);
    });
    it('should return a 6 when -4 + 10 is called', function () {
        expect(add(-4, 10)).toBe(6);
    });
    it('should return a NaN when "banana" + "split is called', function () {
        expect(add("banana", "split")).toBe(isNaN(NaN));
    });
    it('should return a NaN when 2 + "apples" is called', function () {
        expect(add(2, "apples")).toBe(isNaN(NaN));
    });
    it('should return NaN when called without an argument', function () {
        expect(add()).toBeFalsy(isNaN(NaN));
    });
});