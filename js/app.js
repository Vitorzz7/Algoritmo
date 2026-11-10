/**
 * DESCOMPLICANDO OS LOGARITMOS - LÓGICA PRINCIPAL E ROTEADOR (app.js)
 */

class LogarithmBookApp {
  constructor() {
    this.chaptersList = ['cover', 'techspec', 'sumario', 'welcome', 'cap1', 'cap2', 'cap3', 'cap4', 'cap5', 'games'];
    this.currentChapterIndex = 0;
    this.exerciseIndexes = { cap1: 0, cap2: 0, cap3: 0, cap4: 0, cap5: 0 };
    this.init();
  }

  init() {
    this.bindEvents();
    this.initTheme();
    this.handleInitialRoute();
    this.setupScrollProgress();
  }

  bindEvents() {
    const toggleBtn = document.getElementById('btn-sidebar-toggle');
    const overlay = document.getElementById('sidebar-overlay');
    
    if (toggleBtn) toggleBtn.addEventListener('click', () => this.toggleSidebar());
    if (overlay) overlay.addEventListener('click', () => this.closeSidebar());

    const themeBtn = document.getElementById('theme-toggle-btn');
    if (themeBtn) themeBtn.addEventListener('click', () => this.toggleDarkMode());

    const prevBtn = document.getElementById('btn-prev-chapter');
    const nextBtn = document.getElementById('btn-next-chapter');

    if (prevBtn) prevBtn.addEventListener('click', () => this.navigateChapter(-1));
    if (nextBtn) nextBtn.addEventListener('click', () => this.navigateChapter(1));

    window.addEventListener('hashchange', () => this.handleRoute());
    window.addEventListener('scroll', () => this.updateReadingProgress());
  }

  handleInitialRoute() {
    const hash = window.location.hash.replace('#', '');
    if (hash && this.chaptersList.includes(hash)) {
      this.loadChapter(hash);
    } else {
      this.loadChapter('cover');
    }
  }

  handleRoute() {
    const hash = window.location.hash.replace('#', '');
    if (hash && this.chaptersList.includes(hash)) {
      this.loadChapter(hash);
    }
  }

