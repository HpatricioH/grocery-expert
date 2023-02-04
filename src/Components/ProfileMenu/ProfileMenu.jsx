import { Menu, MenuItem, Typography } from '@mui/material'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

const settings = ['Profile', 'Logout']

export const ProfileMenu = ({ anchorElUser, handleCloseUserMenu }) => {
  const { handleLogOut } = useAuth()
  const navigate = useNavigate()

  const logoutUser = () => {
    handleLogOut(navigate)
  }

  return (
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
          {setting === 'Profile'
            ? <Link to='/profile' className='menu__link'><Typography textAlign='center'>{setting}</Typography></Link>
            : <Typography textAlign='center'>{setting}</Typography>}
        </MenuItem>
      ))}
    </Menu>
  )
}
