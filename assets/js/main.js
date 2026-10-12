/* Builds the pages from content.js. You shouldn't need to edit this file.

   Draft mode: when you open the site from your computer (or add ?draft=1
   to the address), TODO placeholders and missing images are shown in
   yellow so you can see what is left to fill in. On the live site they
   are hidden automatically. */

(function () {
  const S = SITE;
  const params = new URLSearchParams(location.search);
  const DRAFT =
    location.protocol === "file:" ||
    ["localhost", "127.0.0.1"].includes(location.hostname) ||
    params.has("draft");

  const isTodo = (t) => typeof t === "string" && t.trim().toUpperCase().startsWith("TODO");
  const keep = (t) => t && (!isTodo(t) || DRAFT);
  const esc = (t) =>
    String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const txt = (t) => (isTodo(t) ? `<span class="todo">${esc(t)}</span>` : esc(t));
  const $ = (id) => document.getElementById(id);
  const imgPath = (p, file) =>
    file.startsWith("youtube:") ? `https://img.youtube.com/vi/${file.slice(8)}/hqdefault.jpg` : `assets/img/projects/${p.id}/${file}`;
  const list = (items, sep) => items.filter(keep).map(txt).join(sep);
  const badge = (p) => (p.status ? `<span class="badge">${esc(p.status)}</span>` : "");

  // Missing image: dashed box in draft mode, removed on the live site.
  window.__imgMissing = function (el) {
    const box = el.closest("[data-media]") || el;
    if (DRAFT) {
      const ph = document.createElement("div");
      ph.className = "ph";
      ph.textContent = "missing: " + el.getAttribute("src");
      el.replaceWith(ph);
    } else {
      box.remove();
    }
  };

  // Anything marked .reveal fades and rises into place the first time it scrolls into view.
  function reveal() {
    const targets = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("in-view"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            io.unobserve(entry.target);
          }
        }),
      { threshold: 0.05, rootMargin: "0px 0px -30px 0px" }
    );
    targets.forEach((el) => io.observe(el));
  }

  // Shared header and footer
  if ($("nav-resume")) $("nav-resume").href = S.resume;
  if ($("footer")) $("footer").textContent = `© ${new Date().getFullYear()} ${S.name}`;

  /* ---------------- Home page ---------------- */
  if ($("project-grid")) {
    document.title = `${S.name} | ${S.title}`;
    $("hero-kicker").textContent = `${S.title} · ${S.school}`;
    $("hero-name").textContent = S.name;
    $("hero-tagline").innerHTML = keep(S.tagline) ? txt(S.tagline) : "";
    if (S.photo) $("hero-photo").innerHTML = `<img src="${esc(S.photo)}" alt="${esc(S.name)}" onerror="this.parentNode.remove()">`;
    $("hero-seeking").textContent = S.contactNote || "";
    $("hero-email").textContent = S.email;
    $("hero-email").href = `mailto:${S.email}`;

    const card = (p) => `
      <a class="card reveal" href="project.html?id=${encodeURIComponent(p.id)}">
        ${p.cover ? `<div class="card-img" data-media>
          <img src="${imgPath(p, p.cover)}" alt="${esc(p.title)}" loading="lazy" onerror="__imgMissing(this)">
        </div>` : ""}
        <div class="card-body">
          <p class="card-meta">${badge(p)}${keep(p.course) ? `<span class="tag">${txt(p.course)}</span>` : ""}</p>
          <h3>${esc(p.title)}</h3>
          ${keep(p.date) ? `<p class="card-date">${txt(p.date)}</p>` : ""}
          <p>${keep(p.summary) ? txt(p.summary) : ""}</p>
          ${(p.highlights || []).length ? `<ul class="results">${p.highlights.map(([n, t]) => `<li><strong>${esc(n)}</strong> ${esc(t)}</li>`).join("")}</ul>` : ""}
          <p class="tools"><span>Tools</span>${list(p.tools, " · ")}</p>
        </div>
      </a>`;
    const shown = S.projects.filter((p) => p.featured);
    const building = shown.filter((p) => p.status);
    $("progress-grid").innerHTML = building.map(card).join("");
    $("progress-block").hidden = !building.length;
    $("project-grid").innerHTML = shown.filter((p) => !p.status).map(card).join("");

    $("experience-list").innerHTML = S.experience
      .map((e) => {
        const pts = e.points.filter(keep);
        return `
      <div class="panel reveal">
        <div class="panel-head">
          <h3>${esc(e.role)}</h3>
          ${keep(e.date) ? `<span class="when">${txt(e.date)}</span>` : ""}
        </div>
        <p class="panel-sub">${esc(e.org)}</p>
        ${pts.length ? `<ul>${pts.map((x) => `<li>${txt(x)}</li>`).join("")}</ul>` : ""}
      </div>`;
      })
      .join("");

    $("about-text").innerHTML = S.about.filter(keep).map((p) => `<p>${txt(p)}</p>`).join("");
    $("about-edu").textContent = `${S.school}, ${S.graduation}`;
    $("about-lang").textContent = S.languages.join(", ");
    $("skills").innerHTML = Object.entries(S.skills)
      .map(([group, items]) => (items.filter(keep).length ? `<h3>${esc(group)}</h3><p>${list(items, ", ")}</p>` : ""))
      .join("") + ((S.interests || []).length ? `<h3>Outside of class</h3><p>${list(S.interests, ", ")}</p>` : "");

    $("contact-note").textContent = S.contactNote || "";
    const links = [
      ["Email", `mailto:${S.email}`, true],
      ["LinkedIn", S.linkedin],
      ["GitHub", S.github]
    ].filter(([, url]) => url && (!url.includes("TODO") || DRAFT));
    $("contact-links").innerHTML = links
      .map(([label, url, primary]) => `<a class="btn${primary ? "" : " secondary"}" href="${esc(url)}" target="_blank" rel="noopener">${label}</a>`)
      .join("");
  }

  /* ---------------- Project page ---------------- */
  if ($("project")) {
    const p = S.projects.find((x) => x.id === params.get("id"));
    if (!p) {
      $("project").innerHTML = `<div class="project-head"><h1>Project not found</h1><p><a href="index.html#projects">Back to all projects</a></p></div>`;
      return;
    }
    document.title = `${p.title} | ${S.name}`;

    const sections = p.sections
      .map((s) => ({ ...s, body: s.body.filter(keep) }))
      .filter((s) => s.body.length);

    const caption = (g) => (keep(g.caption) ? `<figcaption>${txt(g.caption)}</figcaption>` : "");
    const gallery = p.gallery
      .map((g) => {
        if (g.type === "youtube") {
          return `<figure class="${g.vertical ? "tall" : "wide"}"><iframe src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(g.id)}" title="${esc(g.caption || p.title)}" loading="lazy" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>${caption(g)}</figure>`;
        }
        const src = imgPath(p, g.src);
        const media =
          g.type === "video"
            ? `<video src="${src}" controls preload="metadata" onerror="__imgMissing(this)"></video>`
            : `<a href="${src}" target="_blank" rel="noopener"><img src="${src}" alt="${esc(g.caption)}" loading="lazy" onerror="__imgMissing(this)"></a>`;
        return `<figure data-media${g.wide ? ` class="wide"` : ""}>${media}${caption(g)}</figure>`;
      })
      .join("");

    const links = p.links.filter((l) => l.url && (l.url !== "TODO" || DRAFT));
    const cover = p.cover ? `<div class="gallery"><figure class="wide" data-media><img src="${imgPath(p, p.cover)}" alt="${esc(p.title)}" onerror="__imgMissing(this)"></figure></div>` : "";

    $("project").innerHTML = `
      <div class="project-head">
        <p class="eyebrow">${badge(p)}${[p.course, p.date].filter(keep).map(txt).join(" · ")}</p>
        <h1>${esc(p.title)}</h1>
        ${keep(p.summary) ? `<p class="lead">${txt(p.summary)}</p>` : ""}
        ${links.length ? `<div class="btn-row">${links.map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div>` : ""}
      </div>
      ${(p.highlights || []).length ? `<div class="stats">${p.highlights.map(([n, t]) => `<div class="stat"><strong>${esc(n)}</strong><span>${esc(t)}</span></div>`).join("")}</div>` : ""}
      <dl class="facts panel">
        ${keep(p.role) ? `<div><dt>Role</dt><dd>${txt(p.role)}</dd></div>` : ""}
        <div><dt>Tools</dt><dd>${list(p.tools, ", ")}</dd></div>
      </dl>
      ${gallery ? `<div class="gallery">${gallery}</div>` : cover}
      ${sections.map((s) => `<section class="panel reveal"><h2>${esc(s.heading)}</h2>${s.body.map((b) => `<p>${txt(b)}</p>`).join("")}</section>`).join("")}
    `;
  }

  // The banner links are tabs: only the chosen section is on screen (About when nothing is chosen).
  const panels = [...document.querySelectorAll(".tab-panel")];
  function showTab() {
    const id = panels.some((p) => p.dataset.tab === location.hash.slice(1)) ? location.hash.slice(1) : "about";
    panels.forEach((p) => (p.hidden = p.dataset.tab !== id));
    document.querySelectorAll("nav.top a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + id));
    window.scrollTo(0, 0);
  }
  if (panels.length) {
    window.addEventListener("hashchange", showTab);
    showTab();
  }

  // The few drifting stars behind every page. Each entry: [top, side, size, look].
  // A look of "✦" or "✧" is a star (size in rem); a color name is a dot or diamond (size in px).
  const BITS = [
    ["14%", "left:3%", 1.1, "✧"], ["52%", "left:1.5%", 1, "✦"], ["86%", "left:4%", 12, "sea"],
    ["20%", "right:3%", 1.2, "✦"], ["46%", "right:2%", 12, "lilac"], ["78%", "right:3%", 1, "✧"]
  ];
  const starColors = ["blue", "lilac-deep", "sea-deep"];
  document.body.insertAdjacentHTML(
    "afterbegin",
    `<div class="sky-bits" aria-hidden="true">${BITS.map(([top, side, size, look, diamond], i) => {
      const when = `animation-delay:${((i * 0.45) % 3).toFixed(2)}s; animation-duration:${4.4 + (i % 4) * 0.4}s`;
      return look.length === 1
        ? `<i class="float star" style="top:${top}; ${side}; font-size:${size}rem; color:var(--${starColors[i % 3]}); ${when}">${look}</i>`
        : `<i class="float${diamond ? " diamond" : ""}" style="top:${top}; ${side}; width:${size}px; height:${size}px; background:var(--${look}); ${when}"></i>`;
    }).join("")}</div>`
  );

  reveal();
})();
