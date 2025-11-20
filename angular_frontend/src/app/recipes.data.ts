import { Recipe } from './recipe.model';

/**
 * Rich curated sample recipes dataset for in-memory fallback.
 * Each recipe includes realistic title, description, tags, measured ingredients,
 * detailed step-by-step instructions, and royalty-free image URLs.
 */
export const RECIPES: Recipe[] = [
  {
    id: '1',
    title: 'Classic Pancakes',
    description: 'Fluffy golden pancakes perfect for breakfast, topped with maple syrup.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836',
    ingredients: [
      '1 1/2 cups all-purpose flour',
      '3 1/2 tsp baking powder',
      '1 tbsp sugar',
      '1/2 tsp salt',
      '1 1/4 cups milk',
      '1 large egg',
      '3 tbsp unsalted butter, melted'
    ],
    instructions: [
      'In a bowl, whisk together flour, baking powder, sugar, and salt.',
      'Create a well, add milk, egg, and melted butter. Stir until just combined (do not overmix).',
      'Preheat and lightly oil a griddle over medium heat.',
      'Pour 1/4 cup batter for each pancake. Cook until bubbles form, then flip and cook until golden brown.',
      'Serve hot with maple syrup.'
    ],
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    tags: ['breakfast', 'vegetarian', 'American']
  },
  {
    id: '2',
    title: 'Avocado Toast with Poached Egg',
    description: 'Smashed avocado over whole-grain toast, topped with a perfectly poached egg.',
    image: 'https://images.unsplash.com/photo-1464306076886-c17ce6b31e1b',
    ingredients: [
      '2 slices whole-grain bread',
      '1 ripe avocado',
      '2 large eggs',
      'Salt & pepper to taste',
      'Red pepper flakes (optional)'
    ],
    instructions: [
      'Toast the bread until golden.',
      'Halve and mash the avocado, season with salt and pepper.',
      'Poach eggs in simmering water for ~3 minutes for a runny yolk.',
      'Spread mashed avocado on toast, top with a poached egg.',
      'Sprinkle red pepper flakes if desired and serve immediately.'
    ],
    prepTime: 5,
    cookTime: 8,
    servings: 2,
    tags: ['breakfast', 'healthy', 'vegetarian', 'quick']
  },
  {
    id: '3',
    title: 'Spaghetti Carbonara',
    description: 'Creamy Italian pasta with pancetta and Parmesan, tossed in a silky egg sauce.',
    image: 'https://images.unsplash.com/photo-1506368249639-73a05d6f6488',
    ingredients: [
      '12 oz spaghetti',
      '4 oz pancetta or bacon, diced',
      '2 large eggs',
      '2/3 cup grated Parmesan cheese',
      '2 cloves garlic, minced',
      'Salt & black pepper, to taste',
      'Chopped parsley for garnish'
    ],
    instructions: [
      'Cook spaghetti in salted boiling water until al dente. Reserve 1/2 cup pasta water, then drain.',
      'While pasta cooks, sauté pancetta and garlic in a skillet until crispy.',
      'In a bowl, whisk eggs and Parmesan cheese.',
      'Add drained pasta to the pancetta, remove from heat.',
      'Stir in egg-cheese mixture rapidly, adding pasta water to create a creamy sauce.',
      'Season with salt and pepper, garnish with parsley, and serve.'
    ],
    prepTime: 12,
    cookTime: 18,
    servings: 3,
    tags: ['Italian', 'pasta', 'comfort food']
  },
  {
    id: '4',
    title: 'Vegetable Stir-Fry',
    description: 'Quick and colorful stir-fried veggies tossed in a savory soy-garlic sauce.',
    image: 'https://images.unsplash.com/photo-1519864604087-6c89e3d88981',
    ingredients: [
      '2 tbsp vegetable oil',
      '1 cup broccoli florets',
      '1 bell pepper, sliced',
      '1 carrot, sliced',
      '1/2 cup snap peas',
      '2 cloves garlic, minced',
      '2 tbsp soy sauce',
      '1 tbsp oyster sauce',
      '1 tsp sesame oil'
    ],
    instructions: [
      'Heat vegetable oil in a wok or large skillet over high heat.',
      'Add garlic, then vegetables. Stir-fry for 3–4 minutes until just tender.',
      'Stir in soy sauce, oyster sauce, and sesame oil.',
      'Cook for 2 more minutes, tossing to coat.',
      'Serve hot with steamed rice or noodles.'
    ],
    prepTime: 10,
    cookTime: 8,
    servings: 2,
    tags: ['Asian', 'vegan', 'healthy', 'quick']
  },
  {
    id: '5',
    title: 'Chicken Tikka Masala',
    description: 'Tender grilled chicken served in a creamy spiced tomato sauce.',
    image: 'https://images.unsplash.com/photo-1523987355523-c7b5b07dd3c4',
    ingredients: [
      '1 lb chicken breast, cut into chunks',
      '1/2 cup yogurt',
      '2 tbsp tikka masala paste',
      '2 tbsp vegetable oil',
      '1 onion, chopped',
      '2 cloves garlic, minced',
      '1 inch ginger, grated',
      '1 can (15 oz) tomato sauce',
      '1/2 cup heavy cream',
      'Salt & pepper to taste',
      'Fresh cilantro for garnish'
    ],
    instructions: [
      'Marinate chicken in yogurt and tikka masala paste for 1 hour.',
      'Grill or pan-fry chicken pieces until cooked; set aside.',
      'In a pan, sauté onion, garlic, and ginger until fragrant.',
      'Add tomato sauce, simmer for 10 min. Stir in cream and chicken.',
      'Cook for 5 more minutes. Season, garnish with cilantro and serve with rice or naan.'
    ],
    prepTime: 15,
    cookTime: 30,
    servings: 4,
    tags: ['Indian', 'chicken', 'comfort food', 'gluten-free']
  },
  {
    id: '6',
    title: 'Greek Salad',
    description: 'Fresh salad with tomatoes, cucumbers, olives, feta, and a tangy vinaigrette.',
    image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc',
    ingredients: [
      '2 cups chopped cucumber',
      '1 cup cherry tomatoes, halved',
      '1/2 cup Kalamata olives',
      '1/2 cup red onion, sliced',
      '1/2 cup feta cheese, cubed',
      '2 tbsp olive oil',
      '1 tbsp red wine vinegar',
      '1 tsp dried oregano',
      'Salt & black pepper to taste'
    ],
    instructions: [
      'Combine cucumber, tomatoes, olives, onion, and feta in a bowl.',
      'Whisk olive oil, vinegar, oregano, salt, and pepper for dressing.',
      'Pour dressing over salad, toss gently.',
      'Serve chilled.'
    ],
    prepTime: 12,
    cookTime: 0,
    servings: 2,
    tags: ['Mediterranean', 'salad', 'vegetarian', 'healthy']
  },
  {
    id: '7',
    title: 'Teriyaki Salmon Bowl',
    description: 'Salmon fillet glazed in a sweet teriyaki sauce, served over steamed rice.',
    image: 'https://images.unsplash.com/photo-1519864604087-6c89e3d88981?ixid=Mnwx',
    ingredients: [
      '2 salmon fillets',
      '2 tbsp soy sauce',
      '1 tbsp mirin',
      '1 tbsp honey',
      '1 tsp sesame oil',
      '1 clove garlic, minced',
      '1 cup cooked white rice',
      'Sliced green onions for garnish',
      'Sesame seeds for garnish'
    ],
    instructions: [
      'Mix soy sauce, mirin, honey, sesame oil, and garlic for teriyaki marinade.',
      'Brush salmon with marinade and bake at 400°F (200°C) for 12–15 minutes.',
      'Drizzle extra sauce over cooked salmon.',
      'Serve salmon atop steamed rice, sprinkle with green onions and sesame seeds.'
    ],
    prepTime: 8,
    cookTime: 15,
    servings: 2,
    tags: ['Asian', 'seafood', 'healthy']
  },
  {
    id: '8',
    title: 'Hearty Lentil Soup',
    description: 'Rustic soup made with green lentils, carrots, and spices for a warming meal.',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format',
    ingredients: [
      '1 tbsp olive oil',
      '1 onion, diced',
      '2 carrots, diced',
      '2 cloves garlic, minced',
      '1 cup green lentils',
      '4 cups vegetable broth',
      '1 tsp cumin',
      'Salt & black pepper, to taste',
      '1 tbsp lemon juice'
    ],
    instructions: [
      'Heat olive oil in a soup pot. Sauté onion, carrots, and garlic until softened.',
      'Add lentils, cumin, salt, and vegetable broth. Bring to a boil.',
      'Simmer covered for 30–35 minutes until lentils are tender.',
      'Stir in lemon juice, adjust seasoning, and serve hot.'
    ],
    prepTime: 10,
    cookTime: 35,
    servings: 4,
    tags: ['vegetarian', 'vegan', 'soup', 'gluten-free']
  },
  {
    id: '9',
    title: 'Shrimp Pad Thai',
    description: 'Thai-style rice noodles with shrimp, crushed peanuts, and a tangy tamarind sauce.',
    image: 'https://images.unsplash.com/photo-1519864604087-6c89e3d88981?auto=format',
    ingredients: [
      '7 oz rice noodles',
      '8 oz shrimp, peeled and deveined',
      '2 eggs, lightly beaten',
      '1 cup bean sprouts',
      '3 tbsp tamarind paste',
      '2 tbsp fish sauce',
      '1 tbsp brown sugar',
      '2 tbsp vegetable oil',
      '1/2 cup crushed peanuts',
      'Sliced lime and cilantro for garnish'
    ],
    instructions: [
      'Soak rice noodles according to package instructions.',
      'Whisk tamarind paste, fish sauce, and brown sugar for sauce.',
      'Heat oil, cook shrimp until pink, remove. Cook eggs scrambled, push to side.',
      'Add noodles, pad thai sauce, shrimp, and bean sprouts. Toss to combine.',
      'Serve topped with peanuts, lime, and cilantro.'
    ],
    prepTime: 12,
    cookTime: 15,
    servings: 2,
    tags: ['Asian', 'seafood', 'Thai']
  },
  {
    id: '10',
    title: 'Vegetarian Burrito Bowl',
    description: 'A zesty bowl of rice, black beans, veggies, salsa, and cheese—all in one bowl.',
    image: 'https://images.unsplash.com/photo-1519864604087-6c89e3d88981?auto=compress',
    ingredients: [
      '1 cup cooked rice',
      '1/2 cup canned black beans, rinsed',
      '1/2 cup corn kernels',
      '1/2 cup diced tomatoes',
      '1/4 cup diced red onion',
      '1/2 cup shredded cheddar cheese',
      '1/4 cup salsa',
      '1/4 cup chopped cilantro',
      '1 tsp ground cumin'
    ],
    instructions: [
      'Place cooked rice in bowl as base.',
      'Layer black beans, corn, tomatoes, and onion over rice.',
      'Sprinkle with cumin and cheese.',
      'Top with salsa and chopped cilantro just before serving.'
    ],
    prepTime: 8,
    cookTime: 10,
    servings: 2,
    tags: ['Mexican', 'vegetarian', 'gluten-free', 'bowl']
  },
  {
    id: '11',
    title: 'Beef Bulgogi',
    description: 'Grilled Korean-style beef marinated in soy, garlic, and Asian pear.',
    image: 'https://images.unsplash.com/photo-1519864604087-6c89e3d88981?fit=crop',
    ingredients: [
      '1 lb ribeye beef, thinly sliced',
      '1/4 cup soy sauce',
      '2 tbsp brown sugar',
      '2 tbsp sesame oil',
      '2 cloves garlic, minced',
      '1/2 Asian pear, grated (optional)',
      '2 green onions, chopped',
      '1 tbsp sesame seeds'
    ],
    instructions: [
      'Stir soy sauce, brown sugar, sesame oil, garlic, Asian pear, and green onions for marinade.',
      'Marinate beef at least 30 minutes.',
      'Grill or pan-fry beef over high heat until browned and caramelized.',
      'Sprinkle with sesame seeds and serve with steamed rice.'
    ],
    prepTime: 25,
    cookTime: 12,
    servings: 3,
    tags: ['Korean', 'beef', 'Asian']
  },
  {
    id: '12',
    title: 'Chocolate Mug Cake',
    description: 'Quick microwave chocolate cake—rich, moist, and ready in minutes!',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib',
    ingredients: [
      '4 tbsp all-purpose flour',
      '2 tbsp cocoa powder',
      '2 tbsp sugar',
      '1/8 tsp baking powder',
      '3 tbsp milk',
      '2 tbsp vegetable oil',
      'Optional: chocolate chips, whipped cream'
    ],
    instructions: [
      'In a microwave-safe mug, whisk flour, cocoa, sugar, and baking powder.',
      'Add milk and oil, stir until smooth. Add chocolate chips if desired.',
      'Microwave on high for 90 seconds (do not overcook).',
      'Top with whipped cream if desired, and serve warm.'
    ],
    prepTime: 3,
    cookTime: 2,
    servings: 1,
    tags: ['dessert', 'quick', 'vegetarian', 'single-serve']
  }
];
