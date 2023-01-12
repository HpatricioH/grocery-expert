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

  console.log(recipes)

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: '1rem', flexDirection: 'column' }}>
      {recipes?.map((recipe) => {
        return (
          <Card key={recipe.id} sx={{ maxWidth: 300, my: '1rem', width: '-webkit-fill-available' }}>

            <CardMedia
              component='img'
              height='140'
              image={recipe.image}
              alt='green iguana'
            />
            <CardContent sx={{ width: '100%' }}>
              <Typography gutterBottom variant='h4' component='h2' style={{ fontSize: '2rem', fontWeight: 'bold' }}>
                {recipe.title}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {recipe.servings}
              </Typography>
              <Typography variant='body2' color='text.secondary'>
                {recipe.readyInMinutes}
              </Typography>
            </CardContent>
          </Card>
        )
      })}

    </Box>

  )
}

export default HomePage
