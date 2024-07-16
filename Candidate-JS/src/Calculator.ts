export default class Calculator {
    static calculate(numbers: number[]) {
        let halfSum = 0;
        for (const number of numbers) {
            halfSum += number / 2;
        }
        return halfSum;
    }

    static parseFloat(number: string) {
        number = number.trim();
        if (number.length === 0) {
            return 0;
        }
        return parseFloat(number);
    }
}