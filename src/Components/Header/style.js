import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const Container = styled.header`
background:var(--black);
`
export const Content = styled.div`
  max-width: 1720px;
  margin:0 auto;
  padding: 3rem 1rem 2rem;
  display:flex;
  align-items: center;
  justify-content: space-between;

  .login-btn{
    font-size: 1rem;
    color: #fff;
    background: var(--purple);
    border:0;
    border-radius: 0.3rem;
    width: 6rem;
    height:1.7rem;
    text-align: center;
    text-decoration: none;
  }
  `
