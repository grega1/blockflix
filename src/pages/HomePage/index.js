import React from 'react';
import { Header } from '../../components/Header'
import { Line } from '../../components/Lines'

import {Footer} from '../../components/Footer'
import { GlobalStyle } from '../../global';
import {Card} from '../../components/Card'
export function HomePage(){
  return (
    <>
    <GlobalStyle />
    <Header />
    <Line />
    <Card>
    </Card>
    <Line />
    <Footer />
    </>
  )
}
