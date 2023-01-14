import { useEffect, useState } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { Box, CardActionArea, Container } from '@mui/material'
import axios from 'axios'
import AvTimerIcon from '@mui/icons-material/AvTimer'
import PeopleIcon from '@mui/icons-material/People'
import FastfoodIcon from '@mui/icons-material/Fastfood'

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
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', py: '1rem', flexDirection: 'column' }}>
      {recipes?.map((recipe) => {
        return (
          <Card key={recipe?.id} sx={{ maxWidth: 350, my: '1rem', width: '-webkit-fill-available', border: '1px solid #3D550C', position: 'relative' }}>
            <CardActionArea>
              <CardMedia
                component='img'
                height='140'
                image={recipe.image}
                alt={recipe.image}
              />
              <CardContent sx={{ width: '100%', py: '0.5rem' }}>
                <Typography
                  gutterBottom variant='h4' component='h2' style={{
                    backdropFilter: 'blur(10.3px)',
                    backgroundColor: 'rgba(67, 60, 60, 0.44)',
                    fontSize: '1rem',
                    fontWeight: 'bold',
                    color: '#fff',
                    position: 'absolute',
                    top: '6.8rem',
                    padding: '0.5rem 0.5rem',
                    textTransform: 'capitalize'
                  }}
                >
                  {recipe.title}
                </Typography>
                <Container style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', textAlign: 'center', padding: '0', color: '#3D550C' }}>
                  <div>
                    <Typography style={{ textAlign: 'left', fontSize: '0.8rem', textTransform: 'capitalize' }} color='text.secondary'>
                      {/** get only 3 ingredients from the recipe and return the name */}
                      {recipe?.extendedIngredients?.slice(0, 3).map((name) => `${name.name}, `)}
                    </Typography>
                  </div>
                  <div>
                    <PeopleIcon />
                    <Typography variant='body2' color='text.secondary'>
                      {recipe?.servings}
                    </Typography>
                  </div>
                  <div>
                    <AvTimerIcon />
                    <Typography variant='body2' color='text.secondary'>
                      {`${recipe?.readyInMinutes}'`}
                    </Typography>
                  </div>
                  <div>
                    <FastfoodIcon />
                    <Typography variant='body2' color='text.secondary'>
                      {recipe?.extendedIngredients.length}
                    </Typography>
                  </div>
                </Container>
              </CardContent>
            </CardActionArea>
          </Card>
        )
      })}

    </Box>

  )
}

export default HomePage
