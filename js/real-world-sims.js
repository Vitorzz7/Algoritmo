/**
 * DESCOMPLICANDO OS LOGARITMOS - SIMULADORES DE APLICAÇÕES PRÁTICAS DO COTIDIANO
 * Nível Sonoro (Decibéis), Carbono-14, Escala Richter e Bactérias.
 */

class RealWorldSims {
  static mountSimulators(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="simulator-grid">
        <!-- 1. SIMULADOR DE DECIBÉIS -->
        <div class="sim-card">
          <div class="sim-header">
            <div class="sim-icon-box sound">🔊</div>
            <div>
              <div class="sim-title">Nível Sonoro (Decibéis)</div>
              <div class="sim-formula-tag">β = 10 · log₁₀(I / I₀)</div>
            </div>
          </div>
          <div class="sim-body">
            <p style="font-size: 0.88rem; color: var(--text-muted);">
              Cada aumento de 10 dB significa que o som está <strong>10 vezes mais intenso</strong> fisicamente!
            </p>
            <div class="control-label-row">
              <span style="font-size: 0.82rem; font-weight: 600;">Selecione o Cenário Sonoro:</span>
            </div>
            <select id="selectSoundPreset" class="custom-number-input" style="width: 100%; text-align: left; padding: 0.6rem;">
              <option value="1e-12">Sussurro Suave (I = 10⁻¹² W/m²)</option>
              <option value="1e-8">Conversa Normal (I = 10⁻⁸ W/m²)</option>
              <option value="1e-5" selected>Trânsito Intenso (I = 10⁻⁵ W/m²)</option>
              <option value="1e-1">Show de Rock / Britadeira (I = 10⁻¹ W/m²)</option>
              <option value="10">Decolagem de Jato (I = 10¹ W/m²)</option>
            </select>

            <div class="sim-output-badge">
              <div style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted);">Nível de Ruído Calculado:</div>
              <div class="sim-big-number" id="soundDbValue">70 dB</div>
              <div id="soundCategoryBadge" style="font-size: 0.85rem; font-weight: 700; color: #f59e0b; margin-top: 0.3rem;">
                ⚠️ Limiar de Atenção
              </div>
            </div>

            <div class="sim-gauge-bar">
              <div class="sim-gauge-fill" id="soundGaugeBar" style="width: 50%; background: #f59e0b;"></div>
            </div>
          </div>
        </div>

        <!-- 2. SIMULADOR DE DATAÇÃO POR CARBONO-14 -->
        <div class="sim-card">
          <div class="sim-header">
            <div class="sim-icon-box carbon">🦴</div>
            <div>
              <div class="sim-title">Datação por Carbono-14</div>
              <div class="sim-formula-tag">t = -5730 · [ln(N/N₀) / ln(2)]</div>
            </div>
          </div>
          <div class="sim-body">
            <p style="font-size: 0.88rem; color: var(--text-muted);">
              A meia-vida do C-14 é de 5.730 anos. Movendo o slider, descubra a idade de qualquer fóssil pela % de carbono restante.
            </p>
            <div class="control-label-row">
              <span style="font-size: 0.82rem; font-weight: 600;">% de C-14 Restante no Fóssil:</span>
              <span class="slider-val-badge" id="carbonPercentLabel">50%</span>
            </div>
            <input type="range" class="modern-range-slider" id="sliderCarbon" min="1" max="100" value="50">

