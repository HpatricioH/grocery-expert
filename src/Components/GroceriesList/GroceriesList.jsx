import { Box, Container, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import headingFont from '../../styles/fontTheme'
import { LoadingSpinner } from '../../utilities/LoadingSpinner'
import { supabase } from '../../utilities/supabaseClient'
import { GroceriesCard } from '../GroceriesCard/GroceriesCard'
import { NoGroceries } from '../NoGroceries/NoGroceries'
import EditIcon from '@mui/icons-material/Edit'
import ModalUpdate from '../ModalUpdate/ModalUpdate'
import { useGroceries } from '../../hooks/useGroceries'

export const GroceriesList = () => {
  const [list, setList] = useState(null)
  const [loading, setLoading] = useState(false)
  const [noGroceries, setNoGroceries] = useState(false)
  const [open, setOpen] = useState(false)
  const [singleProduct, setSingleProduct] = useState(null)
  const { setProductCount } = useGroceries()
  const countGroceries = list?.length

  // update groceries badge in bottom navbar
  if (countGroceries) {
    setProductCount(countGroceries)
  } else {
    setProductCount(0)
  }

  // manage close and open modal
  const handleClose = () => {
    setList(null)
    setOpen(false)
  }

  const handleOpen = (id) => {
    const oneProduct = list.filter((el) => el?.id === id)
    setSingleProduct(oneProduct)
    setOpen(true)
  }

  // get groceries only with quantity 0 and display
  const getGroceriesList = async () => {
    try {
      setLoading(true)
      const { data } = await supabase.from('groceries').select().eq('quantity', '0')
      !data?.length ? setNoGroceries(true) : setList(data)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getGroceriesList()
  }, [])

  return (
    <Container component='section'>
      <Typography
        variant='h4'
        component='h1'
        textAlign='center'
        fontFamily={headingFont.typography.fontFamily}
        fontWeight='semi-bold'
        fontSize='4rem'
        letterSpacing='0.2rem'
        color='#3D550C'
        padding='1.5rem 0 0'
      >
        Groceries List
      </Typography>

      {loading
        ? <LoadingSpinner />

        : list?.map((product) => {
          return (
            <Box
              key={product?.id} style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: '1rem 0',
                borderBottom: '1px solid #3D550C'
              }}
            >
              <GroceriesCard
                name={product?.name}
                quantity={product?.quantity}
                image={product?.image}
              />
              <EditIcon color='primary' style={{ placeSelf: 'center' }} onClick={() => handleOpen(product?.id)} />
              <ModalUpdate
                handleClose={handleClose}
                open={open}
                grocery={singleProduct?.[0]}
                getGroceries={getGroceriesList}
              />
            </Box>
          )
        })}
      {noGroceries && !loading ? <NoGroceries /> : null}

    </Container>
  )
}
