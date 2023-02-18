import axios from 'axios'

export const getRecipes = async (groceryName) => {
  const URL = `https://www.themealdb.com/api/json/v2/9973533/filter.php?i=${groceryName}`

  try {
    const { data } = await axios.get(`${URL}`)
    return data
  } catch (error) {
    throw new Error('Recipes not available')
  }
}
