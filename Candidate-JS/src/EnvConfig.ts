import 'dotenv/config'
import {bool, cleanEnv, port, str} from 'envalid';

export default class EnvConfig {
    constructor() {
        const env = cleanEnv(process.env, {
            VERSION: str(),
        });

        this.version = env.VERSION;
    }

    version: string;
}