import { ImportExport } from '@mui/icons-material'
import { Box, Container, Modal, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import headingFont from '../../styles/fontTheme'
import Buttons from '../../utilities/Buttons'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4
}

export const ModalRecipes = ({ open, handleClose, id }) => {
  const [recipe, setRecipe] = useState(null)
  const URL = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

  const handleClickClose = () => {
    handleClose()
    setRecipe(null)
  }

  useEffect(() => {
    const fetchRecipe = async () => {
      const { data } = await axios.get(URL)
      setRecipe(data?.meals)
    }
    fetchRecipe()
  }, [open])

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
    >
      <Box sx={style}>
        {recipe?.map((item) => {
          return (
            <Container key={item.idMeals}>
              <Typography
                id='modal-title'
                variant='h6'
                component='h2'
                fontFamily={headingFont.typography.fontFamily}
                fontSize='1.8rem'
                letterSpacing='0.1rem'
                color='#3D550C'
              >
                {item.strMeal}
              </Typography>
              <img src={item.strMealThumb} alt={item.strMeal} style={{ width: '10rem' }} />
              <Typography>
                {item.strInstructions}
              </Typography>

              <Buttons
                style={{ color: '#fff', margin: '1.5rem 0 0' }}
                onClick={handleClickClose}
              >
                Close
              </Buttons>
            </Container>
          )
        })}
      </Box>
    </Modal>
  )
}
