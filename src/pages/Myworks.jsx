import { Box, Container, Stack } from '@mui/material'
import React from 'react'
import cardActionAreaClasses from '@mui/material'
import ActionAreaCard from '../components/card'
import Footer from '../components/footer'
import styled from 'styled-components'

export default function Myworks() {
  return (
    <>
    <Container>
      <Box>
        <Stack>
        
   <ActionAreaCard/>
        
        </Stack>
      </Box>
    </Container>



    <Adjust/>
    <Footer/>
    
    
    </>
  )
}

const Adjust=styled.div`
  

  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  width: 100vw;
`