(function () {
  "use strict";

  var root = document.getElementById("root");

  /* ---------------- theme ---------------- */
  var THEME_KEY = "portfolioTheme";
  var savedTheme = "light";
  try { savedTheme = localStorage.getItem(THEME_KEY) || "light"; } catch (e) {}

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    var knob = document.getElementById("theme-toggle-knob");
    knob.textContent = theme === "dark" ? "☽" : "☀";
  }
  applyTheme(savedTheme);

  document.getElementById("theme-toggle").addEventListener("click", function () {
    var current = root.getAttribute("data-theme") === "dark" ? "dark" : "light";
    var next = current === "dark" ? "light" : "dark";
    try { localStorage.setItem(THEME_KEY, next); } catch (e) {}
    applyTheme(next);
  });

  /* ---------------- mobile nav ---------------- */
  var nav = document.getElementById("nav");
  var navToggle = document.getElementById("nav-toggle");
  var mobileMenu = document.getElementById("mobile-menu");

  function setMenu(open) {
    nav.classList.toggle("is-open", open);
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
    navToggle.setAttribute("aria-label", (open ? "Close" : "Open") + " navigation menu");
  }

  navToggle.addEventListener("click", function () {
    setMenu(!nav.classList.contains("is-open"));
  });

  // any tap inside the panel is a navigation — collapse it
  mobileMenu.addEventListener("click", function (ev) {
    if (ev.target.closest("a")) setMenu(false);
  });

  document.addEventListener("keydown", function (ev) {
    if (ev.key === "Escape" && nav.classList.contains("is-open")) {
      setMenu(false);
      navToggle.focus();
    }
  });

  // rotating to landscape can cross the breakpoint while the panel is open
  window.addEventListener("resize", function () {
    if (window.innerWidth > 860) setMenu(false);
  });

  /* ---------------- cursor glow ---------------- */
  var glow = document.getElementById("glow");
  var finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
  if (finePointer.matches) {
    window.addEventListener("pointermove", function (ev) {
      glow.style.transform = "translate(" + ev.clientX + "px, " + ev.clientY + "px)";
    }, { passive: true });
  }

  /* ---------------- render static data ---------------- */
  function el(tag, className, html) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (html !== undefined) node.innerHTML = html;
    return node;
  }

  // footer + hero stats
  document.getElementById("footer-copy").textContent =
    "© " + SITE.year + " " + SITE.name + " — built with care & green tea.";

  var statsWrap = document.getElementById("hero-stats");
  STATS.forEach(function (s) {
    var item = el("div");
    item.appendChild(el("div", "stat-value", s.value));
    item.appendChild(el("div", "stat-label", s.label));
    statsWrap.appendChild(item);
  });

  // marquee (duplicated once for seamless loop)
  var marqueeText = MARQUEE_ITEMS.join("&nbsp;&nbsp;•&nbsp;&nbsp;") + "&nbsp;&nbsp;•&nbsp;&nbsp;";
  var marqueeTrack = document.getElementById("marquee-track");
  marqueeTrack.appendChild(el("span", "marquee-item", marqueeText));
  marqueeTrack.appendChild(el("span", "marquee-item", marqueeText));

  // projects
  var workGrid = document.getElementById("work-grid");
  PROJECTS.forEach(function (p, i) {
    var card = document.createElement("a");
    card.href = p.link;
    card.className = "project-card";
    card.setAttribute("data-reveal", "");
    card.setAttribute("data-reveal-delay", (i % 2) * 80);

    var body = el("div", "project-body");
    body.appendChild(el("span", "project-year", p.year));
    var head = el("div", "project-head");
    head.appendChild(el("h3", null, p.name));
    head.appendChild(el("span", "project-arrow", "↗"));
    body.appendChild(head);
    body.appendChild(el("p", "project-desc", p.desc));

    var tags = el("div", "project-tags");
    p.tags.forEach(function (t) { tags.appendChild(el("span", "tag", t)); });
    body.appendChild(tags);

    card.appendChild(body);
    workGrid.appendChild(card);
  });

  // toolkit
  var toolkitGrid = document.getElementById("toolkit-grid");
  SKILL_GROUPS.forEach(function (g, i) {
    var card = el("div", "skill-card");
    card.setAttribute("data-reveal", "");
    card.setAttribute("data-reveal-delay", (i % 2) * 80);

    var head = el("div", "skill-head");
    head.appendChild(el("span", "skill-icon", g.icon));
    head.appendChild(el("h3", null, g.title));
    card.appendChild(head);

    var items = el("div", "skill-items");
    g.items.forEach(function (s) { items.appendChild(el("span", "skill-chip", s)); });
    card.appendChild(items);

    toolkitGrid.appendChild(card);
  });

  // experience timeline
  var timeline = document.getElementById("timeline");
  EXPERIENCE.forEach(function (e) {
    var item = el("div", "timeline-item");
    item.setAttribute("data-reveal", "");
    item.appendChild(el("span", "timeline-dot"));
    item.appendChild(el("div", "timeline-period", e.period));
    item.appendChild(el("h3", null, e.role));
    item.appendChild(el("div", "timeline-company", e.company));
    item.appendChild(el("p", "timeline-desc", e.desc));
    timeline.appendChild(item);
  });

  // contact actions
  var contactActions = document.getElementById("contact-actions");
  var emailLink = document.createElement("a");
  emailLink.href = "mailto:" + SITE.email;
  emailLink.className = "btn btn-primary contact-email";
  emailLink.textContent = SITE.email;
  contactActions.appendChild(emailLink);

  var socials = el("div", "contact-socials");
  var github = document.createElement("a");
  github.href = SITE.socials.github;
  github.textContent = "GitHub";
  socials.appendChild(github);
  var linkedin = document.createElement("a");
  linkedin.href = SITE.socials.linkedin;
  linkedin.textContent = "LinkedIn";
  socials.appendChild(linkedin);
  contactActions.appendChild(socials);

  /* ---------------- scroll reveal ---------------- */
  function setupReveal() {
    var els = Array.prototype.slice.call(root.querySelectorAll("[data-reveal]"));

    function inView(node) {
      return node.getBoundingClientRect().top < window.innerHeight * 0.94;
    }
    function reveal(node) {
      node.__revealDone = true;
      node.classList.remove("is-hidden");
    }
    function hide(node) {
      var delay = node.getAttribute("data-reveal-delay") || 0;
      node.style.transitionDelay = delay + "ms";
      node.classList.add("is-hidden");
    }

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          reveal(entry.target);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });

    els.forEach(function (node) {
      if (inView(node)) { reveal(node); return; }
      hide(node);
      io.observe(node);
    });

    // safety fallback: never leave content permanently hidden
    setTimeout(function () { els.forEach(reveal); }, 3000);
  }

  requestAnimationFrame(setupReveal);
})();
