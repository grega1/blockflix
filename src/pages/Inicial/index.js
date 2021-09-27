import React from 'react';
import { Header } from '../../components/Header'
import { Line } from '../../components/Lines'
import {Base} from '../../components/Base'
import {Footer} from '../../components/Footer'
import { GlobalStyle } from '../../global';
export function Inicial(){
  return (
    <>
    <Header />
    <Line />
    <Base />
    <Line />
    <Footer />
    <GlobalStyle />
    </>
  )
}