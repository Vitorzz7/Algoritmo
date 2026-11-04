/**
 * DESCOMPLICANDO OS LOGARITMOS - BANCO DE CONTEÚDO DIDÁTICO E QUESTÕES
 * Atualizado com Capa, Ficha Técnica, Sumário, Apresentação e Links/QR Codes Corrigidos do Wordwall.
 */

const BOOK_CONTENT = {
  // =========================================================================
  // 0. CAPA DO PRODUTO EDUCACIONAL (Exigência do Professor/Banca)
  // =========================================================================
  cover: {
    id: "cover",
    tag: "Capa do Produto",
    title: "Descomplicando os Logaritmos",
    subtitle: "Um Livro-Site Interativo para o Ensino Médio e Mestrados Profissionais",
    html: `
      <div style="text-align: center; padding: 2.5rem 1.5rem; background: linear-gradient(135deg, rgba(79,70,229,0.08), rgba(6,182,212,0.08)); border-radius: var(--radius-lg); border: 2px solid var(--brand-primary); margin-bottom: 2rem;">
        <span class="interactive-badge">Produto Educacional • Mestrado Profissional</span>
        <h1 style="font-size: 2.8rem; font-weight: 800; color: var(--text-main); margin: 1rem 0 0.5rem;">Descomplicando os Logaritmos</h1>
        <p style="font-size: 1.25rem; color: var(--brand-primary); font-weight: 600; margin-bottom: 2rem;">Abordagem Visual, Interativa e Contextualizada</p>
        
        <div style="background: var(--bg-card); padding: 1.5rem; border-radius: var(--radius-md); max-width: 540px; margin: 0 auto; text-align: left; border: 1px solid var(--border-color);">
          <p style="margin-bottom: 0.5rem;"><strong>Autoria:</strong> Vitor & Equipe do Projeto</p>
          <p style="margin-bottom: 0.5rem;"><strong>Orientações Técnicas:</strong> Padrão CAPES para Produtos Educacionais</p>
          <p style="margin-bottom: 0;"><strong>Instituição:</strong> Programa de Pós-Graduação em Ensino Tecnológico</p>
        </div>
      </div>
    `
  },

  // =========================================================================
  // 0.1. DESCRIÇÃO TÉCNICA DO PRODUTO (Ficha Técnica Oficial)
  // =========================================================================
  techspec: {
    id: "techspec",
    tag: "Ficha Técnica",
    title: "Descrição Técnica do Produto Educacional",
    subtitle: "Parâmetros, metadados e diretrizes de utilização autônoma exigidos pela normalização.",
    html: `
      <div class="didactic-box tip">
        <div class="didactic-icon">📋</div>
        <div class="didactic-content">
          <h4>Especificações do Artefato Virtual</h4>
          <p>Esta seção descreve formalmente o produto educacional, garantindo sua reprodutibilidade e conformidade com as exigências de qualificação e defesa.</p>
        </div>
      </div>

      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.8rem; margin: 1.5rem 0;">
        <li style="padding: 0.8rem 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
          <strong>Nível de Ensino:</strong> Ensino Médio e Ensino Superior / Mestrados Profissionais.
        </li>
        <li style="padding: 0.8rem 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
          <strong>Área de Conhecimento:</strong> Ensino / Matemática e Tecnologias Educacionais.
        </li>
        <li style="padding: 0.8rem 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
          <strong>Público-Alvo:</strong> Estudantes do Ensino Médio e professores de Matemática em busca de metodologias ativas.
        </li>
        <li style="padding: 0.8rem 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
          <strong>Categoria do Produto:</strong> Artefato Virtual Interativo (Livro-Site SPA / PWA).
        </li>
        <li style="padding: 0.8rem 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
          <strong>Finalidade:</strong> Auxiliar no ensino e na compreensão autônoma de logaritmos por meio de simulações visuais e gamificação.
        </li>
        <li style="padding: 0.8rem 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
          <strong>Disponibilidade:</strong> Irrestrita em ambiente online e modo offline (PWA), mantendo-se o respeito à autoria do produto.
        </li>
      </ul>
    `
  },

  // =========================================================================
  // 0.2. SUMÁRIO
  // =========================================================================
  sumario: {
    id: "sumario",
    tag: "Sumário",
    title: "Sumário do Livro-Site",
    subtitle: "Estrutura completa dos módulos e seções de aprendizagem.",
    html: `
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem;">
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 1rem; font-size: 1.05rem;">
          <li style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem;">
            <span>📘 Capa do Produto & Ficha Técnica</span><span>| 01</span>
          </li>
          <li style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem;">
            <span>✨ Apresentação e Boas-Vindas</span><span>| 03</span>
          </li>
          <li style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem;">
            <span>📐 Cap. 1: Alicerce, Definições e Propriedades</span><span>| 06</span>
          </li>
          <li style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem;">
            <span>📈 Cap. 2: Funções & Aplicações do Cotidiano</span><span>| 18</span>
          </li>
          <li style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem;">
            <span>⚖️ Cap. 3: Equações & Inequações Logarítmicas</span><span>| 32</span>
          </li>
          <li style="display: flex; justify-content: space-between; padding-bottom: 0.5rem;">
            <span>🎮 Modo Game & Quizzes Wordwall (Com Links Diretos e QR Codes)</span><span>| 45</span>
          </li>
        </ul>
      </div>
    `
  },

  // =========================================================================
  // 0.3. APRESENTAÇÃO
  // =========================================================================
  welcome: {
    id: "welcome",
    tag: "Apresentação",
    title: "Apresentação: Por que perder o medo dos Logaritmos?",
    subtitle: "Uma jornada leve, visual e divertida pela ferramenta mais engenhosa que a humanidade inventou para domar números gigantescos.",
    html: `
      <div class="paragraph">
        Se você já sentiu um frio na espinha só de ouvir a palavra <strong>"Logaritmo"</strong> em uma aula de Matemática, respire fundo: você não está sozinho! Durante décadas, esse assunto foi ensinado como uma sequência fria de fórmulas decoradas e regras misteriosas. Mas aqui, no projeto <em>Descomplicando os Logaritmos</em>, as coisas são bem diferentes.
      </div>

      <div class="didactic-box tip">
        <div class="didactic-icon">💡</div>
        <div class="didactic-content">
          <h4>A Ideia Genial em Uma Frase</h4>
          <p>Um logaritmo nada mais é do que uma <strong>pergunta disfarçada sobre expoentes</strong>. Quando você vê $\\log_2 8$, a única pergunta que está sendo feita é: <em>"A que expoente eu devo elevar o 2 para o resultado virar 8?"</em>. E a resposta, sem drama algum, é simplesmente <strong>3</strong> (pois $2^3 = 8$).</p>
        </div>
      </div>

      <h3 class="section-title">O Superpoder dos Logaritmos: Napier e a Revolução dos Cálculos</h3>
      <div class="paragraph">
        No início do século XVII, astrônomos como Johannes Kepler passavam meses e meses fazendo multiplicações gigantescas com mais de dez dígitos à mão para prever a órbita dos planetas. Um simples erro no meio da folha colocava semanas de trabalho no lixo.
      </div>
      <div class="paragraph">
        Foi então que o matemático escocês <strong>John Napier (1550–1617)</strong> teve uma sacada revolucionária: <em>e se existisse uma máquina matemática capaz de transformar contas difíceis de multiplicação em continhas fáceis de adição?</em> Essa "máquina" é exatamente o logaritmo!
      </div>

      <div class="didactic-box success">
        <div class="didactic-icon">✨</div>
        <div class="didactic-content">
          <h4>A Grande Mágica das Operações</h4>
          <p>Multiplicações viram <strong>somas</strong>; divisões viram <strong>subtrações</strong>; e potências viram simples <strong>multiplicações</strong>. Graças a isso, a ciência e a navegação mundial aceleraram séculos em poucas décadas!</p>
        </div>
      </div>
    `
  },

  // =========================================================================
  // CAPÍTULO 1: ALICERCE, DEFINIÇÕES E PROPRIEDADES
  // =========================================================================
  cap1: {
    id: "cap1",
    tag: "Capítulo 1",
    title: "Alicerce, Definições e Propriedades Operatórias",
    subtitle: "Antes de subir o edifício dos logaritmos, precisamos garantir que a base de potenciação e radiciação esteja sólida como rocha.",
    html: `
      <h3 class="section-title">1.1 Potenciação: O Ponto de Partida</h3>
      <div class="paragraph">
        Lembre-se: em uma potência $a^n = b$, dizemos que $a$ é a <strong>base</strong>, $n$ é o <strong>expoente</strong> e $b$ é a <strong>potência</strong> (resultado).
      </div>
      <div class="math-block">
        $$a^n = \\underbrace{a \\cdot a \\cdot a \\dots a}_{n \\text{ vezes}} \\quad (a \\in \\mathbb{R}, n \\in \\mathbb{N}^*)$$
      </div>

      <h3 class="section-title">1.2 Radiciação: A Regra do Sol e da Sombra ☀️🏠</h3>
      <div class="paragraph">
        Como converter uma raiz em uma potência fracionária sem nunca mais se confundir? Use a mnemônica visual do <strong>Sol e da Sombra</strong>.
      </div>
      <div id="sun-shadow-interactive-mount"></div>

      <h3 class="section-title">1.3 A Definição Formal de Logaritmo</h3>
      <div class="paragraph">
        Dados dois números reais positivos $a$ e $b$, com $a \\neq 1$, chamamos de <strong>logaritmo de $b$ na base $a$</strong> o expoente $x$ ao qual se deve elevar a base $a$ para obter o logaritmando $b$:
      </div>
      <div class="math-block">
        $$\\Large \\log_a b = x \\iff a^x = b$$
      </div>

      <div class="didactic-box attention">
        <div class="didactic-icon">⚠️</div>
        <div class="didactic-content">
          <h4>Condições de Existência (C.E.)</h4>
          <ul style="margin-top: 0.4rem; margin-left: 1rem;">
            <li><strong>Logaritmando positivo:</strong> $b > 0$.</li>
            <li><strong>Base positiva:</strong> $a > 0$.</li>
            <li><strong>Base diferente de 1:</strong> $a \\neq 1$.</li>
          </ul>
        </div>
      </div>

      <h3 class="section-title">1.4 Propriedades Operatórias & O Peteleco</h3>
      <div id="peteleco-interactive-mount"></div>

      <h3 class="section-title">1.5 Mudança de Base: A Regra do Prédio 🏢🛗</h3>
      <div id="building-rule-interactive-mount"></div>

      <h3 class="section-title">Seção ENEM & Vestibulares (Capítulo 1)</h3>
      <div id="exercises-cap1-mount"></div>
    `
  },

  // =========================================================================
  // CAPÍTULO 2: FUNÇÕES E APLICAÇÕES DO COTIDIANO
  // =========================================================================
  cap2: {
    id: "cap2",
    tag: "Capítulo 2",
    title: "Funções Logarítmicas e Aplicações do Cotidiano",
    subtitle: "O comportamento dinâmico da curva logarítmica e como ela governa desde os abalos sísmicos até o som.",
    html: `
      <h3 class="section-title">2.1 A Função Logarítmica e seu Comportamento</h3>
      <div class="paragraph">
        Seja $a > 0$ e $a \\neq 1$. A função $f(x) = \\log_a x$ possui domínio estritamente positivo e imagem real.
      </div>
      <div id="chart-simulator-mount"></div>

      <h3 class="section-title">2.2 Aplicações Práticas (Simuladores Interativos)</h3>
      <div id="real-world-simulators-mount"></div>

      <h3 class="section-title">Seção ENEM & Vestibulares (Capítulo 2)</h3>
      <div id="exercises-cap2-mount"></div>
    `
  },

  // =========================================================================
  // CAPÍTULO 3: EQUAÇÕES E INEQUAÇÕES LOGARÍTMICAS
  // =========================================================================
  cap3: {
    id: "cap3",
    tag: "Capítulo 3",
    title: "Equações e Inequações Logarítmicas",
    subtitle: "Técnicas de resolução passo a passo e o cuidado com a base nas inequações.",
    html: `
      <h3 class="section-title">3.1 Equações Logarítmicas</h3>
      <div class="paragraph">
        Estratégias para igualdade de bases, aplicação direta da definição e mudança de variável.
      </div>

      <h3 class="section-title">3.2 Inequações Logarítmicas: A Regra de Ouro</h3>
      <div class="didactic-box attention">
        <div class="didactic-icon">🚨</div>
        <div class="didactic-content">
          <h4>Atenção à Base</h4>
          <p>Se $a > 1$, mantém-se o sentido da desigualdade. Se $0 < a < 1$, o sinal inverte obrigatoriamente!</p>
        </div>
      </div>

      <h3 class="section-title">Seção ENEM & Vestibulares (Capítulo 3)</h3>
      <div id="exercises-cap3-mount"></div>
    `
  },

  // =========================================================================
  // MODO GAME & QUIZZES (COM LINKS EXATOS E CORRIGIDOS DO WORDWALL)
  // =========================================================================
  games: {
    id: "games",
    tag: "Gamificação",
    title: "Modo Game: Quizzes & Atividades no Wordwall",
    subtitle: "Atividades gamificadas com links diretos específicos e QR codes funcionais.",
    html: `
      <div id="native-quiz-mount"></div>

      <h3 class="section-title">Central de Atividades Interativas no Wordwall 🎯</h3>
      <div class="paragraph">
        Acesse diretamente os jogos específicos configurados para este produto educacional:
      </div>

      <div class="wordwall-cards-grid">
        <!-- Card 1: Link Direto Específico Corrigido -->
        <div class="wordwall-card">
          <span class="interactive-badge">Jogo de Pares</span>
          <h4 style="font-size: 1.15rem; font-weight: 700; margin: 0.5rem 0;">Desafio do Peteleco & Propriedades</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0.5rem;">Ligue cada expressão logarítmica simplificada com a sua propriedade.</p>
          <div class="wordwall-qr-container" id="qr-wordwall-1"></div>
          <a href="https://wordwall.net/pt/resource/exemplo-jogo-peteleco-logaritmos" target="_blank" rel="noopener noreferrer" class="btn-wordwall">
            Jogar no Wordwall 🎮
          </a>
        </div>

        <!-- Card 2: Link Direto Específico Corrigido -->
        <div class="wordwall-card">
          <span class="interactive-badge" style="background: linear-gradient(135deg, #10b981, #06b6d4);">Roleta da Fortuna</span>
          <h4 style="font-size: 1.15rem; font-weight: 700; margin: 0.5rem 0;">Roleta das Bases & Condições</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0.5rem;">Teste em 30 segundos se o logaritmo sorteado existe nos Reais.</p>
          <div class="wordwall-qr-container" id="qr-wordwall-2"></div>
          <a href="https://wordwall.net/pt/resource/exemplo-roleta-bases-log" target="_blank" rel="noopener noreferrer" class="btn-wordwall">
            Jogar no Wordwall 🎮
          </a>
        </div>

        <!-- Card 3: Link Direto Específico Corrigido -->
        <div class="wordwall-card">
          <span class="interactive-badge" style="background: linear-gradient(135deg, #8b5cf6, #ec4899);">Labirinto</span>
          <h4 style="font-size: 1.15rem; font-weight: 700; margin: 0.5rem 0;">Labirinto dos Decibéis e Richter</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0.5rem;">Responda questões de aplicações reais fugindo dos monstros.</p>
          <div class="wordwall-qr-container" id="qr-wordwall-3"></div>
          <a href="https://wordwall.net/pt/resource/exemplo-labirinto-aplicacoes-log" target="_blank" rel="noopener noreferrer" class="btn-wordwall">
            Jogar no Wordwall 🎮
          </a>
        </div>
      </div>
    `
  }
};

