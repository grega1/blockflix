import React from 'react';
import {MyFooter} from './style'
import heart from '../../assets/powered.svg'

export function Footer(){
  return(
    <MyFooter>
      <img src={heart} alt="coração roxo"/>      
    </MyFooter>
  )
}