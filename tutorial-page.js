(() => {
  const tutorials = [...(window.CONTROL_HOGAR_TUTORIALES || [])].sort((a, b) => a.orden - b.orden);
  const slug = document.body.dataset.tutorial;
  const index = tutorials.findIndex((item) => item.slug === slug);
  const item = tutorials[index];
  const root = document.querySelector("[data-tutorial-page]");
  if (!item || !root) return;

  const numero = String(item.numero).padStart(2, "0");
  const previous = tutorials[index - 1];
  const next = tutorials[index + 1];
  const navLink = (target, direction) => target
    ? `<a class="tutorial-nav-link" href="tutorial-${target.slug}.html"><span>${direction}</span><strong>Tutorial ${String(target.numero).padStart(2, "0")}: ${target.titulo}</strong></a>`
    : `<span class="tutorial-nav-placeholder">${direction === "Anterior" ? "Primer tutorial" : "Último tutorial"}</span>`;

  root.innerHTML = `<section class="page-hero"><div class="wrap tutorial-page"><div class="eyebrow">Tutorial ${numero} · ${item.categoria}</div><h1>${item.titulo}</h1><p>${item.introduccion}</p></div></section><div class="wrap content tutorial-page"><a class="back-link" href="ayuda.html">← Volver a Ayuda</a><div class="tutorial-layout"><div class="video-column"><div class="video-frame"><iframe src="https://www.youtube-nocookie.com/embed/${item.youtubeId}" title="Tutorial ${numero} de Control Hogar: ${item.titulo}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div><p class="video-direct"><a href="${item.youtubeUrl}" target="_blank" rel="noopener noreferrer">Ver el vídeo en YouTube ↗</a></p></div><div><section class="card"><h2>Qué aprenderás</h2><ul class="tutorial-summary">${item.resumen.map((point) => `<li>${point}</li>`).join("")}</ul></section><nav class="tutorial-nav" aria-label="Navegación entre tutoriales">${navLink(previous, "Anterior")}${navLink(next, "Siguiente")}</nav></div></div></div>`;
})();
