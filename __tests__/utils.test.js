import { add, divide, capitalize } from "../src/utils.js";

describe("add function", () => {
    it("2 + 3 is equal to 5", () => {
        expect(add(2,3)).toBe(5);
    });

    it("-2 + 5 is equal to 3", () => {
        expect(add(-2,5)).toBe(3);
    });

    it("0 + 0 is equal to 0", () => {
        expect(add(0,0)).toBe(0);
    });

    it('"2" + 3 throws TypeError', () => {
        expect(() => add("2", 3)).toThrow(TypeError);
    });

    it("add(2) throws TypeError", () => {
        expect(() => add(2)).toThrow(TypeError);
    });
});

describe("divide function", () => {
    it("10 / 2 is equal to 5", () => {
        expect(divide(10,2)).toBe(5);
    });

    it("3 / 2 is equal to 1.5", () => {
        expect(divide(3,2)).toBe(1.5);
    });

    it("1 / 0 throws Error", () => {
        expect(() => divide(1,0)).toThrow(Error);
    });

    it('"10" / 2 throws TypeError', () => {
        expect(() => divide("10",2)).toThrow(TypeError);
    });

    it("divide(-6, 2) returns -3", () => {
        expect(divide(-6, 2)).toBe(-3);
    });
});

describe("capitalize function", () => {
    it("capitalize hello is equal to Hello", () => {
        expect(capitalize("hello")).toBe("Hello");
    });

    it("capitalize Hello is equal to Hello", () => {
        expect(capitalize("Hello")).toBe("Hello");
    });

    it('capitalize "" is equal to ""', () => {
        expect(capitalize("")).toBe("");
    });

    it("capitalize 123 throws TypeError", () => {
        expect(() => capitalize(123)).toThrow(TypeError);
    });

    it("capitalize single character", () => {
        expect(capitalize("a")).toBe("A");
    });
});