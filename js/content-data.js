/**
 * DESCOMPLICANDO OS LOGARITMOS - BANCO DE CONTEÚDO DIDÁTICO E QUESTÕES
 * Conteúdo pedagógico detalhado para Ensino Médio e PROFMAT.
 */

const BOOK_CONTENT = {
  // =========================================================================
  // APRESENTAÇÃO & BOAS-VINDAS
  // =========================================================================
  welcome: {
    id: "welcome",
    tag: "Introdução",
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

      <h3 class="section-title">Como Navegar por este Livro-Site Interativo</h3>
      <div class="paragraph">
        Este e-book não foi feito apenas para ser lido; ele foi construído para você <strong>interagir, tocar e experimentar</strong>:
      </div>
      <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.6rem;">
        <li>💥 <strong>Animações de Fórmulas:</strong> Teste o famoso <em>"Peteleco"</em>, a <em>"Regra do Sol e da Sombra"</em> e o elevador da <em>"Regra do Prédio"</em>.</li>
        <li>📊 <strong>Laboratório Gráfico:</strong> Mova o controle deslizante da base para ver as curvas se transformando ao vivo.</li>
        <li>🌍 <strong>Simuladores da Vida Real:</strong> Calcule o barulho de uma turbina em Decibéis, a idade de um fóssil com Carbono-14 e a força de um terremoto.</li>
        <li>📝 <strong>Gabarito Sanfona:</strong> Resolva questões de vestibulares e do ENEM e abra o passo a passo apenas quando quiser conferir.</li>
        <li>🎮 <strong>Modo Game:</strong> Teste seus reflexos matemáticos no Quiz integrado e nas atividades do Wordwall.</li>
      </ul>

      <div class="didactic-box warning">
        <div class="didactic-icon">🚀</div>
        <div class="didactic-content">
          <h4>Pronto para o Alicerce?</h4>
          <p>Clique no botão <strong>"Próximo: Capítulo 1"</strong> logo abaixo ou use o menu lateral para iniciar nossa construção matemática!</p>
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
      <div class="paragraph">
        As propriedades básicas que você nunca pode esquecer:
      </div>
      <ul style="margin-left: 1.5rem; margin-bottom: 1.2rem; display: flex; flex-direction: column; gap: 0.4rem;">
        <li>Produto de mesma base: $a^m \\cdot a^n = a^{m+n}$</li>
        <li>Quociente de mesma base: $\\frac{a^m}{a^n} = a^{m-n}$ $(a \\neq 0)$</li>
        <li>Potência de potência: $(a^m)^n = a^{m \\cdot n}$</li>
        <li>Expoente zero: $a^0 = 1$ $(a \\neq 0)$</li>
        <li>Expoente negativo: $a^{-n} = \\frac{1}{a^n}$ $\\left(\\text{Ex: } 2^{-3} = \\frac{1}{2^3} = \\frac{1}{8}\\right)$</li>
      </ul>

      <!-- COMPONENTE INTERATIVO: SOL E SOMBRA -->
      <h3 class="section-title">1.2 Radiciação: A Regra do Sol e da Sombra ☀️🏠</h3>
      <div class="paragraph">
        Como converter uma raiz em uma potência fracionária sem nunca mais se confundir? Use a mnemônica visual do <strong>Sol e da Sombra</strong>: o radical funciona como uma casinha com telhado.
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
          <h4>Condições de Existência (C.E.) — Onde todo mundo escorrega no ENEM!</h4>
          <p>Para que o símbolo $\\log_a b$ tenha sentido matemático real, precisamos respeitar rigorosamente 3 condições:</p>
          <ul style="margin-top: 0.4rem; margin-left: 1rem;">
            <li><strong>Logaritmando positivo:</strong> $b > 0$ (não existe logaritmo de zero ou de número negativo nos reais!).</li>
            <li><strong>Base positiva:</strong> $a > 0$.</li>
            <li><strong>Base diferente de 1:</strong> $a \\neq 1$ (porque $1^x$ sempre seria 1, tornando impossível obter outros valores).</li>
          </ul>
        </div>
      </div>

      <h4 class="subsection-title">Antilogaritmo e Cologaritmo</h4>
      <div class="paragraph">
        Dois termos que assustam pelo nome pomposo, mas que são fáceis demais:
      </div>
      <ul style="margin-left: 1.5rem; margin-bottom: 1.2rem; display: flex; flex-direction: column; gap: 0.5rem;">
        <li><strong>Antilogaritmo:</strong> É simplesmente a operação inversa direta. $\\operatorname{antilog}_a(x) = b \\iff a^x = b$. Exemplo: $\\operatorname{antilog}_2(3) = 2^3 = 8$.</li>
        <li><strong>Cologaritmo:</strong> É o logaritmo com sinal trocado (o oposto). $\\operatorname{colog}_a(b) = -\\log_a(b) = \\log_a\\left(\\frac{1}{b}\\right)$.</li>
      </ul>

      <!-- COMPONENTE INTERATIVO: PETELECO -->
      <h3 class="section-title">1.4 Propriedades Operatórias</h3>
      <div class="paragraph">
        Sob as condições de existência ($a > 0$, $a \\neq 1$, $x > 0$, $y > 0$):
      </div>
      <ul style="margin-left: 1.5rem; margin-bottom: 1.2rem; display: flex; flex-direction: column; gap: 0.6rem;">
        <li><strong>1. Logaritmo do Produto:</strong> $\\log_a(x \\cdot y) = \\log_a x + \\log_a y$</li>
        <li><strong>2. Logaritmo do Quociente:</strong> $\\log_a\\left(\\frac{x}{y}\\right) = \\log_a x - \\log_a y$</li>
        <li><strong>3. Logaritmo da Potência (A Famosa Regra do Peteleco!):</strong> $\\log_a(b^n) = n \\cdot \\log_a b$</li>
      </ul>

      <div id="peteleco-interactive-mount"></div>

      <!-- COMPONENTE INTERATIVO: REGRA DO PRÉDIO -->
      <h3 class="section-title">1.5 Mudança de Base: A Regra do Prédio 🏢🛗</h3>
      <div class="paragraph">
        E quando você tem um logaritmo na base 2, mas sua calculadora só calcula na base 10? É aqui que usamos a <strong>Mudança de Base</strong>:
      </div>

      <div id="building-rule-interactive-mount"></div>

      <!-- SEÇÃO ENEM & VESTIBULARES CAP. 1 -->
      <h3 class="section-title">Seção ENEM & Vestibulares (Capítulo 1)</h3>
      <div class="paragraph">
        Chegou a hora de ver essas propriedades funcionando em questões reais. Tente resolver sozinho(a) antes de abrir a sanfona do gabarito!
      </div>

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
    subtitle: "O comportamento dinâmico da curva logarítmica e como ela governa desde os abalos sísmicos até o som dos nossos fones de ouvido.",
    html: `
      <h3 class="section-title">2.1 A Função Logarítmica e seu Comportamento</h3>
      <div class="paragraph">
        Seja $a$ um número real positivo e diferente de 1. A função $f: \\mathbb{R}_+^* \\to \\mathbb{R}$ definida por $f(x) = \\log_a x$ é chamada de <strong>função logarítmica</strong>.
      </div>
      <ul style="margin-left: 1.5rem; margin-bottom: 1.2rem; display: flex; flex-direction: column; gap: 0.4rem;">
        <li><strong>Domínio:</strong> $\\text{Dom}(f) = \\{x \\in \\mathbb{R} \\mid x > 0\\}$ (o gráfico nunca encosta nem passa para a esquerda do eixo $y$).</li>
        <li><strong>Imagem:</strong> $\\text{Im}(f) = \\mathbb{R}$ (o gráfico cobre todo o eixo vertical, de $-\\infty$ a $+\\infty$).</li>
        <li><strong>Raiz da função:</strong> O ponto $(1, 0)$ é obrigatório para qualquer base, pois $\\log_a 1 = 0$.</li>
        <li><strong>Assíntota Vertical:</strong> A reta $x = 0$ (o eixo das ordenadas). Quando $x \\to 0^+$, os valores mergulham para o infinito!</li>
      </ul>

      <!-- COMPONENTE INTERATIVO: LABORATÓRIO GRÁFICO -->
      <div id="chart-simulator-mount"></div>

      <h3 class="section-title">2.2 Aplicações Práticas no Cotidiano (Simuladores Interativos)</h3>
      <div class="paragraph">
        Por que usamos logaritmos na vida prática? Porque nossos sentidos humanos (audição, percepção de luminosidade, sensibilidade a abalos) não reagem de forma linear, mas sim de forma <strong>logarítmica</strong> (Lei de Weber-Fechner).
      </div>

      <!-- SIMULADORES DO COTIDIANO -->
      <div id="real-world-simulators-mount"></div>

      <!-- SEÇÃO ENEM & VESTIBULARES CAP. 2 -->
      <h3 class="section-title">Seção ENEM & Vestibulares (Capítulo 2)</h3>
      <div class="paragraph">
        Veja como esses contextos do cotidiano caem frequentemente nas provas do ENEM:
      </div>

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
    subtitle: "Dominando as técnicas de resolução passo a passo e o cuidado crucial com o sentido da desigualdade.",
    html: `
      <h3 class="section-title">3.1 Equações Logarítmicas: Os 3 Tipos Clássicos</h3>
      <div class="paragraph">
        Uma equação logarítmica é aquela em que a incógnita aparece no logaritmando ou na base. Praticamente todas as questões se reduzem a um destes 3 modelos fundamentais:
      </div>

      <div class="didactic-box tip">
        <div class="didactic-icon">1️⃣</div>
        <div class="didactic-content">
          <h4>Tipo 1: Igualdade de Logaritmos de Mesma Base</h4>
          <p>$$\\log_a f(x) = \\log_a g(x) \\implies f(x) = g(x)$$</p>
          <p><em>Estratégia:</em> Igualamos os logaritmandos diretamente e depois verificamos as Condições de Existência ($f(x) > 0$ e $g(x) > 0$).</p>
        </div>
      </div>

      <div class="didactic-box success">
        <div class="didactic-icon">2️⃣</div>
        <div class="didactic-content">
          <h4>Tipo 2: Logaritmo Igual a um Número Real</h4>
          <p>$$\\log_a f(x) = b \\implies f(x) = a^b$$</p>
          <p><em>Estratégia:</em> Aplicamos a definição básica da "voltinha" exponencial. Como $a^b > 0$, a condição de existência já fica automaticamente garantida!</p>
        </div>
      </div>

      <div class="didactic-box warning">
        <div class="didactic-icon">3️⃣</div>
        <div class="didactic-content">
          <h4>Tipo 3: Mudança de Variável (Incógnita Auxiliar)</h4>
          <p>Quando a equação apresenta termos como $(\\log_a x)^2 + 3 \\cdot \\log_a x - 4 = 0$.</p>
          <p><em>Estratégia:</em> Fazemos a substituição $y = \\log_a x$, transformando o problema em uma equação do 2º grau simples $y^2 + 3y - 4 = 0$. Após encontrar os valores de $y$, voltamos para achar $x$!</p>
        </div>
      </div>

      <h3 class="section-title">3.2 Inequações Logarítmicas: A Regra de Ouro da Base!</h3>
      <div class="paragraph">
        Aqui está a principal pegadinha das bancas examinadoras. A direção da desigualdade <strong>depende exclusivamente do valor da base $a$</strong>:
      </div>

      <div class="didactic-box attention">
        <div class="didactic-icon">🚨</div>
        <div class="didactic-content">
          <h4>A Regra que Salva a sua Prova:</h4>
          <p><strong>Caso 1: Base Maior que 1 ($a > 1$)</strong></p>
          <p>A função é crescente, então a desigualdade <strong>permanece no mesmo sentido</strong>:</p>
          <p>$$\\log_a f(x) > \\log_a g(x) \\iff f(x) > g(x) > 0$$</p>
          <hr style="margin: 0.8rem 0; border: none; border-top: 1px dashed var(--border-color);" />
          <p><strong>Caso 2: Base entre 0 e 1 ($0 < a < 1$)</strong></p>
          <p>A função é decrescente, portanto a desigualdade <strong>inverte obrigatoriamente de sentido</strong>:</p>
          <p>$$\\log_a f(x) > \\log_a g(x) \\iff 0 < f(x) < g(x)$$</p>
        </div>
      </div>

      <!-- SEÇÃO ENEM & VESTIBULARES CAP. 3 -->
      <h3 class="section-title">Seção ENEM & Vestibulares (Capítulo 3)</h3>
      <div class="paragraph">
        Resolva estes desafios clássicos de equações e inequações com resoluções comentadas:
      </div>

      <div id="exercises-cap3-mount"></div>
    `
  },

  // =========================================================================
  // MODO GAME & QUIZZES (COM WORDWALL)
  // =========================================================================
  games: {
    id: "games",
    tag: "Gamificação",
    title: "Modo Game: Quizzes & Atividades no Wordwall",
    subtitle: "Chegou o momento de testar seus conhecimentos com desafios rápidos, acumular pontos e explorar as salas de jogos interativos.",
    html: `
      <!-- QUIZ NATIVO EMBUTIDO -->
      <div id="native-quiz-mount"></div>

      <h3 class="section-title">Central de Atividades Interativas no Wordwall 🎯</h3>
      <div class="paragraph">
        Além do quiz nativo acima, selecionamos e organizamos atividades gamificadas no <strong>Wordwall</strong> perfeitas para fixar as regras em sala de aula ou no celular, com QR Codes gerados para acesso instantâneo:
      </div>

      <div class="wordwall-cards-grid">
        <!-- Card 1 -->
        <div class="wordwall-card">
          <span class="interactive-badge">Jogo de Pares</span>
          <h4 style="font-size: 1.15rem; font-weight: 700; margin: 0.5rem 0;">Desafio do Peteleco & Propriedades</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0.5rem;">Ligue cada expressão logarítmica simplificada com a sua propriedade correspondente.</p>
          <div class="wordwall-qr-container" id="qr-wordwall-1"></div>
          <a href="https://wordwall.net/pt/community?localeId=1046&query=logaritmos" target="_blank" rel="noopener noreferrer" class="btn-wordwall">
            Jogar no Wordwall 🎮
          </a>
        </div>

        <!-- Card 2 -->
        <div class="wordwall-card">
          <span class="interactive-badge" style="background: linear-gradient(135deg, #10b981, #06b6d4);">Roleta da Fortuna</span>
          <h4 style="font-size: 1.15rem; font-weight: 700; margin: 0.5rem 0;">Roleta das Bases & Condições</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0.5rem;">Gire a roleta e teste em 30 segundos se o logaritmo sorteado existe ou não nos Reais!</p>
          <div class="wordwall-qr-container" id="qr-wordwall-2"></div>
          <a href="https://wordwall.net/pt/community?localeId=1046&query=funcao+logaritmica" target="_blank" rel="noopener noreferrer" class="btn-wordwall">
            Jogar no Wordwall 🎮
          </a>
        </div>

        <!-- Card 3 -->
        <div class="wordwall-card">
          <span class="interactive-badge" style="background: linear-gradient(135deg, #8b5cf6, #ec4899);">Perseguição no Labirinto</span>
          <h4 style="font-size: 1.15rem; font-weight: 700; margin: 0.5rem 0;">Labirinto dos Decibéis e Richter</h4>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 0.5rem;">Fuja dos monstros correndo até a zona da resposta correta sobre aplicações reais.</p>
          <div class="wordwall-qr-container" id="qr-wordwall-3"></div>
          <a href="https://wordwall.net/pt/community?localeId=1046&query=escala+richter+logaritmo" target="_blank" rel="noopener noreferrer" class="btn-wordwall">
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
      question: "Uma calculadora científica possui teclas especiais para logaritmo decimal ($\\log x$) e logaritmo natural ($\\ln x$). Um estudante precisa calcular o valor aproximado de $\\log_2 5$. Sabendo que na tela ele digitou e obteve $\\log_{10} 2 \\approx 0{,}30$ e $\\log_{10} 5 \\approx 0{,}70$, qual é o valor calculado de $\\log_2 5$?",
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
          content: "Faz todo sentido: sabemos que $2^2 = 4$ e $2^3 = 8$. Como 5 está entre 4 e 8, o expoente procurado deve estar entre 2 e 3 (especificamente em torno de 2,33). <strong>Gabarito: 7/3 ou aproximadamente 2,33.</strong>"
        }
      ]
    },
    {
      id: "ex-cap1-2",
      source: "FUVEST / VESTIBULARES",
      difficulty: "Médio",
      question: "Sabendo que $\\log_{10} 2 = a$ e $\\log_{10} 3 = b$, determine o valor de $\\log_{10} 72$ e de $\\log_{10} 5$ em função de $a$ e $b$.",
      steps: [
        {
          label: "Passo 1: Decompor 72 em fatores primos",
          content: "Fatorando 72: $72 = 8 \\times 9 = 2^3 \\times 3^2$."
        },
        {
          label: "Passo 2: Aplicar as propriedades do Produto e do Peteleco",
          content: "$$\\log_{10}(72) = \\log_{10}(2^3 \\cdot 3^2) = \\log_{10}(2^3) + \\log_{10}(3^2)$$<br>Dando o peteleco nos expoentes 3 e 2:<br>$$= 3 \\cdot \\log_{10} 2 + 2 \\cdot \\log_{10} 3 = 3a + 2b$$"
        },
        {
          label: "Passo 3: O Truque Sagrado do $\\log_{10} 5$",
          content: "Nunca esqueça que $5 = \\frac{10}{2}$! Logo:<br>$$\\log_{10} 5 = \\log_{10}\\left(\\frac{10}{2}\\right) = \\log_{10} 10 - \\log_{10} 2 = 1 - a$$<br><strong>Respostas: $\\log_{10} 72 = 3a + 2b$ e $\\log_{10} 5 = 1 - a$.</strong>"
        }
      ]
    }
  ],

  cap2: [
    {
      id: "ex-cap2-1",
      source: "ENEM (Contextualizada)",
      difficulty: "Médio",
      question: "O nível sonoro $\\beta$, medido em decibéis (dB), é dado por $\\beta = 10 \\cdot \\log_{10}\\left(\\frac{I}{I_0}\\right)$, em que $I$ é a intensidade da onda sonora e $I_0 = 10^{-12} \\text{ W/m}^2$ é a intensidade padrão do limiar auditivo. Se em um show de rock a intensidade medida foi $I = 10^{-1} \\text{ W/m}^2$, qual é o nível sonoro em decibéis?",
      steps: [
        {
          label: "Passo 1: Montar a razão entre as intensidades",
          content: "$$\\frac{I}{I_0} = \\frac{10^{-1}}{10^{-12}} = 10^{-1 - (-12)} = 10^{11}$$"
        },
        {
          label: "Passo 2: Aplicar o logaritmo e a regra do peteleco",
          content: "$$\\beta = 10 \\cdot \\log_{10}(10^{11}) = 10 \\cdot (11 \\cdot \\log_{10} 10) = 10 \\cdot (11 \\cdot 1) = 110 \\text{ dB}$$"
        },
        {
          label: "Comentário Prático",
          content: "Um show de rock opera tipicamente entre 100 dB e 115 dB, patamar que exige proteção auditiva após períodos prolongados. <strong>Gabarito: 110 dB.</strong>"
        }
      ]
    },
    {
      id: "ex-cap2-2",
      source: "ENEM / UERJ",
      difficulty: "Médio / Difícil",
      question: "Em uma escavação arqueológica, um pedaço de tecido vegetal antigo apresentou 25% da quantidade original de Carbono-14. Sabendo que a meia-vida do Carbono-14 é de aproximadamente 5.730 anos e que a quantidade restante é modelada por $N(t) = N_0 \\cdot (0{,}5)^{t / 5730}$, determine a idade aproximada do fóssil.",
      steps: [
        {
          label: "Passo 1: Estabelecer a relação fracionária",
          content: "Como restam 25%, temos $\\frac{N(t)}{N_0} = 0{,}25 = \\frac{1}{4} = \\left(\\frac{1}{2}\\right)^2 = (0{,}5)^2$."
        },
        {
          label: "Passo 2: Igualar as bases exponenciais",
          content: "$$(0{,}5)^2 = (0{,}5)^{t / 5730} \\implies 2 = \\frac{t}{5730}$$"
        },
        {
          label: "Passo 3: Concluir o tempo transcorrido",
          content: "$$t = 2 \\times 5730 = 11.460 \\text{ anos}$$<br>Foram necessárias exatamente 2 meias-vidas completas (100% $\\to$ 50% $\\to$ 25%). <strong>Gabarito: 11.460 anos.</strong>"
        }
      ]
    }
  ],

  cap3: [
    {
      id: "ex-cap3-1",
      source: "ITA / UNICAMP Adaptada",
      difficulty: "Médio / Difícil",
      question: "Resolva a equação logarítmica: $\\log_2(x + 3) + \\log_2(x - 1) = 5$.",
      steps: [
        {
          label: "Passo 1: Condição de Existência (OBRIGATÓRIO)",
          content: "Temos que garantir que ambos os logaritmandos sejam estritamente positivos:<br>$$x + 3 > 0 \\implies x > -3$$<br>$$x - 1 > 0 \\implies x > 1$$<br>A interseção de ambas é: <strong>$x > 1$</strong>."
        },
        {
          label: "Passo 2: Juntar os logaritmos usando a Propriedade do Produto",
          content: "$$\\log_2[(x + 3)(x - 1)] = 5$$"
        },
        {
          label: "Passo 3: Aplicar a definição exponencial",
          content: "$$(x + 3)(x - 1) = 2^5 \\implies x^2 + 2x - 3 = 32 \\implies x^2 + 2x - 35 = 0$$"
        },
        {
          label: "Passo 4: Resolver a equação do 2º grau e checar a C.E.",
          content: "Por Bhaskara ou Soma e Produto: $(x + 7)(x - 5) = 0 \\implies x = 5$ ou $x = -7$.<br>Como a C.E. exige $x > 1$, a raiz $x = -7$ é descartada por ser <em>estranha</em>.<br><strong>Conjunto Solução: $S = \\{5\\}$.</strong>"
        }
      ]
    },
    {
      id: "ex-cap3-2",
      source: "FUVEST",
      difficulty: "Difícil",
      question: "Resolva a inequação: $\\log_{1/2}(2x - 4) \\ge -2$.",
      steps: [
        {
          label: "Passo 1: Condição de Existência",
          content: "$$2x - 4 > 0 \\implies 2x > 4 \\implies x > 2$$"
        },
        {
          label: "Passo 2: Converter o número -2 em logaritmo na base 1/2",
          content: "$$-2 = \\log_{1/2}\\left(\\left(\\frac{1}{2}\\right)^{-2}\\right) = \\log_{1/2}(4)$$<br>A inequação fica: $\\log_{1/2}(2x - 4) \\ge \\log_{1/2}(4)$."
        },
        {
          label: "Passo 3: ATENÇÃO! A base é 1/2 (entre 0 e 1), inverte a desigualdade!",
          content: "$$2x - 4 \\le 4 \\implies 2x \\le 8 \\implies x \\le 4$$"
        },
        {
          label: "Passo 4: Interseção com a Condição de Existência",
          content: "Juntando $x > 2$ e $x \\le 4$, temos:<br>$$2 < x \\le 4$$<br><strong>Solução: $S = \\{x \\in \\mathbb{R} \\mid 2 < x \\le 4\\}$ ou $S = ]2, 4]$.</strong>"
        }
      ]
    }
  ]
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
    explanation: "Perfeito! A definição de logaritmo pergunta: '3 elevado a quanto dá 81?'. Como $3^1=3$, $3^2=9$, $3^3=27$ e $3^4=81$, a resposta é 4!"
  },
  {
    question: "Na 'Regra do Peteleco', o que acontece com a expressão $\\log_2(8^5)$?",
    options: [
      "O expoente 5 desaparece da conta",
      "O expoente 5 vira base: $\\log_5(8)$",
      "O expoente 5 cai multiplicando na frente: $5 \\cdot \\log_2 8$",
      "O expoente 5 se divide pela base: $5 / 2$"
    ],
    correctIndex: 2,
    explanation: "Exatamente! Pela propriedade da potência, $\\log_a(b^n) = n \\cdot \\log_a(b)$. Como $\\log_2 8 = 3$, o resultado final fica $5 \\cdot 3 = 15$!"
  },
  {
    question: "Ao resolver uma inequação com base $a = 0{,}3$, o que devemos fazer com o sinal da desigualdade?",
    options: [
      "Manter o sinal inalterado",
      "Inverter obrigatoriamente o sinal da desigualdade",
      "Trocar por um sinal de igualdade",
      "Elevar ambos os membros ao quadrado"
    ],
    correctIndex: 1,
    explanation: "Isso aí! Sempre que a base estiver entre 0 e 1 ($0 < a < 1$), a função é estritamente decrescente, o que obriga a inversão do sinal!"
  },
  {
    question: "Qual das expressões abaixo é matematicamente IMPOSSÍVEL nos números reais?",
    options: [
      "$\\log_5 1$",
      "$\\log_{10} 0{,}001$",
      "$\\log_2(-8)$",
      "$\\log_{1/3} 9$"
    ],
    correctIndex: 2,
    explanation: "Corretíssimo! Pela Condição de Existência (C.E.), o logaritmando deve ser estritamente positivo ($b > 0$). Não existe número real que torne $2^x = -8$!"
  },
  {
    question: "Na 'Regra do Sol e da Sombra', a raiz $\\sqrt[5]{x^3}$ equivale a qual potência?",
    options: [
      "$x^{3/5}$ (o 3 que estava na sombra vai pro sol, e o 5 vai pra sombra)",
      "$x^{5/3}$",
      "$x^{15}$",
      "$x^{3-5}$"
    ],
    correctIndex: 0,
    explanation: "Genial! O expoente 3 estava debaixo do telhado (na sombra) e vai para cima (no sol); o índice 5 estava no sol e vai para baixo (na sombra)!"
  }
];

window.BOOK_CONTENT = BOOK_CONTENT;
window.EXERCISES_DATA = EXERCISES_DATA;
window.QUIZ_QUESTIONS = QUIZ_QUESTIONS;
