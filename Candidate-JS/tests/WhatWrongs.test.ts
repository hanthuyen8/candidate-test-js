import {describe, expect, test} from "vitest";
import Calculator from "../src/Calculator";
import {Machine} from "../src/Machines";
import Utils from "../src/Sorter";
import Logger from "../src/Logger";
import * as fs from "node:fs";
import {exec} from 'child_process';

describe("WhatWrongs", () => {

    test("Bài 1: Tại sao sai số?", async () => {
        const usersInputData = fs.readFileSync(`./data/usersInputData.txt`, "utf-8");
        const data = usersInputData.split("\n");
        const incomes = data.map((income) => Calculator.parseFloat(income.trim()));
        const totalIncome = incomes.reduce((total, income) => total + income, 0);

        expect(totalIncome).toBe(50.6);
    });

    test("Bài 2: Tại sao ko sort?", async () => {
        const arr = [18, 2, 11, 3, 30];
        Utils.sort(arr);
        expect(arr.join(',')).toBe("2,3,11,18,30");
    });

    test("Bài 3: Tại sao Button hoạt động sai?", async () => {
        const file = "./tests/index.html";
        exec(`open ${file}`);
    });

    test("Bài 4: Tại sao lỗi exception?", async () => {
        const processor = new Machine();
        const output = processor.getOutput("Hello");

        expect(output).toBe("[ROBOT_3] [ROBOT_2] [ROBOT_1] Hello");
    });

    test("Bài 5: Tại sao lỗi exception?", async () => {
        const logger = new Logger(true);
        const willReject = new Promise((_resolve, reject) => {
            reject("Error");
        });

        willReject.catch(logger.log);
    });
});