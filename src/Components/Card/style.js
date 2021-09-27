import styled from 'styled-components'
export const CardBackground = styled.div`
  width:22.5rem; 
  height:34.5rem;
  background-color:var(--greyInputs);
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  img{
    width:90%;
    height:23.7rem;
  }
  h3{
    font-size:1.5rem;
  }
`
export const AddCart = styled.button`
  width:11.563rem;
  height:2.875rem;
  font-size:1.5rem;
  background-color:var(--purple);
  border-radius: 0.3rem;

`
export const DetailsBtn = styled.button`
  width:3.375rem;
  height:2.875rem;
  background-color:var(--grey);
  border-radius: 0.3rem;
  img{
    width:1.875rem;
    height:1.875rem;
    
  }
`