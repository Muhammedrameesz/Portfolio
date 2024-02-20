import { Container, Stack, Typography, } from '@mui/material'
import React, { useState } from 'react'
import Image from '../images/img 2.jpeg';
import styled from 'styled-components';
import javaS from '../Assets/javascript.ico'
import reacticon from '../Assets/react.ico'
import mongodb from '../Assets/mongodb.ico'
import nodejs from '../Assets/nodejs.ico'
import express from '../Assets/icons8-express-js-64.png'
import html from '../Assets/html.ico'
import css from '../Assets/css.ico'
import bootstrap from '../Assets/bootstrap.ico'
import mui from '../Assets/reactmet.ico'
import java from '../Assets/java.ico'
import c from '../Assets/c.ico'
import git from '../Assets/github.ico'
import Footer from '../components/footer';
import AIimage from '../images/manwithai.jpg'

export default function Home() {
  // 1st 
  const hov = () => {
    // document.getElementById('re').style.border = "1px solid #fff";
    document.getElementById('re').style.scale = "1.5";
  };

  const non = () => {
    // document.getElementById('re').style.border = "none";
    document.getElementById('re').style.scale = "none"
  }
  // 2nd 
  const jav = () => {
    document.getElementById('ja').style.scale = "1.5";
  };
  const javno = () => {
    document.getElementById('ja').style.scale = "none";
  };
  //  3rd 
  const mong = () => {
    document.getElementById('mong').style.scale = "1.5";
  }
  const mongn = () => {
    document.getElementById('mong').style.scale = "none";
  };
  //  4th 
  const node = () => {
    document.getElementById('node').style.scale = "1.5";
  };
  const nodeno = () => {
    document.getElementById('node').style.scale = "none";
  };
  // 5th 
  const exp = () => {
    document.getElementById('exp').style.scale = "1.5";
  };
  const expno = () => {
    document.getElementById('exp').style.scale = "none";
  };
  // 6th 
  const ht = () => {
    document.getElementById('ht').style.scale = "1.5";
  };
  const htno = () => {
    document.getElementById('ht').style.scale = "none";
  };
  //  7th 
  const cs = () => {
    document.getElementById('cs').style.scale = "1.5";
  };
  const csno = () => {
    document.getElementById('cs').style.scale = "none";
  };
  // 8th 
  const boot = () => {
    document.getElementById('boot').style.scale = "1.5";
  }
  const bootno = () => {
    document.getElementById('boot').style.scale = "none";
  };
  // 9th 
  const muio = () => {
    document.getElementById('mui').style.scale = "1.5";
  };
  const muino = () => {
    document.getElementById('mui').style.scale = "none";
  };
  // 10th 
  const javao = () => {
    document.getElementById('java').style.scale = "1.5";
  }
  const javano = () => {
    document.getElementById('java').style.scale = "none";
  };
  // 11th 
  const co = () => {
    document.getElementById('c').style.scale = "1.5";
  };
  const cno = () => {
    document.getElementById('c').style.scale = "none";
  };
  // 12th 
  const gito = () => {
    document.getElementById('git').style.scale = "1.5";
  }
  const gitno = () => {
    document.getElementById('git').style.scale = "none";
  };

  const changeStyle = () => {
    hov();
  }
  const changeLast = () => {
    non();
  };
 
  const Change=() => {
    document.getElementById('new').style.transform="none ";
    document.getElementById('new').style.opacity="1";
  }
  const Again=() => {
    document.getElementById('new').style.transform="perspective(800px) rotateY(25deg)";
    document.getElementById('new').style.opacity="0.5";
  }
  return (
    <>

    
      <Container
      grid={{
        xs: 1,
        sm: 2,
        md: 3,
        lg: 2,
        xl: 2,
      }}
      
      >
        <Stack direction={"row"} sx={{}}>
          
            <img xs={4} sm={3} md={2} lg={1} id='new' src={Image} onMouseEnter={Change} onMouseLeave={Again} alt="Me 3" style={{
              width: '500px',
              height: '300px',
              borderRadius: '10px',
              margin: 'auto',
              marginTop: '80px',
              transform: 'perspective(800px) rotateY(25deg)',
              transition: 'all 1s ease',
              opacity: 0.5,
             
            }} />
        
          <Typography sx={{
            paddingLeft: '10%',
            paddingTop: '100px',
            paddingRight: '10%',
            fontWeight: 'bold',
            fontSize: '20px',
            fontFamily: 'Courier New',

          }}>
            "Hello, I'm Muhammed Ramees Khan T.A, a passionate full-stack web developer in pursuit of
            mastering the art of crafting immersive digital experiences. With a strong foundation in both
            front-end and back-end technologies, I thrive on turning ideas into dynamic, user-friendly web
            applications. Currently honing my skills through hands-on projects and continuous learning, I am
            driven by a relentless curiosity to explore new technologies and frameworks to deliver innovative
            solutions."
          </Typography>
        </Stack> <br /> <br />
        <Line />
      </Container>

      <Container>

        <Stack direction={'colum'} sx={{ marginLeft: '10px', }}>
          <h1 ><ins>Skills</ins></h1>

          <svg style={{
            width: '50px',
            height: '50px',
            // position: 'absolute',
            // boxSizing: 'border-box',
            border: '0 solid #e0e1e6',
            marginLeft: '20px',
            marginTop: '10px',
            // display: 'inline-block',
            // borderRadius: '50%',
            // overflow: 'hidden',
            // verticalAlign:'middle', 
            // transition: 'all 0.3s ease-in-out',
            // transform: 'translateZ(0)',

          }}
            viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M25.0176 11.2075C25.1051 9.99495 25.5056 8.82578 26.1799 7.81417C26.8541 6.80255 27.7792 5.98305 28.8647 5.43566C29.9503 4.88827 31.1592 4.6317 32.3735 4.69098C33.5878 4.75027 34.7659 5.1234 35.793 5.77393C35.9104 5.85076 36.005 5.9578 36.0667 6.0838C36.1285 6.2098 36.1552 6.3501 36.144 6.48998C36.1328 6.62986 36.0841 6.76414 36.0031 6.87872C35.9221 6.99329 35.8117 7.08394 35.6836 7.14112C33.8982 7.94438 32.3827 9.24599 31.319 10.8896C30.2554 12.5332 29.6889 14.449 29.6875 16.4067C29.6875 16.6353 29.6875 16.8638 29.7109 17.0884C29.7217 17.2304 29.6935 17.3726 29.6293 17.4997C29.5651 17.6267 29.4674 17.7339 29.3468 17.8095C29.2261 17.8851 29.0871 17.9263 28.9448 17.9286C28.8024 17.931 28.6621 17.8944 28.5391 17.8228C27.388 17.1644 26.4466 16.1939 25.8235 15.0234C25.2004 13.8529 24.921 12.53 25.0176 11.2075ZM46.875 31.3696C46.8778 32.2625 46.6304 33.1382 46.161 33.8977C45.6915 34.6571 45.0187 35.2699 44.2187 35.6665L44.1328 35.7056L36.5488 38.936C36.4739 38.9691 36.3961 38.9952 36.3164 39.0142L23.8164 42.1392C23.6926 42.171 23.5653 42.1874 23.4375 42.188H3.125C2.2962 42.188 1.50134 41.8588 0.915291 41.2727C0.32924 40.6867 0 39.8918 0 39.063V31.2505C0 30.4217 0.32924 29.6268 0.915291 29.0408C1.50134 28.4547 2.2962 28.1255 3.125 28.1255H8.72852L13.1465 23.7056C13.7258 23.1237 14.4147 22.6623 15.1733 22.3482C15.9319 22.0341 16.7453 21.8734 17.5664 21.8755H27.3438C28.1691 21.8754 28.9837 22.0621 29.7266 22.4217C30.4696 22.7812 31.1215 23.3042 31.6335 23.9515C32.1455 24.5988 32.5044 25.3536 32.6832 26.1594C32.862 26.9651 32.8561 27.8009 32.666 28.604L40.8379 26.7251C41.5493 26.5367 42.2945 26.5142 43.0159 26.6593C43.7374 26.8044 44.416 27.1132 44.9993 27.5619C45.5825 28.0106 46.055 28.5873 46.3802 29.2475C46.7054 29.9077 46.8747 30.6337 46.875 31.3696ZM43.75 31.3696C43.7498 31.1113 43.69 30.8565 43.5753 30.6249C43.4607 30.3934 43.2942 30.1914 43.0889 30.0347C42.8836 29.8779 42.6449 29.7705 42.3913 29.7209C42.1378 29.6713 41.8762 29.6807 41.627 29.7485L41.5664 29.7642L28.4805 32.7739C28.3657 32.7996 28.2485 32.8127 28.1309 32.813H21.875C21.4606 32.813 21.0632 32.6484 20.7701 32.3553C20.4771 32.0623 20.3125 31.6649 20.3125 31.2505C20.3125 30.8361 20.4771 30.4387 20.7701 30.1456C21.0632 29.8526 21.4606 29.688 21.875 29.688H27.3438C27.9654 29.688 28.5615 29.4411 29.001 29.0015C29.4406 28.562 29.6875 27.9658 29.6875 27.3442C29.6875 26.7226 29.4406 26.1265 29.001 25.687C28.5615 25.2474 27.9654 25.0005 27.3438 25.0005H17.5664C17.1559 24.9992 16.7492 25.0795 16.37 25.2367C15.9907 25.394 15.6466 25.6251 15.3574 25.9165L10.9375 30.3345V39.063H23.2422L35.4355 36.0142L42.8574 32.854C43.1276 32.7117 43.3536 32.4981 43.5109 32.2364C43.6683 31.9747 43.751 31.675 43.75 31.3696ZM32.8125 16.4067C32.8125 17.7974 33.2249 19.1568 33.9975 20.3131C34.7701 21.4694 35.8682 22.3706 37.153 22.9028C38.4378 23.435 39.8516 23.5742 41.2155 23.3029C42.5794 23.0316 43.8323 22.3619 44.8156 21.3786C45.7989 20.3952 46.4686 19.1424 46.7399 17.7785C47.0112 16.4145 46.872 15.0008 46.3398 13.716C45.8076 12.4312 44.9064 11.3331 43.7501 10.5605C42.5938 9.78787 41.2344 9.37549 39.8438 9.37549C37.9789 9.37549 36.1905 10.1163 34.8719 11.4349C33.5533 12.7535 32.8125 14.5419 32.8125 16.4067Z" fill="#8695FA"></path></svg>

        </Stack>

        <Box>

          <Stack xs={4} sm={3} md={2} lg={1} direction={'colum'} sx={{

          }} >
            <Button onMouseEnter={changeStyle} onMouseLeave={changeLast} >REACT</Button>
            <Button onMouseEnter={jav} onMouseLeave={javno}>JavaScript</Button>
            <Button onMouseEnter={mong} onMouseLeave={mongn} >MongoDB</Button>
            <Button onMouseEnter={node} onMouseLeave={nodeno}>Node JS</Button>
            <Button onMouseEnter={exp} onMouseLeave={expno}>Express</Button>
            <Button onMouseEnter={ht} onMouseLeave={htno}>HTML</Button>
            <Button onMouseEnter={cs} onMouseLeave={csno}>CSS</Button>
            <Button onMouseEnter={boot} onMouseLeave={bootno}>BootStrap</Button>
            <Button onMouseEnter={muio} onMouseLeave={muino}>Meterial UI</Button>
            <Button onMouseEnter={javao} onMouseLeave={javano}>Java</Button>
            <Button onMouseEnter={co} onMouseLeave={cno}>C language</Button>
            <Button onMouseEnter={gito} onMouseLeave={gitno}>GitHub</Button>
          </Stack>



          <Stack direction={'colum'} sx={{
            width: '50px',
            height: '50px',
            margin: '25px',
            backgroundColor: 'black'
          }}>

            <img id='re' src={reacticon} alt="svg" />
            <img id='ja' style={{ marginLeft: 50, }} src={javaS} alt="svg" />
            <img id='mong' style={{ marginLeft: 50 }} src={mongodb} alt="svg" />
            <img id='node' style={{ marginLeft: 50 }} src={nodejs} alt="svg" />
            <img id='exp' style={{ marginLeft: 50 }} src={express} alt="svg" />
            <img id='ht' style={{ marginLeft: 40 }} src={html} alt="svg" />
            <img id='cs' style={{ marginLeft: 50 }} src={css} alt="svg" />
            <img id='boot' style={{ marginLeft: 50 }} src={bootstrap} alt="svg" />
            <img id='mui' style={{ marginLeft: 50 }} src={mui} alt="svg" />
            <img id='java' style={{ marginLeft: 50 }} src={java} alt="svg" />
            <img id='c' style={{ marginLeft: 50 }} src={c} alt="svg" />
            <img id='git' style={{ marginLeft: 40 }} src={git} alt="svg" />
          </Stack>


        </Box>
        <Line />
      </Container>



      <Container>

        <Stack direction={'row'} sx={{}}>
          <Typography sx={{
            fontWeight: 'bold',
            fontSize: '20px',
            fontFamily: 'Courier New',
            width: '60%',
            marginTop: '50px'
          }}>
            My journey as a passionate Full Stack Web Developer is not merely defined
            by technical proficiency, but by a deep-seated commitment to harnessing the power of technology to
            drive positive change With an unwavering belief in the transformative potential of web development.
            I approaches each project with a sense of purpose and determination. My relentless pursuit of
            innovation and my ability to adapt to new technologies with ease reflect a mindset fueled by
            curiosity and a relentless pursuit of excellence.
          </Typography>
          <img src={AIimage} alt="img" style={{
            width: '300px',
            height: '300px',
            objectFit: 'cover',
            borderRadius: '15px',
            margin: 'auto',
            marginTop: '40px',
            marginLeft: '80px',
          }} />

        </Stack>
        <Line />
      </Container>



      <Footer />

    </>
  )
}
// styled components 

const Button = styled.button`
    
     float: left;
     display: flex;
    margin-left: 15px;
    cursor: pointer;
    background-color:black;
   border:none;
   color: green;
   border-radius: 50px;
   font-size: medium;
   font-weight: 100;
   margin-top: 10px;
  

    
   
`

const Box = styled.div`
  border: 4px solid black;
  width: auto;
  height: auto;
  border-radius: 50px;
`
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: #b3a9a9;
  margin-top: 20px;
  margin-bottom: 20px;

`
