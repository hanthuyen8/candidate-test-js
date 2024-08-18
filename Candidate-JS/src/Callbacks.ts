export type CallBack = () => number;

export class Button {
    constructor(readonly click: CallBack) {
    }
}