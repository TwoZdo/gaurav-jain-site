// Dr. Gaurav Jain — v35 (banded layout + reveal system): sticky bar, menu, nav spy, framework tabs, session prefill, inquiry form.
(() => {
  document.documentElement.classList.add('js');
  const motion = !matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Reveal system: words rise from a mask, labels type, blocks rise, photos unveil. Once each. ---------- */
  if (motion && 'IntersectionObserver' in window) {
    document.documentElement.classList.add('rv');
    const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
    const mark = (el, kind, d = 0, i) => { if (!el) return; el.dataset.rv = kind; if (d) el.style.setProperty('--d', d + 'ms'); if (i != null) el.style.setProperty('--i', i); };
    // wrap each word (or letter) of an element's text in a masked span, keeping inner elements like .mute
    const split = (el, unit = 'word') => {
      if (!el) return;
      let n = 0;
      const walk = (node) => [...node.childNodes].forEach((c) => {
        if (c.nodeType === 1) { if (!c.matches('svg, .dial, .scr')) walk(c); return; }
        if (c.nodeType !== 3 || !c.textContent.trim()) return;
        const frag = document.createDocumentFragment();
        c.textContent.split(unit === 'char' ? /(\s)/ : /(\s+)/).forEach((part) => {
          if (!part) return;
          if (/^\s+$/.test(part)) { frag.append(part); return; }
          (unit === 'char' ? [...part] : [part]).forEach((bit) => {
            const w = document.createElement('span'); w.className = 'w';
            const k = document.createElement('i'); k.textContent = bit; k.style.setProperty('--i', n++);
            w.append(k); frag.append(w);
          });
        });
        c.replaceWith(frag);
      });
      walk(el);
    };

    // hero: stage photo settles, headline rises word by word, lead, intro and actions follow
    const hero = document.querySelector('.hero');
    const hh = document.querySelector('.hero-h'); split(hh); mark(hh, 'words', 150);
    $$('.hero-lead, .hero-intro, .hero-cred, .hero-actions').forEach((c, x) => mark(c, 'rise', 550, x));

    // sections: script accent writes in, headings rise word by word, intros and cards follow
    $$('.cred-row').forEach((el, x) => mark(el, 'rise', 0, x));
    $$('.h2').forEach((el) => { split(el); mark(el, 'words'); });
    $$('.sec-note').forEach((el) => mark(el, 'rise', 220));
    $$('.pull figcaption, .foot-label').forEach((el) => mark(el, 'rise', 300));
    $$('.grid-4 > *, .lenses > *, .sess-row > *, .book > *, .invite, .band-copy > :not(.h2)').forEach((el) => {
      mark(el, 'rise', 0, [...el.parentElement.children].indexOf(el));
    });
    mark(document.querySelector('.closer'), 'rise');
    $$('.pull p').forEach((el) => { split(el); mark(el, 'fade-words'); });
    const fw = document.querySelector('.foot-word'); split(fw, 'char'); mark(fw, 'words');
    mark(document.querySelector('.foot-sig'), 'rise', 500);

    const io = new IntersectionObserver((entries) => entries.forEach((e) => {
      if (!e.isIntersecting) return;
      e.target.classList.add('in'); io.unobserve(e.target);
    }), { threshold: .15, rootMargin: '0px 0px -6% 0px' });
    $$('[data-rv]').forEach((el) => io.observe(el));
    if (hero) io.observe(hero);
  }

  const year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  /* ---------- Sticky bar state + mobile menu ---------- */
  const bar = document.querySelector('[data-bar]');
  addEventListener('scroll', () => bar.classList.toggle('is-stuck', scrollY > 8), { passive: true });
  const menu = document.querySelector('[data-menu]');
  const set = (open) => { bar.classList.toggle('is-open', open); menu.setAttribute('aria-expanded', String(open)); menu.textContent = open ? 'Close' : 'Menu'; };
  menu.addEventListener('click', () => set(!bar.classList.contains('is-open')));
  bar.querySelectorAll('.nav a').forEach((a) => a.addEventListener('click', () => set(false)));
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && bar.classList.contains('is-open')) { set(false); menu.focus(); } });

  /* ---------- Current section in nav ---------- */
  const links = [...document.querySelectorAll('.nav a:not(.btn)')];
  const spy = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    links.forEach((a) => a.getAttribute('href') === '#' + e.target.id ? a.setAttribute('aria-current', 'true') : a.removeAttribute('aria-current'));
  }), { rootMargin: '-45% 0px -50% 0px' });
  links.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean).forEach((s) => spy.observe(s));

  /* ---------- Rotating word: next word rises in, current lifts out and fades ---------- */
  document.querySelectorAll('[data-dial]').forEach((dial) => {
    const faces = [...dial.querySelectorAll('.face')];
    const size = () => { dial.style.width = Math.ceil(Math.max(...faces.map((f) => f.scrollWidth))) + 'px'; };
    size(); document.fonts && document.fonts.ready.then(size); addEventListener('resize', size);
    let n = 0, timer = 0;
    faces[0].classList.add('is-on');
    if (!motion) return;
    const tick = () => {
      const cur = faces[n], next = faces[n = (n + 1) % faces.length];
      cur.classList.replace('is-on', 'is-off');
      next.style.transition = 'none';              // jump back below without animating upward-to-downward
      next.classList.remove('is-off');
      void next.offsetWidth;
      next.style.transition = '';
      next.classList.add('is-on');
    };
    new IntersectionObserver(([e]) => {
      clearInterval(timer);
      if (e.isIntersecting) timer = setInterval(tick, +dial.dataset.dial || 2600);
    }).observe(dial);
  });

  /* ---------- 3D book (inactive since v47: the book is held still; add data-book back to the scene to restore): spins on its own, drag (or arrow keys) to turn it; spin resumes from wherever it is left ---------- */
  const scene = document.querySelector('[data-book]');
  if (scene) {
    const book = scene.querySelector('.book3d');
    let ry = -28, rx = -6, vy = 0, drag = null, idle = 0, last = performance.now();
    const SPIN = motion ? 22.5 : 0;                      // deg per second (one turn every 16s)
    const draw = () => { book.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`; };
    const frame = (now) => {
      const dt = Math.min(.05, (now - last) / 1000); last = now;
      if (!drag) {
        if (Math.abs(vy) > .5) { ry += vy * dt; vy *= Math.pow(.04, dt); }   // coast after a flick
        else if (now > idle) { ry += SPIN * dt; rx += (-6 - rx) * Math.min(1, dt * 2); }
      }
      draw();
      if (visible) requestAnimationFrame(frame);
    };
    let visible = false;
    new IntersectionObserver(([e]) => {
      const was = visible; visible = e.isIntersecting;
      if (visible && !was) { last = performance.now(); requestAnimationFrame(frame); }
    }).observe(scene);
    scene.addEventListener('pointerdown', (e) => {
      drag = { x: e.clientX, y: e.clientY, ry, rx, t: e.timeStamp, lx: e.clientX };
      vy = 0; scene.setPointerCapture(e.pointerId); scene.classList.add('is-dragging');
    });
    scene.addEventListener('pointermove', (e) => {
      if (!drag) return;
      ry = drag.ry + (e.clientX - drag.x) * .5;
      rx = Math.max(-35, Math.min(35, drag.rx - (e.clientY - drag.y) * .3));
      const dt = (e.timeStamp - drag.t) / 1000;
      if (dt > 0) { vy = (e.clientX - drag.lx) * .5 / dt; drag.t = e.timeStamp; drag.lx = e.clientX; }
    });
    const end = () => { if (!drag) return; drag = null; idle = performance.now() + 1500; scene.classList.remove('is-dragging'); if (!motion) vy = 0; };
    scene.addEventListener('pointerup', end);
    scene.addEventListener('pointercancel', end);
    scene.addEventListener('keydown', (e) => {
      const d = { ArrowLeft: [-15, 0], ArrowRight: [15, 0], ArrowUp: [0, 8], ArrowDown: [0, -8] }[e.key];
      if (!d) return;
      e.preventDefault(); ry += d[0]; rx = Math.max(-35, Math.min(35, rx + d[1])); idle = performance.now() + 2500; draw();
    });
    draw();
  }

  /* ---------- Card icons idle-animate only while visible ---------- */
  const live = new IntersectionObserver((entries) => entries.forEach((e) => e.target.classList.toggle('is-live', e.isIntersecting)));
  document.querySelectorAll('[data-live]').forEach((el) => live.observe(el));

  /* ---------- Placeholder links (no URL supplied yet) do nothing ---------- */
  document.querySelectorAll('[data-placeholder]').forEach((a) => a.addEventListener('click', (e) => e.preventDefault()));

  /* ---------- Inquiry form ---------- */
  const form = document.querySelector('.form');
  if (form) {
    const msg = form.querySelector('[name="msg"]');
    document.querySelectorAll('[data-session]').forEach((a) => a.addEventListener('click', () => {
      if (!msg.value.trim()) msg.value = 'Interested in the session “' + a.dataset.session + '”. ';
      const pick = form.querySelector('[name="interest"][value="Speaking or keynote"]'); if (pick) pick.checked = true;
      setTimeout(() => form.querySelector('[name="name"]').focus({ preventScroll: true }), motion ? 700 : 0);
    }));

    const status = form.querySelector('.form-status');
    const check = (input) => { const ok = input.checkValidity(); input.setAttribute('aria-invalid', String(!ok)); return ok; };
    form.addEventListener('input', (e) => { if (e.target.hasAttribute('aria-invalid')) check(e.target); });
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const bad = [...form.querySelectorAll('[required]')].filter((i) => !check(i));
      if (bad.length) {
        status.className = 'form-status err';
        status.textContent = bad.some((i) => i.type === 'email' && i.value) ? 'That email address looks incomplete.' : 'Please add your name and email.';
        bad[0].focus();
        return;
      }
      // v61: send to the Vercel function (api/contact.js), which emails it through Resend
      const btn = form.querySelector('[type="submit"]');
      const label = btn.querySelector('span');
      const data = Object.fromEntries(new FormData(form));
      btn.disabled = true; label.textContent = 'Sending…';
      status.className = 'form-status'; status.textContent = '';
      const fail = () => {
        status.className = 'form-status err';
        status.innerHTML = 'Sorry, your message could not be sent. Please email <a href="mailto:jain@yellowfryum.com">jain@yellowfryum.com</a> instead.';
      };
      fetch('/api/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) })
        .then((r) => r.json().catch(() => ({})).then((j) => {
          if (r.ok && j.ok) {
            status.className = 'form-status';
            status.textContent = 'Thank you. Your message has been sent, and Dr. Jain will be in touch soon.';
            form.reset();
          } else if (j.error === 'invalid') {
            status.className = 'form-status err';
            status.textContent = 'Please check your name and email.';
          } else fail();
        }))
        .catch(fail)
        .finally(() => { btn.disabled = false; label.textContent = 'Let’s Connect'; });
    });
  }
})();
