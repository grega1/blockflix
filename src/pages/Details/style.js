import styled  from "styled-components";
export const ContainerMovie = styled.div`
display:flex;
gap:2rem;
flex-direction: column;
justify-content:center;
align-items:center;
width:100%;
height:auto;
background-color:var(--black);
`
export const DivFlex = styled.div`
display:flex;
flex-direction:${props => props.isColumn ? 'column' : 'row'};
`
export const Banner = styled.img`
margin-top:2rem;
width:500px;
height:auto;
object-fit: contain;
`
export const MovieTitle = styled.h2`
font-size:2rem;
color:var(--white);
`
export const MovieInfo = styled.h3`
font-size:1.5rem;
color:var(--white);
` 
export const InfoText = styled.p`
font-size:1rem;
color:var(--white);
`
export const CardImg = styled.img`
width:12.375rem;
height:16.3rem;
`
export const MovieDetails= styled.div`
display:flex;
width:100%;
height:40rem;
justify-content:center;
`