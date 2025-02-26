import {describe, expect, test} from "vitest";
import Calculator from "../src/Calculator";
import {Machine} from "../src/Machines";
import Utils from "../src/Sorter";
import Logger from "../src/Logger";
import {exec} from 'child_process';
import {fetchData} from "../src/Utils";
import EnvConfig from "../src/EnvConfig";

const API_HOST = "http://localhost:9000/api";

describe("WhatWrongs", () => {

    test("Bài 1: Tại sao sai số?", async () => {
        const usersInputData = await fetchData(`${API_HOST}/user-income-list`);
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

    test("Bài 6: Update version?", async () => {
        const serverVersion = await fetchData(`${API_HOST}/version`);
        const myVersion = new EnvConfig().version;

        // Mong đợi: Nếu serverVersion lớn hơn myVersion thì phải update
        console.log(`Server version: ${serverVersion}, My version: ${myVersion}`);
        const shouldUpdate = serverVersion > myVersion;

        expect(shouldUpdate).toBe(true);
    });
});