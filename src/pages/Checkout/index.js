import React from 'react';
import { Navbar } from '../../components/Navbar';
import { Line } from '../../components/Lines'
import { HorizontalCard } from '../../components/CardHorizontal'

export function Checkout(){
  return (
    <>
      <Navbar />
      <Line />
      <HorizontalCard/>
      <HorizontalCard/>
    </>
  )
}