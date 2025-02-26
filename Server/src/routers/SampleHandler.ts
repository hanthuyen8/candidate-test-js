import {IEnvConfig, ILogger} from "../Services";
import {IDependencies} from "../Dependencies";
import {Request, Response} from "express";
import fs from 'fs';

const filePath = './data/usersInputData.txt';

export default class SampleHandler {
    private readonly _logger: ILogger;
    private readonly _envConfig: IEnvConfig;

    constructor(dependencies: IDependencies) {
        this._logger = dependencies.logger;
        this._envConfig = dependencies.envConfig;
    }

    public getList(req: Request, res: Response) {
        const list = fs.readFileSync(filePath, 'utf-8');
        res.send(list);
    }

    public getVersion(req: Request, res: Response) {
        res.send("11");
    }

    private readFileToList = (filePath: string): string[] => {
        const data = fs.readFileSync(filePath, 'utf-8');
        return data.split('\n').map(line => line.trim()).filter(line => line.length > 0);
    };
}