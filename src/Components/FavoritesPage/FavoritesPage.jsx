import { Container, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useState } from 'react'
import { ModalRecipes } from '../ModalRecipes/ModalRecipes'
import { useLocation } from 'react-router-dom'
import '../../styles/GlobalCssFavorites.css'
import { useFavoritesRecipes } from '../../hooks/useFavoritesRecipes'
import { modal } from '../../utilities/modal'
import { deleteFavorites } from '../../services/deleteFavorites'

export const FavoritesPage = () => {
  const [recipeDeleted, setRecipeDeleted] = useState(false)
  const storageKey = import.meta.env.VITE_LOCALSTORAGE
  const user = JSON.parse(window.localStorage.getItem(storageKey))
  const { recipes } = useFavoritesRecipes(recipeDeleted, user)
  const { handleOpen, handleClose, open, idRecipeFav } = modal()
  const location = useLocation()

  const handleClick = async (item) => {
    setRecipeDeleted(false)
    const error = await deleteFavorites(item)
    if (!error.error) {
      // eslint-disable-next-line no-undef
      alert(`${item.name} was removed from favorites`)
      setRecipeDeleted(true)
    }
  }

  return user && (
    <Container component='section' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ImageList sx={{ width: 360, height: '100%' }}>
        <ImageListItem key='Subheader' cols={2} />
        {recipes?.map((item) => (
          <ImageListItem key={item.idRecipe}>
            <img
              src={`${item.image}?w=248&fit=crop&auto=format`}
              alt={item.name}
              loading='lazy'
              onClick={() => handleOpen(item.idRecipe, [item])}
            />
            <ImageListItemBar
              title={item.name}
              sx={{ backgroundColor: 'rgba(51, 51, 51, 0.85)' }}
              actionIcon={
                <IconButton
                  sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                  onClick={() => handleClick(item)}
                >
                  <DeleteIcon />

                </IconButton>
              }
            />
            <ModalRecipes open={open} handleClose={handleClose} id={idRecipeFav} pathName={location.pathname} />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  )
}
