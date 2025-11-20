import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import { HeaderComponent } from '../header/header.component';
import { RecipeListComponent } from '../recipe-list/recipe-list.component';

@Component({
  selector: 'app-recipe-list-page',
  templateUrl: './recipe-list-page.component.html',
  styleUrls: ['./recipe-list-page.component.css'],
  standalone: true,
  imports: [HeaderComponent, RecipeListComponent]
})
export class RecipeListPageComponent {
  recipes: Recipe[] = [];

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipeService.getRecipes().subscribe(r => {
      this.recipes = r;
    });
  }
}
