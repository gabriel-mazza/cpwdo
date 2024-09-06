import React from 'react';
import './Sobre.css';

function Sobre() {
  return (
    <div className="sobre">
      <header className="painel">
        <div className="conteudo">
        <h1>Bem-vindo à revolução dos vídeos!</h1>
        <p>
          Somos uma startup com o objetivo de facilitar a produção de conteúdo em larga escala com qualidade profissional, capaz de atingir uma audiência de milhões de seguidores.
        </p>
        <button>Baixe o app</button>
        </div>
        <div className="imagens">
          <img src="/public/imagens/image.png" alt="Imagem app 1" />
          <img src="/public/imagens/imagem1.png" alt="Imagem app 2" />
        </div>
      </header>

      <section className="planos">
        <h2>Planos</h2>
        <div className="cards">
          <div className="card">
            <h3>Individual</h3>
            <p>1 Usuário</p>
            <p>Vídeos Ilimitados: <span>R$15</span></p>
            <button>Cadastrar</button>
          </div>
          <div className="card">
            <h3>Profissional - Times</h3>
            <p>1-10 Usuários</p>
            <p>Vídeos Ilimitados: <span>R$40</span></p>
            <button>Cadastrar</button>
          </div>
          <div className="card">
            <h3>Corporativo</h3>
            <img src="/imagens/imagemcorp.png" alt="Imagem corporativa"></img>
            <button>Entre em Contato</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Sobre;
