import {describe, expect, test} from "vitest";
import Calculator from "../src/Calculator";
import {Machine} from "../src/Machines";
import {generateButtons} from "../src/Callbacks";
import Utils from "../src/Sorter";

describe("WhatWrongs", () => {
    test("What Wrong 1", async () => {
        const incomesData = `
            1.1
            2.2
            3.3
            4.4
            5.5
            6.6
            7.7
            8.8
            9,9
        `;
        const data = incomesData.split("\n");
        const incomes = data.map((income) => Calculator.parseFloat(income.trim()));
        const totalIncome = incomes.reduce((total, income) => total + income, 0);

        // Tổng số phải bằng 49.5
        expect(totalIncome).toBe(49.5);
    });

    test("What Wrong 2", async () => {
        const arr = [18, 2, 11, 3, 30];
        Utils.sort(arr);
        expect(arr.join(',')).toBe("2,3,11,18,30");
    });

    test("What Wrong 3", async () => {
        const ids = [1, 2, 3, 4, 5]
        const buttons = generateButtons(ids);

        const clickedIds: number[] = [];
        buttons.forEach(btn => {
            clickedIds.push(btn.click());
        });

        // clickedIds phải là [1,2,3,4,5]
        expect(clickedIds.join(',')).toEqual(ids.join(','));
    });

    test("What Wrong 4", async () => {
        const processor = new Machine();
        const output = processor.getOutput("Hello");

        // Output phải là: [ROBOT_3] [ROBOT_2] [ROBOT_1] Hello
        expect(output).toBe("[ROBOT_3] [ROBOT_2] [ROBOT_1] Hello");
    });
});