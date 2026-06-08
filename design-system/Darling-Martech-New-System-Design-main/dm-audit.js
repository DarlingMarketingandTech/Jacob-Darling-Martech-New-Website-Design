/* ============================================================================
   Growth System Audit — lightweight inline diagnostic (tools.html)
   ========================================================================== */
(function () {
  "use strict";
  var QUESTIONS = [
    { stage: 'Website', sol: 'rebuild',
      q: 'When someone lands on your site, do they understand the offer and have one clear next step?' },
    { stage: 'Lead Capture', sol: 'foundation',
      q: 'Do all your leads — forms, calls, DMs, bookings — land in one place you control?' },
    { stage: 'CRM', sol: 'foundation',
      q: 'Are contacts, source data, and history in one record instead of scattered or in someone\u2019s head?' },
    { stage: 'Automation', sol: 'automation',
      q: 'Does follow-up, routing, and reminders happen automatically instead of from memory?' },
    { stage: 'Follow-up', sol: 'automation',
      q: 'Are leads reliably followed up with — quickly and consistently — until they convert or opt out?' },
    { stage: 'Reporting', sol: 'visibility',
      q: 'Can you confidently connect your leads and revenue back to the source that produced them?' }
  ];
  var LABELS = ['Solid', 'Patchy', 'Broken']; // score 0,1,2

  var qWrap = document.getElementById('auditQ');
  if (!qWrap) return;
  var answers = new Array(QUESTIONS.length).fill(null);

  QUESTIONS.forEach(function (item, i) {
    var el = document.createElement('div');
    el.className = 'qitem';
    el.innerHTML =
      '<div class="ql"><span class="qn">' + String(i + 1).padStart(2, '0') + '</span>' +
      '<span class="qt">' + item.q + '</span></div>' +
      '<div class="qopts" data-i="' + i + '">' +
      LABELS.map(function (l, s) { return '<button data-s="' + s + '">' + l + '</button>'; }).join('') +
      '</div>';
    qWrap.appendChild(el);
  });

  qWrap.addEventListener('click', function (e) {
    var btn = e.target.closest('button[data-s]');
    if (!btn) return;
    var group = btn.parentElement;
    var i = +group.getAttribute('data-i');
    group.querySelectorAll('button').forEach(function (b) { b.classList.remove('sel'); });
    btn.classList.add('sel');
    answers[i] = +btn.getAttribute('data-s');
    update();
  });

  var arc = document.getElementById('aArc');
  var numEl = document.getElementById('aNum');
  var countEl = document.getElementById('aCount');
  var verdictEl = document.getElementById('aVerdict');
  var leakEl = document.getElementById('aLeak');
  var recEl = document.getElementById('aRec');
  var ctaEl = document.getElementById('aCta');
  var CIRC = 540;

  function update() {
    var answered = answers.filter(function (a) { return a !== null; }).length;
    var sum = answers.reduce(function (t, a) { return t + (a || 0); }, 0);
    var max = QUESTIONS.length * 2;
    var pct = Math.round((sum / max) * 100);

    arc.style.strokeDashoffset = (CIRC - CIRC * (pct / 100)).toFixed(1);
    numEl.textContent = pct;
    countEl.textContent = answered + ' / ' + QUESTIONS.length + ' answered';

    if (answered < QUESTIONS.length) {
      verdictEl.textContent = 'Keep going\u2026';
      leakEl.innerHTML = 'Answer all six to see your leak score.';
      recEl.textContent = '';
      ctaEl.textContent = 'Book a Diagnostic';
      ctaEl.setAttribute('href', 'mailto:jacob@darlingmartech.com?subject=Book%20a%20Diagnostic');
      return;
    }

    // verdict band
    var verdict, vcolor;
    if (pct <= 20) { verdict = 'Tight system'; }
    else if (pct <= 45) { verdict = 'Minor leaks'; }
    else if (pct <= 70) { verdict = 'Real leakage'; }
    else { verdict = 'Major leakage'; }
    verdictEl.textContent = verdict;

    // worst stage
    var worst = 0;
    for (var i = 1; i < answers.length; i++) { if (answers[i] > answers[worst]) worst = i; }
    var worstStage = QUESTIONS[worst];
    if (answers[worst] === 0) {
      leakEl.innerHTML = 'No critical leak detected \u2014 nice.';
      recEl.textContent = 'A diagnostic can still find the next 10% of upside.';
    } else {
      leakEl.innerHTML = 'Biggest leak: <b>' + worstStage.stage + '</b>';
      recEl.textContent = 'Recommended start: the ' + solName(worstStage.sol) + '.';
    }
    ctaEl.textContent = 'Get your full diagnostic';
    ctaEl.setAttribute('href', 'mailto:jacob@darlingmartech.com?subject=' +
      encodeURIComponent('Growth System Audit — leak score ' + pct + '%'));
  }
  function solName(sol) {
    return ({ rebuild: 'Website Conversion Rebuild', foundation: 'Growth System Foundation',
      automation: 'Automation & AI Workflow Build', visibility: 'Visibility & Reporting System' })[sol];
  }
  update();
})();
