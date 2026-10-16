/**
 * DESCOMPLICANDO OS LOGARITMOS - COMPONENTES INTERATIVOS DIDÁTICOS
 * Implementações completas do Peteleco, Sol e Sombra e Regra do Prédio.
 */

class InteractiveTools {
  // -------------------------------------------------------------------------
  // 1. A REGRA DO PETELECO
  // -------------------------------------------------------------------------
  static initPeteleco(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let base = 2;
    let arg = 8;
    let exp = 3;
    let isFlicked = false;

    container.innerHTML = `
      <div class="peteleco-container">
        <span class="interactive-badge">💥 Laboratório Tátil</span>
        <h4 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.4rem;">A Regra do Peteleco (Logaritmo da Potência)</h4>
        <p style="font-size: 0.95rem; color: var(--text-muted); max-width: 600px; margin: 0 auto 1.5rem;">
          Quando o logaritmando possui um expoente, você pode dar um <strong>peteleco nele</strong>! Ele voa, dá uma pirueta e cai multiplicando na frente do logaritmo.
        </p>

        <div class="peteleco-stage">
          <div class="flick-hand" id="petelecoHand">👆</div>

          <div class="peteleco-formula-box" id="petelecoFormulaBox">
            <span class="peteleco-landing-spot" id="petelecoLandingSpot">
              <span id="landedExponent"></span>&nbsp;·&nbsp;
            </span>
            <span class="peteleco-log-label">log</span>
            <sub class="peteleco-base" id="petelecoBaseText">${base}</sub>
            <span class="peteleco-arg-group">
              (<span class="peteleco-arg" id="petelecoArgText">${arg}</span>
              <sup class="peteleco-exponent" id="petelecoExpBadge" title="Clique ou use o botão para dar o peteleco!">${exp}</sup>)
            </span>
          </div>
        </div>

        <div id="petelecoResultText" style="min-height: 28px; font-weight: 700; font-size: 1.1rem; color: var(--brand-success); margin: 0.5rem 0;"></div>

        <div class="tool-controls">
          <button class="btn-action-primary" id="btnDoPeteleco">
            <span>Dar o Peteleco!</span> 💥
          </button>
          <button class="btn-action-secondary" id="btnResetPeteleco">
            <span>Resetar</span> 🔄
          </button>
        </div>

        <div class="tool-controls" style="margin-top: 1.2rem; gap: 1.2rem;">
          <div class="tool-inputs-row">
            <label>Base (a):</label>
            <input type="number" id="inputPetBase" class="custom-number-input" value="${base}" min="2" max="10">
          </div>
          <div class="tool-inputs-row">
            <label>Logaritmando (b):</label>
            <input type="number" id="inputPetArg" class="custom-number-input" value="${arg}" min="2" max="32">
          </div>
          <div class="tool-inputs-row">
            <label>Expoente (n):</label>
            <input type="number" id="inputPetExp" class="custom-number-input" value="${exp}" min="2" max="9">
          </div>
        </div>
      </div>
    `;

    const expBadge = container.querySelector('#petelecoExpBadge');
    const hand = container.querySelector('#petelecoHand');
    const landingSpot = container.querySelector('#petelecoLandingSpot');
    const landedExp = container.querySelector('#landedExponent');
    const resultText = container.querySelector('#petelecoResultText');
    const btnFlick = container.querySelector('#btnDoPeteleco');
    const btnReset = container.querySelector('#btnResetPeteleco');

    const inBase = container.querySelector('#inputPetBase');
    const inArg = container.querySelector('#inputPetArg');
    const inExp = container.querySelector('#inputPetExp');

    const updateInputs = () => {
      base = parseInt(inBase.value) || 2;
      arg = parseInt(inArg.value) || 8;
      exp = parseInt(inExp.value) || 3;
      container.querySelector('#petelecoBaseText').textContent = base;
      container.querySelector('#petelecoArgText').textContent = arg;
      expBadge.textContent = exp;
      resetState();
    };

    inBase.addEventListener('change', updateInputs);
    inArg.addEventListener('change', updateInputs);
    inExp.addEventListener('change', updateInputs);

    const triggerPeteleco = () => {
      if (isFlicked) return;
      isFlicked = true;

      // Áudio
      if (window.soundSystem) window.soundSystem.playPetelecoSound();

      // Animação da mão
      hand.classList.remove('striking');
      void hand.offsetWidth; // force reflow
      hand.classList.add('striking');

      // Animação do expoente voando
      expBadge.classList.add('flying');

      setTimeout(() => {
        // Expoente pousa na frente
        expBadge.style.visibility = 'hidden';
        landedExp.textContent = exp;
        landingSpot.classList.add('active');

        // Cálculo didático
        const logVal = Math.log(arg) / Math.log(base);
        const isInteger = Math.abs(logVal - Math.round(logVal)) < 1e-6;
        
        if (isInteger) {
          const finalVal = exp * Math.round(logVal);
          resultText.innerHTML = `✨ = ${exp} · (${Math.round(logVal)}) = <strong>${finalVal}</strong>!`;
        } else {
          resultText.innerHTML = `✨ Fórmula simplificada: <strong>${exp} · log<sub>${base}</sub>(${arg})</strong>`;
        }
      }, 550);
    };

    const resetState = () => {
      isFlicked = false;
      expBadge.classList.remove('flying');
      expBadge.style.visibility = 'visible';
      landingSpot.classList.remove('active');
      landedExp.textContent = '';
      resultText.textContent = '';
    };

    btnFlick.addEventListener('click', triggerPeteleco);
    expBadge.addEventListener('click', triggerPeteleco);
    btnReset.addEventListener('click', () => {
      if (window.soundSystem) window.soundSystem.playClickSound();
      resetState();
    });
  }

