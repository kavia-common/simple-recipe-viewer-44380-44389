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
    });
  }
}
