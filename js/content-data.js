/**
 * DESCOMPLICANDO OS LOGARITMOS - BANCO DE CONTEÚDO DIDÁTICO E QUESTÕES
 * Produto Educacional de Mestrado Profissional
 */

const BOOK_CONTENT = {
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
          <p style="margin-bottom: 0.5rem;"><strong>Orientador:</strong> Prof. Dr. Alessandro Lauro Ferraz</p>
          <p style="margin-bottom: 0.5rem;"><strong>Diretrizes Técnicas:</strong> Padrão CAPES para Produtos Educacionais</p>
          <p style="margin-bottom: 0;"><strong>Programa:</strong> Mestrado Profissional em Ensino de Ciências e Matemática</p>
        </div>
      </div>
    `
  },

  techspec: {
    id: "techspec",
    tag: "Ficha Técnica",
    title: "Descrição Técnica do Produto Educacional",
    subtitle: "Parâmetros, metadados e diretrizes de utilização autônoma.",
    html: `
      <div class="didactic-box tip">
        <div class="didactic-icon">i</div>
        <div class="didactic-content">
          <h4>Especificações do Artefato Virtual</h4>
          <p>Esta seção descreve formalmente o produto educacional desenvolvido sob a orientação do Prof. Dr. Alessandro Lauro Ferraz.</p>
        </div>
      </div>

      <ul style="list-style: none; display: flex; flex-direction: column; gap: 0.8rem; margin: 1.5rem 0;">
        <li style="padding: 0.8rem 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
          <strong>Nível de Ensino:</strong> Ensino Médio e Ensino Superior / Mestrados Profissionais.
        </li>
        <li style="padding: 0.8rem 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
          <strong>Área de Conhecimento:</strong> Ensino de Matemática e Tecnologias Educacionais.
        </li>
        <li style="padding: 0.8rem 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
          <strong>Docente Responsável:</strong> Prof. Dr. Alessandro Lauro Ferraz.
        </li>
        <li style="padding: 0.8rem 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
          <strong>Categoria:</strong> Artefato Virtual Interativo (Aplicação Web Progressiva - PWA).
        </li>
        <li style="padding: 0.8rem 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
          <strong>Finalidade:</strong> Suporte pedagógico ao ensino de logaritmos por meio de modelagem visual e gamificação.
        </li>
      </ul>
    `
  },

  sumario: {
    id: "sumario",
    tag: "Sumário",
    title: "Sumário do Livro-Site",
    subtitle: "Estrutura modular dos conteúdos e seções de aprendizagem.",
    html: `
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.5rem;">
        <ul style="list-style: none; display: flex; flex-direction: column; gap: 1rem; font-size: 1.05rem;">
          <li style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem;">
            <span>Capa & Ficha Técnica</span><span>Módulo 01</span>
          </li>
          <li style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem;">
            <span>Apresentação Institucional</span><span>Módulo 02</span>
          </li>
          <li style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem;">
            <span>Capítulo 1: Alicerce, Definições e Propriedades</span><span>Módulo 03</span>
          </li>
          <li style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem;">
            <span>Capítulo 2: Funções & Aplicações do Cotidiano</span><span>Módulo 04</span>
          </li>
          <li style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem;">
            <span>Capítulo 3: Equações & Inequações Logarítmicas</span><span>Módulo 05</span>
          </li>
          <li style="display: flex; justify-content: space-between; padding-bottom: 0.5rem;">
            <span>Gamificação & Ambientes Interativos</span><span>Módulo 06</span>
          </li>
        </ul>
      </div>
    `
  },

  welcome: {
    id: "welcome",
    tag: "Apresentação",
    title: "Apresentação: Fundamentos Metodológicos",
    subtitle: "Uma introdução formal ao estudo contextualizado dos logaritmos.",
    html: `
      <div class="paragraph">
        O presente produto educacional foi estruturado para mitigar as dificuldades recorrentes de aprendizagem associadas ao conceito de logaritmos no Ensino Médio. Em vez da memorização mecânica de algoritmos, prioriza-se a visualização geométrica e a compreensão algébrica fundamentada.
      </div>

      <div class="didactic-box tip">
        <div class="didactic-icon">*</div>
        <div class="didactic-content">
          <h4>Conceito Estruturante</h4>
          <p>O logaritmo constitui essencialmente a operação inversa da potenciação, respondendo ao questionamento fundamental sobre expoentes desconhecidos em equações exponenciais.</p>
        </div>
      </div>

      <h3 class="section-title">Contexto Histórico e Relevância Científica</h3>
      <div class="paragraph">
        Desenvolvidos no início do século XVII por John Napier, os logaritmos representaram uma revolução computacional para a astronomia e navegação da época, convertendo operações complexas de multiplicação em adições sucessivas.
      </div>
    `
  },

  cap1: {
    id: "cap1",
    tag: "Capítulo 1",
    title: "Alicerce, Definições e Propriedades Operatórias",
    subtitle: "Revisão de potenciação, radiciação e estabelecimento formal do conceito logarítmico.",
    html: `
      <h3 class="section-title">1.1 Potenciação e Radiciação</h3>
      <div class="paragraph">
        Análise prévia dos fundamentos algébricos necessários para a manipulação logarítmica.
      </div>
      <div id="sun-shadow-interactive-mount"></div>

      <h3 class="section-title">1.2 Definição Formal e Condições de Existência</h3>
      <div class="math-block">
        $$\\Large \\log_a b = x \\iff a^x = b \\quad (a > 0, a \\neq 1, b > 0)$$
      </div>

      <h3 class="section-title">1.3 Propriedades Operatórias e Modelagem Tátil</h3>
      <div id="peteleco-interactive-mount"></div>

      <h3 class="section-title">1.4 Mudança de Base</h3>
      <div id="building-rule-interactive-mount"></div>

      <h3 class="section-title">Exercícios Resolvidos (ENEM e Processos Seletivos)</h3>
      <div id="exercises-cap1-mount"></div>
    `
  },

  cap2: {
    id: "cap2",
    tag: "Capítulo 2",
    title: "Funções Logarítmicas e Aplicações Práticas",
    subtitle: "Comportamento gráfico, monotonicidade e modelagem de fenômenos reais.",
    html: `
      <h3 class="section-title">2.1 Análise Gráfica da Função Logarítmica</h3>
      <div class="paragraph">
        Utilize o laboratório gráfico abaixo para observar o comportamento da função logarítmica em tempo real conforme a variação da base a.
      </div>
      <div id="chart-simulator-mount"></div>

      <h3 class="section-title">2.2 Simuladores de Aplicação Prática</h3>
      <div class="paragraph">
        Modelagem matemática aplicada a decibéis, datação por carbono-14 e escala Richter.
      </div>
      <div id="real-world-simulators-mount"></div>

      <h3 class="section-title">Exercícios Resolvidos (Aplicações Práticas)</h3>
      <div id="exercises-cap2-mount"></div>
    `
  },

  cap3: {
    id: "cap3",
    tag: "Capítulo 3",
    title: "Equações e Inequações Logarítmicas",
    subtitle: "Métodos de resolução analítica e restrições de domínio.",
    html: `
      <h3 class="section-title">3.1 Resolução de Equações Logarítmicas</h3>
      <div class="paragraph">
        Aplicação sistemática das propriedades operatórias e verificação obrigatória das condições de existência.
      </div>
      <div class="math-block">
        $$\\log_a(f(x)) = \\log_a(g(x)) \\implies f(x) = g(x) \\quad \\text{com } f(x)>0 \\text{ e } g(x)>0$$
      </div>

      <h3 class="section-title">3.2 Inequações Logarítmicas e a Influência da Base</h3>
      <div class="didactic-box attention">
        <div class="didactic-icon">!</div>
        <div class="didactic-content">
          <h4>Diretriz Analítica Fundamental</h4>
          <p>Para bases $a > 1$, a função é estritamente crescente e preserva-se a desigualdade dos logaritmandos ($f(x) < g(x)$). Para bases $0 < a < 1$, a função é decrescente e o sentido da desigualdade deve ser obrigatoriamente invertido ($f(x) > g(x)$).</p>
        </div>
      </div>

      <h3 class="section-title">Laboratório Analítico de Inequações (Dinâmico)</h3>
      <div class="paragraph">
        Insira um valor personalizado para a base $a$ e teste o comportamento da inequação em tempo real:
      </div>
      
      <div class="exercise-card">
        <div style="display: flex; gap: 1rem; align-items: center; margin-bottom: 1.2rem; flex-wrap: wrap;">
          <label style="font-weight: 700;">Digite o valor da base (a):</label>
          <input type="number" id="inputCustomBase" class="custom-number-input" value="2.0" step="0.1" min="0.1" max="10" style="width: 80px;">
          <button class="btn-action-primary" id="btnTestIneq">Testar Comportamento</button>
        </div>
        <div class="sim-output-badge" style="text-align: left; padding: 1.2rem;">
          <div id="ineqCustomTitle" style="font-weight: 700; color: var(--brand-primary); margin-bottom: 0.4rem;">Status para Base a = 2.0 (Crescente):</div>
          <div id="ineqCustomDesc" style="font-size: 1rem; color: var(--text-main);">
            $$\\log_{2}(x) > \\log_{2}(8) \\implies x > 8 \\quad (\\text{Mantém o sinal de desigualdade})$$
          </div>
        </div>
      </div>

      <h3 class="section-title">Exercícios Resolvidos (Equações e Inequações)</h3>
      <div id="exercises-cap3-mount"></div>
    `
  },

  games: {
    id: "games",
    tag: "Gamificação",
    title: "Central de Jogos e Atividades Interativas",
    subtitle: "Ambiente gamificado integrado para fixação de conceitos e avaliação formativa.",
    html: `
      <div id="native-quiz-mount"></div>

      <h3 class="section-title">Repositório Externo Complementar (Wordwall)</h3>
      <div class="paragraph">
        Atividades complementares desenvolvidas para suporte pedagógico adicional:
      </div>

      <div class="wordwall-cards-grid">
        <div class="wordwall-card">
          <span class="interactive-badge">Atividade 01</span>
          <h4 style="font-size: 1.1rem; font-weight: 700; margin: 0.5rem 0;">Propriedades Operatórias</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Correspondência de termos e simplificação algébrica.</p>
          <div class="wordwall-qr-container" id="qr-wordwall-1"></div>
          <a href="https://wordwall.net/pt/resource/exemplo-jogo-peteleco-logaritmos" target="_blank" rel="noopener noreferrer" class="btn-wordwall">
            Acessar Atividade Externa
          </a>
        </div>

        <div class="wordwall-card">
          <span class="interactive-badge" style="background: linear-gradient(135deg, #10b981, #06b6d4);">Atividade 02</span>
          <h4 style="font-size: 1.1rem; font-weight: 700; margin: 0.5rem 0;">Condições de Existência</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Validação rápida de bases e logaritmandos reais.</p>
          <div class="wordwall-qr-container" id="qr-wordwall-2"></div>
          <a href="https://wordwall.net/pt/resource/exemplo-roleta-bases-log" target="_blank" rel="noopener noreferrer" class="btn-wordwall">
            Acessar Atividade Externa
          </a>
        </div>

        <div class="wordwall-card">
          <span class="interactive-badge" style="background: linear-gradient(135deg, #8b5cf6, #ec4899);">Atividade 03</span>
          <h4 style="font-size: 1.1rem; font-weight: 700; margin: 0.5rem 0;">Modelagem Matemática</h4>
          <p style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Resolução de problemas aplicados à escala Richter e decibéis.</p>
          <div class="wordwall-qr-container" id="qr-wordwall-3"></div>
          <a href="https://wordwall.net/pt/resource/exemplo-labirinto-aplicacoes-log" target="_blank" rel="noopener noreferrer" class="btn-wordwall">
            Acessar Atividade Externa
          </a>
        </div>
      </div>
    `
  }
};

const EXERCISES_DATA = {
  cap1: [
    {
      id: "ex-cap1-1",
      source: "ENEM 2019",
      difficulty: "Intermediário",
      question: "Uma calculadora científica possui teclas especiais para logaritmo decimal ($\\log x$) e natural ($\\ln x$). Um estudante deseja calcular o valor aproximado de $\\log_2 5$. Considerando os dados aproximados $\\log_{10} 2 \\approx 0{,}30$ e $\\log_{10} 5 \\approx 0{,}70$, assinale a opção com o valor obtido:",
      options: ["1,42", "2,10", "2,33", "2,50", "3,00"],
      correctIndex: 2,
      steps: [
        { label: "Passo 1: Mudança de Base", content: "Aplicamos a fórmula da mudança de base:<br>$$\\log_2 5 = \\frac{\\log_{10} 5}{\\log_{10} 2}$$" },
        { label: "Passo 2: Divisão", content: "$$\\log_2 5 = \\frac{0{,}70}{0{,}30} \\approx 2{,}33$$" },
        { label: "Conclusão", content: "<strong>Gabarito: 2,33 (Alternativa C)</strong>." }
      ]
    },
    {
      id: "ex-cap1-2",
      source: "ENEM 2017",
      difficulty: "Fácil",
      question: "Para medir intensidade luminosa $I$, usa-se $L = \\log_{10}(I/I_0)$. Se a intensidade $I$ quadruplicar ($I = 4 I_0$), e considerando $\\log_{10} 2 \\approx 0{,}30$, o valor de $L$ será:",
      options: ["0,30", "0,60", "0,90", "1,20", "1,50"],
      correctIndex: 1,
      steps: [
        { label: "Passo 1: Substituição", content: "$$L = \\log_{10}(4) = \\log_{10}(2^2)$$" },
        { label: "Passo 2: Propriedade", content: "$$L = 2 \\cdot \\log_{10}(2) = 2 \\cdot 0{,}30 = 0{,}60$$" },
        { label: "Conclusão", content: "<strong>Gabarito: 0,60 (Alternativa B)</strong>." }
      ]
    },
    {
      id: "ex-cap1-3",
      source: "FUVEST",
      difficulty: "Avançado",
      question: "Sabendo que $\\log_{10} 2 = a$ e $\\log_{10} 3 = b$, o valor de $\\log_{10} 18$ expresso em função de $a$ e $b$ é:",
      options: ["a + b", "a + 2b", "2a + b", "a² · b", "a · b²"],
      correctIndex: 1,
      steps: [
        { label: "Passo 1: Fatoração", content: "$$18 = 2 \\cdot 3^2$$" },
        { label: "Passo 2: Propriedade Operatória", content: "$$\\log_{10}(2) + 2\\log_{10}(3) = a + 2b$$" },
        { label: "Conclusão", content: "<strong>Gabarito: a + 2b (Alternativa B)</strong>." }
      ]
    },
    {
      id: "ex-cap1-4",
      source: "UNICAMP",
      difficulty: "Intermediário",
      question: "Se $\\log_a b = 3$, o valor numérico da expressão $\\log_a(a^2 \\cdot b^3)$ equivale a:",
      options: ["5", "7", "9", "11", "13"],
      correctIndex: 3,
      steps: [
        { label: "Passo 1: Separação", content: "$$\\log_a(a^2) + \\log_a(b^3) = 2\\log_a(a) + 3\\log_a(b)$$" },
        { label: "Passo 2: Cálculo", content: "$$2(1) + 3(3) = 2 + 9 = 11$$" },
        { label: "Conclusão", content: "<strong>Gabarito: 11 (Alternativa D)</strong>." }
      ]
    }
  ],
  cap2: [
    {
      id: "ex-cap2-1",
      source: "ENEM 2020",
      difficulty: "Intermediário",
      question: "O nível sonoro $\\beta$, medido em decibéis (dB), é dado por $\\beta = 10 \\cdot \\log_{10}(I / I_0)$, onde $I_0 = 10^{-12} \\text{ W/m}^2$. Se um show gera uma intensidade sonora $I = 10^{-4} \\text{ W/m}^2$, o nível sonoro $\\beta$ medido é:",
      options: ["40 dB", "60 dB", "80 dB", "100 dB", "120 dB"],
      correctIndex: 2,
      steps: [
        { label: "Passo 1: Razão de Intensidade", content: "$$\\frac{I}{I_0} = \\frac{10^{-4}}{10^{-12}} = 10^{-4 - (-12)} = 10^8$$" },
        { label: "Passo 2: Logaritmo e Decibéis", content: "$$\\beta = 10 \\cdot \\log_{10}(10^8) = 10 \\cdot 8 = 80 \\text{ dB}$$" },
        { label: "Conclusão", content: "<strong>Gabarito: 80 dB (Alternativa C)</strong>." }
      ]
    },
    {
      id: "ex-cap2-2",
      source: "UNESP",
      difficulty: "Intermediário",
      question: "A magnitude $M$ de um terremoto na escala Richter se relaciona com a energia liberada $E$ (em Joules) pela equação $M = \\frac{2}{3} \\log_{10}(E / E_0)$, com $E_0 = 10^{4,5} \\text{ J}$. Para um sismo de magnitude $M = 7$, o valor da energia $E$ é:",
      options: ["10^10 J", "10^12 J", "10^15 J", "10^18 J", "10^20 J"],
      correctIndex: 2,
      steps: [
        { label: "Passo 1: Isolando o Logaritmo", content: "$$7 = \\frac{2}{3} \\log_{10}\\left(\\frac{E}{10^{4,5}}\\right) \\implies \\log_{10}\\left(\\frac{E}{10^{4,5}}\\right) = 10,5$$" },
        { label: "Passo 2: Definição de Logaritmo", content: "$$\\frac{E}{10^{4,5}} = 10^{10,5} \\implies E = 10^{10,5} \\cdot 10^{4,5} = 10^{15} \\text{ J}$$" },
        { label: "Conclusão", content: "<strong>Gabarito: 10^15 J (Alternativa C)</strong>." }
      ]
    }
  ],
  cap3: [
    {
      id: "ex-cap3-1",
      source: "ENEM 2018",
      difficulty: "Intermediário",
      question: "O pH de uma solução aquosa é dado por $\\text{pH} = -\\log_{10}[\\text{H}^+]$, em que $[\\text{H}^+]$ é a concentração de íons hidrogênio em mol/L. Se uma solução possui $\\text{pH} = 3$, e ao ser diluída sua concentração $[\\text{H}^+]$ é dividida por 100, o novo pH será igual a:",
      options: ["1", "2", "4", "5", "6"],
      correctIndex: 3,
      steps: [
        { label: "Passo 1: Concentração Inicial", content: "$$3 = -\\log_{10}[\\text{H}^+] \\implies [\\text{H}^+] = 10^{-3} \\text{ mol/L}$$" },
        { label: "Passo 2: Nova Concentração e pH", content: "$$[\\text{H}^+]_{\\text{novo}} = \\frac{10^{-3}}{100} = 10^{-5} \\implies \\text{pH} = -\\log_{10}(10^{-5}) = 5$$" },
        { label: "Conclusão", content: "<strong>Gabarito: pH = 5 (Alternativa D)</strong>." }
      ]
    },
    {
      id: "ex-cap3-2",
      source: "FUVEST",
      difficulty: "Avançado",
      question: "Considere a inequação logarítmica $\\log_{0,5}(x - 2) > -2$. O conjunto solução $S$ dessa inequação nos números reais é dado por:",
      options: ["x > 6", "2 < x < 6", "x < 6", "x > 2", "0 < x < 4"],
      correctIndex: 1,
      steps: [
        { label: "Passo 1: Condição de Existência (C.E.)", content: "$$x - 2 > 0 \\implies x > 2$$" },
        { label: "Passo 2: Inversão do Sinal (Base 0,5 < 1)", content: "Como a base é $0,5$ (entre 0 e 1), inverte-se a desigualdade:<br>$$x - 2 < (0,5)^{-2} \\implies x - 2 < 4 \\implies x < 6$$" },
        { label: "Passo 3: Intersecção com a C.E.", content: "Unindo $x > 2$ e $x < 6$, temos $2 < x < 6$.<br><strong>Gabarito: 2 < x < 6 (Alternativa B)</strong>." }
      ]
    }
  ]
};

const QUIZ_QUESTIONS = [
  {
    question: "Qual é o valor exato da expressão $\\log_3 81$?",
    options: ["2", "3", "4", "9"],
    correctIndex: 2,
    explanation: "Como $3^4 = 81$, conclui-se que o logaritmo vale 4."
  }
];

window.BOOK_CONTENT = BOOK_CONTENT;
window.EXERCISES_DATA = EXERCISES_DATA;
window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;