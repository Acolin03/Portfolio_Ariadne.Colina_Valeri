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
  if ($("portfolio-link")) {
    const link = $("portfolio-link");
    link.hidden = true;
    if (S.portfolioPdf) {
      link.href = S.portfolioPdf;
      fetch(S.portfolioPdf, { method: "HEAD" }).then((r) => { link.hidden = !r.ok; }).catch(() => {});
    }
  }
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
          <p class="card-foot"><b>View project →</b></p>
        </div>
      </a>`;
    const shown = S.projects.filter((p) => p.featured);
    const building = shown.filter((p) => p.status);
    $("progress-grid").innerHTML = building.map(card).join("");
    $("progress-block").hidden = !building.length;
    $("project-grid").innerHTML = shown.filter((p) => !p.status).map(card).join("");

    const job = (e) => {
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
    };
    const groups = [...new Set(S.experience.map((e) => e.group || "Experience"))];
    $("experience-list").innerHTML = groups
      .map((g) => `<h3 class="group-title">${esc(g)}</h3>${S.experience.filter((e) => (e.group || "Experience") === g).map(job).join("")}`)
      .join("");

    $("about-text").innerHTML = S.about.filter(keep).map((p) => `<p>${txt(p)}</p>`).join("");
    const facts = [
      ["Education", esc(`${S.school}, ${S.graduation}`)],
      ["Languages", S.languages.map(esc).join(", ")],
      ...Object.entries(S.skills).map(([group, items]) => [group, list(items, ", ")]),
      ["Outside of class", list(S.interests || [], ", ")]
    ].filter(([, text]) => text);
    $("about-facts").innerHTML = facts.map(([label, text]) => `<div class="fact reveal"><h3>${esc(label)}</h3><p>${text}</p></div>`).join("");

    $("contact-note").textContent = S.contactLine || "";
    const ways = [
      ["Email", S.email, `mailto:${S.email}`],
      ["LinkedIn", (S.linkedin || "").replace(/^https?:\/\/(www\.)?/, ""), S.linkedin],
      ["GitHub", (S.github || "").replace(/^https?:\/\//, ""), S.github]
    ].filter(([, text, url]) => text && (!String(url).includes("TODO") || DRAFT));
    $("contact-links").innerHTML = ways
      .map(([label, text, url]) =>
        url
          ? `<a class="way" href="${esc(url)}" target="_blank" rel="noopener"><span>${label}</span>${esc(text)}</a>`
          : `<div class="way"><span>${label}</span>${esc(text)}</div>`
      )
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
      .map((s) => ({ ...s, body: (s.body || []).filter(keep) }))
      .filter((s) => s.body.length || s.image || s.fix);

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

    // A section is plain paragraphs, or a picture beside "what was missing" and "what this does".
    const section = (s) => {
      const words = `<h2>${esc(s.heading)}</h2>
          ${keep(s.missing) ? `<p class="pair"><span>What was missing</span>${txt(s.missing)}</p>` : ""}
          ${keep(s.fix) ? `<p class="pair"><span>What ${esc(p.title.replace(/ App$/, ""))} does</span>${txt(s.fix)}</p>` : ""}
          ${s.body.map((b) => `<p>${txt(b)}</p>`).join("")}`;
      if (!s.image) return `<section class="panel reveal">${words}</section>`;
      const src = imgPath(p, s.image);
      return `<section class="panel reveal with-pic"><a class="pic" data-media href="${src}" target="_blank" rel="noopener"><img src="${src}" alt="${esc(s.heading)}" loading="lazy" onerror="__imgMissing(this)"></a><div>${words}</div></section>`;
    };

    const links = p.links.filter((l) => l.url && (l.url !== "TODO" || DRAFT));
    const cover = p.cover && !sections.some((s) => s.image) ? `<div class="gallery"><figure class="wide" data-media><img src="${imgPath(p, p.cover)}" alt="${esc(p.title)}" onerror="__imgMissing(this)"></figure></div>` : "";

    $("project").innerHTML = `
      <div class="project-head">
        <p class="eyebrow">${badge(p)}${[p.course, p.date].filter(keep).map(txt).join(" · ")}</p>
        <h1>${esc(p.title)}</h1>
        ${keep(p.summary) ? `<p class="lead">${txt(p.summary)}</p>` : ""}
        ${links.length ? `<div class="btn-row">${links.map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div>` : ""}
      </div>
      <dl class="facts panel">
        <div><dt>Tools</dt><dd>${list(p.tools, ", ")}</dd></div>
      </dl>
      ${gallery ? `<div class="gallery">${gallery}</div>` : cover}
      ${sections.map(section).join("")}
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
  const HERO_BITS = [
    ["6%", "left:6%", 26, "mist"], ["16%", "left:15%", 16, "blue"], ["3%", "left:23%", 14, "lilac"],
    ["36%", "left:4%", 34, "mist"], ["82%", "left:11%", 20, "lilac"], ["8%", "right:7%", 30, "mist"],
    ["28%", "right:24%", 18, "blue", true], ["46%", "right:9%", 16, "mist"], ["86%", "right:19%", 24, "sea"],
    ["5%", "left:19%", 1.4, "✧"], ["11%", "right:27%", 1.8, "✦"], ["74%", "left:7%", 1.2, "✦"],
    ["90%", "right:31%", 1.3, "✧"], ["42%", "left:1%", 1.1, "✧"], ["60%", "right:22%", 1.2, "✦"]
  ];
  const starColors = ["blue", "lilac-deep", "sea-deep"];
  const bit = ([top, side, size, look, diamond], i) => {
    const when = `animation-delay:${((i * 0.45) % 3).toFixed(2)}s; animation-duration:${4.4 + (i % 4) * 0.4}s`;
    return look.length === 1
      ? `<i class="float star" style="top:${top}; ${side}; font-size:${size}rem; color:var(--${starColors[i % 3]}); ${when}">${look}</i>`
      : `<i class="float${diamond ? " diamond" : ""}" style="top:${top}; ${side}; width:${size}px; height:${size}px; background:var(--${look}); ${when}"></i>`;
  };
  if ($("hero")) $("hero").insertAdjacentHTML("afterbegin", `<div class="hero-bits" aria-hidden="true">${HERO_BITS.map(bit).join("")}</div>`);
  document.body.insertAdjacentHTML("afterbegin", `<div class="sky-bits" aria-hidden="true">${BITS.map(bit).join("")}</div>`);

  reveal();
})();
