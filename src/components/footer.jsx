import { Stack } from '@mui/material';
import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import { FaInstagramSquare } from "react-icons/fa";
import styled from 'styled-components';
function Footer() {
  const Gmail = () => { window.location.href = "https://mail.google.com/mail/" }
  const Linkidin =()=>{ window.location.href ="https://in.linkedin.com/"}
  const Twitter =()=>{ window.location.href ="https://twitter.com/?lang=en"}
  const Insta =()=>{ window.location.href ="https://www.instagram.com/"}
  const Github =()=>{ window.location.href ="https://github.com/"}


  return (
    <Card style={{
      marginTop: '50px',
      width: '100%',
      height: 'fit',
      border: '1px solid #8d8888',
      color: 'white',
      textAlign: 'center',

    }} className="text-center">
      <Card.Header style={{
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#272525',
        fontSize: '15px',
        fontWeight: 'bold',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderBottom: '1px solid #8d8888',
      }}></Card.Header>

      <Card.Body style={{
        backgroundColor: 'black',
        height: '100px',
        textAlign: 'center',


      }} >
        <Stack direction={'row'} sx={{
          align: 'center',
          justifyItems: 'space-between',
          padding: '30px',
          paddingLeft: '500px',

        }}>

          <img onClick={Gmail} src="https://img.icons8.com/?size=48&id=ho8QlOYvMuG3&format=png" alt="G-mail" />
          <img onClick={Linkidin} style={{ 
            marginLeft: 10, 
           
            ':hover': {
              cursor:'pointer',
              transition:'all 0.1s ',
              transform:'translatey(-10px)',
            } 
          }}
            src="https://img.icons8.com/?size=48&id=13930&format=png" alt="Linkidn" />
          <img onClick={Twitter} style={{ marginLeft: 10 }} src="https://img.icons8.com/?size=48&id=ClbD5JTFM7FA&format=png" alt="TwitterX" />
          <img onClick={Insta} style={{ marginLeft: 10 }} src="https://img.icons8.com/?size=48&id=32323&format=png" alt="Instagram" />
          <img onClick={Github} style={{ marginLeft: 10,"&:hover":{transition:'all 1sec',transform:'translatey(-10px)'} }} src="https://img.icons8.com/?size=48&id=AZOZNnY73haj&format=png" alt="GitHub" />
        </Stack>

      </Card.Body>
      <Card.Footer style={{
        color: 'white',
        textAlign: 'center',
        backgroundColor: '#272525',
        fontSize: '15px',
        fontWeight: 'bold',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingLeft: '10px',
        paddingRight: '10px',
        borderTop: '1px solid #8d8888',
        // marginTop: '10px',
      }} className="text-muted">@2024 Copyright:/htttp/.....</Card.Footer>
        
    </Card>
  );
}

export default Footer;

const Img = styled.image`
  height: 50;
  width: 50;




`