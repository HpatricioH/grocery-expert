import axios from 'axios'
import { useEffect, useState } from 'react'

const PantryPage = () => {
  const [ingredients, setIngredients] = useState()

  useEffect(() => {
    async function getIngredients () {
      try {
        const response = await axios.get('https://www.themealdb.com/api/json/v1/1/list.php?i=list')
        setIngredients(response.data)
      } catch (error) {
        console.log(error)
      }
    }
    getIngredients()
  }, [])

  console.log(ingredients?.meals.map(ingredient => ingredient.strIngredient))
  return (
    ingredients?.meals.map(ingredient => <p key={ingredient?.idIngredient}>{ingredient?.strIngredient}</p>)
  )
}

export default PantryPage
