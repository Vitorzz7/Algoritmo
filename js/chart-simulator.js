/**
 * DESCOMPLICANDO OS LOGARITMOS - LABORATÓRIO GRÁFICO DINÂMICO (CANVAS 2D)
 * Plota y = log_a(x), assíntotas, inversa exponencial y = a^x e reta y = x.
 */

class ChartSimulator {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    this.ctx = this.canvas.getContext('2d');

    this.baseA = 2.0;
    this.showInverse = true;
    this.showSymmetry = true;

    // Coordenadas do plano cartesiano
    this.xMin = -3.5;
    this.xMax = 8.5;
    this.yMin = -4.5;
    this.yMax = 5.5;

    this.mouseX = null;
    this.mouseY = null;

    this.initCanvasSize();
    this.attachEvents();
    this.render();
  }

  initCanvasSize() {
    const rect = this.canvas.getBoundingClientRect();
    const dpr = window.devicePixelRatio || 1;
    this.canvas.width = rect.width * dpr;
    this.canvas.height = rect.height * dpr;
    this.ctx.scale(dpr, dpr);
    this.width = rect.width;
    this.height = rect.height;
  }

  toScreenX(x) {
    return ((x - this.xMin) / (this.xMax - this.xMin)) * this.width;
  }

  toScreenY(y) {
    return this.height - ((y - this.yMin) / (this.yMax - this.yMin)) * this.height;
  }

  toMathX(screenX) {
    return this.xMin + (screenX / this.width) * (this.xMax - this.xMin);
  }

  toMathY(screenY) {
    return this.yMin + ((this.height - screenY) / this.height) * (this.yMax - this.yMin);
  }

  setBase(val) {
    if (Math.abs(val - 1.0) < 0.05) {
      val = val > 1.0 ? 1.05 : 0.95;
    }
    this.baseA = Math.max(0.08, Math.min(10, val));
    this.render();
  }

  attachEvents() {
    window.addEventListener('resize', () => {
      this.initCanvasSize();
      this.render();
    });

    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouseX = e.clientX - rect.left;
      this.mouseY = e.clientY - rect.top;
      this.render();
    });

    this.canvas.addEventListener('mouseleave', () => {
      this.mouseX = null;
      this.mouseY = null;
      this.render();
    });
  }

  render() {
    const isDark = document.body.classList.contains('dark-mode');
    const ctx = this.ctx;

    // Limpar
    ctx.clearRect(0, 0, this.width, this.height);

    // 1. Grade (Grid)
    ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.06)' : 'rgba(0, 0, 0, 0.06)';
    ctx.lineWidth = 1;

    for (let x = Math.ceil(this.xMin); x <= this.xMax; x++) {
      const sx = this.toScreenX(x);
      ctx.beginPath();
      ctx.moveTo(sx, 0);
      ctx.lineTo(sx, this.height);
      ctx.stroke();
    }

    for (let y = Math.ceil(this.yMin); y <= this.yMax; y++) {
      const sy = this.toScreenY(y);
      ctx.beginPath();
      ctx.moveTo(0, sy);
      ctx.lineTo(this.width, sy);
      ctx.stroke();
    }

    // 2. Eixos Principais X e Y
    ctx.strokeStyle = isDark ? '#94a3b8' : '#475569';
    ctx.lineWidth = 1.8;

    const originX = this.toScreenX(0);
    const originY = this.toScreenY(0);

    // Eixo X
    ctx.beginPath();
    ctx.moveTo(0, originY);
    ctx.lineTo(this.width, originY);
    ctx.stroke();

    // Eixo Y
    ctx.beginPath();
    ctx.moveTo(originX, 0);
    ctx.lineTo(originX, this.height);
    ctx.stroke();

    // Rótulos dos eixos
    ctx.fillStyle = isDark ? '#cbd5e1' : '#334155';
    ctx.font = '12px Inter, sans-serif';
    ctx.fillText('x', this.width - 15, originY - 8);
    ctx.fillText('y', originX + 8, 16);
    ctx.fillText('(0,0)', originX - 30, originY + 16);

    // 3. Reta de Simetria y = x (se ativada)
    if (this.showSymmetry) {
      ctx.save();
      ctx.setLineDash([5, 5]);
      ctx.strokeStyle = isDark ? 'rgba(255, 255, 255, 0.25)' : 'rgba(0, 0, 0, 0.25)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(this.toScreenX(this.xMin), this.toScreenY(this.xMin));
      ctx.lineTo(this.toScreenX(this.xMax), this.toScreenY(this.xMax));
      ctx.stroke();
      ctx.restore();

      ctx.fillStyle = isDark ? '#64748b' : '#94a3b8';
      ctx.fillText('y = x (eixo de simetria)', this.toScreenX(3.5), this.toScreenY(3.9));
    }

    // 4. Curva Inversa: Exponencial g(x) = a^x
    if (this.showInverse) {
      ctx.strokeStyle = '#f59e0b';
      ctx.lineWidth = 2.2;
      ctx.beginPath();

      let started = false;
      const step = 0.05;
      for (let x = this.xMin; x <= this.xMax; x += step) {
        const y = Math.pow(this.baseA, x);
        if (y > this.yMax * 1.5 || y < this.yMin * 1.5) {
          started = false;
          continue;
        }
        const sx = this.toScreenX(x);
        const sy = this.toScreenY(y);

        if (!started) {
          ctx.moveTo(sx, sy);
          started = true;
        } else {
          ctx.lineTo(sx, sy);
        }
      }
      ctx.stroke();

      // Ponto Notável (0, 1) da Exponencial
      const sx01 = this.toScreenX(0);
      const sy01 = this.toScreenY(1);
      ctx.fillStyle = '#f59e0b';
      ctx.beginPath();
      ctx.arc(sx01, sy01, 5, 0, Math.PI * 2);
      ctx.fill();
    }

    // 5. Curva Principal: Logaritmo f(x) = log_a(x)
    ctx.strokeStyle = '#6366f1';
    ctx.lineWidth = 3.5;
    ctx.beginPath();

    let startedLog = false;
    const logStep = 0.03;
    // Log só existe para x > 0
    for (let x = 0.02; x <= this.xMax; x += logStep) {
      const y = Math.log(x) / Math.log(this.baseA);
      if (isNaN(y) || y > this.yMax * 1.5 || y < this.yMin * 1.5) {
        startedLog = false;
        continue;
      }
      const sx = this.toScreenX(x);
      const sy = this.toScreenY(y);

      if (!startedLog) {
        ctx.moveTo(sx, sy);
        startedLog = true;
      } else {
        ctx.lineTo(sx, sy);
      }
    }
    ctx.stroke();

    // 6. Ponto Notável Obrigatório (1, 0)
    const sx10 = this.toScreenX(1);
    const sy10 = this.toScreenY(0);
    ctx.fillStyle = '#10b981';
    ctx.beginPath();
    ctx.arc(sx10, sy10, 6, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#ffffff';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = isDark ? '#ffffff' : '#1e293b';
    ctx.font = 'bold 12px Inter, sans-serif';
    ctx.fillText('(1, 0)', sx10 - 15, sy10 + 22);

    // 7. Inspeção com Cursor do Mouse
    if (this.mouseX !== null && this.mouseY !== null) {
      const mathX = this.toMathX(this.mouseX);
      if (mathX > 0.05 && mathX <= this.xMax) {
        const mathY = Math.log(mathX) / Math.log(this.baseA);
        const ptScreenY = this.toScreenY(mathY);

        // Linha guia
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.4)';
        ctx.setLineDash([3, 3]);
        ctx.beginPath();
        ctx.moveTo(this.mouseX, originY);
        ctx.lineTo(this.mouseX, ptScreenY);
        ctx.stroke();
        ctx.setLineDash([]);

        // Ponto de hover
        ctx.fillStyle = '#4f46e5';
        ctx.beginPath();
        ctx.arc(this.mouseX, ptScreenY, 6, 0, Math.PI * 2);
        ctx.fill();

        // Tooltip flutuante
        const text = `x = ${mathX.toFixed(2)} | y = ${mathY.toFixed(2)}`;
        ctx.font = 'bold 11px Inter, sans-serif';
        const txtWidth = ctx.measureText(text).width;

        ctx.fillStyle = isDark ? '#1e293b' : '#ffffff';
        ctx.strokeStyle = '#6366f1';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.roundRect(this.mouseX + 10, ptScreenY - 26, txtWidth + 14, 22, 4);
        ctx.fill();
        ctx.stroke();

        ctx.fillStyle = isDark ? '#f8fafc' : '#0f172a';
        ctx.fillText(text, this.mouseX + 17, ptScreenY - 12);
      }
    }
  }

  static mountSimulator(containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = `
      <div class="chart-lab-container">
        <div class="chart-lab-header">
          <div>
            <span class="interactive-badge">📊 Laboratório Interativo</span>
            <h4 style="font-size: 1.35rem; font-weight: 700;">Gráfico da Função Logarítmica e sua Inversa</h4>
            <p style="font-size: 0.92rem; color: var(--text-muted);">
              Arraste o slider para alterar a base $a$ e observe em tempo real a transição entre função crescente ($a > 1$) e decrescente ($0 < a < 1$).
            </p>
          </div>
          <div class="chart-status-pills" id="chartStatusContainer">
            <span class="status-pill crescente" id="monotonicityPill">Crescente (a > 1) ↗</span>
            <span class="status-pill info">Raiz fixa em (1, 0)</span>
          </div>
        </div>

        <div class="chart-canvas-wrapper">
          <canvas id="logChartCanvas"></canvas>
        </div>

        <div class="chart-controls-panel">
          <!-- Controle da Base -->
          <div class="control-group">
            <div class="control-label-row">
              <span>Valor da Base (a):</span>
              <span class="slider-val-badge" id="baseValDisplay">a = 2.00</span>
            </div>
            <input type="range" class="modern-range-slider" id="sliderBaseA" min="0.1" max="6.0" step="0.05" value="2.0">
            <div class="chart-presets-row">
              <span style="font-size: 0.75rem; color: var(--text-muted); align-self: center;">Atalhos:</span>
              <button class="preset-chip" data-base="2.0">a = 2</button>
              <button class="preset-chip" data-base="2.72">a = e (ln)</button>
              <button class="preset-chip" data-base="10.0">a = 10</button>
              <button class="preset-chip" data-base="0.5">a = 0.5 (Decrescente)</button>
              <button class="preset-chip" data-base="0.25">a = 0.25</button>
            </div>
          </div>

          <!-- Toggles -->
          <div class="control-group" style="justify-content: center;">
            <label class="chart-toggle-checkbox">
              <input type="checkbox" id="chkShowInverse" checked>
              <span>Exibir Função Inversa: <strong style="color: #f59e0b;">g(x) = a<sup>x</sup></strong></span>
            </label>
            <label class="chart-toggle-checkbox">
              <input type="checkbox" id="chkShowSymmetry" checked>
              <span>Exibir Eixo de Simetria: <strong>y = x</strong></span>
            </label>
            <p style="font-size: 0.78rem; color: var(--text-muted); margin-top: 0.4rem;">
              Dica: Passe o mouse sobre o gráfico para inspecionar as coordenadas $(x, y)$ em qualquer ponto.
            </p>
          </div>
        </div>
      </div>
    `;

    const sim = new ChartSimulator('logChartCanvas');

    const slider = container.querySelector('#sliderBaseA');
    const baseDisplay = container.querySelector('#baseValDisplay');
    const monoPill = container.querySelector('#monotonicityPill');
    const chkInverse = container.querySelector('#chkShowInverse');
    const chkSymm = container.querySelector('#chkShowSymmetry');

    const updateBaseFromVal = (val) => {
      sim.setBase(val);
      baseDisplay.textContent = `a = ${val.toFixed(2)}`;
      slider.value = val;

      if (val > 1.0) {
        monoPill.className = 'status-pill crescente';
        monoPill.textContent = 'Função Crescente (a > 1) ↗';
      } else {
        monoPill.className = 'status-pill decrescente';
        monoPill.textContent = 'Função Decrescente (0 < a < 1) ↘';
      }
    };

    slider.addEventListener('input', (e) => {
      updateBaseFromVal(parseFloat(e.target.value));
    });

    chkInverse.addEventListener('change', (e) => {
      sim.showInverse = e.target.checked;
      sim.render();
    });

    chkSymm.addEventListener('change', (e) => {
      sim.showSymmetry = e.target.checked;
      sim.render();
    });

    container.querySelectorAll('.preset-chip').forEach(btn => {
      btn.addEventListener('click', () => {
        const b = parseFloat(btn.dataset.base);
        updateBaseFromVal(b);
      });
    });

    // Re-render quando o tema claro/escuro mudar
    const observer = new MutationObserver(() => {
      sim.render();
    });
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });
  }
}

window.ChartSimulator = ChartSimulator;
