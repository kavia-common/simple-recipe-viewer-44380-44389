import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { HeaderComponent } from '../header/header.component';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-list-page',
  templateUrl: './recipe-list-page.component.html',
  styleUrls: ['./recipe-list-page.component.css'],
  standalone: true,
  imports: [CommonModule, HeaderComponent, RecipeListComponent]
})
export class RecipeListPageComponent {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    // Minimal logging for debug: confirm service is called
    console.log('RecipeListPageComponent ngOnInit');
    this.recipeService.getRecipes().subscribe(r => {
      this.recipes = r;
      console.log('Fetched recipes:', r);
      // Add placeholder to visually confirm loading and fallback: if empty, inject dummy content for debug
      if (!this.recipes || this.recipes.length === 0) {
        console.warn('No recipes found. Using placeholder for debug.');
        this.recipes = [{ id: 'debug', title: 'No recipes available', ingredients: [], instructions: [], description: 'Check RecipeService fallback and recipes.data.ts', tags: ['debug'] }];
      }
    }, err => {
      console.error('Failed to fetch recipes:', err);
      // Fallback: show error content in preview
      this.recipes = [{ id: 'error', title: 'Error loading recipes', ingredients: [], instructions: [], description: 'See error log above', tags: ['error'] }];
    });
  }
}
