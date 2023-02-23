import { Box, Container, Modal, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useSingleRecipe } from '../../hooks/useSingleRecipe'
import { getSingleRecipe } from '../../services/getSingleRecipe'
import headingFont from '../../styles/fontTheme'
import Buttons from '../../utilities/Buttons'
import { RecipeIngredients } from '../RecipeIngredients/RecipeIngredients'

const style = {
  position: 'relative',
  zIndex: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: 'auto'
}

const modalWrapper = {
  overflow: 'auto',
  maxHeight: '100vh',
  display: 'flex'
}

const modalContentStyle = {
  position: 'relative',
  background: '#fff',
  boxShadow: 24,
  width: '80%',
  padding: '1rem 1rem'

}

export const ModalRecipes = ({ open, handleClose, id }) => {
  const { recipe, setRecipe } = useSingleRecipe(open, id)

  const handleClickClose = () => {
    handleClose()
    setRecipe(null)
  }

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-title'
      aria-describedby='modal-description'
      sx={modalWrapper}
    >
      <Box sx={style}>
        {recipe?.map((item) => {
          return (
            <Container sx={modalContentStyle} key={item?.idMeal}>
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
              <Box sx={{ display: 'flex', justifyContent: 'center', padding: '1rem' }}>
                <img src={item.strMealThumb} alt={item.strMeal} style={{ width: '12rem' }} />
              </Box>
              <Typography>
                {item.strInstructions}
              </Typography>

              <Typography
                id='modal-title'
                padding='1rem 0 0'
                variant='h6'
                component='h3'
                fontFamily={headingFont.typography.fontFamily}
                fontSize='1.8rem'
                letterSpacing='0.1rem'
                color='#3D550C'
              >
                Ingredients
              </Typography>
              <RecipeIngredients recipe={item} />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                <Buttons
                  style={{ color: '#fff', margin: '1.5rem 0 0' }}
                  onClick={handleClickClose}
                >
                  Close
                </Buttons>
              </Box>
            </Container>

          )
        })}
      </Box>
    </Modal>
  )
}
