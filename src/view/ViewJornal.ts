import {View} from "./View";
import {Jornal} from "../model/Jornal"
export class ViewJornal extends View {
    protected template(models: Jornal) {
        return models.Jornal.map(s=>`
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
    constructor(element:HTMLElement) {
        super(element);
    }

}