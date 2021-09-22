import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600&family=Poppins:ital,wght@0,300;0,400;0,500;1,600&display=swap');
  :root{
    --background: #222222 opacity 0.9;
    --black: #222222;
    --normalBlack:#000000;
    --white:#fff;
    --whiteIcons:#f8f8f8;
    --purple:#7838f8;
    --grey:#4e4e4e;
    
  }
 *{
   margin:0;
   padding:0;
   box-sizing: border-box;
 }
 h1,h2,h3,h4,h5,h6{
   font-family: 'Montserrat', sans-serif;
 }
 body{
   background: var(--background);
   -webkit-font-smoothing:antialiased; 
   font-family: 'Poppins', sans-serif;
 }
 //font-size = REM
 html {
   @media(max-width:1080px){
     font-size: 93.75% 
   }
   @media(max-width:720px){
     font-size: 87.5% 
   }
 }
 button {
   cursor:pointer
 }
 [disabled]{
   opacity: 0.6;
   cursor: not-allowed;
 }
`
