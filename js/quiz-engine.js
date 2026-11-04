/**
 * DESCOMPLICANDO OS LOGARITMOS - MECÂNICA DO QUIZ E GERAÇÃO DE QR CODES
 */

class QuizEngine {
  constructor(containerId) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.questions = window.QUIZ_QUESTIONS || [];
    this.currentIndex = 0;
    this.score = 0;
    this.streak = 0;
    this.hasAnswered = false;

    this.render();
  }

  render() {
    if (this.currentIndex >= this.questions.length) {
      this.renderVictory();
      return;
    }

    const q = this.questions[this.currentIndex];
    const letters = ['A', 'B', 'C', 'D'];

    this.container.innerHTML = `
      <div class="quiz-widget-card">
        <div class="quiz-header">
          <div>
            <span class="interactive-badge" style="background: linear-gradient(135deg, #8b5cf6, #6366f1);">
              Avaliação Formativa
            </span>
            <div style="font-size: 0.88rem; color: var(--text-muted); margin-top: 0.3rem;">
              Questão ${this.currentIndex + 1} de ${this.questions.length}
            </div>
          </div>
          <div class="quiz-score-badge">
            <span>Pontuação: ${this.score}</span>
          </div>
        </div>

        <div class="quiz-question-box">
          ${q.question}
        </div>

        <div class="quiz-options-list">
          ${q.options.map((opt, idx) => `
            <button class="quiz-option-btn" data-index="${idx}">
              <div class="quiz-option-letter">${letters[idx]}</div>
              <div style="flex: 1;">${opt}</div>
            </button>
          `).join('')}
        </div>

        <div class="quiz-feedback-box" id="quizFeedbackBox">
          <div id="quizFeedbackTitle" style="font-weight: 800; font-size: 1.1rem; margin-bottom: 0.4rem;"></div>
          <div id="quizFeedbackMsg" style="font-size: 0.95rem;"></div>
          <button class="btn-action-primary" id="btnNextQuestion" style="margin-top: 1rem;">
            <span>Avançar Questão</span>
          </button>
        </div>
      </div>
    `;

    if (window.renderMathInElement) {
      window.renderMathInElement(this.container, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ]
      });
    }

    this.attachEvents();
  }

  attachEvents() {
    const q = this.questions[this.currentIndex];
    const buttons = this.container.querySelectorAll('.quiz-option-btn');
    const feedbackBox = this.container.querySelector('#quizFeedbackBox');
    const feedbackTitle = this.container.querySelector('#quizFeedbackTitle');
    const feedbackMsg = this.container.querySelector('#quizFeedbackMsg');
    const nextBtn = this.container.querySelector('#btnNextQuestion');

    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        if (this.hasAnswered) return;
        this.hasAnswered = true;

        const chosenIdx = parseInt(btn.dataset.index);
        const isCorrect = chosenIdx === q.correctIndex;

        buttons.forEach((b, idx) => {
          b.disabled = true;
          if (idx === q.correctIndex) b.classList.add('correct');
          else if (idx === chosenIdx) b.classList.add('wrong');
        });

        if (isCorrect) {
          this.score += 100;
          feedbackTitle.style.color = 'var(--brand-success)';
          feedbackTitle.textContent = 'Resposta Correta';
        } else {
          feedbackTitle.style.color = 'var(--brand-danger)';
          feedbackTitle.textContent = 'Resposta Incorreta';
        }

        feedbackMsg.innerHTML = q.explanation;
        feedbackBox.classList.add('active');

        if (window.renderMathInElement) {
          window.renderMathInElement(feedbackMsg, {
            delimiters: [
              { left: '$$', right: '$$', display: true },
              { left: '$', right: '$', display: false }
            ]
          });
        }
      });
    });

    nextBtn.addEventListener('click', () => {
      this.currentIndex++;
      this.hasAnswered = false;
      this.render();
    });
  }

  renderVictory() {
    this.container.innerHTML = `
      <div class="quiz-widget-card" style="text-align: center; padding: 3rem 2rem;">
        <h3 style="font-size: 1.8rem; font-weight: 800; color: var(--text-main); margin-bottom: 0.5rem;">
          Módulo Concluído com Sucesso
        </h3>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">
          Você finalizou a avaliação formativa deste módulo.
        </p>
        <div class="sim-big-number" style="color: var(--brand-success); margin-bottom: 2rem;">
          ${this.score} Pontos
        </div>
        <button class="btn-action-primary" id="btnRestartQuiz" style="margin: 0 auto;">
          <span>Reiniciar Avaliação</span>
        </button>
      </div>
    `;

    this.container.querySelector('#btnRestartQuiz').addEventListener('click', () => {
      this.currentIndex = 0;
      this.score = 0;
      this.hasAnswered = false;
      this.render();
    });
  }

  // Gera os QR Codes reais utilizando a biblioteca qrcode.js incluída no index.html
  static renderWordwallQRCodes() {
    const items = [
      { id: 'qr-wordwall-1', url: 'https://wordwall.net/pt/resource/exemplo-jogo-peteleco-logaritmos' },
      { id: 'qr-wordwall-2', url: 'https://wordwall.net/pt/resource/exemplo-roleta-bases-log' },
      { id: 'qr-wordwall-3', url: 'https://wordwall.net/pt/resource/exemplo-labirinto-aplicacoes-log' }
    ];

    items.forEach(item => {
      const el = document.getElementById(item.id);
      if (!el) return;
      el.innerHTML = ''; // Limpa conteúdo anterior
      
      // Utiliza a biblioteca QRCode global do CDN
      if (typeof QRCode !== 'undefined') {
        new QRCode(el, {
          text: item.url,
          width: 120,
          height: 120,
          colorDark: "#0f172a",
          colorLight: "#ffffff",
          correctLevel: QRCode.CorrectLevel.M
        });
      } else {
        el.textContent = 'Erro ao carregar gerador de QR Code';
      }
    });
  }
}

window.QuizEngine = QuizEngine;