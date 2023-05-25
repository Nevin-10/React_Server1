import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'
import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div >
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" style={{background:"lightgreen"}}>
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>ReactServer</Typography>
                    <Button variant="contained" color="warning" ><Link to = {'/'} style = {{textDecoration:"none",color:"white"}}>STUDENT</Link></Button>
                    <Button variant="contained" color="secondary"><Link to = {'/Add'} style = {{textDecoration:"none",color:"white"}}>ADD</Link></Button>
                </Toolbar>

            </AppBar>
      
        </Box>
    </div>
  )
}

export default NavBar