  // -------------------------------------------------------------------------
  // 2. A REGRA DO SOL E DA SOMBRA
  // -------------------------------------------------------------------------
  static initSunShadow(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let indexN = 3;
    let expM = 2;
    let isTransformed = false;

    container.innerHTML = `
      <div class="sun-shadow-container">
        <span class="interactive-badge" style="background: linear-gradient(135deg, #f59e0b, #d97706);">☀️ Mnemônica Visual</span>
        <h4 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.4rem;">A Regra do Sol e da Sombra</h4>
        <p style="font-size: 0.95rem; color: var(--text-muted); max-width: 600px;">
          <em>"Quem está no sol vai para a sombra; quem está na sombra vai para o sol!"</em> Veja como a raiz se abre naturalmente em fração:
        </p>

        <div class="sun-shadow-stage">
          <!-- Radical (Casinha) -->
          <div class="radical-house" id="radicalHouseVisual">
            <div class="sun-entity">☀️</div>
            <div class="radical-symbol-wrap">
              <span class="tag-sol" id="tagIndexN" title="Está no Sol!">${indexN}</span>
              <span class="radical-roof-symbol">√</span>
              <div class="roof-cover"></div>
              <div class="radicando-content">
                <span class="base-letter">x</span>
                <span class="tag-sombra" id="tagExpM" title="Está na Sombra!">${expM}</span>
              </div>
            </div>
          </div>

          <!-- Seta -->
          <div class="transform-arrow-box">
            <div class="arrow-icon">➔</div>
            <span style="font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--brand-primary);">Inversão</span>
          </div>

          <!-- Potência Fracionária -->
          <div class="fraction-power-result">
            <span class="base-letter">x</span>
            <div class="fraction-exponent-box">
              <span class="tag-sol" id="resNumerator" style="font-size: 1.1rem; top: 0; margin: 0; padding: 0.1rem 0.4rem;">${expM}</span>
              <div class="fraction-line"></div>
              <span class="tag-sombra" id="resDenominator" style="font-size: 1.1rem; top: 0; margin: 0; padding: 0.1rem 0.4rem;">${indexN}</span>
            </div>
          </div>
        </div>

        <div class="mnemonic-quote" id="sunShadowExplanation">
          O ${indexN} estava no SOL e foi para a SOMBRA (denominador). O ${expM} estava na SOMBRA e foi para o SOL (numerador)!
        </div>

        <div class="tool-controls" style="margin-top: 1.5rem;">
          <button class="btn-action-primary" id="btnToggleSunShadow" style="background: linear-gradient(135deg, #f59e0b, #4f46e5);">
            <span>Trocar Exemplos</span> ☀️🔄🏠
          </button>
        </div>
      </div>
    `;

    const examples = [
      { n: 3, m: 2 },
      { n: 5, m: 3 },
      { n: 2, m: 1 },
      { n: 4, m: 7 },
      { n: 7, m: 4 }
    ];
    let curIdx = 0;

    const btnToggle = container.querySelector('#btnToggleSunShadow');
    btnToggle.addEventListener('click', () => {
      curIdx = (curIdx + 1) % examples.length;
      const ex = examples[curIdx];
      indexN = ex.n;
      expM = ex.m;

      if (window.soundSystem) window.soundSystem.playSunSound();

      const tagN = container.querySelector('#tagIndexN');
      const tagM = container.querySelector('#tagExpM');
      const resNum = container.querySelector('#resNumerator');
      const resDen = container.querySelector('#resDenominator');
      const expText = container.querySelector('#sunShadowExplanation');

      tagN.textContent = indexN;
      tagM.textContent = expM;
      resNum.textContent = expM;
      resDen.textContent = indexN;

      expText.innerHTML = `O <strong>${indexN}</strong> estava no SOL e foi para a <strong>SOMBRA</strong> (denominador). O <strong>${expM}</strong> estava na SOMBRA e foi para o <strong>SOL</strong> (numerador)!`;

      // Pulso visual
      tagN.classList.add('pulse-highlight');
      tagM.classList.add('pulse-highlight');
      setTimeout(() => {
        tagN.classList.remove('pulse-highlight');
        tagM.classList.remove('pulse-highlight');
      }, 1500);
    });
  }

