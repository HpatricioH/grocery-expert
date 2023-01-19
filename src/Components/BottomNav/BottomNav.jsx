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
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'
import { supabase } from '../../utilities/supabaseClient'

const settings = ['Profile', 'Logout']

const BottomNav = () => {
  const { handleLogOut, setUser } = useAuth()
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
    <Box sx={{ width: '100%', borderTop: '1px solid #3D550C' }} component='footer'>
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
        <BottomNavigationAction label='Groceries' icon={<ShoppingCartIcon />} />
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
