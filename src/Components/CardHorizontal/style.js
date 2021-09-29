import styled from 'styled-components'

export const ContainerCard = styled.div`
display:flex;
justify-content:center;
align-items:center;
width:46.125rem;
height:5.1rem;
background-color:transparent;
`
export const ContentCard = styled.div`
display:flex;
justify-content:center;
gap:3rem;
align-items:center;
width: 43.25rem;
height: 100%;
border: 2px solid rgba(78,78,78, 0.5);
border-radius:2px;
`
export const CardMovieImg = styled.img`
width:4.5rem;
height: 3.875rem
;`
export const CardText = styled.span`
font-size: 1.5rem;
font-weight:500;
`
export const RemoveMovie = styled.button`
width:2.5rem;
height: 2.5rem;
background:transparent;
border:none;
`