import { Routes } from '@angular/router';
import { RecipeListPageComponent } from './pages/recipe-list-page.component';
import { RecipeDetailPageComponent } from './pages/recipe-detail-page.component';

export const routes: Routes = [
  { path: '', component: RecipeListPageComponent },
  { path: 'recipe/:id', component: RecipeDetailPageComponent }
];
