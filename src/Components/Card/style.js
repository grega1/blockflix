import styled from 'styled-components'
export const CardBackground = styled.div`
  width:22.5rem; 
  height:34.5rem;
  background-color:var(--greyInputs);
  display: flex;
  gap:1rem;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  h3{
    font-size:1.5rem;
  }
  div{
    display: flex;
    justify-content:space-between;
    align-items:center;

    gap:10px;
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
  gap:0.2rem;
  color:var(--white);
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
  vertical-align: center;
  img{
    width:1.875rem;
    height:1.875rem;
  }
`