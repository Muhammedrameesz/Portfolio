import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { Box, Container, Stack } from '@mui/material';
import Footer from '../components/footer';
import Education from '../images/digital-blue-hud-interface-laptop-concept.jpg'
import { useState } from 'react';
import skills from '../images/computer-programmer-using-laptop.jpg'

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))
  (({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      // borderBottom: 0,
      marginBottom: theme.spacing(1),

    },
    '&::before': {
      display: 'none',
    },
  }));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary sx={{ color: '#fff', }}
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '1.1rem', color: '#fff' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? '#fff'
      : 'black',

  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(2),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(150, 20, 20, 0.125)',
  backgroundColor: 'purple',
  color: '#fff',
  fontFamily: 'Courier New',
}));

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };
  //  img change 


  const Educate = () => {
    document.getElementById('img').src = {};

  }
  const [imgSrc, setImgSrc] = useState('https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061967.jpg?size=626&ext=jpg&uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais');

  const skill = (e) => {
    setImgSrc('https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062010.jpg?size=626&ext=jpg')
    //  document.getElementById('img').alt='img';
  }
  const Educates = (e) => {
    setImgSrc('https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150061967.jpg?size=626&ext=jpg&uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais')
  }
  const hobs = (e) => {
    setImgSrc('https://img.freepik.com/premium-photo/back-view-unrecognizable-cyber-security-hacker-wearing-hood-while-working-programming-dark-room-copy-space_236854-23131.jpg?size=626&ext=jpg')
  }
  const Passd = (e) => {
    setImgSrc('https://img.freepik.com/free-photo/medium-shot-woman-wearing-vr-glasses_23-2150603847.jpg?size=626&ext=jpg&uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais')
  }
  const Exp = (e) => {
    setImgSrc('https://img.freepik.com/free-photo/html-css-collage-concept-with-person_23-2150062004.jpg?size=626&ext=jpg&uid=R121738979&ga=GA1.1.906489000.1700029812')
  }
  const Ys = (e) => {
    setImgSrc('https://img.freepik.com/premium-photo/mathematic-equations-modish-formula-computer-screen_31965-134428.jpg?size=626&ext=jpg&uid=R121738979&ga=GA1.1.906489000.1700029812&semt=ais')
  }

  return (
    <div>

      <Container sx={{
        marginTop: '50px',

      }}>
        <Box>
          <Typography variant="h4" sx={{
            mb: 3,
            fontWeight: 'bold',
            fontSize: '2rem',
            color: 'green',
            fontFamily: 'Courier New',
          }}>
            <ins>About Me</ins>
          </Typography>


          <Stack direction={'row'} sx={{
            width: '100%',
            display: 'flex',

          }}>

            <div style={{ width: "600px", marginRight: '150px' }}>
              <Accordion onClick={Educates} expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                <AccordionSummary aria-controls="panel1d-content" id="panel1d-header">
                  <Typography sx={{ fontFamily: 'Courier New', }}>Education Qualification</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ fontFamily: 'Courier New', }}>
                    <ul>
                     
                      <li>MERN Stack(Entry Elovate) </li>
                      <li>100 days coding Challenge(BrotoType)</li>
                      <li>BA Travel & Tourism</li>

                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion onClick={skill} expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                <AccordionSummary aria-controls="panel2d-content" id="panel2d-header">
                  <Typography sx={{ fontFamily: 'Courier New', }}>Skills</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ fontFamily: 'Courier New', }}>
                    <ul>

                      <li>React</li>
                      <li>JavaScript</li>
                      <li>HTML</li>
                      <li>CSS</li>
                      <li>Bootstrap</li>
                      <li>Java</li>
                      <li>C Language</li>
                      <li>Meterial UI</li>
                      <li>Node.js</li>
                      <li>Express.js</li>
                      <li>MongoDB</li>
                      <li>GitHub</li>

                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion onClick={Exp} expanded={expanded === 'panel5'} onChange={handleChange('panel5')}>
                <AccordionSummary aria-controls="panel5d-content" id="panel5d-header">
                  <Typography sx={{ fontFamily: 'Courier New', }}>Experience</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ fontFamily: 'Courier New', }}>
                    Looking for an Internshiip in the field of Web Development.
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion onClick={hobs} expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                <AccordionSummary aria-controls="panel3d-content" id="panel3d-header">
                  <Typography sx={{ fontFamily: 'Courier New', }}>Hobbies</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ fontFamily: 'Courier New', }}>
                    <ul>
                      <li>Coding</li>
                      <li>Reading</li>
                      <li>Learning New Things</li>
                      <li>Travelling</li>
                      <li>Watching Movies</li>
                      <li>Music</li>
                      <li>Badminton</li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>

              <Accordion onClick={Passd} expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                <AccordionSummary aria-controls="panel4d-content" id="panel4d-header">
                  <Typography sx={{ fontFamily: 'Courier New', }}>Passion</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ fontFamily: 'Courier New', }}>
                    <ul>
                      <li>
                      As a dedicated full stack web developer with a fervent ambition to integrate cutting-edge
                      AI technologies into my work, I am driven by the endless possibilities that lie ahead.</li>
                      <li>
                       My dream of becoming proficient in AI usage fuels my passion to continuously refine and elevate
                      my development skills. </li>
                      <li>
                      I aspire to leverage AI tools to enhance efficiency and innovation in
                      web development, propelling myself and my projects towards a future of limitless potential.</li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>



              <Accordion onClick={Ys} expanded={expanded === 'panel6'} onChange={handleChange('panel6')}>
                <AccordionSummary aria-controls="panel6d-content" id="panel6d-header">
                  <Typography sx={{ fontFamily: 'Courier New', }}>Career Goals & Achievements</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography sx={{ fontFamily: 'Courier New', }}>
                    <ul>
                   <li>Accomplished 100k Coding Challenge </li>
                   <li>Kerala Tourism Website</li>
                   <li>Face Book Pages</li>
                   <li>Chess Board</li>
                   <li>Counter App</li>
                   <li>Bulb Project</li>
                   <li>Other light weight projects etc....</li>
                    </ul>
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>

            <div>
              <img id='img' style={{
                width: '400px',
                height: '300px',
                // marginLeft:'40px',
                // paddingLeft:'100px',
                marginTop: '20px',
              }} src={imgSrc} alt='img' />
            </div>
          </Stack>
        </Box>
      </Container>

      <Footer />

    </div>
  );
}
