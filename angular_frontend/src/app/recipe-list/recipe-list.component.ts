import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class RecipeListComponent {
  @Input() recipes: Recipe[] = [];
  searchTerm: string = '';
  filtered: Recipe[] = [];

  constructor(private router: Router) {}

  ngOnInit() {
    this.filtered = this.recipes;
  }

  // PUBLIC_INTERFACE
  filterRecipes() {
    const term = this.searchTerm.toLowerCase();
    this.filtered = this.recipes.filter(r =>
      r.title.toLowerCase().includes(term) ||
      (r.tags ? r.tags.join(' ').toLowerCase().includes(term) : false)
    );
  }

  // PUBLIC_INTERFACE
  viewRecipe(recipe: Recipe) {
    this.router.navigate(['/recipe', recipe.id]);
  }
}
