"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = require("./View");
class ViewJornal extends View_1.View {
    template(models) {
        return models.Jornal.map(s => `
        <div class="Main__Content">
        <h2 class="Main__Content__title">
            ${s.name}
        </h2>
        <p class="Main__Content__Cont">
            ${s.description}
        </p>
        <button class="Main__Contet__button">
            Acessar
        </button>

    </div>
        `).join('');
    }
    constructor(element) {
        super(element);
    }
}
exports.ViewJornal = ViewJornal;
//# sourceMappingURL=ViewJornal.js.map