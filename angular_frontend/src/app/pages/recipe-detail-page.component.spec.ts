import { RecipeDetailPageComponent } from './recipe-detail-page.component';

describe('RecipeDetailPageComponent', () => {
  it('should create', () => {
    const comp = new RecipeDetailPageComponent({ snapshot: { paramMap: { get: () => '1' } } }, { getRecipe: () => ({ subscribe: () => {} }) });
    expect(comp).toBeTruthy();
  });
});
