/* ==========================================================================
   Tanot motion kit: vanilla JavaScript, no dependencies (about 4 KB).
   Shared by Version 1 and Version 2. Drop-in for a WordPress theme (enqueue with
   `defer`). Behaviours are driven by data-attributes, and the script watches the
   DOM, so markup added later (for example after client-side navigation) works too.

     [data-reveal]            fade/rise when scrolled into view  (--m-delay, --m-y)
     [data-stagger="0.08"]    children with [data-stagger-item] reveal in sequence
     [data-count="6200"]      count-up (data-count-prefix / -suffix / -decimals)
     details[data-acc]        animated accordion (data-acc-group = exclusive group)
     [data-header]            gets data-scrolled once the page is scrolled
     [data-menu-open|close]   menu toggles; [data-menu="circle|drawer"] is the panel
     [data-nav] + [data-nav-item] + [data-pill]   sliding hover highlight
     [data-tabs] with [role=tab][data-tab] / [data-panel] / optional [data-pill]
     [data-carousel]          [data-carousel-track] + [data-carousel-prev|next]
     [data-video-play]        click-to-load video     ([data-video-src] on the wrapper)
     [data-embed-load]        click-to-load iframe    ([data-embed-src] on the wrapper)
   ========================================================================== */
(function () {
  if (window.__motionKit) return;
  window.__motionKit = true;

  var reduce = window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  var EASE = "cubic-bezier(0.16, 1, 0.3, 1)";
  var $$ = function (sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); };

  /* ---------- reveals ---------- */
  var revealIO = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      revealIO.unobserve(e.target);
      var el = e.target;
      if (el.hasAttribute("data-stagger")) {
        var step = parseFloat(el.getAttribute("data-stagger")) || 0.08;
        Array.prototype.forEach.call(el.children, function (c, i) {
          if (!c.hasAttribute("data-stagger-item")) return;
          c.style.setProperty("--m-delay", (i * step).toFixed(2) + "s");
          c.classList.add("is-in");
        });
      } else {
        el.classList.add("is-in");
      }
    });
  }, { rootMargin: "0px 0px -80px 0px" }) : null;

  /* ---------- counters ---------- */
  function fmt(el, n) {
    var d = parseInt(el.getAttribute("data-count-decimals") || "0", 10);
    return (el.getAttribute("data-count-prefix") || "") +
      n.toLocaleString("en-US", { minimumFractionDigits: d, maximumFractionDigits: d }) +
      (el.getAttribute("data-count-suffix") || "");
  }
  function runCount(el) {
    var to = parseFloat(el.getAttribute("data-count"));
    if (reduce) { el.textContent = fmt(el, to); return; }
    var start = null, dur = 1800;
    (function frame(t) {
      if (start === null) start = t;
      var p = Math.min(1, (t - start) / dur);
      var eased = p === 1 ? 1 : 1 - Math.pow(2, -10 * p);
      el.textContent = fmt(el, to * eased);
      if (p < 1) requestAnimationFrame(frame);
    })(performance.now());
  }
  var countIO = "IntersectionObserver" in window ? new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (!e.isIntersecting) return;
      countIO.unobserve(e.target);
      runCount(e.target);
    });
  }, { rootMargin: "0px 0px -60px 0px" }) : null;

  /* ---------- carousel state ---------- */
  function carouselState(root) {
    var track = root.querySelector("[data-carousel-track]");
    if (!track) return;
    var prev = root.querySelector("[data-carousel-prev]");
    var next = root.querySelector("[data-carousel-next]");
    if (prev) prev.disabled = track.scrollLeft < 8;
    if (next) next.disabled = track.scrollLeft + track.clientWidth >= track.scrollWidth - 8;
  }

  /* ---------- sliding pill (nav hover + tab indicator) ---------- */
  function movePill(pill, target, instant) {
    if (!pill || !target) return;
    if (instant) pill.style.transition = "none";
    pill.style.width = target.offsetWidth + "px";
    pill.style.height = target.offsetHeight + "px";
    pill.style.transform = "translate3d(" + target.offsetLeft + "px," + target.offsetTop + "px,0)";
    pill.style.opacity = "1";
    if (instant) { void pill.offsetWidth; pill.style.transition = ""; }
  }
  function setupNav(nav) {
    var pill = nav.querySelector("[data-pill]");
    if (!pill) return;
    var items = $$("[data-nav-item]", nav);
    items.forEach(function (it) {
      var show = function () { movePill(pill, it, pill.style.opacity !== "1"); };
      it.addEventListener("mouseenter", show);
      it.addEventListener("focusin", show);
    });
    nav.addEventListener("mouseleave", function () { pill.style.opacity = "0"; });
    nav.addEventListener("focusout", function (e) { if (!nav.contains(e.relatedTarget)) pill.style.opacity = "0"; });
  }

  /* ---------- tabs ---------- */
  function activateTab(root, tab, focus, instant) {
    var id = tab.getAttribute("data-tab");
    $$("[role=tab]", root).forEach(function (t) {
      var on = t === tab;
      t.setAttribute("aria-selected", on ? "true" : "false");
      t.tabIndex = on ? 0 : -1;
      if (on) t.setAttribute("data-active", ""); else t.removeAttribute("data-active");
    });
    $$("[data-panel]", root).forEach(function (p) {
      var on = p.getAttribute("data-panel") === id;
      if (on) { p.setAttribute("data-active", ""); p.hidden = false; } else { p.removeAttribute("data-active"); p.hidden = true; }
    });
    movePill(root.querySelector("[data-pill]"), tab, instant);
    if (focus) tab.focus();
  }
  function setupTabs(root) {
    var tabs = $$("[role=tab]", root);
    var active = tabs.filter(function (t) { return t.getAttribute("aria-selected") === "true"; })[0] || tabs[0];
    if (!active) return;
    activateTab(root, active, false, true);
    var replace = function () { movePill(root.querySelector("[data-pill]"), root.querySelector("[role=tab][aria-selected=true]"), true); };
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(replace);
    root.addEventListener("keydown", function (e) {
      var i = tabs.indexOf(document.activeElement);
      if (i < 0) return;
      var n = null;
      if (e.key === "ArrowDown" || e.key === "ArrowRight") n = tabs[(i + 1) % tabs.length];
      else if (e.key === "ArrowUp" || e.key === "ArrowLeft") n = tabs[(i - 1 + tabs.length) % tabs.length];
      else if (e.key === "Home") n = tabs[0];
      else if (e.key === "End") n = tabs[tabs.length - 1];
      if (n) { e.preventDefault(); activateTab(root, n, true); }
    });
    window.addEventListener("resize", replace);
  }

  /* ---------- scan: register new elements ---------- */
  function scan(root) {
    $$("[data-reveal],[data-stagger]", root).forEach(function (el) {
      if (el.__m) return; el.__m = 1;
      if (revealIO) revealIO.observe(el); else el.classList.add("is-in");
    });
    $$("[data-count]", root).forEach(function (el) {
      if (el.__m) return; el.__m = 1;
      if (!reduce) el.textContent = fmt(el, 0);
      if (countIO) countIO.observe(el); else runCount(el);
    });
    $$("[data-carousel]", root).forEach(function (el) {
      if (el.__m) return; el.__m = 1;
      var track = el.querySelector("[data-carousel-track]");
      if (track) track.addEventListener("scroll", function () { carouselState(el); }, { passive: true });
      carouselState(el);
    });
    $$("[data-nav]", root).forEach(function (el) { if (el.__m) return; el.__m = 1; setupNav(el); });
    $$("[data-tabs]", root).forEach(function (el) { if (el.__m) return; el.__m = 1; setupTabs(el); });
  }

  /* ---------- header scroll state ---------- */
  function onScroll() {
    var scrolled = window.scrollY > 10;
    $$("[data-header]").forEach(function (h) {
      if (scrolled) h.setAttribute("data-scrolled", ""); else h.removeAttribute("data-scrolled");
    });
  }

  /* ---------- accordion ---------- */
  function animateAcc(d, opening) {
    var s = d.querySelector("summary");
    var startH = d.offsetHeight;
    d.style.overflow = "hidden";
    if (opening) {
      d.open = true;
      var endH = d.offsetHeight;
      if (reduce) { d.style.overflow = ""; return; }
      var a = d.animate({ height: [startH + "px", endH + "px"] }, { duration: 380, easing: EASE });
      a.onfinish = a.oncancel = function () { d.style.overflow = ""; };
    } else {
      var cs = getComputedStyle(d);
      var endC = s.offsetHeight + parseFloat(cs.borderTopWidth) + parseFloat(cs.borderBottomWidth);
      if (reduce) { d.open = false; d.style.overflow = ""; return; }
      var b = d.animate({ height: [startH + "px", endC + "px"] }, { duration: 300, easing: EASE });
      b.onfinish = b.oncancel = function () { d.open = false; d.style.overflow = ""; };
    }
  }
  function toggleAcc(d) {
    var opening = !d.open;
    if (opening) {
      var g = d.getAttribute("data-acc-group");
      if (g) $$('details[data-acc][data-acc-group="' + g + '"][open]').forEach(function (o) { if (o !== d) animateAcc(o, false); });
    }
    animateAcc(d, opening);
  }

  /* ---------- menu ---------- */
  var lastFocus = null;
  function setMenu(open) {
    var menu = document.querySelector("[data-menu]");
    if (!menu) return;
    if (open) {
      lastFocus = document.activeElement;
      menu.setAttribute("data-open", "");
      menu.setAttribute("aria-hidden", "false");
      document.documentElement.style.overflow = "hidden";
      var f = menu.querySelector("[data-menu-panel] a, a, button");
      if (f) setTimeout(function () { f.focus(); }, 80);
    } else {
      menu.removeAttribute("data-open");
      menu.setAttribute("aria-hidden", "true");
      document.documentElement.style.overflow = "";
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    $$("[data-menu-open]").forEach(function (b) { b.setAttribute("aria-expanded", open ? "true" : "false"); });
  }

  /* ---------- click delegation ---------- */
  document.addEventListener("click", function (e) {
    var t = e.target;
    if (!t || !t.closest) return;

    var tab = t.closest("[data-tabs] [role=tab]");
    if (tab) { activateTab(tab.closest("[data-tabs]"), tab, false); return; }

    var sum = t.closest("details[data-acc] > summary");
    if (sum) { e.preventDefault(); toggleAcc(sum.parentElement); return; }

    if (t.closest("[data-menu-open]")) { setMenu(true); return; }
    if (t.closest("[data-menu-close]")) { setMenu(false); return; }
    if (t.closest("[data-menu] a")) { setMenu(false); return; }

    var cb = t.closest("[data-carousel-prev],[data-carousel-next]");
    if (cb) {
      var root = cb.closest("[data-carousel]");
      var track = root && root.querySelector("[data-carousel-track]");
      if (track) track.scrollBy({ left: (cb.hasAttribute("data-carousel-prev") ? -1 : 1) * track.clientWidth * 0.85, behavior: reduce ? "auto" : "smooth" });
      return;
    }

    var vp = t.closest("[data-video-play]");
    if (vp) {
      var wrap = vp.closest("[data-video-src]");
      if (!wrap) return;
      var f = document.createElement("iframe");
      f.src = wrap.getAttribute("data-video-src");
      f.title = wrap.getAttribute("data-video-title") || "Video";
      f.allow = "autoplay; fullscreen; picture-in-picture";
      f.setAttribute("allowfullscreen", "");
      f.style.cssText = "position:absolute;inset:0;width:100%;height:100%;border:0";
      wrap.innerHTML = "";
      wrap.appendChild(f);
      return;
    }

    var el = t.closest("[data-embed-load]");
    if (el) {
      var box = el.closest("[data-embed-src]");
      if (!box) return;
      var fr = document.createElement("iframe");
      fr.src = box.getAttribute("data-embed-src");
      fr.title = box.getAttribute("data-embed-title") || "Embedded content";
      fr.style.cssText = "display:block;width:100%;height:" + (box.getAttribute("data-embed-height") || "640px") + ";border:0";
      box.innerHTML = "";
      box.appendChild(fr);
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && document.querySelector("[data-menu][data-open]")) setMenu(false);
  });

  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---------- boot + watch for new markup ---------- */
  function boot() {
    scan(document);
    onScroll();
    var queued = false;
    new MutationObserver(function () {
      if (queued) return;
      queued = true;
      requestAnimationFrame(function () { queued = false; scan(document); onScroll(); });
    }).observe(document.body, { childList: true, subtree: true });
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot); else boot();
})();
