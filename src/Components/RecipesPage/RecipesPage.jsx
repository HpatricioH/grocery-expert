import { useEffect, useState } from 'react'
import { supabase } from '../../utilities/supabaseClient'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import ImageListItemBar from '@mui/material/ImageListItemBar'
import { Container } from '@mui/material'
import { Link } from 'react-router-dom'

export default function RecipesPage () {
  const [pantryProducts, setPantryProducts] = useState(null)

  const getPantryGroceries = async () => {
    const { data } = await supabase.from('groceries').select()
    const filteredGroceries = data?.filter((el) => el.quantity > 0)
    setPantryProducts(filteredGroceries)
  }

  useEffect(() => { getPantryGroceries() }, [])

  return (
    <Container component='section'>
      <ImageList sx={{ width: 400, height: '100%' }}>
        <ImageListItem key='Subheader' cols={2} />
        {pantryProducts?.map((item) => (
          <Link to={`/recipes/${item.id}`} key={item.id}>
            <ImageListItem>
              <img
                src={`${item.image}?w=248&fit=crop&auto=format`}
                alt={item.name}
                loading='lazy'
              />
              <ImageListItemBar
                title={item.name}
                sx={{ textAlign: 'center' }}
              />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </Container>
  )
}