            <div class="sim-output-badge">
              <div style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted);">Idade Estimada do Achado:</div>
              <div class="sim-big-number" id="carbonYearsValue">5.730 anos</div>
              <div id="carbonHistoricalMilestone" style="font-size: 0.82rem; font-weight: 600; color: var(--brand-success); margin-top: 0.3rem;">
                🏛️ Época da Primeira Dinastia do Egito Antigo
              </div>
            </div>
          </div>
        </div>

        <!-- 3. SIMULADOR DA ESCALA RICHTER -->
        <div class="sim-card">
          <div class="sim-header">
            <div class="sim-icon-box richter">🌋</div>
            <div>
              <div class="sim-title">Escala Richter (Terremotos)</div>
              <div class="sim-formula-tag">Razão de Energia = 10^(1,5 · ΔM)</div>
            </div>
          </div>
          <div class="sim-body">
            <p style="font-size: 0.88rem; color: var(--text-muted);">
              Compare dois terremotos para entender por que cada 1 grau a mais na escala Richter é assustadoramente mais destrutivo!
            </p>
            <div style="display: flex; gap: 1rem;">
              <div style="flex: 1;">
                <label style="font-size: 0.8rem; font-weight: 600;">Magnitude 1:</label>
                <input type="number" id="richterM1" class="custom-number-input" style="width: 100%;" value="7.0" step="0.5" min="1" max="9.5">
              </div>
              <div style="flex: 1;">
                <label style="font-size: 0.8rem; font-weight: 600;">Magnitude 2:</label>
                <input type="number" id="richterM2" class="custom-number-input" style="width: 100%;" value="5.0" step="0.5" min="1" max="9.5">
              </div>
            </div>

            <div class="sim-output-badge">
              <div style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted);">Diferença Física:</div>
              <div class="sim-big-number" id="richterRatioText" style="color: var(--brand-danger); font-size: 1.5rem;">1.000x mais energia</div>
              <div id="richterAmplitudeText" style="font-size: 0.85rem; color: var(--text-muted); margin-top: 0.2rem;">
                Amplitude das ondas: 100x maior
              </div>
            </div>
          </div>
        </div>

        <!-- 4. CRESCIMENTO DE BACTÉRIAS -->
        <div class="sim-card">
          <div class="sim-header">
            <div class="sim-icon-box bacteria">🧫</div>
            <div>
              <div class="sim-title">Crescimento de Bactérias</div>
              <div class="sim-formula-tag">t = k · log₂(N / N₀)</div>
            </div>
          </div>
          <div class="sim-body">
            <p style="font-size: 0.88rem; color: var(--text-muted);">
              Se uma colônia dobra de tamanho a cada 30 minutos ($k=30$ min), quanto tempo leva para atingir a meta populacional?
            </p>
            <div style="display: flex; gap: 1rem;">
              <div style="flex: 1;">
                <label style="font-size: 0.8rem; font-weight: 600;">População Inicial (N₀):</label>
                <input type="number" id="bacInit" class="custom-number-input" style="width: 100%;" value="100" min="1">
              </div>
              <div style="flex: 1;">
                <label style="font-size: 0.8rem; font-weight: 600;">População Alvo (N):</label>
                <input type="number" id="bacTarget" class="custom-number-input" style="width: 100%;" value="1600" min="2">
              </div>
            </div>

            <div class="sim-output-badge">
              <div style="font-size: 0.78rem; text-transform: uppercase; color: var(--text-muted);">Tempo Necessário:</div>
              <div class="sim-big-number" id="bacTimeText" style="color: var(--brand-purple);">120 min (2h 00m)</div>
              <div id="bacDoublingsText" style="font-size: 0.82rem; color: var(--text-muted); margin-top: 0.2rem;">
                Exatamente 4 duplicações (100 → 200 → 400 → 800 → 1.600)
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    // 1. Lógica do Som (Decibéis)
    const selectSound = container.querySelector('#selectSoundPreset');
    const soundDbVal = container.querySelector('#soundDbValue');
    const soundCategory = container.querySelector('#soundCategoryBadge');
    const soundGauge = container.querySelector('#soundGaugeBar');

    const updateSound = () => {
      const I = parseFloat(selectSound.value);
      const I0 = 1e-12;
      const dB = Math.round(10 * Math.log10(I / I0));
      soundDbVal.textContent = `${dB} dB`;

      const pct = Math.min(100, Math.max(5, (dB / 140) * 100));
      soundGauge.style.width = `${pct}%`;

      if (dB <= 40) {
        soundCategory.textContent = '🟢 Confortável e Seguro';
        soundCategory.style.color = '#10b981';
        soundGauge.style.background = '#10b981';
      } else if (dB <= 75) {
        soundCategory.textContent = '🟡 Nível Moderado / Cidade';
        soundCategory.style.color = '#f59e0b';
        soundGauge.style.background = '#f59e0b';
      } else if (dB <= 90) {
        soundCategory.textContent = '🟠 Limiar de Alerta para Audição';
        soundCategory.style.color = '#f97316';
        soundGauge.style.background = '#f97316';
      } else {
        soundCategory.textContent = '🔴 Perigo Imediato de Lesão Auditiva!';
        soundCategory.style.color = '#ef4444';
        soundGauge.style.background = '#ef4444';
      }
    };
    selectSound.addEventListener('change', updateSound);

    // 2. Lógica do Carbono-14
    const sliderCarbon = container.querySelector('#sliderCarbon');
    const carbonPctLabel = container.querySelector('#carbonPercentLabel');
    const carbonYears = container.querySelector('#carbonYearsValue');
    const carbonMilestone = container.querySelector('#carbonHistoricalMilestone');

    const updateCarbon = () => {
      const pct = parseFloat(sliderCarbon.value);
      carbonPctLabel.textContent = `${pct}%`;

      const ratio = pct / 100;
      // t = -5730 * (ln(ratio) / ln(2))
      const years = Math.round(-5730 * (Math.log(ratio) / Math.LN2));
      carbonYears.textContent = `${years.toLocaleString('pt-BR')} anos`;

      if (years < 1000) {
        carbonMilestone.textContent = '🏰 Idade Média / Era das Grandes Navegações';
      } else if (years < 3000) {
        carbonMilestone.textContent = '🏛️ Grécia Antiga & Império Romano';
      } else if (years < 5000) {
        carbonMilestone.textContent = '🏺 Pirâmides de Gizé & Surgimento da Escrita';
      } else if (years < 12000) {
        carbonMilestone.textContent = '🌾 Neolítico: Invenção da Agricultura';
      } else {
        carbonMilestone.textContent = '🦣 Paleolítico: Era dos Mamutes e Cavernas';
      }
    };
    sliderCarbon.addEventListener('input', updateCarbon);

    // 3. Lógica da Escala Richter
    const m1Input = container.querySelector('#richterM1');
    const m2Input = container.querySelector('#richterM2');
    const richterRatio = container.querySelector('#richterRatioText');
    const richterAmp = container.querySelector('#richterAmplitudeText');

    const updateRichter = () => {
      const m1 = parseFloat(m1Input.value) || 7.0;
      const m2 = parseFloat(m2Input.value) || 5.0;
      const diff = Math.abs(m1 - m2);

      const ampRatio = Math.pow(10, diff);
      const energyRatio = Math.pow(10, 1.5 * diff);

      const formatNum = (num) => {
        if (num >= 1e6) return `${(num / 1e6).toFixed(1)} milhões de vezes`;
        if (num >= 1000) return `${Math.round(num).toLocaleString('pt-BR')}x`;
        return `${num.toFixed(1)}x`;
      };

      richterRatio.textContent = `${formatNum(energyRatio)} mais energia liberada!`;
      richterAmp.textContent = `Amplitude sísmica do tremor: ${formatNum(ampRatio)} maior`;
    };
    m1Input.addEventListener('input', updateRichter);
    m2Input.addEventListener('input', updateRichter);

    // 4. Lógica das Bactérias
    const bacIn = container.querySelector('#bacInit');
    const bacTar = container.querySelector('#bacTarget');
    const bacTime = container.querySelector('#bacTimeText');
    const bacDoub = container.querySelector('#bacDoublingsText');

    const updateBacteria = () => {
      const n0 = Math.max(1, parseFloat(bacIn.value) || 100);
      const n = Math.max(n0, parseFloat(bacTar.value) || 1600);

      const doublings = Math.log2(n / n0);
      const totalMinutes = Math.round(doublings * 30);
      const hours = Math.floor(totalMinutes / 60);
      const mins = totalMinutes % 60;

      bacTime.textContent = `${totalMinutes} min (${hours}h ${mins.toString().padStart(2, '0')}m)`;
      bacDoub.textContent = `Equivale a aproximadamente ${doublings.toFixed(2)} duplicações de colônia.`;
    };
    bacIn.addEventListener('input', updateBacteria);
    bacTar.addEventListener('input', updateBacteria);
  }
}

window.RealWorldSims = RealWorldSims;
