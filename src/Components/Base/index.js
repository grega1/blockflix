import React from "react";
import { CtaContainer, CtaContent } from "./style";

export function Base(){
  return (
    <CtaContainer>
     <CtaContent>
       <h1>Pensou em filmes, pensou em Blockflix.</h1>
       <p>Viva experiência de cinema na sua casa, alugue os últimos lançamentos de filmes e mantenha o espírito cinéfilo que existe dentro de você. </p>
       <button type="button">Entrar</button>
     </CtaContent>
     <iframe></iframe>
    </CtaContainer>
  )
}