import { RecipeListComponent } from './recipe-list.component';

describe('RecipeListComponent', () => {
  it('should create', () => {
    const comp = new RecipeListComponent({navigate: ()=>{}});
    expect(comp).toBeTruthy();
  });
});
