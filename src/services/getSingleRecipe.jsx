import axios from 'axios'

export const getSingleRecipe = async (id) => {
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

  try {
    const { data } = await axios.get(URL)
    return data
  } catch (error) {
    throw new Error('Recipe not available')
  }
}
