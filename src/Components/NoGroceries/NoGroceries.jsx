import { ImageList, ImageListItem, Typography } from '@mui/material'
import groceries from '../../../public/groceries.jpg'
import headingFont from '../../styles/fontTheme'

export const NoGroceries = () => {
  return (
    <>
      <ImageList
        sx={{
          width: 395,
          height: 595,
          position: 'relative'
        }}
        cols={1}
        rowHeight={500}
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
          fontSize='3.5rem'
          textAlign='center'
          width='100%'
          backgroundColor='#333'
        >
          No Groceries List
        </Typography>
      </ImageList>
    </>
  )
}
