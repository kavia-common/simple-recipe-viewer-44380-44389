/**
 * Recipe model describing the structure of recipe data.
 */
export interface Recipe {
  id: string;
  title: string;
  description?: string;
  image?: string;
  ingredients: string[];
  instructions: string[];
  tags?: string[];
}
