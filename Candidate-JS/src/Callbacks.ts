export type CallBack = () => number;

export function generateButtons(ids: number[]): Button[] {
    const buttons: Button[] = [];

    for (var id of ids) {
        buttons.push(new Button((): number => {
            return id;
        }))
    }

    return buttons;
}

export class Button {
    constructor(readonly click: CallBack) {
    }
}