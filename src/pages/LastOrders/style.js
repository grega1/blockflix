import styled from 'styled-components'
import { Title } from '../Checkout/style'

export const Container = styled.div`
margin: 2rem 0;
display:flex;
flex-direction:column;
align-items:center;
gap:1rem;
${Title}{
  padding-left:15rem;
  position: relative;
  align-self: flex-start;
}
`
