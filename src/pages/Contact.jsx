import React, { useState } from 'react'
import { Box, Button, Container, Stack, TextField, Typography } from '@mui/material'
import { Form, useForm } from 'react-hook-form'
import Footer from '../components/footer';
export default function Contact() {

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  
//  const [name,setName]=useState()
//   const handleClear=()=>{
//     setName('') ;
//   }
  

  return (
    <>
      <Container sx={{ align: 'center' }}>
        <Box  >
          <Stack direction={'row'}>
            <Stack sx={{ width: '50%' }} direction={'column'}>

              <Typography sx={{
                marginTop: '100px',
                fontFamily: 'Courier New',

              }} variant='h3'>Contact Me!</Typography>
              <Typography sx={{
                marginTop: '30px',
                fontFamily: 'Courier New',

              }} variant='h5'>Have any questions? Fill out the form and I’ll get you a response soon!</Typography>
              <Typography sx={{
                marginTop: '30px',
                fontFamily: 'Courier New',

              }} >
                Feel free to ask / inquire about anything about Full Stack Web Development(MERN). Hoping
                to be a resource and be of help in your journey in any way possible.
                <p>
                  Similarly, please use this form or email directly me if your message regards a NIL opportunity.
                </p>
                <p>
                  <a style={{ color: '#fff', }} href="https://mail.google.com/mail/">rameezta555@Gmail.com</a>
                </p>
              </Typography>

            </Stack>

            <form 
             
              onSubmit={handleSubmit((data) => console.log(data))} >
              <Stack spacing={2} sx={{
                display: 'flex',
                marginTop: '100px',
                // alignItems: 'center',
                justifyContent: 'center',
                width: '100%',
                marginLeft: '170px',

                objectFit: 'cover',
                borderRadius: '10px'
              }}>
                {/* <Typography sx={{color:'black'}} align='center' >
                  Keep in Touch!
                </Typography > */}

                <TextField
                
                  sx={{
                    input: { color: ('#fff') }, backgroundImage: 'url(https://img.freepik.com/free-photo/pile-colourful-abstract-paper-waves_23-2148319154.jpg?size=626&ext=jpg&uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais)'
                  }}
                  id="outlined-basic"
                  label="FullName"
                  variant="outlined"
                  // value={name}
                  // onChange={(e)=>setName(e.target.value)}
                  {...register('FullName', { required: true })} />
                {errors.FullName && <p style={{ color: "#fff", marginLeft: '20px' }}>Name is required.</p>}

                {/* Textfield 2  */}
                <TextField

                  sx={{ input: { color: ('#fff') }, backgroundImage: 'url(https://img.freepik.com/free-photo/pile-colourful-abstract-paper-waves_23-2148319154.jpg?size=626&ext=jpg&uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais)' }} id="outlined-basic" label="Email" variant="outlined" {...register('Email', { required: true })} />
                {errors.Email && <p style={{ color: "#fff", marginLeft: '20px' }}>Email is required.</p>}

                {/* Textfield 3  */}
                <TextField

                  sx={{ input: { color: ('#fff') }, backgroundImage: 'url(https://img.freepik.com/free-photo/pile-colourful-abstract-paper-waves_23-2148319154.jpg?size=626&ext=jpg&uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais)' }} id="outlined-basic" label="Password" variant="outlined" {...register('Password', { required: true })} />
                {errors.Password && <p style={{ color: "#fff", marginLeft: '20px' }}>password is required.</p>}

                {/* Textfield 4  */}
                <TextField sx={{ backgroundImage: 'url(https://img.freepik.com/free-vector/digital-technology-background-with-abstract-wave-border_53876-117508.jpg?size=626&ext=jpg&uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais)' }}
                  id="outlined-multiline-static"
                  label="Messege"
                  color="success"
                  multiline
                  rows={4}
                  {...register('Message', { required: true })}
                />
                {errors.Message && <p style={{ color: "#fff", margin: '15px' }}>Message is required.</p>}

              </Stack> <br />

              <Button 
                id='btn' type='submit'
                sx={{
                  marginLeft: 40,
                  fontWeight: "bold",
                  borderRadius: 2,
                  label: 'clear'
                }} variant='contained'> Send</Button>


            </form>
          </Stack>
        </Box>
      </Container>



      <Footer />



    </>
  )
}
