import styled from "styled-components";

export const ContainerCard = styled.section`
width:81rem;
height:auto;
border:2px solid rgba(78,78,78, 0.5);
span{
  font-size:1.5rem;  
}
`
export const ContentCard = styled.section`
width:100%;
height:6.2rem;
border-bottom:2px solid rgba(78,78,78, 0.5);
`
export const ShowDetails =styled.section`
width:100%;
height:auto;
`
export const ListOrdersItem = styled.ul`
display:flex;
gap:0.8rem;
justify-content:space-between;
align-items:center;
width:95%;
height:2.5rem;
border-bottom: 2px solid rgba(78,78,78, 0.5);
li{
  width:100%;
  height:auto;
  list-style: none;
  span{
    font-size:1.5rem;
  }
}
`

