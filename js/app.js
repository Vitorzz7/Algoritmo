/**
 * DESCOMPLICANDO OS LOGARITMOS - CONTROLADOR PRINCIPAL DA APLICAÇÃO (SPA)
 * Gerencia navegação de capítulos, renderização de KaTeX, accordions e temas.
 */

class AppController {
  constructor() {
    this.currentChapterId = 'welcome';
    this.chaptersList = ['welcome', 'cap1', 'cap2', 'cap3', 'games'];
    this.visitedChapters = new Set(JSON.parse(localStorage.getItem('visited_chapters') || '["welcome"]'));

    this.initTheme();
    this.initNavigation();
    this.initSoundToggle();
    this.initSidebarMobile();

    // Roteamento inicial por Hash ou Padrão
    const hash = window.location.hash.replace('#', '');
    if (this.chaptersList.includes(hash)) {
      this.loadChapter(hash);
    } else {
      this.loadChapter('welcome');
    }

    window.addEventListener('hashchange', () => {
      const newHash = window.location.hash.replace('#', '');
      if (this.chaptersList.includes(newHash) && newHash !== this.currentChapterId) {
        this.loadChapter(newHash);
      }
    });
  }

  initTheme() {
    const savedTheme = localStorage.getItem('site_theme');
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.body.classList.add('dark-mode');
    }

