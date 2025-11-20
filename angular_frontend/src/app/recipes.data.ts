import { Recipe } from './recipe.model';

export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Classic Pancakes',
    description: 'Fluffy pancakes perfect for breakfast.',
    image: '',
    ingredients: [
      '1 1/2 cups flour',
      '3 1/2 tsp baking powder',
      '1 tbsp sugar',
      '1/2 tsp salt',
      '1 1/4 cups milk',
      '1 egg',
      '3 tbsp melted butter'
    ],
    instructions: [
      'Mix dry ingredients together.',
      'Add in milk, egg, and melted butter. Stir until just combined.',
      'Heat a lightly oiled griddle over medium heat.',
      'Pour batter onto griddle. Cook until bubbles form, then flip and cook until golden.'
    ],
    tags: ['breakfast']
  },
  {
    id: '2',
    title: 'Avocado Toast',
    description: 'Simple and delicious avocado toast.',
    image: '',
    ingredients: [
      '2 slices whole-grain bread',
      '1 ripe avocado',
      'Salt & pepper',
      'Optional toppings: tomato, radish, poached egg'
    ],
    instructions: [
      'Toast bread slices.',
      'Mash avocado and spread on toast.',
      'Season with salt and pepper. Add toppings if desired.'
    ],
    tags: ['breakfast', 'healthy']
  }
];
