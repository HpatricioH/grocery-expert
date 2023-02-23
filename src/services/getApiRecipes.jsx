import axios from 'axios'

export const getApiRecipes = async () => {
  const urlKey = import.meta.env.VITE_SPOONACULAR_KEY
  const URL = `https://api.spoonacular.com/recipes/random?apiKey=${urlKey}&number=3&tags=spanish`

  try {
    const response = await axios.get(URL)
    return response.data.recipes
  } catch (error) {
    console.log(error)
  }
}
