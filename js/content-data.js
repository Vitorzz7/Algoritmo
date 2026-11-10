/**
 * DESCOMPLICANDO OS LOGARITMOS - BANCO DE CONTEÚDO DIDÁTICO E QUESTÕES
 * Produto Educacional de Mestrado Profissional (PROFMAT)
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
        
        <div style="background: var(--bg-card); padding: 1.5rem; border-radius: var(--radius-md); max-width: 580px; margin: 0 auto; text-align: left; border: 1px solid var(--border-color);">
          <p style="margin-bottom: 0.5rem;"><strong>Orientador:</strong> Pedro Manuel Sanchez Aguilar</p>
          <p style="margin-bottom: 0.5rem;"><strong>Orientando:</strong> Alessandro Lauro Ferraz</p>
          <p style="margin-bottom: 0.5rem;"><strong>Diretrizes Técnicas:</strong> Padrão CAPES para Produtos Educacionais</p>
          <p style="margin-bottom: 0;"><strong>Programa:</strong> Mestrado Profissional em Ensino de Ciências e Matemática / PROFMAT</p>
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
          <p>Esta seção descreve formalmente o produto educacional desenvolvido pelo orientando Alessandro Lauro Ferraz sob a orientação de Pedro Manuel Sanchez Aguilar.</p>
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
          <strong>Orientador:</strong> Pedro Manuel Sanchez Aguilar.
        </li>
        <li style="padding: 0.8rem 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
          <strong>Orientando:</strong> Alessandro Lauro Ferraz.
        </li>
        <li style="padding: 0.8rem 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
          <strong>Categoria:</strong> Artefato Virtual Interativo (Aplicação Web Progressiva - PWA).
        </li>
        <li style="padding: 0.8rem 1rem; background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-sm);">
          <strong>Finalidade:</strong> Suporte pedagógico ao ensino de logaritmos por meio de modelagem visual, ferramentas dinâmicas e gamificação.
        </li>
      </ul>
    `
  },

  sumario: {
    id: "sumario",
    tag: "Sumário",
    title: "Sumário do Livro-Site",
    subtitle: "Estrutura modular dos conteúdos na ordem pedagógica ideal.",
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
            <span>Capítulo 2: Logaritmos Decimais e Neperianos (Base 10 e e)</span><span>Módulo 04</span>
          </li>
          <li style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem;">
            <span>Capítulo 3: Mudança de Base (A Regra do Prédio)</span><span>Módulo 05</span>
          </li>
          <li style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem;">
            <span>Capítulo 4: Funções Logarítmicas e Aplicações do Cotidiano</span><span>Módulo 06</span>
          </li>
          <li style="display: flex; justify-content: space-between; border-bottom: 1px dashed var(--border-color); padding-bottom: 0.5rem;">
            <span>Capítulo 5: Equações e Inequações Logarítmicas</span><span>Módulo 07</span>
          </li>
          <li style="display: flex; justify-content: space-between; padding-bottom: 0.5rem;">
            <span>Gamificação & Ambientes Interativos</span><span>Módulo 08</span>
          </li>
        </ul>
      </div>
    `
  },

  welcome: {
    id: "welcome",
    tag: "Apresentação Institucional",
    title: "Apresentação do Produto Educacional",
    subtitle: "Fundamentação Teórica, Metodologia Didática e Guia de Aprendizagem",
    html: `
      <!-- Hero de Boas-Vindas -->
      <div style="background: linear-gradient(135deg, rgba(79,70,229,0.12), rgba(6,182,212,0.12)); border: 2px solid var(--brand-primary); border-radius: var(--radius-lg); padding: 2rem; margin-bottom: 2rem; text-align: left;">
        <span class="interactive-badge" style="background: var(--brand-primary); color: #fff; margin-bottom: 0.8rem; display: inline-block;">
          Ensino Médio & Educação Superior
        </span>
        <h3 style="font-size: 1.8rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.8rem;">
          Descomplicando os Logaritmos: Uma Abordagem Visual e Gamificada
        </h3>
        <p style="font-size: 1.05rem; line-height: 1.7; color: var(--text-main); margin: 0;">
          Bem-vindo(a) ao eBook <strong>"Descomplicando os Logaritmos"</strong>! Sabendo que a palavra "logaritmo" frequentemente causa receio nos estudantes, este Produto Educacional foi concebido para demonstrar que a matemática pode ser intuitiva, leve e profundamente contextualizada. Este guia conduz o leitor desde os alicerces fundamentais da potenciação até a modelagem de fenômenos reais e tópicos avançados.
        </p>
      </div>

      <!-- Pilares Didáticos em Grid -->
      <h3 class="section-title">Pilares Metodológicos do Produto</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 1.2rem; margin-bottom: 2.5rem;">
        
        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.4rem; border-left: 4.5px solid var(--brand-primary);">
          <div style="font-size: 1.6rem; margin-bottom: 0.4rem;">🎯</div>
          <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem; color: var(--brand-primary);">Rigor & Intuição</h4>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.5; margin: 0;">
            Harmonização entre a formalização matemática clássica e representações visuais táteis para facilitar a assimilação de conceitos abstratos.
          </p>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.4rem; border-left: 4.5px solid #10b981;">
          <div style="font-size: 1.6rem; margin-bottom: 0.4rem;">🧩</div>
          <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem; color: #10b981;">Gamificação Ativa</h4>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.5; margin: 0;">
            Integração de simuladores interativos no próprio código do site combinada a desafios dinâmicos com QR Codes vinculados ao Wordwall.
          </p>
        </div>

        <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.4rem; border-left: 4.5px solid #ec4899;">
          <div style="font-size: 1.6rem; margin-bottom: 0.4rem;">📊</div>
          <h4 style="font-size: 1.1rem; font-weight: 700; margin-bottom: 0.4rem; color: #ec4899;">Contextualização Real</h4>
          <p style="font-size: 0.92rem; color: var(--text-muted); line-height: 1.5; margin: 0;">
            Aplicações práticas diretas na Escala Richter (sismologia), cálculo de decibéis (acústica), pH de soluções e datação por Carbono-14.
          </p>
        </div>

      </div>

      <!-- Trilha de Aprendizagem Modular -->
      <h3 class="section-title">Estrutura Sequencial dos Capítulos</h3>
      <div style="display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2.5rem;">
        
        <div style="display: flex; gap: 1.2rem; align-items: flex-start; background: var(--bg-card); border: 1px solid var(--border-color); padding: 1.2rem; border-radius: var(--radius-md);">
          <div style="background: rgba(79,70,229,0.15); color: var(--brand-primary); font-weight: 800; padding: 0.6rem 1rem; border-radius: var(--radius-sm); font-size: 1.1rem; min-width: 70px; text-align: center;">
            CAP 1
          </div>
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.3rem;">Alicerce, Definições e Propriedades Operatórias</h4>
            <p style="font-size: 0.93rem; color: var(--text-muted); margin: 0; line-height: 1.5;">
              Revisão essencial de Potenciação e Radiciação. Estabelecimento formal do conceito de logaritmo, antilogaritmo, condições de existência e dedução das propriedades do produto, quociente e potência.
            </p>
          </div>
        </div>

        <div style="display: flex; gap: 1.2rem; align-items: flex-start; background: var(--bg-card); border: 1px solid var(--border-color); padding: 1.2rem; border-radius: var(--radius-md);">
          <div style="background: rgba(6,182,212,0.15); color: #06b6d4; font-weight: 800; padding: 0.6rem 1rem; border-radius: var(--radius-sm); font-size: 1.1rem; min-width: 70px; text-align: center;">
            CAP 2
          </div>
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.3rem;">Logaritmos Decimais e Neperianos (Bases Especiais)</h4>
            <p style="font-size: 0.93rem; color: var(--text-muted); margin: 0; line-height: 1.5;">
              Estudo detalhado das bases mais empregadas no mundo científico: a Base 10 ($\log$) e o Logaritmo Natural com a Constante de Euler ($\ln$), acompanhado do resgate histórico sobre a criação das Tábuas e da Régua de Cálculo.
            </p>
          </div>
        </div>

        <div style="display: flex; gap: 1.2rem; align-items: flex-start; background: var(--bg-card); border: 1px solid var(--border-color); padding: 1.2rem; border-radius: var(--radius-md);">
          <div style="background: rgba(16,185,129,0.15); color: #10b981; font-weight: 800; padding: 0.6rem 1rem; border-radius: var(--radius-sm); font-size: 1.1rem; min-width: 70px; text-align: center;">
            CAP 3
          </div>
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.3rem;">Mudança de Base e Estratégias Simplificadoras</h4>
            <p style="font-size: 0.93rem; color: var(--text-muted); margin: 0; line-height: 1.5;">
              Técnicas algébricas para converter expressões com bases distintas através de um método visual e intuitivo (A Regra do Prédio), otimizando o tempo de resolução em exames.
            </p>
          </div>
        </div>

        <div style="display: flex; gap: 1.2rem; align-items: flex-start; background: var(--bg-card); border: 1px solid var(--border-color); padding: 1.2rem; border-radius: var(--radius-md);">
          <div style="background: rgba(245,158,11,0.15); color: #f59e0b; font-weight: 800; padding: 0.6rem 1rem; border-radius: var(--radius-sm); font-size: 1.1rem; min-width: 70px; text-align: center;">
            CAP 4
          </div>
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.3rem;">Funções Logarítmicas e Modelagem do Cotidiano</h4>
            <p style="font-size: 0.93rem; color: var(--text-muted); margin: 0; line-height: 1.5;">
              Estudo do comportamento gráfico $f(x) = \\log_a(x)$, análise de monotonicidade (funções crescentes e decrescentes), relação de inversibilidade com a função exponencial e simulação de modelos científicos reais.
            </p>
          </div>
        </div>

        <div style="display: flex; gap: 1.2rem; align-items: flex-start; background: var(--bg-card); border: 1px solid var(--border-color); padding: 1.2rem; border-radius: var(--radius-md);">
          <div style="background: rgba(236,72,153,0.15); color: #ec4899; font-weight: 800; padding: 0.6rem 1rem; border-radius: var(--radius-sm); font-size: 1.1rem; min-width: 70px; text-align: center;">
            CAP 5
          </div>
          <div>
            <h4 style="font-size: 1.05rem; font-weight: 700; margin-bottom: 0.3rem;">Equações, Inequações e Resoluções Vestibulares</h4>
            <p style="font-size: 0.93rem; color: var(--text-muted); margin: 0; line-height: 1.5;">
              Métodos rigorosos de resolução analítica de equações e inequações, com foco rigoroso na validação das Condições de Existência (C.E.) e seleção de questões de exames renomados (ENEM, FUVEST, UNICAMP).
            </p>
          </div>
        </div>

      </div>

      <!-- Card de Recursos Didáticos de Destaque -->
      <div style="background: var(--bg-card); border: 1px solid var(--border-color); border-radius: var(--radius-md); padding: 1.6rem; margin-bottom: 2rem;">
        <h4 style="font-size: 1.15rem; font-weight: 700; color: var(--brand-primary); margin-bottom: 1rem; display: flex; align-items: center; gap: 0.5rem;">
          <span>💡</span> Recursos Mnemônicos e Tecnologia Assistiva
        </h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 1rem;">
          <div style="padding: 0.8rem; background: var(--bg-main); border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
            <strong>Regra do Sol e da Sombra:</strong> Mnemônica para conversão rápida entre radicais e potências de expoente fracionário.
          </div>
          <div style="padding: 0.8rem; background: var(--bg-main); border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
            <strong>Regra do Peteleco:</strong> Modelagem visual para o deslocamento do expoente do logaritmando para o coeficiente multiplicativo.
          </div>
          <div style="padding: 0.8rem; background: var(--bg-main); border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
            <strong>Regra do Prédio:</strong> Algoritmo espacial para memorização da fórmula de mudança de base (cobertura e subsolo).
          </div>
          <div style="padding: 0.8rem; background: var(--bg-main); border-radius: var(--radius-sm); border: 1px solid var(--border-color);">
            <strong>Gabaritos Interativos:</strong> Resoluções detalhadas ocultas em acordeões expansíveis com renderização matemática via KaTeX.
          </div>
        </div>
      </div>

      <!-- Encerramento da Apresentação -->
      <div style="text-align: center; padding: 1.8rem; background: linear-gradient(135deg, rgba(79,70,229,0.06), rgba(16,185,129,0.06)); border-radius: var(--radius-md); border: 1px dashed var(--brand-primary);">
        <p style="font-size: 1.15rem; font-weight: 700; color: var(--brand-primary); margin-bottom: 0.3rem;">
          Prepare-se para dominar os logaritmos de forma eficiente, rigorosa e divertida!
        </p>
        <span style="font-size: 0.95rem; color: var(--text-muted);">
          Bons estudos e excelente jornada de aprendizagem!
        </span>
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

      <h3 class="section-title">1.3 Propriedades Operatórias Fundamentais</h3>
      <div class="paragraph">
        As propriedades operatórias decorrem das leis da potenciação e servem para simplificar expressões:
      </div>

      <div class="didactic-box tip">
        <div class="didactic-icon">📌</div>
        <div class="didactic-content">
          <h4>I. Logaritmo do Produto</h4>
          <p>$$\\log_a (x \\cdot y) = \\log_a x + \\log_a y$$</p>
        </div>
      </div>

      <div class="didactic-box tip">
        <div class="didactic-icon">📌</div>
        <div class="didactic-content">
          <h4>II. Logaritmo do Quociente</h4>
          <p>$$\\log_a \\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$$</p>
        </div>
      </div>

      <div class="didactic-box tip">
        <div class="didactic-icon">📌</div>
        <div class="didactic-content">
          <h4>III. Logaritmo da Potência (Regra do Peteleco)</h4>
          <p>$$\\log_a (x^n) = n \\cdot \\log_a x$$</p>
        </div>
      </div>

      <h3 class="section-title">1.4 Laboratório Tátil do Peteleco</h3>
      <div id="peteleco-interactive-mount"></div>

      <h3 class="section-title">Exercícios Resolvidos (Propriedades Básicas)</h3>
      <div id="exercises-cap1-mount"></div>
    `
  },

  cap2: {
    id: "cap2",
    tag: "Capítulo 2",
    title: "Logaritmos Decimais e Neperianos",
    subtitle: "As bases mais importantes da ciência: Base 10 e a Constante de Euler e.",
    html: `
      <h3 class="section-title">2.1 O Logaritmo Decimal (Base 10)</h3>
      <div class="paragraph">
        Quando a base de um logaritmo não é escrita explicitamente, conveniciona-se que a base é <strong>10</strong>:
      </div>
      <div class="math-block">
        $$\\log_{10} x = \\log x$$
      </div>

      <h3 class="section-title">2.2 O Logaritmo Natural ou Neperiano (Base e)</h3>
      <div class="paragraph">
        Logaritmos neperianos utilizam como base a constante de Euler $e \\approx 2{,}71828$, representados por $\\ln$:
      </div>
      <div class="math-block">
        $$\\log_e x = \\ln x$$
      </div>

      <div class="didactic-box tip">
        <div class="didactic-icon">📜</div>
        <div class="didactic-content">
          <h4>Revolução Histórica e a Régua de Cálculo</h4>
          <p>Inventados por John Napier, os logaritmos transformaram multiplicações complexas em simples somas. Essa propriedade permitiu a criação da <strong>Régua de Cálculo</strong> no século XVII, utilizada até o programa espacial Apollo da NASA.</p>
        </div>
      </div>

      <h3 class="section-title">Exercícios Resolvidos (Logaritmos Decimais e Neperianos)</h3>
      <div id="exercises-cap2-mount"></div>
    `
  },

  cap3: {
    id: "cap3",
    tag: "Capítulo 3",
    title: "Mudança de Base",
    subtitle: "Técnicas algébricas para conversão de bases de forma intuitiva.",
    html: `
      <h3 class="section-title">3.1 A Fórmula de Mudança de Base</h3>
      <div class="paragraph">
        Para alterar a base de um logaritmo $\\log_a b$ para uma nova base $c$, utiliza-se a relação:
      </div>
      <div class="math-block">
        $$\\log_a b = \\frac{\\log_c b}{\\log_c a}$$
      </div>

      <h3 class="section-title">3.2 O Elevador Matemático (A Regra do Prédio)</h3>
      <div class="paragraph">
        O logaritmando $b$ sobe de elevador para a Cobertura (numerador) e a base antiga $a$ desce para o Subsolo (denominador), ambos na nova base $c$:
      </div>
      <div id="building-rule-interactive-mount"></div>

      <h3 class="section-title">Exercícios Resolvidos (Mudança de Base)</h3>
      <div id="exercises-cap3-mount"></div>
    `
  },

  cap4: {
    id: "cap4",
    tag: "Capítulo 4",
    title: "Funções Logarítmicas e Aplicações Práticas",
    subtitle: "Análise gráfica, monotonicidade e modelagem de fenômenos reais.",
    html: `
      <h3 class="section-title">4.1 Análise Gráfica da Função Logarítmica</h3>
      <div class="paragraph">
        Utilize o laboratório gráfico abaixo para observar o comportamento da função logarítmica em tempo real conforme a variação da base a:
      </div>
      <div id="chart-simulator-mount"></div>

      <h3 class="section-title">4.2 Simuladores de Aplicação Prática</h3>
      <div class="paragraph">
        Modelagem matemática aplicada a decibéis, datação por carbono-14 e escala Richter:
      </div>
      <div id="real-world-simulators-mount"></div>

      <h3 class="section-title">Exercícios Resolvidos (Aplicações)</h3>
      <div id="exercises-cap4-mount"></div>
    `
  },

  cap5: {
    id: "cap5",
    tag: "Capítulo 5",
    title: "Equações e Inequações Logarítmicas",
    subtitle: "Métodos de resolução analítica e restrições de domínio.",
    html: `
      <h3 class="section-title">5.1 Resolução de Equações Logarítmicas</h3>
      <div class="math-block">
        $$\\log_a(f(x)) = \\log_a(g(x)) \\implies f(x) = g(x) \\quad (f(x)>0, g(x)>0)$$
      </div>

      <h3 class="section-title">5.2 Inequações e a Influência da Base</h3>
      <div class="didactic-box attention">
        <div class="didactic-icon">!</div>
        <div class="didactic-content">
          <h4>Regra de Inversão do Sinal</h4>
          <p>Para $a > 1$, mantém-se o sinal da desigualdade. Para $0 < a < 1$, o sinal da desigualdade <strong>deve ser invertido</strong>.</p>
        </div>
      </div>

      <h3 class="section-title">Laboratório Analítico de Inequações</h3>
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
      <div id="exercises-cap5-mount"></div>
    `
  },

  games: {
    id: "games",
    tag: "Gamificação",
    title: "Central de Jogos e Atividades Interativas",
    subtitle: "Ambiente gamificado integrado para fixação de conceitos e avaliação formativa.",
    html: `
      <h3 class="section-title">Repositório Externo Complementar (Wordwall)</h3>
      <div class="paragraph">
        Atividades complementares desenvolvidas para suporte pedagógico adicional via QR Code:
      </div>

      <div class="wordwall-cards-grid">
        <div class="wordwall-card">
          <span class="interactive-badge">Atividade 01</span>
          <h4 style="font-size: 1.1rem; font-weight: 700; margin: 0.5rem 0;">Propriedades Operatórias</h4>
          <div class="wordwall-qr-container" id="qr-wordwall-1"></div>
          <a href="https://wordwall.net/pt/resource/exemplo-jogo-peteleco-logaritmos" target="_blank" rel="noopener noreferrer" class="btn-wordwall">Acessar Atividade</a>
        </div>

        <div class="wordwall-card">
          <span class="interactive-badge" style="background: linear-gradient(135deg, #10b981, #06b6d4);">Atividade 02</span>
          <h4 style="font-size: 1.1rem; font-weight: 700; margin: 0.5rem 0;">Condições de Existência</h4>
          <div class="wordwall-qr-container" id="qr-wordwall-2"></div>
          <a href="https://wordwall.net/pt/resource/exemplo-roleta-bases-log" target="_blank" rel="noopener noreferrer" class="btn-wordwall">Acessar Atividade</a>
        </div>

        <div class="wordwall-card">
          <span class="interactive-badge" style="background: linear-gradient(135deg, #8b5cf6, #ec4899);">Atividade 03</span>
          <h4 style="font-size: 1.1rem; font-weight: 700; margin: 0.5rem 0;">Modelagem Matemática</h4>
          <div class="wordwall-qr-container" id="qr-wordwall-3"></div>
          <a href="https://wordwall.net/pt/resource/exemplo-labirinto-aplicacoes-log" target="_blank" rel="noopener noreferrer" class="btn-wordwall">Acessar Atividade</a>
        </div>
      </div>
    `
  }
};

const EXERCISES_DATA = {
  cap1: [
    {
      id: "ex-cap1-1",
      source: "ENEM 2017",
      difficulty: "Fácil",
      question: "Para medir a intensidade luminosa $I$, usa-se $L = \\log_{10}(I/I_0)$. Se a intensidade $I$ quadruplicar ($I = 4 I_0$), e considerando $\\log_{10} 2 \\approx 0{,}30$, o valor do novo nível $L$ será igual a:",
      options: ["0,30", "0,60", "0,90", "1,20", "1,50"],
      correctIndex: 1,
      steps: [
        { label: "Passo 1: Substituição na Fórmula", content: "$$L = \\log_{10}(4) = \\log_{10}(2^2)$$" },
        { label: "Passo 2: Aplicação da Regra do Peteleco", content: "$$L = 2 \\cdot \\log_{10}(2) = 2 \\cdot 0{,}30 = 0{,}60$$" },
        { label: "Conclusão", content: "<strong>Gabarito: 0,60 (Alternativa B)</strong>." }
      ]
    },
    {
      id: "ex-cap1-2",
      source: "UNICAMP",
      difficulty: "Intermediário",
      question: "Se $\\log_a b = 3$, o valor numérico da expressão algébrica $\\log_a(a^2 \\cdot b^3)$ equivale a:",
      options: ["5", "7", "9", "11", "13"],
      correctIndex: 3,
      steps: [
        { label: "Passo 1: Propriedade do Produto", content: "$$\\log_a(a^2 \\cdot b^3) = \\log_a(a^2) + \\log_a(b^3)$$" },
        { label: "Passo 2: Regra do Peteleco e Substituição", content: "$$2 \\cdot \\log_a(a) + 3 \\cdot \\log_a(b) = 2(1) + 3(3) = 2 + 9 = 11$$" },
        { label: "Conclusão", content: "<strong>Gabarito: 11 (Alternativa D)</strong>." }
      ]
    }
  ],

  cap2: [
    {
      id: "ex-cap2-1",
      source: "ENEM 2017",
      difficulty: "Intermediário",
      question: "Em um estudo sobre acidez do solo, o pH é calculated por $\\text{pH} = -\\log_{10}[\\text{H}^+]$. Sabendo que uma amostra de solo apresentou concentração de íons hidrogênio $[\\text{H}^+] = 10^{-5} \\text{ mol/L}$, determine o pH dessa amostra:",
      options: ["2", "3", "5", "7", "10"],
      correctIndex: 2,
      steps: [
        { label: "Passo 1: Substituição na Fórmula", content: "$$\\text{pH} = -\\log_{10}(10^{-5})$$" },
        { label: "Passo 2: Regra do Peteleco com Logaritmo Decimal", content: "$$\\text{pH} = -(-5) \\cdot \\log_{10}(10) = 5 \\cdot 1 = 5$$" },
        { label: "Conclusão", content: "<strong>Gabarito: 5 (Alternativa C)</strong>." }
      ]
    },
    {
      id: "ex-cap2-2",
      source: "UNICAMP",
      difficulty: "Intermediário",
      question: "O crescimento de uma cultura de bactérias é modelado por $N(t) = N_0 \\cdot e^{0{,}4 t}$, em que $t$ é medido em horas. O tempo $t$ necessário para que a população inicial $N_0$ triplique ($N(t) = 3 N_0$), expresso em termos de logaritmo natural ($\\ln$), é:",
      options: ["t = 2,5 · ln(3)", "t = 0,4 · ln(3)", "t = ln(3) / 2,5", "t = 3 · ln(0,4)", "t = ln(0,4) / 3"],
      correctIndex: 0,
      steps: [
        { label: "Passo 1: Igualando a População", content: "$$3 N_0 = N_0 \\cdot e^{0{,}4 t} \\implies e^{0{,}4 t} = 3$$" },
        { label: "Passo 2: Aplicando Logaritmo Natural (ln) dos dois lados", content: "$$\\ln(e^{0{,}4 t}) = \\ln(3) \\implies 0{,}4 t = \\ln(3)$$" },
        { label: "Passo 3: Isolando o Tempo", content: "$$t = \\frac{\\ln(3)}{0{,}4} = \\frac{\\ln(3)}{2/5} = 2{,}5 \\cdot \\ln(3)$$" },
        { label: "Conclusão", content: "<strong>Gabarito: t = 2,5 · ln(3) (Alternativa A)</strong>." }
      ]
    }
  ],

  cap3: [
    {
      id: "ex-cap3-1",
      source: "ENEM 2019",
      difficulty: "Intermediário",
      question: "Uma calculadora científica possui teclas especiais para logaritmo decimal ($\\log x$) e natural ($\\ln x$). Um estudante deseja calcular o valor aproximado de $\\log_2 5$. Considerando os dados aproximados $\\log_{10} 2 \\approx 0{,}30$ e $\\log_{10} 5 \\approx 0{,}70$, assinale a opção com o valor obtido:",
      options: ["1,42", "2,10", "2,33", "2,50", "3,00"],
      correctIndex: 2,
      steps: [
        { label: "Passo 1: Aplicação da Mudança de Base para 10", content: "$$\\log_2 5 = \\frac{\\log_{10} 5}{\\log_{10} 2}$$" },
        { label: "Passo 2: Divisão dos Valores Dados", content: "$$\\log_2 5 = \\frac{0{,}70}{0{,}30} = \\frac{7}{3} \\approx 2{,}33$$" },
        { label: "Conclusão", content: "<strong>Gabarito: 2,33 (Alternativa C)</strong>." }
      ]
    },
    {
      id: "ex-cap3-2",
      source: "FUVEST",
      difficulty: "Avançado",
      question: "Sabendo que $\\log_{10} 2 = a$ e $\\log_{10} 3 = b$, o valor de $\\log_{10} 18$ expresso em função de $a$ e $b$ equivale a:",
      options: ["a + b", "a + 2b", "2a + b", "a² · b", "a · b²"],
      correctIndex: 1,
      steps: [
        { label: "Passo 1: Fatoração em Primos", content: "$$18 = 2 \\cdot 3^2$$" },
        { label: "Passo 2: Propriedades de Produto e Potência", content: "$$\\log_{10}(18) = \\log_{10}(2 \\cdot 3^2) = \\log_{10}(2) + \\log_{10}(3^2) = \\log_{10}(2) + 2 \\log_{10}(3)$$" },
        { label: "Passo 3: Substituição das Variáveis", content: "$$\\log_{10}(18) = a + 2b$$" },
        { label: "Conclusão", content: "<strong>Gabarito: a + 2b (Alternativa B)</strong>." }
      ]
    }
  ],

  cap4: [
    {
      id: "ex-cap4-1",
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
      id: "ex-cap4-2",
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

  cap5: [
    {
      id: "ex-cap5-1",
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
      id: "ex-cap5-2",
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

const QUIZ_QUESTIONS = [];

window.BOOK_CONTENT = BOOK_CONTENT;
window.EXERCISES_DATA = EXERCISES_DATA;
window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;