import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const TestComponent = () => {
  return (
    <div>
        
        <Box>
            <AppBar>
                <Toolbar> 
                <Typography variant='h6' sx={{flexGrow: 1}} align='left'>react intern</Typography>

                <Button color='inherit'><Link to ={'/form'} style={{textDecoration:'none',color:'white'}}> form</Link></Button>
                <Button color='inherit'><Link to ={'/view'} style={{textDecoration:'none',color:'white'}}> Employee Dashboard</Link></Button>


                
                </Toolbar>
            </AppBar>
        </Box>



    </div>
  )
}

export default TestComponent