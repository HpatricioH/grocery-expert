import { Container, ImageList, ImageListItem, Typography } from '@mui/material'
import groceries from '../../assets/pictures/groceries.jpg'
import headingFont from '../../styles/fontTheme'

export const NoGroceries = () => {
  return (
    <Container sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <ImageList
        sx={{
          width: 344,
          height: 600,
          position: 'relative'
        }}
        cols={1}
        rowHeight={530}
      >
        <ImageListItem sx={{ objectFit: 'none ' }}>
          <img
            src={groceries}
            loading='lazy'
            alt='multiple groceries'
          />
        </ImageListItem>

        <Typography
          display='flex'
          justifyContent='center'
          alignContent='center'
          position='absolute'
          fontFamily={headingFont.typography.fontFamily}
          color='#fff'
          top='15rem'
          fontSize='2.8rem'
          textAlign='center'
          width='100%'
          backgroundColor='#333'
        >
          No Groceries List
        </Typography>
      </ImageList>
    </Container>
  )
}
