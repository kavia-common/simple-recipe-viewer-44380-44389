import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  standalone: true,
  imports: [CommonModule]
})
export class RecipeDetailComponent {
  @Input() recipe?: Recipe;
}
