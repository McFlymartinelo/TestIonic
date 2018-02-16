import {Ingredient} from "./ingredients";

export class Recipe{
  constructor (
    public title: string,
    public desciption: string,
    public difficulty: string,
    public ingredients: Ingredient[]){}
}
