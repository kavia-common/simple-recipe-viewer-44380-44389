import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';
import { RECIPES } from './recipes.data';

/**
 * RecipeService provides methods for fetching recipe data from API or fallback in-memory.
 * It prioritizes NG_APP_API_BASE from window.env and displays sample recipes when API is unavailable.
 * PUBLIC_INTERFACE
 */
@Injectable({ providedIn: 'root' })
export class RecipeService {
  /**
   * Returns the API base if available from globalThis.env (browser/server) or '' if missing.
   * Uses globalThis for universal compatibility and avoids window reference warnings/errors.
   */
  private getApiBase(): string {
    try {
      // SSR-safe global access for Angular Universal/server and browser
      if (
        typeof globalThis !== 'undefined' &&
        typeof (globalThis as any).env !== 'undefined' &&
        typeof (globalThis as any).env.NG_APP_API_BASE !== 'undefined'
      ) {
        return (globalThis as any).env.NG_APP_API_BASE || '';
      }
    } catch (err) {
      // Silent fail for SSR/unset
    }
    return '';
  }

  constructor(private http: HttpClient) {}

  // PUBLIC_INTERFACE
  getRecipes(): Observable<Recipe[]> {
    const apiUrl = this.getApiBase();
    if (apiUrl) {
      console.log('RecipeService: using API', apiUrl);
      return this.http.get<Recipe[]>(`${apiUrl}/recipes`);
    } else {
      console.log('RecipeService: using in-memory RECIPES fallback');
      return of(Array.isArray(RECIPES) && RECIPES.length ? RECIPES : [{
        id: 'debug3',
        title: 'RECIPES fallback empty',
        ingredients: [],
        instructions: [],
        description: 'Check recipes.data.ts',
        tags: ['debug']
      }]);
    }
  }

  // PUBLIC_INTERFACE
  getRecipe(id: string): Observable<Recipe | undefined> {
    const apiUrl = this.getApiBase();
    if (apiUrl) {
      return this.http.get<Recipe>(`${apiUrl}/recipes/${id}`);
    } else {
      const found = RECIPES.find(r => r.id === id);
      return of(found);
    }
  }
}
