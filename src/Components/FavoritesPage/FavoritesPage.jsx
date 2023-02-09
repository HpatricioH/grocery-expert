import { Container, IconButton, ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useEffect, useState } from 'react'
import { supabase } from '../../utilities/supabaseClient'
import { ModalRecipes } from '../ModalRecipes/ModalRecipes'
import { useLocation } from 'react-router-dom'
import '../../styles/GlobalCssFavorites.css'

export const FavoritesPage = () => {
  const [open, setOpen] = useState(false)
  const [recipes, setRecipes] = useState(null)
  const [idRecipe, setIdRecipe] = useState(null)
  const [recipeDeleted, setRecipeDeleted] = useState(false)
  const location = useLocation()
  const storageKey = import.meta.env.VITE_LOCALSTORAGE
  const user = JSON.parse(window.localStorage.getItem(storageKey))

  const handleClose = () => setOpen(false)

  // filter the recipes array to find the recipe with the matching id, to show in the modal
  const handleOpen = (id) => {
    const singleRecipe = recipes?.filter((el) => el.idRecipe === id)
    setIdRecipe(singleRecipe[0].idRecipe)
    setOpen(true)
  }

  const handleClick = async (item) => {
    setRecipeDeleted(false)
    const { error } = await supabase.from('favorites').delete().eq('id', item.id)
    if (!error) {
      // eslint-disable-next-line no-undef
      alert(`${item.name} was removed from favorites`)
      setRecipeDeleted(true)
    }
  }

  useEffect(() => {
    const getFavoritesRecipes = async () => {
      const { data } = await supabase.from('favorites').select('idRecipe, name, image, id').eq('user_id', user.user.id)
      setRecipes(data)
    }
    getFavoritesRecipes()
  }, [recipeDeleted])

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
              onClick={() => handleOpen(item.idRecipe)}
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
            <ModalRecipes open={open} handleClose={handleClose} id={idRecipe} pathName={location.pathname} />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  )
}
