import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RecipeService } from './recipe.service';

describe('RecipeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [RecipeService],
    });
  });

  it('should be created', () => {
    const service = TestBed.inject(RecipeService);
    expect(service).toBeTruthy();
  });
});
