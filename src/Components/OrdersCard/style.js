import styled from "styled-components";

export const ContainerCard = styled.section`
width:81rem;
height:auto;
border:2px solid rgba(78,78,78, 0.5);
span{
  font-size:1.2rem;  
  button{
  background-color:transparent;
  border:none;
  height:auto;
  width:auto;
  img{
    padding:0.5rem 0.5rem 0 1rem;
    width:2.5rem;
    height:1.8rem;
  }
}
}

`
export const ContentCard = styled.section`
display:flex;
justify-content:space-between;
align-items:center;
width:100%;
height:4.2rem;
border-bottom:2px solid rgba(78,78,78, 0.5);
`
export const ShowDetails = styled.section`
width:100%;
height:auto;
`
export const ListOrdersItem = styled.ul`
display:flex;
gap:0.8rem;
justify-content:center;
align-items:center;
width:100%;
height:2.5rem;
;
li{
  width:100%;
  align-self: center;
  position:relative;
  display:flex;
  justify-content:space-between;
  height:auto;
  margin:0 2rem;
  border-bottom: 2px solid rgba(78,78,78, 0.5);
  list-style: none;
 
  span{
    font-size:1rem;
    
  }

}
`

