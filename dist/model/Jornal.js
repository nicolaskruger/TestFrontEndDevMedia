"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const News_1 = require("./News");
class Jornal {
    constructor() {
        this.jornal = [new News_1.News("funk", "baforando na festa")];
    }
    get Jornal() { return [...this.jornal]; }
    add(news) {
        this.jornal.push(news);
    }
}
exports.Jornal = Jornal;
//# sourceMappingURL=Jornal.js.map