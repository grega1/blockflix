import styled,{css} from 'styled-components'
import { Link } from 'react-router-dom';

export const CardBackground = styled.div`
  border-radius:5px;
  width:22.5rem; 
  height:34.5rem;
  background-color:var(--greyInputs);
  display: flex;
  gap:1rem;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  h3{
    font-size:1rem;
  }
  .buttons{
    width:100%;
    display: flex;
    justify-content:space-around;
    align-items:center;
    
  }
`
export const MovieImg = styled.img` 
  width:90%;
  height:23.7rem;
 `
    
   
export const AddCart = styled.button`
  display: flex;
  align-items:center;
  justify-content:center;
  gap:0.5rem;
  color:var(--white);
  width:11.563rem;
  height:2.5rem;
  font-size:1.5rem;
  background-color:var(--purple);
  border-radius: 0.3rem;
`
export const DetailsBtn = styled(Link)`
  display: flex;
  align-items:center;
  justify-content:center;
  width:3rem;
  height:2.5rem;
  background-color:var(--grey);
  border-radius: 0.3rem;
  vertical-align: center;
  img{
    width:1.875rem;
    height:1.875rem;
  }
`