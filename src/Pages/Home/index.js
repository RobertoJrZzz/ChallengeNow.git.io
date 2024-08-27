import React, {useState} from "react";
import Cn from '../../Assets/images/CN.png'

function Generator() {
    const [generatedText, setGeneratedText] = useState('');

    const texts = [
        'Crie uma landing page para um restaurante com uma seção de menu e uma galeria de fotos',
        'Desenvolva uma landing page para um aplicativo móvel com screenshots e um botão de download',
        'Faça uma landing page para uma conferência com agenda, palestrantes e formulário de inscrição',
        'Crie uma landing page para um produto de tecnologia com especificações e depoimentos de clientes',
        'Desenvolva uma landing page para um portfólio de um designer com exemplos de trabalhos e contato',
        'Faça uma landing page para um site de e-commerce com produtos em destaque e promoções',
        'Crie uma landing page para um blog com artigos recentes e uma área para inscrição de newsletter',
        'Desenvolva uma landing page para uma academia com informações sobre planos e horários de aulas',
        'Faça uma landing page para uma campanha de crowdfunding com metas, recompensas e botão de doação',
        'Crie uma landing page para um evento esportivo com detalhes do evento e venda de ingressos',
        'Desenvolva uma landing page para uma startup com descrição do produto e equipe fundadora',
        'Faça uma landing page para um fotógrafo com uma galeria de fotos e informações de contato',
        'Crie uma landing page para um curso online com detalhes do curso, instrutor e inscrições',
        'Desenvolva uma landing page para um serviço de consultoria com áreas de expertise e depoimentos',
        'Faça uma landing page para um hotel com fotos dos quartos, preços e formulário de reserva',
        'Crie uma landing page para um software SaaS com funcionalidades, preços e um botão de teste gratuito',
        'Faça uma landing page para uma ONG com missão, projetos e botão de doação',
        'Crie uma landing page para um músico com biografia, músicas e links para redes sociais',
        'Desenvolva uma landing page para uma agência de viagens com pacotes de viagens e formulário de contato'
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
          <h2>FRONT - END</h2>
          <p>{generatedText}</p>
          <button class="bn632-hover bn26" onClick={handleGenerate}>Hora do desafio!</button>
          </div>
        </header>
      </div>
    );
}

export default Generator;