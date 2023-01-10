import { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, CardActionArea } from '@mui/material'
import { supabase } from '../../utilities/supabaseClient'
import axios from 'axios'

const HomePage = () => {
  const [recipes, setRecipes] = useState(null)
  const urlKey = import.meta.env.VITE_SPOONACULAR_KEY
  const URL = `https://api.spoonacular.com/recipes/random?apiKey=${urlKey}&number=3&tags=spanish`

  useEffect(() => {
    async function getRandomRecipes () {
      try {
        const response = await axios.get(URL)
        setRecipes(response.data.recipes)
      } catch (error) {
        console.log(error)
      }
    }
    getRandomRecipes()
  }, [])

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: '2rem', flexDirection: 'column' }}>
      {recipes?.map((recipe) => {
        return (
          <Card key={recipe.id} sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image={recipe.image}
                alt='green iguana'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='div'>
                  {recipe.title}
                </Typography>
                <Typography variant='body2' color='text.secondary'>
                  {recipe.summary}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })}
    </Box>

  )
}

export default HomePage

// aggregateLikes
// :
// 19
// analyzedInstructions
// :
// [{…}]
// cheap
// :
// false
// cookingMinutes
// :
// -1
// creditsText
// :
// "foodista.com"
// cuisines
// :
// (2) ['Spanish', 'European']
// dairyFree
// :
// true
// diets
// :
// (2) ['gluten free', 'dairy free']
// dishTypes
// :
// (4) ['lunch', 'main course', 'main dish', 'dinner']
// extendedIngredients
// :
// (8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
// gaps
// :
// "no"
// glutenFree
// :
// true
// healthScore
// :
// 16
// id
// :
// 641911
// image
// :
// "https://spoonacular.com/recipeImages/641911-556x370.jpg"
// imageType
// :
// "jpg"
// instructions
// :
// "<ol><li>Heat the oil in a 12-inch skillet over medium heat. Add the rice and cook for 30 seconds, stirring constantly. Stir the broth, picante sauce and turmeric in the skillet and heat to a boil. Reduce the heat to low. Cover and cook for 15 minutes.</li><li>Stir the kielbasa, shrimp and chicken in the skillet. Cover and cook for 5 minutes or until the rice is tender.</li></ol>"
// lowFodmap
// :
// false
// occasions
// :
// []
// originalId
// :
// null
// preparationMinutes
// :
// -1
// pricePerServing
// :
// 238.13
// readyInMinutes
// :
// 45
// servings
// :
// 8
// sourceName
// :
// "foodista.com"
// sourceUrl
// :
// "http://www.foodista.com/recipe/JYKRF2ZZ/easy-chicken-kielbasa-and-shrimp-paella"
// spoonacularSourceUrl
// :
// "https://spoonacular.com/easy-chicken-kielbasa-and-shrimp-paella-641911"
// summary
// :
// "You can never have too many main course recipes, so give Easy Chicken, Kielbasan and Shrimp Paellan a try. This gluten free, dairy free, and fodmap friendly recipe serves 8 and costs <b>$2.38 per serving</b>. One serving contains <b>408 calories</b>, <b>34g of protein</b>, and <b>10g of fat</b>. This recipe is typical of European cuisine. If you have picante sauce, chicken breast strips, ground turmeric, and a few other ingredients on hand, you can make it. 19 people have tried and liked this recipe. From preparation to the plate, this recipe takes about <b>45 minutes</b>. All things considered, we decided this recipe <b>deserves a spoonacular score of 63%</b>. This score is solid. Try <a href=\"https://spoonacular.com/recipes/easy-shrimp-and-chicken-paella-838618\">Easy Shrimp and Chicken Paella</a>, <a href=\"https://spoonacular.com/recipes/shrimp-and-scallop-easy-paella-301298\">Shrimp and Scallop Easy Paella</a>, and <a href=\"https://spoonacular.com/recipes/chicken-and-shrimp-paella-198233\">Chicken and Shrimp Paella</a> for similar recipes."
// sustainable
// :
// false
// title
// :
// "Easy Chicken, Kielbasa and Shrimp Paella"
// vegan
// :
// false
// vegetarian
// :
// false
// veryHealthy
// :
// false
// veryPopular
// :
// false
// weightWatcherSmartPoints
// :
// 11
