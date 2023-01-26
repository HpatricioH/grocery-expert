import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import FavoriteIcon from '@mui/icons-material/Favorite'
import PersonIcon from '@mui/icons-material/Person'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { supabase } from '../../utilities/supabaseClient'
import { useGroceries } from '../../hooks/useGroceries'
import { Badge } from '@mui/material'

const settings = ['Profile', 'Logout']

const BottomNav = () => {
  const { handleLogOut, setUser } = useAuth()
  const { productCount } = useGroceries()
  const [value, setValue] = useState()
  const [anchorElUser, setAnchorElUser] = useState(null)
  const navigate = useNavigate()

  const logoutUser = () => {
    handleLogOut(navigate)
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  // getUser session information and store it in context
  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    getUser()
  }, [])

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
        onChange={(event, newValue) => {
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
              <Badge badgeContent={productCount} color='success' showZero>
                <ShoppingCartIcon />
              </Badge>
            </Link>
          }
        />
        <BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
        <BottomNavigationAction label='Profile' icon={<PersonIcon />} onClick={handleOpenUserMenu} />
        <Menu
          sx={{ mt: '-35px' }}
          id='menu-appbar'
          anchorEl={anchorElUser}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          keepMounted
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right'
          }}
          open={Boolean(anchorElUser)}
          onClose={handleCloseUserMenu}
        >
          {settings.map((setting, index) => (
            <MenuItem
              key={index}
              onClick={setting === 'Logout'
                ? logoutUser
                : handleCloseUserMenu}
            >
              <Typography textAlign='center'>{setting}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </BottomNavigation>
    </Box>
  )
}

export default BottomNav
