import React from 'react';
import LogIn from '../../assets/LogIn.svg'
import {Link} from 'react-router-dom'
import { Header } from '../../components/Header'
import { Line } from '../../components/Lines'
import { Footer } from '../../components/Footer'
import { CtaContainer} from '../../components/Base/style';
import { ModalLogin} from './style'
import { GlobalStyle } from '../../global';
export function Login() {
  return (
    <>
      <Header />
      <Line />
      <CtaContainer>      
       <ModalLogin>
         <h2>LOGIN</h2>
         <div className="inputs">
         <label for="email">Email:</label>
         <input type="email" name="email"></input>
         <label for="password">Password:</label>
         <input type="password" name="password"></input>
         </div>
         <Link to='/filmes'><img src={LogIn} alt="login"/>Entrar</Link>
       </ModalLogin>        
      </CtaContainer>
      <Line />
      <Footer />
      <GlobalStyle />
    </>
  )
}