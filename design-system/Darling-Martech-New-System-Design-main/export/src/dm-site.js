/* ============================================================================
   Darling Martech — site behavior
   ========================================================================== */
(function () {
  "use strict";
  window.__dmReady = true;

  /* ---------------------------------------------------------------- icons */
  var ICONS = {
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"/>',
    capture: '<path d="M4 5h16v11H4z"/><path d="M4 16l4 4M9 12h6M9 8h3"/>',
    crm: '<circle cx="9" cy="8" r="3"/><path d="M3 20c0-3 2.7-5 6-5s6 2 6 5"/><path d="M16 4a3 3 0 0 1 0 6M18 14c2 .6 3 2.2 3 4"/>',
    auto: '<circle cx="6" cy="6" r="2.4"/><circle cx="18" cy="18" r="2.4"/><path d="M8.4 6H14a4 4 0 0 1 4 4v5.6M6 8.4V13a4 4 0 0 0 4 4h5.6"/>',
    send: '<path d="M21 4 3 11l7 2 2 7 9-16z"/><path d="M10 13l4-4"/>',
    chart: '<path d="M4 20V4M4 20h16"/><rect x="7" y="12" width="3" height="5"/><rect x="12" y="8" width="3" height="9"/><rect x="17" y="5" width="3" height="12"/>',
    search: '<circle cx="11" cy="11" r="6"/><path d="M20 20l-4.5-4.5"/>',
    route: '<circle cx="6" cy="18" r="2.4"/><circle cx="18" cy="6" r="2.4"/><path d="M8 16c6-1 8-3 9-8M15 6h3v3"/>',
    bolt: '<path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z"/>'
  };
  function svg(name, cls) {
    return '<svg class="ico-svg ' + (cls || '') + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[name] || '') + '</svg>';
  }
  document.querySelectorAll('[data-ico]').forEach(function (el) {
    el.innerHTML = svg(el.getAttribute('data-ico'));
  });

  /* ---------------------------------------------------------------- nav */
  var nav = document.getElementById('nav');
  var burger = document.getElementById('burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    document.querySelectorAll('#drawer a').forEach(function (a) {
      a.addEventListener('click', function () {
        nav.classList.remove('open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
  }

  /* ---------------------------------------------------------------- system data */
  var STAGES = [
    { key: 'website', step: 'Front door', name: 'Website', icon: 'globe',
      title: 'Website',
      copy: 'The site stops being a brochure and becomes the entrance to your system — one clear offer, real trust, and a single obvious next step.',
      build: ['Message + offer clarity', 'Conversion page architecture', 'Trust & proof sections', 'A single primary CTA path'],
      vis: [['Clarity', 'offer is obvious in 5s'], ['Trust', 'proof above the fold'], ['Action', 'one path forward']] },
    { key: 'capture', step: 'Intake', name: 'Lead Capture', icon: 'capture',
      title: 'Lead Capture',
      copy: 'Every form, call, DM, and booking request lands in one controlled place — tagged, timestamped, and impossible to lose.',
      build: ['Unified forms & booking', 'Source tagging on every lead', 'Instant capture, no inbox roulette', 'Spam & quality filtering'],
      vis: [['Inbound', 'forms · calls · DMs'], ['One place', 'nothing slips'], ['Tagged', 'source on entry']] },
    { key: 'crm', step: 'Memory', name: 'CRM', icon: 'crm',
      title: 'CRM',
      copy: 'Leads, contacts, source data, and history live in one record. The business stops relying on whoever happened to take the call.',
      build: ['CRM setup & data model', 'Contact routing & ownership', 'Pipeline stages that match reality', 'Clean handoffs, no dropped balls'],
      vis: [['Contacts', 'one source of truth'], ['Pipeline', 'stages that fit'], ['Routing', 'right person, fast']] },
    { key: 'automation', step: 'Engine', name: 'Automation', icon: 'auto',
      title: 'Automation',
      copy: 'Follow-up, reminders, and routing move out of someone\u2019s memory and into rules that run whether or not anyone remembers.',
      build: ['Workflow mapping', 'Rules-based follow-up', 'AI-assisted ops & content', 'Lead alerts & reminders'],
      vis: [['Trigger', 'lead arrives'], ['Rule', 'route + nurture'], ['Result', 'no manual chase']] },
    { key: 'followup', step: 'Conversion', name: 'Follow-up', icon: 'send',
      title: 'Follow-up',
      copy: 'Consistent, timely nurture keeps warm prospects warm — so interest turns into booked conversations instead of going cold.',
      build: ['Sequenced nurture', 'Speed-to-lead responses', 'Re-engagement of stalled leads', 'Booking & reminder flow'],
      vis: [['Speed', 'reply in minutes'], ['Nurture', 'stay top of mind'], ['Booked', 'interest \u2192 calls']] },
    { key: 'reporting', step: 'Visibility', name: 'Reporting', icon: 'chart',
      title: 'Reporting',
      copy: 'Source, conversion, and revenue connect into one honest view — so the next decision is made on evidence, not instinct.',
      build: ['Connected dashboards', 'Source \u2192 revenue attribution', 'Conversion health metrics', 'Decisions backed by data'],
      vis: [['Source', 'where leads come from'], ['Convert', 'what actually closes'], ['Revenue', 'one clear picture']] }
  ];

  /* ------------------------------------------------ hero compact flow */
  var heroFlow = document.getElementById('heroFlow');
  if (heroFlow) {
    STAGES.forEach(function (s, i) {
      var node = document.createElement('div');
      node.className = 'flow-node';
      node.innerHTML =
        '<span class="idx">' + svg(s.icon) + '</span>' +
        '<span><span class="nm">' + s.name + '</span><br><span class="sub">' + String(i + 1).padStart(2, '0') + ' · ' + s.step + '</span></span>' +
        '<span class="pulse"></span>';
      heroFlow.appendChild(node);
    });
    startFlowAnim();
  }

  var flowTimer = null, flowIdx = 0;
  function startFlowAnim() {
    stopFlowAnim();
    var nodes = heroFlow.querySelectorAll('.flow-node');
    if (!nodes.length) return;
    flowTimer = setInterval(function () {
      nodes.forEach(function (n) { n.classList.remove('live'); });
      nodes[flowIdx % nodes.length].classList.add('live');
      flowIdx++;
    }, 900);
  }
  function stopFlowAnim() {
    if (flowTimer) { clearInterval(flowTimer); flowTimer = null; }
    if (heroFlow) heroFlow.querySelectorAll('.flow-node').forEach(function (n) { n.classList.remove('live'); });
  }

  /* ------------------------------------------------ interactive map */
  var track = document.getElementById('mapTrack');
  var detail = document.getElementById('mapDetail');
  if (track && detail) {
    STAGES.forEach(function (s, i) {
      var b = document.createElement('button');
      b.className = 'map-btn' + (i === 0 ? ' active' : '');
      b.setAttribute('data-i', i);
      b.innerHTML =
        '<span class="map-bubble">' + svg(s.icon) + '</span>' +
        '<span class="map-step">' + String(i + 1).padStart(2, '0') + ' · ' + s.step + '</span>' +
        '<span class="map-name">' + s.name + '</span>';
      var cell = document.createElement('div');
      cell.className = 'map-cell';
      cell.appendChild(b);
      track.appendChild(cell);
      b.addEventListener('click', function () {
        track.querySelectorAll('.map-btn').forEach(function (x) { x.classList.remove('active'); });
        b.classList.add('active');
        renderDetail(i);
      });
    });
    renderDetail(0);
  }
  function renderDetail(i) {
    var s = STAGES[i];
    detail.innerHTML =
      '<div>' +
        '<span class="tag">Stage ' + String(i + 1).padStart(2, '0') + ' · ' + s.step + '</span>' +
        '<h3 class="h2" style="font-size:clamp(1.5rem,2.4vw,2.1rem);">' + s.title + '</h3>' +
        '<p class="lead" style="color:var(--on-dark-2);">' + s.copy + '</p>' +
        '<ul>' + s.build.map(function (x) { return '<li>' + x + '</li>'; }).join('') + '</ul>' +
      '</div>' +
      '<div class="panel-vis">' +
        s.vis.map(function (v) {
          return '<div style="display:flex;align-items:baseline;justify-content:space-between;gap:14px;padding:12px 0;border-bottom:1px solid var(--line-dark);">' +
            '<span style="font-family:var(--font-mono);font-size:.72rem;letter-spacing:.1em;text-transform:uppercase;color:var(--accent);">' + v[0] + '</span>' +
            '<span style="font-size:.9rem;color:var(--on-dark-2);text-align:right;">' + v[1] + '</span></div>';
        }).join('') +
      '</div>';
  }

  /* ---------------------------------------------------------------- gauge */
  var gaugeArc = document.getElementById('gaugeArc');
  var gaugeNum = document.getElementById('gaugeNum');
  function animateGauge() {
    if (!gaugeArc) return;
    var target = 68; // illustrative "leak score"
    var circ = 540, end = circ - (circ * target / 100) * 0.75; // 0.75 = 270deg sweep feel
    // simpler: full circle dasharray 540 (~2*pi*86). offset for target%
    var off = circ - (circ * (target / 100));
    var t0 = null;
    function frame(t) {
      if (!t0) t0 = t;
      var p = Math.min((t - t0) / 1100, 1);
      var eased = 1 - Math.pow(1 - p, 3);
      gaugeArc.style.strokeDashoffset = (circ - (circ - off) * eased).toFixed(1);
      gaugeNum.textContent = Math.round(target * eased);
      if (p < 1) requestAnimationFrame(frame);
    }
    requestAnimationFrame(frame);
  }

  /* ---------------------------------------------------------------- reveal */
  var revealEls = [].slice.call(document.querySelectorAll('.reveal'));
  var gaugeFired = false;
  function checkReveal() {
    var vh = window.innerHeight || document.documentElement.clientHeight;
    revealEls.forEach(function (el) {
      if (el.classList.contains('in')) return;
      var r = el.getBoundingClientRect();
      if (r.top < vh - 60 && r.bottom > 0) {
        el.classList.add('in');
        // safety: guarantee final state even if the transition is throttled
        setTimeout(function () { el.classList.add('shown'); }, 820);
      }
    });
    if (!gaugeFired && gaugeArc) {
      var gr = gaugeArc.closest('.gauge').getBoundingClientRect();
      if (gr.top < vh - 80 && gr.bottom > 0) { gaugeFired = true; animateGauge(); }
    }
  }
  checkReveal();
  window.addEventListener('scroll', checkReveal, { passive: true });
  window.addEventListener('resize', checkReveal);
  window.addEventListener('load', checkReveal);
  // safety: ensure everything visible shortly after load no matter what
  setTimeout(checkReveal, 300);

  /* ---------------------------------------------------------------- active nav link */
  (function () {
    var path = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-links a').forEach(function (a) {
      var href = a.getAttribute('href');
      if ((href === path) || (path === 'index.html' && href && href.indexOf('index.html') === 0 && href.indexOf('#') === -1)) {
        a.setAttribute('aria-current', 'page');
      }
    });
  })();

  /* ---------------------------------------------------------------- tweaks */
  var TW_KEY = 'dm_tweaks_v1';
  var tw = { accent: '#990000', accentP: '#6B0F1A', flow: 'on', weight: '900' };
  try { var saved = JSON.parse(localStorage.getItem(TW_KEY)); if (saved) tw = Object.assign(tw, saved); } catch (e) {}

  function applyTweaks() {
    document.documentElement.style.setProperty('--accent', tw.accent);
    document.documentElement.style.setProperty('--accent-pressed', tw.accentP);
    document.querySelectorAll('.display,.h1,.hero h1,.cta h2,.pagehead h1').forEach(function (el) {
      el.style.fontWeight = tw.weight;
    });
    if (tw.flow === 'on') { if (heroFlow) startFlowAnim(); } else { stopFlowAnim(); }
    // reflect UI state
    syncTweakUI();
    try { localStorage.setItem(TW_KEY, JSON.stringify(tw)); } catch (e) {}
  }
  function syncTweakUI() {
    document.querySelectorAll('#twAccent .tw-sw').forEach(function (s) {
      s.classList.toggle('on', s.getAttribute('data-c') === tw.accent);
    });
    document.querySelectorAll('#twFlow button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-v') === tw.flow);
    });
    document.querySelectorAll('#twWeight button').forEach(function (b) {
      b.classList.toggle('on', b.getAttribute('data-v') === tw.weight);
    });
  }
  document.querySelectorAll('#twAccent .tw-sw').forEach(function (s) {
    s.addEventListener('click', function () { tw.accent = s.getAttribute('data-c'); tw.accentP = s.getAttribute('data-p'); applyTweaks(); });
  });
  document.querySelectorAll('#twFlow button').forEach(function (b) {
    b.addEventListener('click', function () { tw.flow = b.getAttribute('data-v'); applyTweaks(); });
  });
  document.querySelectorAll('#twWeight button').forEach(function (b) {
    b.addEventListener('click', function () { tw.weight = b.getAttribute('data-v'); applyTweaks(); });
  });
  var twClose = document.getElementById('twClose');
  if (twClose) twClose.addEventListener('click', function () { setTweaksOpen(false); });

  var tweaksEl = document.getElementById('tweaks');
  function setTweaksOpen(on) { if (tweaksEl) tweaksEl.classList.toggle('show', !!on); }
  // host protocol: toolbar toggles tweaks
  window.addEventListener('message', function (e) {
    var d = e.data;
    if (!d || typeof d !== 'object') return;
    if (d.type === 'tweaks:toggle') setTweaksOpen(d.value !== undefined ? d.value : !(tweaksEl && tweaksEl.classList.contains('show')));
    if (d.type === 'tweaks:open') setTweaksOpen(true);
    if (d.type === 'tweaks:close') setTweaksOpen(false);
  });
  // keyboard fallback: shift+T toggles
  window.addEventListener('keydown', function (e) {
    if (e.shiftKey && (e.key === 'T' || e.key === 't')) setTweaksOpen(!(tweaksEl && tweaksEl.classList.contains('show')));
  });

  applyTweaks();
})();
