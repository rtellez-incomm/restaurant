import { Ingredient } from '../shared/ingredient.model';
import { EventEmitter } from '@angular/core';

export class ShoppingListService {
  ingredientChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  getIngredients(){
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this. ingredients.push(ingredient);
    this.ingredientChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
//    for (let ingredient of ingredients) {
//      this.addIngredient(ingredient);
//    }
    this.ingredients.push(...ingredients); //... aka spread operator allows the push method to pass the ingredients as individual objects not as the whole array object like [] would (array into a list)
    this.ingredientChanged.emit(this.ingredients.slice());

  }

}

