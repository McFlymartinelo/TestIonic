import {Recipe} from "../models/recipe";
import {Ingredient} from "../models/ingredients";

export class RecipesService{
  private recipes: Recipe[] = [];

  addRecipe(title: string, descripion: string, difficulty: string, ingredients: Ingredient[]){
    this.recipes.push(new Recipe(title, descripion, difficulty, ingredients));
    console.log(this.recipes);
  }

  getRecipes(){
    return this.recipes.slice();
  }

  updateRecipe(index: number,
               title: string,
               description: string,
               difficulty: string,
               ingredients: Ingredient[]){
    this.recipes[index] = new Recipe(title, description, difficulty, ingredients)
  }

  removeRecipe(index: number){
    this.recipes.slice(index, 1);
  }
}
