import styled  from "styled-components";
export const ContainerMovie = styled.div`
display:flex;
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
width:90%;
height:39.25rem;
`
export const MovieTitle = styled.h2`
font-size:2rem;
color:var(--white);
`
export const MovieInfo = styled.h3`
font-size:1.5rem;
color:var(--white);
` 
export const Sinopse = styled.p`
font-size:1rem;
color:var(--white);
`
export const CardImg = styled.img`
width:12.375rem;
height:16.3rem;
`