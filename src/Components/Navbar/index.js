import logo from '../../assets/Logo.svg'
import ShopCart from '../../assets/Carrinho.svg'
import Profile from '../../assets/Perfil.svg'
import { Container, Content } from './style.js'
export function Navbar() {
  return (
    <Container>
      <Content>
        <img src={logo} alt="logo" />
        <div>
        <button><img src={ShopCart} alt="logo" /></button>
        <button><img src={Profile} alt="profile" /></button></div>
      </Content>
    </Container>
  )
}