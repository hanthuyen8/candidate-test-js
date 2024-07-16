export interface IAnimal {
    saySomething(): string;
}

export const Animal: IAnimal = {
    saySomething: function () {
        return `...`;
    }
};

export const Cat: IAnimal = {
    saySomething: function () {
        return `Meow!`;
    }
};