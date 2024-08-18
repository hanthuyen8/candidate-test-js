export default class Logger {
    constructor(private readonly enableLog: boolean) {
    }

    log(msg: string): void {
        if (this.enableLog) {
            console.log(msg);
        }
    }
}