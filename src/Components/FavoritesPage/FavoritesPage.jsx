import { Container, ImageList, ImageListItem, ImageListItemBar } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { useEffect, useState } from 'react'
import { supabase } from '../../utilities/supabaseClient'
import { ModalRecipes } from '../ModalRecipes/ModalRecipes'

export const FavoritesPage = () => {
  const [open, setOpen] = useState(false)
  const [recipes, setRecipes] = useState(null)
  const [idRecipe, setIdRecipe] = useState(null)

  const handleClose = () => setOpen(false)

  // filter the recipes array to find the recipe with the matching id, to show in the modal
  const handleOpen = (id) => {
    const singleRecipe = recipes?.filter((el) => el.idRecipe === id)
    setIdRecipe(singleRecipe[0].idRecipe)
    setOpen(true)
  }

  const handleClick = async (item) => {
    const { error } = await supabase.from('favorites').delete().eq('id', item.id)
    if (!error) {
      // eslint-disable-next-line no-undef
      alert(`${item.name} was removed from favorites`)
    }
  }

  useEffect(() => {
    const getFavoritesRecipes = async () => {
      const { data } = await supabase.from('favorites').select('idRecipe, name, image, id')
      setRecipes(data)
    }
    getFavoritesRecipes()
  }, [recipes])

  return (
    <Container component='section'>
      <ImageList sx={{ width: 400, height: '100%' }}>
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
              sx={{ textAlign: 'center' }}
            />
            <DeleteIcon
              sx={{ position: 'absolute', right: '0.5rem', top: '0.5rem', color: 'rgba(255, 55, 55)', cursor: 'pointer' }}
              onClick={() => handleClick(item)}
            />
            <ModalRecipes open={open} handleClose={handleClose} id={idRecipe} />
          </ImageListItem>
        ))}
      </ImageList>
    </Container>
  )
}
