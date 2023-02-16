import axios from 'axios'

export const getApiGroceries = async () => {
  const URL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list'

  try {
    const response = await axios.get(URL)
    return response?.data
  } catch (error) {
    throw new Error('API response failed')
  }
}
