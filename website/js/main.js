/* ==========================================================================
   Food Chain Magnate Tutorial — Main JavaScript
   Vanilla JS, no dependencies
   ========================================================================== */

(function () {
  'use strict';

  /* --------------------------------------------------------------------------
     1. Accordion Component
     -------------------------------------------------------------------------- */
  function initAccordions() {
    document.querySelectorAll('.accordion__trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var expanded = this.getAttribute('aria-expanded') === 'true';
        var panelId = this.getAttribute('aria-controls');
        var panel = document.getElementById(panelId);
        if (!panel) return;

        // On mobile, close siblings (only one open at a time)
        if (window.innerWidth < 768) {
          var accordion = this.closest('.accordion');
          if (accordion) {
            accordion.querySelectorAll('.accordion__trigger').forEach(function (other) {
              if (other !== trigger) {
                other.setAttribute('aria-expanded', 'false');
                var otherPanel = document.getElementById(other.getAttribute('aria-controls'));
                if (otherPanel) otherPanel.classList.remove('is-open');
              }
            });
          }
        }

        this.setAttribute('aria-expanded', String(!expanded));
        panel.classList.toggle('is-open', !expanded);
      });
    });
  }

  /* --------------------------------------------------------------------------
     2. Expander ("More details") Component
     -------------------------------------------------------------------------- */
  function initExpanders() {
    document.querySelectorAll('.expander__trigger').forEach(function (trigger) {
      trigger.addEventListener('click', function () {
        var expanded = this.getAttribute('aria-expanded') === 'true';
        var contentId = this.getAttribute('aria-controls');
        var content = document.getElementById(contentId);
        if (!content) return;

        this.setAttribute('aria-expanded', String(!expanded));
        content.classList.toggle('is-open', !expanded);
      });
    });
  }

  /* --------------------------------------------------------------------------
     3. Glossary Tooltips
     -------------------------------------------------------------------------- */
  var activeTooltip = null;

  function initGlossaryTooltips() {
    document.querySelectorAll('.glossary-term').forEach(function (term) {
      term.addEventListener('click', function (e) {
        e.preventDefault();
        e.stopPropagation();

        if (activeTooltip && activeTooltip !== this) {
          activeTooltip.classList.remove('is-active');
        }

        this.classList.toggle('is-active');
        activeTooltip = this.classList.contains('is-active') ? this : null;

        // Reposition if off-screen
        if (activeTooltip) {
          var tooltip = activeTooltip.querySelector('.glossary-tooltip');
          if (tooltip) repositionTooltip(activeTooltip, tooltip);
        }
      });
    });

    // Close tooltip on outside click
    document.addEventListener('click', function () {
      if (activeTooltip) {
        activeTooltip.classList.remove('is-active');
        activeTooltip = null;
      }
    });
  }

  function repositionTooltip(term, tooltip) {
    var rect = tooltip.getBoundingClientRect();
    // If overflowing right
    if (rect.right > window.innerWidth - 8) {
      tooltip.style.left = 'auto';
      tooltip.style.right = '0';
      tooltip.style.transform = 'none';
    }
    // If overflowing left
    if (rect.left < 8) {
      tooltip.style.left = '0';
      tooltip.style.right = 'auto';
      tooltip.style.transform = 'none';
    }
  }

  /* --------------------------------------------------------------------------
     4. Step Dropdown (Jump to Step)
     -------------------------------------------------------------------------- */
  function initStepDropdown() {
    var label = document.querySelector('.step-header__label');
    var dropdown = document.querySelector('.step-dropdown');
    if (!label || !dropdown) return;

    label.addEventListener('click', function (e) {
      e.stopPropagation();
      dropdown.classList.toggle('is-open');
    });

    document.addEventListener('click', function () {
      dropdown.classList.remove('is-open');
    });

    dropdown.addEventListener('click', function (e) {
      e.stopPropagation();
    });
  }

  /* --------------------------------------------------------------------------
     5. Mobile Menu Toggle
     -------------------------------------------------------------------------- */
  function initMobileMenu() {
    var hamburger = document.querySelector('.site-header__hamburger');
    var nav = document.querySelector('.site-header__nav');
    if (!hamburger || !nav) return;

    hamburger.addEventListener('click', function (e) {
      e.stopPropagation();
      nav.classList.toggle('is-open');
      var expanded = nav.classList.contains('is-open');
      hamburger.setAttribute('aria-expanded', String(expanded));
    });

    document.addEventListener('click', function () {
      nav.classList.remove('is-open');
      if (hamburger) hamburger.setAttribute('aria-expanded', 'false');
    });
  }

  /* --------------------------------------------------------------------------
     6. Image Zoom
     -------------------------------------------------------------------------- */
  function initImageZoom() {
    document.querySelectorAll('.figure__img-wrapper').forEach(function (wrapper) {
      wrapper.addEventListener('click', function () {
        var img = this.querySelector('img');
        if (!img) return;

        var overlay = document.getElementById('img-zoom-overlay');
        if (!overlay) {
          overlay = document.createElement('div');
          overlay.id = 'img-zoom-overlay';
          overlay.className = 'img-zoom-overlay';
          overlay.innerHTML = '<img src="" alt="">';
          overlay.addEventListener('click', function () {
            this.classList.remove('is-open');
          });
          document.body.appendChild(overlay);
        }

        var zoomImg = overlay.querySelector('img');
        zoomImg.src = img.src;
        zoomImg.alt = img.alt;
        overlay.classList.add('is-open');
      });
    });

    // Close on Escape
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        var overlay = document.getElementById('img-zoom-overlay');
        if (overlay) overlay.classList.remove('is-open');

        // Also close step dropdown
        var dropdown = document.querySelector('.step-dropdown');
        if (dropdown) dropdown.classList.remove('is-open');
      }
    });
  }

  /* --------------------------------------------------------------------------
     7. Tab Interface
     -------------------------------------------------------------------------- */
  function initTabs() {
    document.querySelectorAll('.tabs').forEach(function (tabGroup) {
      var tabs = tabGroup.querySelectorAll('.tabs__tab');
      var panels = tabGroup.querySelectorAll('.tabs__panel');

      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          var targetId = this.getAttribute('aria-controls');

          tabs.forEach(function (t) {
            t.setAttribute('aria-selected', 'false');
          });
          panels.forEach(function (p) {
            p.classList.remove('is-active');
          });

          this.setAttribute('aria-selected', 'true');
          var target = document.getElementById(targetId);
          if (target) target.classList.add('is-active');
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     8. Quiz / Interactive Exercises
     -------------------------------------------------------------------------- */
  function initQuizzes() {
    document.querySelectorAll('.quiz').forEach(function (quiz) {
      var options = quiz.querySelectorAll('.quiz__option');
      var feedback = quiz.querySelector('.quiz__feedback');
      var answered = false;

      options.forEach(function (option) {
        option.addEventListener('click', function () {
          if (answered) return;
          answered = true;

          var isCorrect = this.dataset.correct === 'true';

          // Mark all options
          options.forEach(function (opt) {
            if (opt.dataset.correct === 'true') {
              opt.classList.add('is-correct');
            } else if (opt === option && !isCorrect) {
              opt.classList.add('is-incorrect');
            }
            opt.style.pointerEvents = 'none';
          });

          // Show feedback
          if (feedback) {
            var correctFeedback = feedback.querySelector('.quiz__feedback--correct');
            var incorrectFeedback = feedback.querySelector('.quiz__feedback--incorrect');
            if (isCorrect && correctFeedback) {
              correctFeedback.classList.add('is-visible');
            } else if (!isCorrect && incorrectFeedback) {
              incorrectFeedback.classList.add('is-visible');
            }
          }
        });
      });
    });
  }

  /* --------------------------------------------------------------------------
     9. Lazy Loading Images
     -------------------------------------------------------------------------- */
  function initLazyLoading() {
    if ('loading' in HTMLImageElement.prototype) return; // native support

    var lazyImages = document.querySelectorAll('img[loading="lazy"]');
    if (!lazyImages.length) return;

    if ('IntersectionObserver' in window) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var img = entry.target;
            if (img.dataset.src) {
              img.src = img.dataset.src;
              img.removeAttribute('data-src');
            }
            observer.unobserve(img);
          }
        });
      }, { rootMargin: '200px' });

      lazyImages.forEach(function (img) { observer.observe(img); });
    }
  }

  /* --------------------------------------------------------------------------
     10. Smooth Scroll for Anchor Links
     -------------------------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(function (link) {
      link.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href').slice(1);
        var target = document.getElementById(targetId);
        if (target) {
          e.preventDefault();
          var offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 48;
          var top = target.getBoundingClientRect().top + window.scrollY - offset - 16;
          window.scrollTo({ top: top, behavior: 'smooth' });
        }
      });
    });
  }

  /* --------------------------------------------------------------------------
     11. Keyboard Navigation for Step Pages
     -------------------------------------------------------------------------- */
  function initKeyboardNav() {
    document.addEventListener('keydown', function (e) {
      // Arrow left = previous step, Arrow right = next step
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

      if (e.key === 'ArrowLeft') {
        var prev = document.querySelector('.step-footer__link--prev');
        if (prev) prev.click();
      }
      if (e.key === 'ArrowRight') {
        var next = document.querySelector('.step-footer__link--next');
        if (next) next.click();
      }
    });
  }

  /* --------------------------------------------------------------------------
     12. Glossary Search / Filter
     -------------------------------------------------------------------------- */
  function initGlossarySearch() {
    var input = document.getElementById('glossary-search');
    if (!input) return;

    var glossary = input.closest('.page-content');
    if (!glossary) return;

    var terms = glossary.querySelectorAll('dt');

    input.addEventListener('input', function () {
      var query = this.value.toLowerCase().trim();

      terms.forEach(function (dt) {
        var dd = dt.nextElementSibling;
        if (!dd || dd.tagName !== 'DD') return;

        var text = (dt.textContent + ' ' + dd.textContent).toLowerCase();
        var match = !query || text.indexOf(query) !== -1;

        dt.style.display = match ? '' : 'none';
        dd.style.display = match ? '' : 'none';
      });
    });
  }

  /* --------------------------------------------------------------------------
     Initialize Everything on DOM Ready
     -------------------------------------------------------------------------- */
  function init() {
    initAccordions();
    initExpanders();
    initGlossaryTooltips();
    initStepDropdown();
    initMobileMenu();
    initImageZoom();
    initTabs();
    initQuizzes();
    initLazyLoading();
    initSmoothScroll();
    initKeyboardNav();
    initGlossarySearch();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
