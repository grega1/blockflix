import logo from '../../assets/Logo.svg'
import {Link} from 'react-router-dom'
import { Container , Content } from './style.js'
export function Header() {
  return (
    <Container>
      <Content><img src={logo} alt="logo"></img> <Link to={`/login`}>Entrar</Link></Content></Container>
  )
}