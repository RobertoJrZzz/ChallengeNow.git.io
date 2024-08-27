import React, {useState} from "react";
import Cn from '../../Assets/images/CN.png'


function GeneratorBack() {
    const [generatedText, setGeneratedText] = useState('');

    const texts = [
      'Crie uma API para um restaurante com endpoints para gerenciar o menu e os pedidos',
      'Desenvolva um sistema de autenticação e autorização para um aplicativo móvel',
      'Faça uma API para gerenciar a agenda e os palestrantes de uma conferência',
      'Crie um backend para um produto de tecnologia que inclua especificações e avaliações de clientes',
      'Desenvolva uma API para gerenciar um portfólio de um designer, incluindo trabalhos e informações de contato',
      'Faça um backend para um site de e-commerce com gerenciamento de produtos, carrinho de compras e pagamentos',
      'Crie uma API para um blog com gerenciamento de artigos e inscrições para newsletter',
      'Desenvolva um sistema de gerenciamento para uma academia com planos de aula e horários',
      'Faça uma API para uma campanha de crowdfunding com gerenciamento de metas, recompensas e doações',
      'Crie um backend para um evento esportivo com informações detalhadas do evento e venda de ingressos',
      'Desenvolva uma API para uma startup que inclua descrição do produto e informações da equipe fundadora',
      'Faça um backend para um fotógrafo com gerenciamento de galerias de fotos e informações de contato',
      'Crie uma API para um curso online que inclua detalhes do curso, instrutor e inscrições',
      'Desenvolva um sistema de gerenciamento para um serviço de consultoria com áreas de expertise e depoimentos',
      'Faça uma API para um hotel com gerenciamento de quartos, preços e reservas',
      'Crie um backend para um software SaaS que inclua funcionalidades, preços e um período de teste gratuito',
      'Faça uma API para uma ONG que inclua informações sobre missão, projetos e doações',
      'Crie um backend para um músico que inclua biografia, músicas e links para redes sociais',
      'Desenvolva uma API para uma agência de viagens que inclua pacotes de viagens e um formulário de contato'

    ];

    const handleGenerate = () => {
        const randomIndex = Math.floor(Math.random() * texts.length);
        setGeneratedText(texts[randomIndex]);
    };
    
    return(
        <div className="App">
        <header className="App-header">
          <div className="divisao">
        <img className='Logo' src={Cn}/>
          <h1 className="Titulo">Challenge Now</h1>
          <h2>BACK-END</h2>
          <p>{generatedText}</p>
          <button class="bn632-hover bn26" onClick={handleGenerate}>Hora do desafio!</button>
          </div>
        </header>
      </div>
    );
}

export default GeneratorBack;