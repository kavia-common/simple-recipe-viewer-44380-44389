import { RecipeListPageComponent } from './recipe-list-page.component';
import { RecipeService } from '../recipe.service';

describe('RecipeListPageComponent', () => {
  it('should create', () => {
    const comp = new RecipeListPageComponent({ getRecipes: () => ({ subscribe: () => {} }) });
    expect(comp).toBeTruthy();
  });
});
