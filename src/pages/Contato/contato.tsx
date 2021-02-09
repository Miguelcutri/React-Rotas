import React from 'react';
import { Helmet } from 'react-helmet'

const Contato = () => {
  return (
    <>
    <Helmet>
        <title>Contato</title>
    </Helmet>
    <div className="container">
    <h2>Quer saber mais?</h2>
          
          <p>Se você quiser atualizações aleatórias e regulares sobre o que eu ando fazendo da vida, você pode...
            
          ... me seguir no Instagram em <a target="_blank" href="https://www.instagram.com/miguelcutri/">@miguelcutri</a>
        
          Mas... Se preferir um contato mais direto pode me chamar no...
          
          ... <a target="_blank" href="https://t.me/miguelcutri">  Telegram</a> ou no <a target="_blank" href="https://api.whatsapp.com/send/?phone=5519991822381&text&app_absent=0"> WhatsApp</a>.
          Ou se preferir pode enviar um email para vitor.cutri@hotmail.com que é sucesso!</p>
    </div>
    </>
  );
}

export default Contato;