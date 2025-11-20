import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';
import { RECIPES } from './recipes.data';

/**
 * RecipeService always provides recipes from in-memory static data, 
 * ignoring all API environment configs or remote fetch logic for preview/demo purposes.
 * 
 * PUBLIC_INTERFACE
 */
@Injectable({ providedIn: 'root' })
export class RecipeService {
  // PUBLIC_INTERFACE
  getRecipes(): Observable<Recipe[]> {
    // Always serve from in-memory array, skipping API remote fetch logic.
    // TODO: To re-enable external API fetching, restore previous API logic using NG_APP_API_BASE.
    return of(Array.isArray(RECIPES) && RECIPES.length ? RECIPES : [{
      id: 'debug3',
      title: 'RECIPES fallback empty',
      ingredients: [],
      instructions: [],
      description: 'Check recipes.data.ts',
      tags: ['debug']
    }]);
  }

  // PUBLIC_INTERFACE
  getRecipe(id: string): Observable<Recipe | undefined> {
    const found = RECIPES.find(r => r.id === id);
    // TODO: To re-enable fetching a recipe from a backend, restore previous API usage here.
    return of(found);
  }
}
