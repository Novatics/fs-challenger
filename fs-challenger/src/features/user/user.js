export default class User {
    name = '';
    lastName = '';
    image = '';
    remainingKudos = {
        learn: 2,
        awesome: 2,
        grateful: 2
    };

    constructor(name, lastName, image) {
        this.name = name;
        this.lastName = lastName;
        this.image = image;
    }

    toString = () => {
        return `${this.name} ${this.lastName}`;
    }
}