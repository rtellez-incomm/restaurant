import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] =[
    new Recipe('Schnitzel', 'A tasty treat', 'data:image/jpeg;base64,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',
    [
      new Ingredient ('Meat', 1),
      new Ingredient ('French Fries', 20)
    ]),
    new Recipe('Burger', 'A classic food item', 'data:image/jpeg;base64,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',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 1),
      new Ingredient('Onion', 1),
      new Ingredient('Tomato', 1),
      new Ingredient('Pickle Slices', 3)
    ])
  ];

  constructor(private slService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();//returns a new array that's a copy of the recipe array
  }

  getRecipe(index: number){
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index]= newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
}
