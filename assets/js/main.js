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
  const imgPath = (p, file) => `assets/img/projects/${p.id}/${file}`;
  const list = (items, sep) => items.filter(keep).map(txt).join(sep);

  // Missing image: yellow box in draft mode, removed on the live site.
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

  // The drifting shapes and little stars behind a heading.
  // Shapes: [top, side, size in px, color, diamond?]. Stars: [top, side, size in rem, color, glyph].
  const SHAPES = {
    big: [
      ["2%", "left:4%", 26, "light"], ["14%", "left:14%", 16, "deep"], ["-2%", "left:24%", 14, "graysage", true],
      ["34%", "left:2%", 34, "mint"], ["88%", "left:10%", 20, "light"], ["6%", "right:5%", 30, "mint"],
      ["22%", "right:16%", 18, "deep", true], ["42%", "right:2%", 16, "graysage"], ["90%", "right:12%", 24, "light"]
    ],
    small: [
      ["4%", "left:6%", 22, "light"], ["18%", "left:18%", 14, "deep"], ["6%", "right:6%", 28, "mint"],
      ["22%", "right:20%", 16, "graysage", true], ["86%", "left:14%", 18, "deep"], ["82%", "right:10%", 20, "light"]
    ]
  };
  const STARS = {
    big: [
      ["0%", "left:20%", 1.4, "g-deep", "✧"], ["4%", "right:18%", 1.8, "header", "✦"], ["80%", "left:6%", 1.2, "g-graysage", "✦"],
      ["92%", "right:24%", 1.3, "g-deep", "✧"], ["38%", "left:0%", 1.1, "header", "✧"], ["60%", "right:14%", 1.2, "g-deep", "✦"]
    ],
    small: [
      ["6%", "right:10%", 1.3, "header", "✦"], ["80%", "left:4%", 1.1, "g-graysage", "✧"],
      ["40%", "left:20%", 0.9, "g-deep", "✧"], ["70%", "right:22%", 1, "header", "✦"]
    ]
  };
  function flourish() {
    document.querySelectorAll("[data-flourish]").forEach((el) => {
      const kind = el.dataset.flourish;
      const shapes = SHAPES[kind]
        .map(
          ([top, side, size, color, diamond], i) =>
            `<div class="flourish-shape${diamond ? " diamond" : ""}" style="top:${top}; ${side}; width:${size}px; height:${size}px; background:var(--g-${color}); animation-delay:${((i * 0.4) % 1.7).toFixed(1)}s;"></div>`
        )
        .join("");
      const stars = STARS[kind]
        .map(([top, side, size, color, glyph]) => `<span style="top:${top}; ${side}; font-size:${size}rem; color:var(--${color});">${glyph}</span>`)
        .join("");
      el.insertAdjacentHTML("afterbegin", `<div aria-hidden="true">${shapes}<div class="star-scatter">${stars}</div></div>`);
    });
  }

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
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
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

    $("project-grid").innerHTML = S.projects
      .filter((p) => p.featured)
      .map(
        (p) => `
      <a class="card reveal" href="project.html?id=${encodeURIComponent(p.id)}">
        <div class="card-img" data-media>
          <img src="${imgPath(p, p.cover)}" alt="${esc(p.title)}" loading="lazy" onerror="__imgMissing(this)">
        </div>
        <div class="card-body">
          ${keep(p.course) ? `<span class="tag">${txt(p.course)}</span>` : ""}
          <h3>${esc(p.title)}</h3>
          ${keep(p.date) ? `<p class="card-date">${txt(p.date)}</p>` : ""}
          <p>${keep(p.summary) ? txt(p.summary) : ""}</p>
          <p class="tools"><span>Tools</span>${list(p.tools, " · ")}</p>
        </div>
      </a>`
      )
      .join("");

    $("experience-list").innerHTML = S.experience
      .map((e) => {
        const pts = e.points.filter(keep);
        return `
      <div class="level reveal">
        <div class="level-head">
          <h3>${esc(e.role)}</h3>
          ${keep(e.date) ? `<span class="pill">${txt(e.date)}</span>` : ""}
        </div>
        <p class="level-sub">${esc(e.org)}</p>
        ${pts.length ? `<ul>${pts.map((x) => `<li>${txt(x)}</li>`).join("")}</ul>` : ""}
      </div>`;
      })
      .join("");

    $("about-text").innerHTML = S.about.filter(keep).map((p) => `<p>${txt(p)}</p>`).join("");
    $("about-edu").textContent = `${S.school}, ${S.graduation}`;
    $("about-lang").textContent = S.languages.join(", ");
    $("skills").innerHTML = Object.entries(S.skills)
      .map(([group, items]) => (items.filter(keep).length ? `<h3>${esc(group)}</h3><p>${list(items, ", ")}</p>` : ""))
      .join("");

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
      $("project").innerHTML = `<div class="hero"><h1>Project not found</h1><p class="back-link"><a href="index.html#projects">Back to all projects</a></p></div>`;
      return;
    }
    document.title = `${p.title} | ${S.name}`;

    const sections = p.sections
      .map((s) => ({ ...s, body: s.body.filter(keep) }))
      .filter((s) => s.body.length);

    const gallery = p.gallery
      .map((g) => {
        const src = imgPath(p, g.src);
        const media =
          g.type === "video"
            ? `<video src="${src}" controls preload="metadata" onerror="__imgMissing(this)"></video>`
            : `<img src="${src}" alt="${esc(g.caption)}" loading="lazy" onerror="__imgMissing(this)">`;
        return `<figure data-media>${media}${keep(g.caption) ? `<figcaption>${txt(g.caption)}</figcaption>` : ""}</figure>`;
      })
      .join("");

    const links = p.links.filter((l) => l.url && (l.url !== "TODO" || DRAFT));

    $("project").innerHTML = `
      <div class="hero flourish-field" data-flourish="small">
        <span class="kicker">${[p.course, p.date].filter(keep).map(txt).join(" · ")}</span>
        <span class="sparkle">✦ ✧ ✦</span>
        <h1>${esc(p.title)}</h1>
        ${keep(p.summary) ? `<p>${txt(p.summary)}</p>` : ""}
      </div>
      <dl class="facts level">
        ${keep(p.role) ? `<div><dt>Role</dt><dd>${txt(p.role)}</dd></div>` : ""}
        <div><dt>Tools</dt><dd>${list(p.tools, ", ")}</dd></div>
      </dl>
      <div class="frame" data-media><img src="${imgPath(p, p.cover)}" alt="${esc(p.title)}" onerror="__imgMissing(this)"></div>
      ${sections.map((s) => `<section class="level reveal"><h2>${esc(s.heading)}</h2>${s.body.map((b) => `<p>${txt(b)}</p>`).join("")}</section>`).join("")}
      ${gallery ? `<section class="level reveal"><h2>Gallery</h2><div class="gallery">${gallery}</div></section>` : ""}
      ${links.length ? `<div class="btn-row">${links.map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div>` : ""}
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

  flourish();
  reveal();
})();
