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

  // Missing image: yellow box in draft mode, removed on the live site.
  window.__imgMissing = function (el) {
    const box = el.closest("[data-media]") || el;
    if (DRAFT) {
      const ph = document.createElement("div");
      ph.className = "ph mono";
      ph.textContent = "missing: " + el.getAttribute("src");
      el.replaceWith(ph);
    } else {
      box.remove();
    }
  };

  // Shared header and footer
  if ($("nav-name")) $("nav-name").textContent = S.name;
  if ($("footer")) $("footer").textContent = `© ${new Date().getFullYear()} ${S.name}`;

  /* ---------------- Home page ---------------- */
  if ($("project-grid")) {
    document.title = `${S.name} | ${S.title}`;
    $("hero-kicker").textContent = `${S.title} · ${S.school}`;
    $("hero-name").textContent = S.name;
    $("hero-tagline").innerHTML = keep(S.tagline) ? txt(S.tagline) : "";
    $("hero-resume").href = S.resume;

    $("project-grid").innerHTML = S.projects
      .filter((p) => p.featured)
      .map(
        (p) => `
      <a class="card" href="project.html?id=${encodeURIComponent(p.id)}">
        <div class="card-img" data-media>
          <img src="${imgPath(p, p.cover)}" alt="${esc(p.title)}" loading="lazy" onerror="__imgMissing(this)">
          <span class="ref mono">${esc(p.tag)}</span>
        </div>
        <div class="card-body">
          <p class="mono meta">${[p.course, p.date].filter(keep).map(txt).join(" · ")}</p>
          <h3>${esc(p.title)}</h3>
          <p>${keep(p.summary) ? txt(p.summary) : ""}</p>
          <ul class="chips">${p.tools.filter(keep).map((t) => `<li>${txt(t)}</li>`).join("")}</ul>
        </div>
      </a>`
      )
      .join("");

    $("experience-list").innerHTML = S.experience
      .map((e) => {
        const pts = e.points.filter(keep);
        return `
      <div class="exp">
        <p class="mono meta">${keep(e.date) ? txt(e.date) : ""}</p>
        <div>
          <h3>${esc(e.role)}</h3>
          <p class="org">${esc(e.org)}</p>
          ${pts.length ? `<ul>${pts.map((x) => `<li>${txt(x)}</li>`).join("")}</ul>` : ""}
        </div>
      </div>`;
      })
      .join("");

    $("about-text").innerHTML = S.about.filter(keep).map((p) => `<p>${txt(p)}</p>`).join("");
    $("about-edu").textContent = `${S.school}, ${S.graduation}`;
    $("about-lang").textContent = S.languages.join(", ");
    $("skills").innerHTML = Object.entries(S.skills)
      .map(([group, list]) => {
        const items = list.filter(keep);
        return items.length
          ? `<h3 class="mono">${esc(group)}</h3><ul class="chips">${items.map((s) => `<li>${txt(s)}</li>`).join("")}</ul>`
          : "";
      })
      .join("");

    $("contact-note").textContent = S.contactNote || "";
    const links = [
      ["Email", `mailto:${S.email}`, true],
      ["LinkedIn", S.linkedin],
      ["GitHub", S.github],
      ["Resume", S.resume]
    ].filter(([, url]) => url && (!url.includes("TODO") || DRAFT));
    $("contact-links").innerHTML = links
      .map(([label, url, primary]) => `<a class="btn${primary ? " primary" : ""}" href="${esc(url)}" target="_blank" rel="noopener">${label}</a>`)
      .join("");
  }

  /* ---------------- Project page ---------------- */
  if ($("project")) {
    const p = S.projects.find((x) => x.id === params.get("id"));
    if (!p) {
      $("project").innerHTML = `<h1>Project not found</h1><p><a href="index.html#projects">Back to all projects</a></p>`;
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
      <p class="mono kicker">${esc(p.tag)} · ${[p.course, p.date].filter(keep).map(txt).join(" · ")}</p>
      <h1>${esc(p.title)}</h1>
      ${keep(p.summary) ? `<p class="lead">${txt(p.summary)}</p>` : ""}
      <dl class="facts">
        ${keep(p.role) ? `<div><dt class="mono">Role</dt><dd>${txt(p.role)}</dd></div>` : ""}
        <div><dt class="mono">Tools</dt><dd>${p.tools.filter(keep).map(txt).join(", ")}</dd></div>
      </dl>
      <div class="cover" data-media><img src="${imgPath(p, p.cover)}" alt="${esc(p.title)}" onerror="__imgMissing(this)"></div>
      ${sections.map((s) => `<section><h2>${esc(s.heading)}</h2>${s.body.map((b) => `<p>${txt(b)}</p>`).join("")}</section>`).join("")}
      ${gallery ? `<section><h2>Gallery</h2><div class="gallery">${gallery}</div></section>` : ""}
      ${links.length ? `<div class="btn-row">${links.map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)}</a>`).join("")}</div>` : ""}
    `;
  }
})();
