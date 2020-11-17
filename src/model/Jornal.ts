import { News } from './News'
export class Jornal {
    private jornal:News[] = [new News("funk","baforando na festa")]
    get Jornal(){return [...this.jornal]}
    constructor() {
        
    }
    add(news:News){
        this.jornal.push(news);
    }
}