  // -------------------------------------------------------------------------
  // 3. A REGRA DO PRÉDIO (Mudança de Base)
  // -------------------------------------------------------------------------
  static initBuildingRule(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    let b = 8;
    let a = 2;
    let c = 10;

    container.innerHTML = `
      <div class="building-rule-container">
        <span class="interactive-badge" style="background: linear-gradient(135deg, #06b6d4, #0284c7);">🏢 O Elevador Matemático</span>
        <h4 style="font-size: 1.3rem; font-weight: 700; margin-bottom: 0.4rem;">A Regra do Prédio (Mudança de Base)</h4>
        <p style="font-size: 0.95rem; color: var(--text-muted); max-width: 650px;">
          Para trocar a base de $\\log_a b$, imagine um edifício: o <strong>logaritmando $b$</strong> sobe de elevador para a <strong>Cobertura</strong> (numerador) e a <strong>base $a$</strong> desce para o <strong>Subsolo</strong> (denominador). Ambos recebem a nova base $c$!
        </p>

        <div class="building-stage">
          <!-- O Edifício -->
          <div class="building-visual">
            <div class="building-roof-antenna">
              <div class="antenna-stick"></div>
            </div>

            <!-- Cobertura -->
            <div class="floor-penthouse">
              <div class="floor-label">👑 Cobertura (Numerador)</div>
              <div class="penthouse-value" id="buildingPenthouseVal">log<sub>${c}</sub>(${b})</div>
            </div>

            <!-- Fosso do Elevador -->
            <div class="elevator-shaft">
              <div class="elevator-cabin middle" id="elevatorCabin">🛗</div>
            </div>

            <!-- Subsolo -->
            <div class="floor-basement">
              <div class="floor-label">🚗 Subsolo (Denominador)</div>
              <div class="basement-value" id="buildingBasementVal">log<sub>${c}</sub>(${a})</div>
            </div>
          </div>

          <!-- Fórmula em Destaque -->
          <div class="building-formula-display">
            <div style="font-size: 1.2rem; font-weight: 700; margin-bottom: 1rem; color: var(--text-muted);">
              De: <span style="color: var(--brand-primary); font-size: 1.4rem;">log<sub><span id="labelBaseA">${a}</span></sub>(<span id="labelArgB">${b}</span>)</span>
            </div>

            <div class="formula-fraction-result">
              <div class="fraction-numerator" id="fractionNumDisplay">log<sub>${c}</sub>(${b})</div>
              <div class="fraction-bar-main"></div>
              <div class="fraction-denominator" id="fractionDenDisplay">log<sub>${c}</sub>(${a})</div>
            </div>

            <div id="buildingCalculatedVal" style="margin-top: 1.2rem; font-size: 1.15rem; font-weight: 800; color: var(--brand-success);">
              = ${(Math.log(b) / Math.log(a)).toFixed(2)}
            </div>
          </div>
        </div>

        <div class="tool-controls">
          <button class="btn-action-primary" id="btnRunElevator" style="background: linear-gradient(135deg, #06b6d4, #4f46e5);">
            <span>Chamar Elevador!</span> 🛗
          </button>
        </div>

        <div class="tool-controls" style="margin-top: 1.2rem; gap: 1.5rem;">
          <div class="tool-inputs-row">
            <label>Logaritmando (b):</label>
            <input type="number" id="inputBuildB" class="custom-number-input" value="${b}" min="2" max="64">
          </div>
          <div class="tool-inputs-row">
            <label>Base Antiga (a):</label>
            <input type="number" id="inputBuildA" class="custom-number-input" value="${a}" min="2" max="10">
          </div>
          <div class="tool-inputs-row">
            <label>Nova Base (c):</label>
            <select id="selectBuildC" class="custom-number-input" style="width: 70px;">
              <option value="10">10</option>
              <option value="e">e (ln)</option>
              <option value="2">2</option>
              <option value="5">5</option>
            </select>
          </div>
        </div>
      </div>
    `;

    const cabin = container.querySelector('#elevatorCabin');
    const btnElevator = container.querySelector('#btnRunElevator');
    const inB = container.querySelector('#inputBuildB');
    const inA = container.querySelector('#inputBuildA');
    const selC = container.querySelector('#selectBuildC');

    const updateBuilding = () => {
      b = parseInt(inB.value) || 8;
      a = parseInt(inA.value) || 2;
      c = selC.value;

      container.querySelector('#labelBaseA').textContent = a;
      container.querySelector('#labelArgB').textContent = b;

      const pentStr = c === 'e' ? `ln(${b})` : `log<sub>${c}</sub>(${b})`;
      const baseStr = c === 'e' ? `ln(${a})` : `log<sub>${c}</sub>(${a})`;

      container.querySelector('#buildingPenthouseVal').innerHTML = pentStr;
      container.querySelector('#buildingBasementVal').innerHTML = baseStr;
      container.querySelector('#fractionNumDisplay').innerHTML = pentStr;
      container.querySelector('#fractionDenDisplay').innerHTML = baseStr;

      const val = Math.log(b) / Math.log(a);
      container.querySelector('#buildingCalculatedVal').textContent = `= ${val.toFixed(3)}`;
    };

    inB.addEventListener('input', updateBuilding);
    inA.addEventListener('input', updateBuilding);
    selC.addEventListener('change', updateBuilding);

    btnElevator.addEventListener('click', () => {
      if (window.soundSystem) window.soundSystem.playElevatorSound(true);

      // Sobe para cobertura
      cabin.className = 'elevator-cabin up';

      setTimeout(() => {
        if (window.soundSystem) window.soundSystem.playElevatorSound(false);
        // Desce para subsolo
        cabin.className = 'elevator-cabin down';
      }, 700);

      setTimeout(() => {
        cabin.className = 'elevator-cabin middle';
      }, 1400);
    });
  }
}

window.InteractiveTools = InteractiveTools;
