(() => {
  const grid = document.querySelector("[data-tutoriales]");
  if (!grid || !window.CONTROL_HOGAR_TUTORIALES) return;
  const items = [...window.CONTROL_HOGAR_TUTORIALES].sort((a, b) => a.orden - b.orden);
  grid.innerHTML = items.map((item) => {
    const numero = String(item.numero).padStart(2, "0");
    if (!item.disponible) return `<article class="card tutorial-card is-upcoming"><div class="tutorial-number">Próximamente</div><h3>${item.titulo}</h3><p class="muted">Este espacio está preparado para un próximo tutorial.</p></article>`;
    return `<article class="card tutorial-card"><a class="tutorial-thumb" href="tutorial-${item.slug}.html" aria-label="Ver Tutorial ${numero}: ${item.titulo}"><img src="https://i.ytimg.com/vi/${item.youtubeId}/hqdefault.jpg" alt="Miniatura del Tutorial ${numero}: ${item.titulo}" loading="lazy" width="480" height="360"></a><div class="tutorial-card-body"><div class="tutorial-number">Tutorial ${numero}</div><h3>${item.titulo}</h3><p class="muted">${item.descripcion}</p><a class="button" href="tutorial-${item.slug}.html">Ver tutorial</a></div></article>`;
  }).join("");
})();
