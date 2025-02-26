import 'dotenv/config'
import {bool, cleanEnv, port, str} from 'envalid';
import {IEnvConfig} from "../Services";
import * as process from "node:process";

export default class EnvConfig implements IEnvConfig {
    constructor() {
        const env = cleanEnv(process.env, {
            VERSION: str(),
        });

        this.version = env.VERSION;
    }

    version: string;
}