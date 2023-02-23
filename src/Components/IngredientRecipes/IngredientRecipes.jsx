import { useParams } from 'react-router-dom'
import { ImageList, ImageListItem, ImageListItemBar, Container, IconButton } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { ModalRecipes } from '../ModalRecipes/ModalRecipes'
import '../../styles/GlobalCssFavorites.css'
import { useGetRecipes } from '../../hooks/useGetRecipes'
import { LoadingSpinner } from '../../utilities/LoadingSpinner'
import { modal } from '../../utilities/modal'
import { addFavorites } from '../../services/addFavorites'

// TODO: change name of this component to only recipes instead of IngredientRecipes
export const IngredientRecipes = () => {
  const { id } = useParams()
  const { recipes, loading } = useGetRecipes(id)
  const { handleOpen, handleClose, open, idRecipe } = modal()
  const storageKey = import.meta.env.VITE_LOCALSTORAGE
  const user = JSON.parse(window.localStorage.getItem(storageKey))

  // add recipes to favorite list
  const handleClick = async (item) => {
    const error = await addFavorites(item, user)

    if (!error.error) {
      // eslint-disable-next-line no-undef
      alert(`${item.strMeal} added to Favorite Recipes`)
    } else {
      // eslint-disable-next-line no-undef
      alert(`${item.strMeal} already exist in you Favorite Recipes`)
    }
  }

  return loading
    ? <LoadingSpinner />
    : (
      <Container component='section' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <ImageList sx={{ width: 360, height: '100%' }}>
          <ImageListItem key='Subheader' cols={2} />
          {recipes?.meals?.map((item) => (

            <ImageListItem key={item.idMeal}>
              <img
                src={`${item.strMealThumb}?w=248&fit=crop&auto=format`}
                alt={item.strMeal}
                loading='lazy'
                onClick={() => handleOpen(item.idMeal, recipes.meals)}
              />
              <ImageListItemBar
                title={item.strMeal}
                sx={{ backgroundColor: 'rgba(51, 51, 51, 0.85)' }}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    onClick={() => handleClick(item)}
                  >
                    <FavoriteIcon />

                  </IconButton>
              }
              />
              <ModalRecipes open={open} handleClose={handleClose} id={idRecipe} />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
      )
}
