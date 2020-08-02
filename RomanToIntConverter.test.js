require("jest");
const converter = require("./RomanToIntConverter");

describe("Validation", () => {
    it("Should throw an InvalidInput exception when an invalid lettter is passed", ()=>{
        function tryToConvert(){
            return converter.convert("H");
        }
        expect(tryToConvert).toThrow(converter.InvaildInput);
    });
    test("VV Should throw an InvalidInput exception", () => {
        function tryToConvert() {
            return converter.convert("VV");
        }
        expect(tryToConvert).toThrow(converter.InvaildInput);
    });
    test("VL Should throw an InvalidInput exception", () => {
        function tryToConvert() {
            return converter.convert("VL");
        }
        expect(tryToConvert).toThrow(converter.InvaildInput);
    });
})

describe("Convert a single letter", () => {
    test("Capital letter", () => {
        expect(converter.convert("I")).toBe(1);
    });
    test("Small letter", () => {
        expect(converter.convert("i")).toBe(1);
    });
});

describe("Convert two letters", () => {
    test("II", () => {
        expect(converter.convert("II")).toBe(2);
    });
    test("MM", () => {
        expect(converter.convert("MM")).toBe(2000);
    });
    test("First letter bigger than second letter should be added", ()=>{
        expect(converter.convert("XI")).toBe(11);
    });
    test("Second letter smaller than fiest letter should be subtracted", ()=>{
        expect(converter.convert("IX")).toBe(9);
    });
});

describe("Convert three letters", () => {
    test("III", () => {
        expect(converter.convert("III")).toBe(3);
    });
    test("VII", () => {
        expect(converter.convert("VII")).toBe(7);
    });
    test("XII", () => {
        expect(converter.convert("XII")).toBe(12);
    });
    test("XIV", () => {
        expect(converter.convert("XIV")).toBe(14);
    });
});

describe("Convert big numbers", () => {
    test("XLVIII", () => {
        expect(converter.convert("XLVIII")).toBe(48);
    });
    test("LXXXVIII", () => {
        expect(converter.convert("LXXXVIII")).toBe(88);
    });
})