export default class Character {
    id = 0;
    name = '';
    kudos = [];
    photo = '';

    constructor(id, name, kudos, photo) {
        this.id = id;
        this.name = name;
        this.photo = photo;
        this.kudos = kudos ?? [];
    }
}