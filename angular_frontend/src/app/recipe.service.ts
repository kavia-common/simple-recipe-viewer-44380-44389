import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ENV } from './environment'; // We'll define an env helper.
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe.model';
import { RECIPES } from './recipes.data';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  private apiUrl = ENV.NG_APP_API_BASE || ''; // Fallback to empty (use in-memory if not set).

  constructor(private http: HttpClient) {}

  // PUBLIC_INTERFACE
  getRecipes(): Observable<Recipe[]> {
    // Try API if configured, else fallback
    if (this.apiUrl) {
      return this.http.get<Recipe[]>(`${this.apiUrl}/recipes`);
    } else {
      return of(RECIPES);
    }
  }

  // PUBLIC_INTERFACE
  getRecipe(id: string): Observable<Recipe | undefined> {
    if (this.apiUrl) {
      return this.http.get<Recipe>(`${this.apiUrl}/recipes/${id}`);
    } else {
      const found = RECIPES.find(r => r.id === id);
      return of(found);
    }
  }
}
