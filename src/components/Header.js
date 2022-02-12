import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import {NavLink} from 'react-router-dom';
export const Header=({
  isLogin,
  setisLogin,
  userName})=> {
const handleLogaut=()=>{
  localStorage.setItem('islogin',false);
  setisLogin(false);
}

  return (

    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Блог
          </Typography>
          {
            isLogin ? 
            <>
          <Button >
         
            <nav>
            <NavLink 
            activeClassName="activeLink" 
            className="nav-link"
             exact to ={'*'}>Главная</NavLink>
            </nav>
            </Button>
            
     <Button>
     <nav>             
 <NavLink 
 onClick={handleLogaut}

 className="nav-link"
  exact to="/login">
    {localStorage.getItem('userName')}
    <LogoutOutlinedIcon/>
    Выход</NavLink>
  
 </nav>
  </Button>
  </>
            : 
            <>
            <NavLink activeClassName="activeLink"
             className="nav-link"
             exact to ="/">Главная</NavLink>
           
            <NavLink 
            onClick={handleLogaut}
           
            className="nav-link"
             exact to="/login">
               <LogoutOutlinedIcon/>
               Вход</NavLink>
          </>
           }
        </Toolbar>
      </AppBar>
    </Box>
  );
}