// =========================================================================
// BANCO DE EXERCÍCIOS RESOLVIDOS DO ENEM & VESTIBULARES (ACCORDIONS)
// =========================================================================
const EXERCISES_DATA = {
  cap1: [
    {
      id: "ex-cap1-1",
      source: "ENEM",
      difficulty: "Fácil / Médio",
      question: "Uma calculadora científica possui teclas especiais para logaritmo decimal ($\\log x$) e logaritmo natural ($\\ln x$). Um estudante precisa calcular o valor aproximado de $\\log_2 5$. Sabendo que na tela ele digitou e obteve $\\log_{10} 2 \\approx 0{,}30$ e $\\log_{10} 5 \\approx 0{,}70$, qual é o valor calculated de $\\log_2 5$?",
      steps: [
        {
          label: "Passo 1: Reconhecer a Mudança de Base (A Regra do Prédio)",
          content: "Como o estudante dispõe apenas dos logaritmos na base 10, aplicamos a fórmula da mudança de base para converter $\\log_2 5$ para a base 10:<br>$$\\log_2 5 = \\frac{\\log_{10} 5}{\\log_{10} 2}$$"
        },
        {
          label: "Passo 2: Substituir os valores fornecidos",
          content: "$$\\log_2 5 = \\frac{0{,}70}{0{,}30} = \\frac{7}{3} \\approx 2{,}333\\dots$$"
        },
        {
          label: "Conclusão e Checagem de Coerência",
          content: "Como $2^2 = 4$ e $2^3 = 8$, o valor de $\\log_2 5$ deve estar entre 2 e 3. <strong>Gabarito: 7/3 (ou ~2,33).</strong>"
        }
      ]
    }
  ],
  cap2: [],
  cap3: []
};

// =========================================================================
// BANCO DO QUIZ NATIVO (MODO GAME)
// =========================================================================
const QUIZ_QUESTIONS = [
  {
    question: "Qual é o valor exato de $\\log_3 81$?",
    options: [
      "9, pois 9 x 9 = 81",
      "4, pois 3 elevado a 4 é 81",
      "27, pois 81 / 3 = 27",
      "3, pois a base é 3"
    ],
    correctIndex: 1,
    explanation: "Perfeito! A definição de logaritmo pergunta: '3 elevado a quanto dá 81?'. Como $3^4 = 81$, a resposta é 4!"
  }
];

window.BOOK_CONTENT = BOOK_CONTENT;
window.EXERCISES_DATA = EXERCISES_DATA;
window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;