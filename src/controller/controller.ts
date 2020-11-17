import {Jornal} from "../model/Jornal";
import {ViewJornal} from "../view/ViewJornal";
import {Bind} from "../helper/Bind";
import { View } from "../view/View";
export class Controller {
    $ = document.querySelector.bind(document);
    viewJornal:ViewJornal = new ViewJornal(this.$(".Main"));
    jorna:Jornal = Bind.create(new Jornal(),this.viewJornal,"add");
    
    constructor() {
        
    }
}