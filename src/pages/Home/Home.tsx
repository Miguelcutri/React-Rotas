import React from 'react';
import { Helmet } from 'react-helmet'
import '../../index.css'
const Home = () => {
  return (
    <>
    <div className="container">
      <Helmet>
        <title>Home</title>
      </Helmet>
      
        <h1>Sobre mim</h1>
        
          <h5>Olá Mundo! Eu sou o Vitor, prazer em conhece-lo!</h5>
          <p>Meu nome completo é Vitor Miguel Cutri, tenho 21 anos, nasci e cresci em Campinas, sou estudante de Análise e desenvolvimento de sistemas.
           💻 Sou programador, 🙏Cristão,🎨Web/UI/UX Design, 🎸Baixista e ❤️ fã de Naruto.
          </p>

          <h2>Histórico profissional</h2>
          
          <p>Eu comecei a me interessar por desenvolvimento em 2019, através de uma experiência que tive como usuário de um sistema na empresa que trabalhava.  Comecei me aprofundar mesmo em 2020, por meio de um treinamento de desenvolvimento Java que partipei da Generation Brasil.</p>
          <p>
          Desde então venho me aperfeiçoando com desenvolvimento web, java, design, UX Design e principalmente Front-end, onde mais me identifico.
         </p>
         </div>
    </>
  );
}

export default Home;