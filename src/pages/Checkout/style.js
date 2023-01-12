import styled from 'styled-components'

export const Container = styled.div`
width:100%;
height:100vh;
display:flex;
gap:10rem;
padding: 5rem 0 0 0 ;
justify-content:center;
`
export const TotalContent = styled.div`
width:26.3rem;
max-height:31rem;
display:flex;
flex-direction:column;
border: 2px solid rgba(78,78,78, 0.5);
border-radius:2px;
align-items:center;
justify-content:space-between;
gap:0.5rem;
`
export const ContentCheckoutList = styled.div`
align-self:flex-start;
width: 46.8rem;
height: 42.5rem;
display:flex;
flex-direction: column;
gap:0.8rem;

`
export const Title = styled.h2`
font-size:2rem;
color:var(--black);
align-self: initial;

`
export const TotalList = styled.section`
display:flex;
flex-direction:column;
align-items:center;
justify-content:space-around;
width:100%;
height:100%;
gap:0.5rem;
position:relative;
${Title}{
  position:absolute;
  top:5%;

}
.totalCost{
  position:absolute;
  bottom:4%;
}
`
export const ListItens = styled.ul`
display:flex;
gap:0.8rem;
justify-content:center;
align-items:center;
width:70%;
height:2.5rem;
border-bottom: 2px solid rgba(78,78,78, 0.5);
li{
  width:100%;
  height:auto;
  list-style: none;
  
  span{
    font-size:1rem;
    font-weight:500;
    margin-left:0.4rem;
  }
}
`
export const Confirm = styled.button`
background: var(--purple);
border:transparent;
color: var(--white);
font-size:2rem;
width:19.8rem;
height:2.875rem;
margin-bottom:1.5rem;
`