  loadChapter(chapterId) {
    const chapterData = window.BOOK_CONTENT ? window.BOOK_CONTENT[chapterId] : null;
    if (!chapterData) return;

    this.currentChapterIndex = this.chaptersList.indexOf(chapterId);

    document.getElementById('chapter-tag').textContent = chapterData.tag || 'Módulo';
    document.getElementById('chapter-title').textContent = chapterData.title || '';
    document.getElementById('chapter-subtitle').textContent = chapterData.subtitle || '';
    document.getElementById('breadcrumb-current-title').textContent = chapterData.title || '';

    const bodyContainer = document.getElementById('chapter-dynamic-body');
    bodyContainer.innerHTML = chapterData.html || '';

    this.updateSidebarActive(chapterId);
    this.updateFooterNavButtons();
    this.renderMath();

    if (chapterId === 'cap1') {
      if (window.InteractiveTools) {
        window.InteractiveTools.initPeteleco('peteleco-interactive-mount');
        window.InteractiveTools.initSunShadow('sun-shadow-interactive-mount');
      }
      this.renderSingleExercise('exercises-cap1-mount', 'cap1', window.EXERCISES_DATA ? window.EXERCISES_DATA.cap1 : []);
    } else if (chapterId === 'cap2') {
      this.renderSingleExercise('exercises-cap2-mount', 'cap2', window.EXERCISES_DATA ? window.EXERCISES_DATA.cap2 : []);
    } else if (chapterId === 'cap3') {
      if (window.InteractiveTools) {
        window.InteractiveTools.initBuildingRule('building-rule-interactive-mount');
      }
      this.renderSingleExercise('exercises-cap3-mount', 'cap3', window.EXERCISES_DATA ? window.EXERCISES_DATA.cap3 : []);
    } else if (chapterId === 'cap4') {
      if (window.ChartSimulator) window.ChartSimulator.mountSimulator('chart-simulator-mount');
      if (window.RealWorldSims) window.RealWorldSims.mountSimulators('real-world-simulators-mount');
      this.renderSingleExercise('exercises-cap4-mount', 'cap4', window.EXERCISES_DATA ? window.EXERCISES_DATA.cap4 : []);
    } else if (chapterId === 'cap5') {
      const btnTest = document.getElementById('btnTestIneq');
      const inputBase = document.getElementById('inputCustomBase');
      const titleEl = document.getElementById('ineqCustomTitle');
      const descEl = document.getElementById('ineqCustomDesc');

      if (btnTest && inputBase) {
        btnTest.addEventListener('click', () => {
          let val = parseFloat(inputBase.value);
          if (isNaN(val) || val <= 0) val = 2.0;
          if (Math.abs(val - 1.0) < 0.01) val = 1.1;

          if (val > 1.0) {
            titleEl.textContent = `Status para Base a = ${val.toFixed(1)} (Função Crescente):`;
            descEl.innerHTML = `$$\\log_{${val.toFixed(1)}}(x) > \\log_{${val.toFixed(1)}}(8) \\implies x > 8 \\quad (\\text{Mantém o sinal original})$$`;
          } else {
            titleEl.textContent = `Status para Base a = ${val.toFixed(1)} (Função Decrescente):`;
            descEl.innerHTML = `$$\\log_{${val.toFixed(1)}}(x) > \\log_{${val.toFixed(1)}}(8) \\implies x < 8 \\quad (\\text{Inverte-se o sinal})$$`;
          }
          this.renderMath();
        });
      }
      this.renderSingleExercise('exercises-cap5-mount', 'cap5', window.EXERCISES_DATA ? window.EXERCISES_DATA.cap5 : []);
    } else if (chapterId === 'games') {
      if (window.QuizEngine) {
        QuizEngine.renderWordwallQRCodes();
      }
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
    this.updateStudentProgress();
    this.closeSidebar();
  }

  renderSingleExercise(containerId, chapterKey, exercisesList) {
    const container = document.getElementById(containerId);
    if (!container || !exercisesList || exercisesList.length === 0) return;

    const currentIdx = this.exerciseIndexes[chapterKey] || 0;
    const ex = exercisesList[currentIdx];
    const letters = ['A', 'B', 'C', 'D', 'E'];

    container.innerHTML = `
      <div class="exercise-card" style="border: 2px solid var(--brand-primary); background: var(--bg-card); border-radius: var(--radius-md); padding: 1.5rem; margin-top: 1rem;">
        
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem; flex-wrap: wrap; gap: 0.5rem; border-bottom: 1px solid var(--border-color); padding-bottom: 0.8rem;">
          <div>
            <span class="exercise-source-tag">${ex.source}</span>
            <span class="exercise-difficulty" style="margin-left: 0.5rem;">Dificuldade: ${ex.difficulty}</span>
          </div>
          <div style="font-weight: 700; color: var(--brand-primary); font-size: 0.95rem;">
            Questão ${currentIdx + 1} de ${exercisesList.length}
          </div>
        </div>

        <div class="exercise-question-text" style="font-size: 1.05rem; margin-bottom: 1.2rem; line-height: 1.6; color: var(--text-main);">
          ${ex.question}
        </div>
        
        <div class="quiz-options-list" style="margin-bottom: 1.2rem;">
          ${ex.options.map((opt, idx) => `
            <button class="quiz-option-btn ex-option-btn" data-ex-id="${ex.id}" data-opt-idx="${idx}" data-correct-idx="${ex.correctIndex}" style="display: flex; align-items: center; width: 100%; padding: 0.8rem 1rem; margin-bottom: 0.5rem; background: var(--bg-main); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer; text-align: left; color: var(--text-main); transition: all 0.2s;">
              <div class="quiz-option-letter" style="width: 28px; height: 28px; background: rgba(79,70,229,0.1); color: var(--brand-primary); font-weight: 700; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-right: 1rem;">${letters[idx]}</div>
              <div style="flex: 1; color: var(--text-main);">${opt}</div>
            </button>
          `).join('')}
        </div>

        <div id="feedback-${ex.id}" class="quiz-feedback-box" style="margin-bottom: 1rem; padding: 0.8rem; border-radius: var(--radius-sm);"></div>

        <button class="accordion-toggle-btn" data-ex-id="${ex.id}" style="width: 100%; display: flex; justify-content: space-between; align-items: center; padding: 0.9rem 1.2rem; background: rgba(79,70,229,0.08); border: 1px solid var(--brand-primary); border-radius: var(--radius-sm); color: var(--brand-primary); font-weight: 600; cursor: pointer;">
          <span>Ver Resolução Detalhada Passo a Passo</span>
          <span class="toggle-icon">▼</span>
        </button>

        <div class="accordion-content" id="content-${ex.id}" style="display: none; margin-top: 1rem; padding: 1.2rem; background: var(--bg-main); border-radius: var(--radius-sm); border: 1px solid var(--border-color); color: var(--text-main); max-height: none !important; opacity: 1 !important; visibility: visible !important;">
          <div class="step-by-step-box">
            ${ex.steps.map(step => `
              <div class="solution-step" style="margin-bottom: 1.2rem; padding-bottom: 0.8rem; border-bottom: 1px dashed var(--border-color);">
                <div class="step-label" style="font-weight: 700; color: var(--brand-primary); margin-bottom: 0.4rem; font-size: 1rem;">${step.label}</div>
                <div style="line-height: 1.6; color: var(--text-main); font-size: 0.98rem;">${step.content}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1.5rem; border-top: 1px solid var(--border-color); padding-top: 1rem;">
          <button id="btnPrevEx-${chapterKey}" class="nav-page-btn" ${currentIdx === 0 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : 'style="padding: 0.6rem 1.2rem; background: var(--bg-main); border: 1px solid var(--border-color); border-radius: var(--radius-sm); cursor: pointer; color: var(--text-main); font-weight: 600;"'}>
            ← Questão Anterior
          </button>
          
          <div style="display: flex; gap: 0.4rem;">
            ${exercisesList.map((_, i) => `
              <button class="ex-dot-btn" data-index="${i}" style="width: 28px; height: 28px; border-radius: 50%; border: 1px solid var(--border-color); background: ${i === currentIdx ? 'var(--brand-primary)' : 'var(--bg-main)'}; color: ${i === currentIdx ? '#ffffff' : 'var(--text-main)'}; font-weight: 700; cursor: pointer;">${i + 1}</button>
            `).join('')}
          </div>

          <button id="btnNextEx-${chapterKey}" class="nav-page-btn" ${currentIdx === exercisesList.length - 1 ? 'disabled style="opacity: 0.5; cursor: not-allowed;"' : 'style="padding: 0.6rem 1.2rem; background: var(--brand-primary); color: #fff; border: none; border-radius: var(--radius-sm); cursor: pointer; font-weight: 600;"'}>
            Próxima Questão →
          </button>
        </div>

      </div>
    `;

    container.querySelectorAll('.ex-option-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const targetBtn = e.currentTarget;
        const chosenIdx = parseInt(targetBtn.getAttribute('data-opt-idx'));
        const correctIdx = parseInt(targetBtn.getAttribute('data-correct-idx'));
        const feedbackBox = document.getElementById(`feedback-${ex.id}`);

        const allBtns = container.querySelectorAll('.ex-option-btn');
        allBtns.forEach((b, idx) => {
          b.disabled = true;
          if (idx === correctIdx) {
            b.style.background = 'rgba(16, 185, 129, 0.2)';
            b.style.borderColor = 'var(--brand-success)';
          } else if (idx === chosenIdx) {
            b.style.background = 'rgba(239, 68, 68, 0.2)';
            b.style.borderColor = 'var(--brand-danger)';
          }
        });

        if (chosenIdx === correctIdx) {
          feedbackBox.style.background = 'rgba(16, 185, 129, 0.12)';
          feedbackBox.style.border = '1px solid var(--brand-success)';
          feedbackBox.style.color = 'var(--brand-success)';
          feedbackBox.innerHTML = '<strong>Resposta Correta!</strong> Veja o passo a passo completo abaixo.';
        } else {
          feedbackBox.style.background = 'rgba(239, 68, 68, 0.12)';
          feedbackBox.style.border = '1px solid var(--brand-danger)';
          feedbackBox.style.color = 'var(--brand-danger)';
          feedbackBox.innerHTML = '<strong>Resposta Incorreta.</strong> A opção correta está em verde. Confira a resolução!';
        }
        feedbackBox.classList.add('active');
      });
    });

    const accordionBtn = container.querySelector('.accordion-toggle-btn');
    const accordionContent = container.querySelector(`#content-${ex.id}`);
    
    accordionBtn.addEventListener('click', () => {
      const isVisible = accordionContent.style.display === 'block';
      accordionContent.style.display = isVisible ? 'none' : 'block';
      accordionBtn.querySelector('.toggle-icon').textContent = isVisible ? '▼' : '▲';
      
      if (!isVisible && window.renderMathInElement) {
        window.renderMathInElement(accordionContent, {
          delimiters: [
            { left: "$$", right: "$$", display: true },
            { left: "$", right: "$", display: false }
          ],
          throwOnError: false
        });
      }
    });

    const btnPrev = container.querySelector(`#btnPrevEx-${chapterKey}`);
    const btnNext = container.querySelector(`#btnNextEx-${chapterKey}`);

    if (btnPrev && currentIdx > 0) {
      btnPrev.addEventListener('click', () => {
        this.exerciseIndexes[chapterKey]--;
        this.renderSingleExercise(containerId, chapterKey, exercisesList);
      });
    }

    if (btnNext && currentIdx < exercisesList.length - 1) {
      btnNext.addEventListener('click', () => {
        this.exerciseIndexes[chapterKey]++;
        this.renderSingleExercise(containerId, chapterKey, exercisesList);
      });
    }

    container.querySelectorAll('.ex-dot-btn').forEach(dot => {
      dot.addEventListener('click', (e) => {
        this.exerciseIndexes[chapterKey] = parseInt(e.currentTarget.getAttribute('data-index'));
        this.renderSingleExercise(containerId, chapterKey, exercisesList);
      });
    });

    this.renderMath();
  }

  navigateChapter(direction) {
    const newIndex = this.currentChapterIndex + direction;
    if (newIndex >= 0 && newIndex < this.chaptersList.length) {
      window.location.hash = this.chaptersList[newIndex];
    }
  }

  updateSidebarActive(chapterId) {
    document.querySelectorAll('.sidebar-nav .nav-item').forEach(item => {
      if (item.getAttribute('data-nav-chapter') === chapterId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  updateFooterNavButtons() {
    const prevBtn = document.getElementById('btn-prev-chapter');
    const nextBtn = document.getElementById('btn-next-chapter');
    if (prevBtn) prevBtn.disabled = this.currentChapterIndex === 0;
    if (nextBtn) nextBtn.disabled = this.currentChapterIndex === this.chaptersList.length - 1;
  }

  renderMath() {
    if (window.renderMathInElement) {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: "$$", right: "$$", display: true },
          { left: "$", right: "$", display: false }
        ],
        throwOnError: false
      });
    }
  }

  toggleSidebar() {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('active');
  }

  closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('sidebar-overlay');
    if (sidebar) sidebar.classList.remove('open');
    if (overlay) overlay.classList.remove('active');
  }

  toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    document.getElementById('theme-icon').textContent = isDark ? '☀️' : '🌙';
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }

  initTheme() {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
      const icon = document.getElementById('theme-icon');
      if (icon) icon.textContent = '☀️';
    }
  }

  setupScrollProgress() {
    this.updateReadingProgress();
  }

  updateReadingProgress() {
    const bar = document.getElementById('reading-progress-bar');
    if (!bar) return;
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const progress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
    bar.style.width = `${progress}%`;
  }

  updateStudentProgress() {
    const percentSpan = document.getElementById('user-progress-percent');
    const fillBar = document.getElementById('user-progress-bar-fill');
    if (percentSpan && fillBar) {
      const percentage = Math.round(((this.currentChapterIndex + 1) / this.chaptersList.length) * 100);
      percentSpan.textContent = `${percentage}%`;
      fillBar.style.width = `${percentage}%`;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new LogarithmBookApp();
});