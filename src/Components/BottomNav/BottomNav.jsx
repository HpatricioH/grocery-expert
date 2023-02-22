import { Box, BottomNavigation, BottomNavigationAction, Badge } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useGroceries } from '../../hooks/useGroceries'
import { ProfileMenu } from '../ProfileMenu/ProfileMenu'
import './bottomNav.css'

const BottomNav = () => {
  const { groceriesCount } = useGroceries()
  const [value, setValue] = useState()
  const [anchorElUser, setAnchorElUser] = useState(null)

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <Box
      sx={{
        width: '100%',
        borderTop: '1px solid #3D550C',
        padding: '1rem 0 0',
        position: 'fixed',
        bottom: 0,
        backgroundColor: '#fff'
      }}
      component='footer'
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(newValue) => {
          setValue(newValue)
        }}
        sx={{
          '&.MuiBottomNavigationAction-root, .Mui-selected': {
            color: '#3D550C',
            svg: {
              color: '#3D550C'
            }
          }
        }}
      >

        <BottomNavigationAction
          label='Groceries'
          icon={
            <Link
              to='/groceries'
              style={{ color: 'inherit' }}
            >
              <Badge badgeContent={groceriesCount} color='success' showZero>
                <ShoppingCartIcon />
              </Badge>
            </Link>
         }
        />
        <BottomNavigationAction
          label='Favorites'
          icon={
            <Link
              to='/favorites'
              style={{ color: 'inherit' }}
            >
              <FavoriteIcon />
            </Link>
          }
        />

        <BottomNavigationAction
          label='Profile'
          icon={<PersonIcon />}
          onClick={handleOpenUserMenu}
        />
      </BottomNavigation>

      <ProfileMenu
        anchorElUser={anchorElUser}
        handleCloseUserMenu={handleCloseUserMenu}
      />
    </Box>
  )
}

export default BottomNav
