import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import './Tutorial.css';

const Tutorial: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="tutorial-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="tutorial-content"
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h1 className="tutorial-title">NEXUS: Guia de Viagem</h1>
        
        <div className="tutorial-sections">
          <section className="tutorial-section">
            <h2>Bem-vindo à Jornada do Conhecimento</h2>
            <p>
              NEXUS convida você a uma expedição fascinante através de mundos temáticos, 
              onde cada nível é uma narrativa única de descoberta científica. 
              Conecte, explore e desvende os mistérios do universo!
            </p>
          </section>

          <section className="tutorial-section">
            <h2>Mecânica do Jogo</h2>
            <ul>
              <li>🧩 Grid Dinâmico: Cada mundo possui um grid próprio (6x6 a 16x16)</li>
              <li>🎯 Progressão por Estrelas: 3 níveis de objetivos por fase</li>
              <li>⏳ Movimentos Limitados: De 10 a 15 movimentos por objetivo</li>
              <li>🔗 Conexões: Ligue elementos relacionados horizontalmente ou verticalmente</li>
              <li>✨ Magia Cósmica: Transforme emojis para progredir mais rapidamente</li>
              <li>🌟 Emojis Especiais: Cada mundo tem um emoji com efeito único que escala com os mundos.</li>
            </ul>
          </section>

          <section className="tutorial-section">
            <h2>A História de NEXUS</h2>
            <p>
              Em um momento além do tempo, existe a Academia de Criação Universal, 
              um lugar onde os segredos do cosmos são guardados e onde jovens 
              Arquitetos do Universo aprendem a tecer a realidade.
            </p>
            <p>
              Você é um desses jovens Arquitetos, guiado por Mestre Cronus, 
              o guardião do Tempo Zero, e Eco, uma entidade que compreende 
              os sussurros mais profundos do universo. Seu mentor, o 
              Observador do Vazio, observa cada movimento seu com um olhar 
              que atravessa dimensões.
            </p>
            <p>
              Sua jornada começa no Ponto Zero, a singularidade primordial 
              onde toda a energia do universo estava concentrada. Aqui, você 
              aprenderá a manipular forças cósmicas, a controlar a explosão 
              do Big Bang, e a equilibrar as forças fundamentais que darão 
              origem a tudo que existe.
            </p>
            <p>
              Cada movimento seu é uma dança delicada entre caos e ordem. 
              Você não é apenas um observador, mas um criador ativo, 
              transformando a energia pura em estrelas, planetas, e 
              eventualmente, vida. Sua missão transcende a simples 
              compreensão científica - é uma jornada de criação, 
              descoberta e conexão.
            </p>
            <p>
              Os desafios que você enfrentará são mais do que quebra-cabeças. 
              São portais para compreender os mecanismos mais profundos 
              da existência. Cada conexão que você faz, cada emoji que 
              manipula, conta uma história bilhões de anos antiga.
            </p>
          </section>

          <section className="tutorial-section">
            <h2>Progressão de Estrelas</h2>
            <ul>
              <li>⭐ 1ª Estrela: Objetivo inicial</li>
              <li>⭐⭐ 2ª Estrela: Desafio intermediário</li>
              <li>⭐⭐⭐ 3ª Estrela: Objetivo máximo</li>
              <li>📊 Cada estrela reduz o número de movimentos disponíveis</li>
            </ul>
          </section>

          <section className="tutorial-section">
            <h2>Estratégias de Jogo</h2>
            <ul>
              <li>🧠 Planeje cada movimento estrategicamente</li>
              <li>🔍 Identifique padrões e combinações</li>
              <li>⚖️ Gerencie movimentos e objetivos</li>
              <li>🔗 Use os Emojis Especiais para limpar o grid</li>
              <li>🌈 Use a Magia Cósmica com sabedoria</li>
            </ul>
          </section>
        </div>

        <motion.button
          className="back-button"
          onClick={() => navigate('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Iniciar Jornada
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default Tutorial;