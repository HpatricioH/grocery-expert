import { recipes } from "../lib/data/recipes.json"

export interface Recipe {
  title: string
  category: string
  cookTime: string
}

function getRecipes(): Recipe[] {
  const recipesData: Recipe[] = recipes.map((recipe) => ({
    title: recipe.title,
    category: recipe.category,
    cookTime: recipe.cookTime
  }))
  return recipesData
}

export function GET() {
  return new Response(JSON.stringify(getRecipes()), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    }
  })
}