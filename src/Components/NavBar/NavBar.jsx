import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'

import Container from '@mui/material/Container'

import { Link } from 'react-router-dom'
import './navBar.css'

const pages = ['Home', 'Pantry', 'Recipes']

export const NavBar = () => {
  const activePath = pages.map((page) => (window.location.pathname.includes(`${page.toLowerCase()}`)))

  return (
    <AppBar position='static' style={{ backgroundColor: '#fff' }}>

      <Container maxWidth='xl'>
        <Box sx={{ width: '100%' }}>
          <ul className='navbar__container'>
            {pages.map((page, i) => (
              <li key={i} className='navbar__element'>
                <Link to={`/${page.toLowerCase()}`} className='navbar__link'>
                  {`${page}`}
                </Link>
              </li>
            ))}
          </ul>
        </Box>
      </Container>

    </AppBar>
  )
}
