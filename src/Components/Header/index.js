import logo from '../../assets/Logo.svg'
import { Container , Content } from './style.js'
export function Header() {
  return (
    <Container>
      <Content><img src={logo} alt="logo"></img> <button>Entrar</button></Content></Container>
  )
}