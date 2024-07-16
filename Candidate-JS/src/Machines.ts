export interface IMachine {
    getOutput(input: string): string;
}

export class Machine implements IMachine {
    private _processor: IMachine;

    getOutput(input: string): string {
        if (!this._processor) {
            this._processor = new Robot1(this);
        }
        return this._processor.getOutput(input);
    }
}

class Robot1 implements IMachine {
    constructor(proxy: IMachine) {
        this._processor = new Robot2(proxy);
    }

    private readonly _processor: IMachine;

    getOutput(input: string): string {
        return this._processor.getOutput(`[ROBOT_1] ${input}`);
    }
}

class Robot2 implements IMachine {
    constructor(proxy: IMachine) {
        this._processor = new Robot3(proxy);
    }

    private readonly _processor: IMachine;

    getOutput(input: string): string {
        return this._processor.getOutput(`[ROBOT_2] ${input}`);
    }
}

class Robot3 implements IMachine {
    constructor(private readonly _proxy: IMachine) {
    }

    getOutput(input: string): string {
        return this._proxy.getOutput(`[ROBOT_3] ${input}`);
    }
}
