import styled from 'styled-components'

export const ModalLogin = styled.section`
width:45.875rem;
height:34.5rem;
background-color:var(--white);
display:flex;
border-radius:0.6rem;
flex-direction:column;
justify-content:center;
align-items:center;
gap:2rem;
h2{
  font-size:1.5rem;
  color:var(--black);
}
label {
  font-size:1rem;
  font-weight: 500;
  color:var(--black);
  align-self: initial;
  margin-top:1rem;
}
input{
  width:28.375rem;
  height:2.5rem;
  border:transparent;
  background-color:var(--greyInputs);
  
}
button{
  margin:2rem auto;
  
  width:10.5rem;
  height:2.875rem;
  font-size: 1.5rem;
  color: #fff;
  background: var(--purple);
  border:0;
  border-radius:0.3rem;
  display:flex;
  justify-content:center;
  align-items: center;
  gap:0.1rem;
  img{
    width:1.25rem;
    height:1.25rem;
  }
  .inputs{
    display:flex;
    flex-direction:column;
  }
}
`