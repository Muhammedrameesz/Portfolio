
import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { Box, Button, Container, Stack, Typography } from '@mui/material'
import Headroom from 'react-headroom'
import imgg from '../images/html-system-website-concept (1).jpg'
export default function Nav() {
    return (

       <Headroom 
        grid={{
        xs: 1,
        sm: 2,
        md: 3,
        lg: 4,
        xl: 5,
      }}
        >
        <Box 
         grid={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 5,
          }}
         sx={{
            maxWidth: '100%',
            // background: 'linear-gradient(320deg, purple, #da7c7c,purple)',
           backgroundImage:'url(https://img.freepik.com/premium-photo/violet-wall-texture-background_87394-34502.jpg?size=626&ext=jpg&uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais)',
            backgroundRepeat:'no-repeat',
            backgroundPosition:'center',
            backgroundSize:'cover',
            overflow: 'hidden',
            position:'sticky',
            top: 0,
           
            
        }} >
            <Container
             grid={{
                xs: 1,
                sm: 2,
                md: 3,
                lg: 4,
                xl: 5,
              }}
             sx={{}}>
                <Stack
                 grid={{
                    xs: 1,
                    sm: 2,
                    md: 3,
                    lg: 4,
                    xl: 5,
                  }}
                 direction={'row'} sx={{
                    align: 'center',
                }}>
                    <Typography> <h1 style={{ color: '#fff', paddiginTop: '100px' }}>Muhammed Ramees</h1></Typography>
                </Stack>

                <Stack direction={'row'} sx={{
                    paddingLeft: '700px',
                    marginTop: '-60px',
                    align: 'center',
                    justifyContent:'space-between',
                    
                      
                }}>
                    
                        <Link to={"/"}><Button sx={{
                        ':hover':{textDecoration:'underline 3px solid #020202',marginTop:'-3px'}}}> <b> Home</b> </Button></Link>
                        <Link to={"/myworks"}><Button sx={{':hover':{textDecoration:'underline 3px solid #020202',marginTop:'-3px'}}} color='secondary'  size="large"> <b>My-Works</b></Button></Link>
                        <Link to={"/about"}><Button sx={{':hover':{textDecoration:'underline 3px solid #020202',marginTop:'-3px'}}} color='secondary'  size="large"> <b>About</b></Button></Link>
                        <Link to={"/contact"}><Button sx={{':hover':{textDecoration:'underline 3px solid #020202',marginTop:'-3px'}}}  color='secondary' ><b> Contact</b></Button></Link>
                        <Link to={"/resume"}> <Button sx={{':hover':{textDecoration:'underline 3px solid #020202',marginTop:'-3px'}}} color='secondary'> <b> Resume</b></Button></Link>
                      
                       
                    

                </Stack>
            </Container>
        </Box>
        </Headroom>

    )
}




