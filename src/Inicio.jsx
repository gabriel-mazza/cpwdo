import React from 'react';
import Card from './Cards';

function Home() {
  return (
    <main>
      <section className="conteudo">
        <div className='texto'>
        <h1>Crie seus vídeos online</h1>
        <p>Transforme suas ideias em filmes memoráveis: onde a criatividade encontra a simplicidade.</p>
        <button>Começar agora!</button>
        </div>
        <img src="/imagens/imagem3.png" alt="Imagem produto" />
      </section>
      <section className="cards">
        <Card 
          bgColor="#FFDDC1" 
          number="01" 
          title="Youtube" 
          
          description="Produza conteúdo cativante e conquiste seu publico com videos de alta qualidade no maior palco digital do mundo." 
        />
        <Card 
          bgColor="#FFE3AF" 
          number="02" 
          title="Tiktok" 
          
          description="Faça sua criatividade brilhar em vídeos curtos e envolventes que vão cativar a comunidade global do TikTok." 
        />
        <Card 
          bgColor="#C5E7E4" 
          number="03" 
          title="Facebook" 
          
          description="Conecte-se com sua audiência de forma autêntica e impactante através de vídeos que se destacam no feed do Facebook." 
        />
        <Card 
          bgColor="#D5C2E8" 
          number="04" 
          title="Instagram" 
          
          description="Compartilhe suas histórias de maneira única e conquiste milhões de likes no Instagram utilizando Stories e Reels." 
        />
      </section>
    </main>
  );
}

export default Home;
