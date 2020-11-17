"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Jornal_1 = require("../model/Jornal");
const ViewJornal_1 = require("../view/ViewJornal");
const Bind_1 = require("../helper/Bind");
class Controller {
    constructor() {
        this.$ = document.querySelector.bind(document);
        this.viewJornal = new ViewJornal_1.ViewJornal(this.$(".Main"));
        this.jorna = Bind_1.Bind.create(new Jornal_1.Jornal(), this.viewJornal, "add");
    }
}
exports.Controller = Controller;
//# sourceMappingURL=controller.js.map