    const themeToggleBtn = document.getElementById('btnThemeToggle');
    if (themeToggleBtn) {
      this.updateThemeIcon(themeToggleBtn);
      themeToggleBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const isDark = document.body.classList.contains('dark-mode');
        localStorage.setItem('site_theme', isDark ? 'dark' : 'light');
        this.updateThemeIcon(themeToggleBtn);
        if (window.soundSystem) window.soundSystem.playClickSound();
      });
    }
  }

  updateThemeIcon(btn) {
    const isDark = document.body.classList.contains('dark-mode');
    btn.innerHTML = isDark ? '🌙' : '☀️';
    btn.setAttribute('title', isDark ? 'Mudar para Modo Claro' : 'Mudar para Modo Escuro');
  }

  initSoundToggle() {
    const soundBtn = document.getElementById('btnSoundToggle');
    if (!soundBtn || !window.soundSystem) return;

    this.updateSoundIcon(soundBtn);
    soundBtn.addEventListener('click', () => {
      const enabled = window.soundSystem.toggle();
      this.updateSoundIcon(soundBtn);
      if (enabled) window.soundSystem.playClickSound();
    });
  }

  updateSoundIcon(btn) {
    const enabled = window.soundSystem ? window.soundSystem.enabled : true;
    btn.textContent = enabled ? '🔊' : '🔇';
    btn.setAttribute('title', enabled ? 'Desativar Sons' : 'Ativar Sons');
  }

  initSidebarMobile() {
    const toggleBtn = document.getElementById('btnSidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');

    if (toggleBtn && sidebar && overlay) {
      toggleBtn.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
      });

      overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
      });
    }
  }

  initNavigation() {
    document.querySelectorAll('[data-nav-chapter]').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const chId = link.getAttribute('data-nav-chapter');
        this.loadChapter(chId);

        const sidebar = document.querySelector('.sidebar');
        const overlay = document.getElementById('sidebarOverlay');
        if (sidebar && sidebar.classList.contains('open')) {
          sidebar.classList.remove('open');
          if (overlay) overlay.classList.remove('active');
        }
      });
    });
  }

  loadChapter(chapterId) {
    if (!window.BOOK_CONTENT || !BOOK_CONTENT[chapterId]) return;
    this.currentChapterId = chapterId;
    window.location.hash = chapterId;

    this.visitedChapters.add(chapterId);
    localStorage.setItem('visited_chapters', JSON.stringify([...this.visitedChapters]));
    this.updateProgressUI();

    document.querySelectorAll('[data-nav-chapter]').forEach(item => {
      if (item.getAttribute('data-nav-chapter') === chapterId) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    const data = BOOK_CONTENT[chapterId];
    const crumb = document.getElementById('activeBreadcrumb');
    if (crumb) crumb.textContent = data.tag;

    const contentArea = document.getElementById('contentContainer');
    if (!contentArea) return;

    const curIndex = this.chaptersList.indexOf(chapterId);
    const prevChapterId = curIndex > 0 ? this.chaptersList[curIndex - 1] : null;
    const nextChapterId = curIndex < this.chaptersList.length - 1 ? this.chaptersList[curIndex + 1] : null;

    contentArea.innerHTML = `
      <article>
        <header class="chapter-hero">
          <span class="chapter-tag">${data.tag}</span>
          <h2 class="chapter-title">${data.title}</h2>
          <p class="chapter-subtitle">${data.subtitle}</p>
        </header>

        <div class="chapter-body">
          ${data.html}
        </div>

        <footer class="chapter-navigation-footer" style="display: flex; justify-content: space-between; margin-top: 3rem; padding-top: 1.5rem; border-top: 1px solid var(--border-color);">
          <button class="btn-action-secondary" id="btnNavPrev" ${!prevChapterId ? 'disabled style="opacity: 0.4; cursor: not-allowed;"' : ''}>
            ⬅️ Anterior
          </button>
          <button class="btn-action-primary" id="btnNavNext" ${!nextChapterId ? 'disabled style="opacity: 0.4; cursor: not-allowed;"' : ''}>
            Próximo ➔
          </button>
        </footer>
      </article>
    `;

    const btnPrev = document.getElementById('btnNavPrev');
    const btnNext = document.getElementById('btnNavNext');
    if (btnPrev && prevChapterId) {
      btnPrev.addEventListener('click', () => this.loadChapter(prevChapterId));
    }
    if (btnNext && nextChapterId) {
      btnNext.addEventListener('click', () => this.loadChapter(nextChapterId));
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (chapterId === 'cap1') {
      if (window.InteractiveTools) {
        window.InteractiveTools.initSunShadow('sun-shadow-interactive-mount');
        window.InteractiveTools.initPeteleco('peteleco-interactive-mount');
        window.InteractiveTools.initBuildingRule('building-rule-interactive-mount');
      }
      this.mountExercises('exercises-cap1-mount', window.EXERCISES_DATA ? EXERCISES_DATA.cap1 : []);
    } else if (chapterId === 'cap2') {
      if (window.ChartSimulator) {
        window.ChartSimulator.mountSimulator('chart-simulator-mount');
      }
      if (window.RealWorldSims) {
        window.RealWorldSims.mountSimulators('real-world-simulators-mount');
      }
      this.mountExercises('exercises-cap2-mount', window.EXERCISES_DATA ? EXERCISES_DATA.cap2 : []);
    } else if (chapterId === 'cap3') {
      this.mountExercises('exercises-cap3-mount', window.EXERCISES_DATA ? EXERCISES_DATA.cap3 : []);
    } else if (chapterId === 'games') {
      if (window.QuizEngine) {
        new window.QuizEngine('native-quiz-mount');
        window.QuizEngine.renderWordwallQRCodes();
      }
    }

    this.renderMathFormulas();
  }

  renderMathFormulas() {
    if (window.renderMathInElement) {
      window.renderMathInElement(document.body, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '$', right: '$', display: false }
        ],
        throwOnError: false
      });
    }
  }

  mountExercises(containerId, list) {
    const el = document.getElementById(containerId);
    if (!el || !list) return;

    el.innerHTML = list.map(item => `
      <div class="exercise-card" id="${item.id}">
        <div class="exercise-header">
          <span class="exercise-source-tag">🏷️ ${item.source}</span>
          <span class="exercise-difficulty">Dificuldade: ${item.difficulty}</span>
        </div>
        <div class="exercise-question-text">
          ${item.question}
        </div>
        
        <button class="accordion-toggle-btn" data-toggle-target="ans-${item.id}">
          <span>Ver Resolução Passo a Passo</span>
          <span class="toggle-icon">▼</span>
        </button>

        <div class="accordion-content" id="ans-${item.id}">
          <div class="step-by-step-box">
            ${item.steps.map(step => `
              <div class="solution-step">
                <div class="step-label">${step.label}</div>
                <div style="font-size: 0.98rem; line-height: 1.6;">${step.content}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `).join('');

    el.querySelectorAll('.accordion-toggle-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-toggle-target');
        const content = document.getElementById(targetId);
        if (!content) return;

        const isOpen = content.classList.contains('open');
        if (isOpen) {
          content.classList.remove('open');
          btn.classList.remove('expanded');
          btn.querySelector('span:first-child').textContent = 'Ver Resolução Passo a Passo';
        } else {
          content.classList.add('open');
          btn.classList.add('expanded');
          btn.querySelector('span:first-child').textContent = 'Ocultar Resolução';
          if (window.soundSystem) window.soundSystem.playClickSound();
          this.renderMathFormulas();
        }
      });
    });
  }

  updateProgressUI() {
    const total = this.chaptersList.length;
    const visited = this.visitedChapters.size;
    const pct = Math.min(100, Math.round((visited / total) * 100));

    const topBar = document.getElementById('readingProgressBar');
    if (topBar) topBar.style.width = `${pct}%`;

    const sideBarFill = document.getElementById('userProgressFill');
    const sideBarPct = document.getElementById('userProgressPct');
    if (sideBarFill) sideBarFill.style.width = `${pct}%`;
    if (sideBarPct) sideBarPct.textContent = `${pct}% Concluído`;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.app = new AppController();
});