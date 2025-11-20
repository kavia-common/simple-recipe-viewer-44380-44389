/**
 * Recipe model describing the structure of recipe data with enhanced metadata.
 * PUBLIC_INTERFACE
 */
export interface Recipe {
  id: string;
  title: string;
  description?: string;
  image?: string;
  ingredients: string[];
  instructions: string[];
  /**
   * Optional preparation time (in minutes)
   */
  prepTime?: number;
  /**
   * Optional cooking time (in minutes)
   */
  cookTime?: number;
  /**
   * Optional servings count
   */
  servings?: number;
  /**
   * Optional tags for recipe classification/pills
   */
  tags?: string[];
}
