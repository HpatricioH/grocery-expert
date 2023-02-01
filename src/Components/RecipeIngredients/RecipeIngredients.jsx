import '../../styles/recipeList.css'

export const RecipeIngredients = ({ recipe }) => {
  const ingredients = []

  for (let i = 0; i <= 15; i++) {
    const ingredient = recipe[`strIngredient${i}`]
    const measure = recipe[`strMeasure${i}`]

    if (ingredient) {
      ingredients.push({ ingredient, measure })
    }
  }

  return (
    <ul>
      {ingredients.map((ingredient, i) => {
        return (
          <li key={i}>
            <span className='list__elements'>
              {ingredient.measure}
            </span> {ingredient.ingredient}
          </li>
        )
      })}
    </ul>
  )
}
