class RomanToIntConverter {
    letter_to_number_object = { "I": 1, "V": 5, "X": 10, "L": 50, "C": 100, "D": 500, "M": 1000 }
    validation_reqex = /^M{0,4}(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/i;
    constructor(){
        this.InvaildInput = class InvaildInput {
            constructor() {
                this.message = "Invalid roman input";
            }
        }
    }
    convert(roman){
        let roman_array = roman.toUpperCase().split("");
        if(!this.validateInput(roman)){
            throw new this.InvaildInput();
        };
        if(roman_array.length==1){
            return this.letter_to_number_object[roman_array[0]];
        }
        let numbers_array = this.convertArrayOfLettersToNumbers(roman_array);
        let total = this.processArray(numbers_array);
        return total;
    }
    validateInput(roman) {
        return this.validation_reqex.test(roman)
    }
    convertArrayOfLettersToNumbers(letters){
        const array_to_return = [];
        letters.forEach((letter, index) => {
            array_to_return[index] = this.letter_to_number_object[letter];
        });
        return array_to_return;
    }
    processArray(array){
        let result = array[0];
        for(let i = 1; i<array.length; i++){
            const num = array[i];
            const prev_num = array[i - 1];
            result = this.addNextNumber(num, prev_num, result);
        }
        return result;
    }
    addNextNumber(num, prev_num, result) {
        if (num <= prev_num) {
            result += num;
        }
        else {
            result -= prev_num;
            result += num - prev_num;
        }
        return result;
    }
}
module.exports = new RomanToIntConverter();