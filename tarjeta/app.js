(function () {
  var d = window.TARJETA || {};
  var $ = function (id) { return document.getElementById(id); };

  var ICONOS = {
    facebook: '<path d="M14 8V6.5c0-.7.2-1.1 1.2-1.1H17V2.2C16.6 2.1 15.5 2 14.3 2 11.7 2 10 3.6 10 6.4V8H7v3.6h3V22h4V11.6h2.9l.5-3.6z"/>',
    tiktok: '<path d="M16.6 2h-3.4v13.4a2.9 2.9 0 1 1-2.9-2.9c.3 0 .6 0 .9.1V9.1a6.4 6.4 0 1 0 5.4 6.3V8.6a7.8 7.8 0 0 0 4.4 1.4V6.6a4.5 4.5 0 0 1-4.4-4.6z"/>',
    correo: '<path d="M2 5h20v14H2zm2 2v.5l8 5 8-5V7l-8 5z"/>',
    telefono: '<path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25 11.4 11.4 0 0 0 3.6.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1z"/>',
    whatsapp: '<path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.3 14.1c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.9 2.1c.1.2.1.4 0 .5l-.3.5-.4.4c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.2 1 2.1 1.3 2.4 1.5.3.1.5.1.6-.1l.9-1c.2-.3.4-.2.6-.1l2 .9c.3.1.5.2.5.3.1.2.1.6-.1 1.2z"/>',
    github: '<path d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.3-3.4-1.3-.4-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c1.9-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7.9.7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z"/>',
    instagram: '<path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM17.5 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>',
    linkedin: '<path d="M4 3a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM2.5 9h3v12h-3zm6 0h2.9v1.7c.4-.8 1.4-1.9 3.4-1.9 3.1 0 3.7 2 3.7 4.7V21h-3v-6.6c0-1.6 0-3.5-2.1-3.5s-2.4 1.6-2.4 3.4V21h-3z"/>',
    web: '<path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm6.9 6h-2.9a15.7 15.7 0 0 0-1.4-3.6A8 8 0 0 1 18.9 8zM12 4c.8 1.2 1.5 2.5 1.9 4h-3.8c.4-1.5 1.1-2.8 1.9-4zM4.3 14a8 8 0 0 1 0-4h3.4a16.5 16.5 0 0 0 0 4zm.8 2h2.9c.3 1.3.8 2.5 1.4 3.6A8 8 0 0 1 5.1 16zM8 8H5.1a8 8 0 0 1 4.3-3.6C8.8 5.5 8.3 6.7 8 8zm4 12c-.8-1.2-1.5-2.5-1.9-4h3.8c-.4 1.5-1.1 2.8-1.9 4zm2.3-6H9.7a14.7 14.7 0 0 1 0-4h4.6a14.7 14.7 0 0 1 0 4zm.3 5.6c.6-1.1 1.1-2.3 1.4-3.6h2.9a8 8 0 0 1-4.3 3.6zM16.3 14a16.5 16.5 0 0 0 0-4h3.4a8 8 0 0 1 0 4z"/>'
  };

  function boton(item) {
    var a = document.createElement('a');
    a.href = item.url;
    a.title = item.texto;
    a.setAttribute('aria-label', item.texto);
    if (/^https?:/i.test(item.url)) { a.target = '_blank'; a.rel = 'noopener noreferrer'; }
    a.innerHTML = '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONOS[item.tipo] || ICONOS.web) + '</svg>';
    return a;
  }
  (d.links || []).forEach(function (l) { $('links').appendChild(boton(l)); });

  // ---- Giro en el eje Y con el dedo ----
  // La tarjeta sigue al dedo; al soltarla conserva el impulso (puede dar
  // varias vueltas si la avientas rápido) y luego se acomoda con un pequeño
  // rebote en el frente o en el reverso.
  var tarjeta = $('tarjeta'), escena = $('escena');
  var reducido = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
  var angulo = 0, inclinacion = 0;          // grados en Y y en X
  var vel = 0, velX = 0;                    // grados por milisegundo
  var animando = null, ultimoT = 0;
  var arrastre = null;                      // datos del dedo mientras arrastra
  var movio = false;

  function gradosPorPx() { return 200 / Math.max(escena.clientWidth, 1); }
  function aplicar() {
    tarjeta.style.transform = 'rotateX(' + inclinacion.toFixed(2) + 'deg) rotateY(' + angulo.toFixed(2) + 'deg)';
  }
  function estado() {
    var reverso = (((Math.round(angulo / 180)) % 2) + 2) % 2 === 1;
    tarjeta.querySelector('.frente').setAttribute('aria-hidden', String(reverso));
    tarjeta.querySelector('.reverso').setAttribute('aria-hidden', String(!reverso));
    tarjeta.querySelectorAll('.reverso a').forEach(function (a) { a.tabIndex = reverso ? 0 : -1; });
  }
  function parar() { if (animando) cancelAnimationFrame(animando); animando = null; }

  // Inercia + resorte hacia la cara más cercana
  function animar(t) {
    var dt = Math.min(t - (ultimoT || t), 32); ultimoT = t;
    var objetivo = Math.round(angulo / 180) * 180;
    if (Math.abs(vel) > 0.6) {
      angulo += vel * dt;                      // todavía girando por el impulso
      vel *= Math.pow(0.996, dt);
    } else {
      var k = 0.00012, amort = 0.022;          // resorte con rebote suave
      vel += (-k * (angulo - objetivo) - amort * vel) * dt;
      angulo += vel * dt;
    }
    velX += (-0.00025 * inclinacion - 0.03 * velX) * dt;
    inclinacion += velX * dt;
    aplicar();
    var quieto = Math.abs(vel) < 0.002 && Math.abs(angulo - objetivo) < 0.15 && Math.abs(inclinacion) < 0.15;
    if (quieto) { angulo = objetivo; inclinacion = 0; aplicar(); estado(); animando = null; return; }
    animando = requestAnimationFrame(animar);
  }
  function soltarCon(v) {
    parar();
    if (reducido) { angulo = Math.round((angulo + v * 300) / 180) * 180; inclinacion = 0; aplicar(); estado(); return; }
    vel = v; velX = 0; ultimoT = 0;
    animando = requestAnimationFrame(animar);
  }
  function girar(dir) { // media vuelta animada (toque o teclado)
    dir = dir || 1;
    var inicio = angulo, falta = Math.round(angulo / 180) * 180 + 180 * dir - inicio;
    parar();
    if (reducido) { angulo = inicio + falta; aplicar(); estado(); return; }
    var t0 = performance.now(), dur = 700;
    function paso(t) {
      var p = Math.min((t - t0) / dur, 1);
      var c = 1.4, e = 1 + (c + 1) * Math.pow(p - 1, 3) + c * Math.pow(p - 1, 2); // se pasa un poquito y regresa
      angulo = inicio + falta * e;
      inclinacion = Math.sin(p * Math.PI) * -6;
      aplicar();
      if (p < 1) animando = requestAnimationFrame(paso);
      else { angulo = inicio + falta; inclinacion = 0; aplicar(); estado(); animando = null; }
    }
    animando = requestAnimationFrame(paso);
  }

  escena.addEventListener('pointerdown', function (e) {
    if (e.button !== 0) return;
    parar();
    var r = escena.getBoundingClientRect();
    arrastre = { id: e.pointerId, x: e.clientX, y: e.clientY, a0: angulo, cy: r.top + r.height / 2, alto: r.height,
                 hist: [{ t: e.timeStamp, a: angulo }] };
    movio = false;
  });
  escena.addEventListener('pointermove', function (e) {
    if (!arrastre || e.pointerId !== arrastre.id) return;
    var dx = e.clientX - arrastre.x, dy = e.clientY - arrastre.y;
    if (!movio) {
      if (Math.abs(dx) < 6) return;
      if (Math.abs(dy) > Math.abs(dx) * 1.2) { arrastre = null; return; } // era scroll vertical
      movio = true;
      try { escena.setPointerCapture(e.pointerId); } catch (_) {}
    }
    angulo = arrastre.a0 + dx * gradosPorPx();
    // se inclina un poco hacia donde está el dedo, para sentirla en 3D
    inclinacion = Math.max(-12, Math.min(12, -((e.clientY - arrastre.cy) / arrastre.alto) * 18));
    aplicar();
    arrastre.hist.push({ t: e.timeStamp, a: angulo });
    if (arrastre.hist.length > 6) arrastre.hist.shift();
  });
  function terminar(e) {
    if (!arrastre || e.pointerId !== arrastre.id) return;
    var h = arrastre.hist; arrastre = null;
    if (!movio) return;
    var a = h[0], b = h[h.length - 1];
    var v = (b.t - a.t) > 0 ? (b.a - a.a) / (b.t - a.t) : 0;   // grados/ms
    v = Math.max(-4, Math.min(4, v));
    soltarCon(v);
  }
  escena.addEventListener('pointerup', terminar);
  escena.addEventListener('pointercancel', terminar);

  // Un toque (sin arrastrar) fuera de un link la voltea
  escena.addEventListener('click', function (e) {
    if (movio) { e.preventDefault(); e.stopPropagation(); movio = false; return; }
    if (e.target.closest('a')) return;
    girar(1);
  }, true);

  // Teclado: flechas, Enter o espacio
  escena.addEventListener('keydown', function (e) {
    if (e.target !== escena) return;
    if (e.key === 'ArrowLeft') { e.preventDefault(); girar(-1); }
    else if (e.key === 'ArrowRight' || e.key === 'Enter' || e.key === ' ') { e.preventDefault(); girar(1); }
  });

  aplicar(); estado();

  // Pequeño "amago" al abrir para que se note que se puede girar
  if (!reducido) setTimeout(function () {
    if (arrastre || animando || angulo !== 0) return;
    var t0 = performance.now();
    (function paso(t) {
      if (arrastre || angulo > 60) return;
      var p = Math.min((t - t0) / 1100, 1);
      angulo = Math.sin(p * Math.PI) * 28; inclinacion = Math.sin(p * Math.PI) * -3;
      aplicar();
      if (p < 1 && !arrastre) animando = requestAnimationFrame(paso); else { animando = null; if (!arrastre) { angulo = 0; inclinacion = 0; aplicar(); } }
    })(t0);
  }, 900);
})();
