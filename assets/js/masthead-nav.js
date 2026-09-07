// Masthead navigation: desktop hover/click dropdowns + mobile accordion menu.
// The same panel markup serves both presentations (see _includes/masthead.html) —
// only the interaction mode and CSS positioning differ by breakpoint.
document.addEventListener("DOMContentLoaded", function () {
  var nav = document.querySelector(".masthead-nav");
  if (!nav) return;

  var items = Array.prototype.slice.call(nav.querySelectorAll(".masthead-nav__item"));
  var toggle = document.querySelector(".masthead-nav__toggle");
  var navList = document.getElementById("masthead-nav-list");
  // 993px, not 992px, so it never overlaps the CSS `max-width: 992px` cutoff.
  var desktopMQ = window.matchMedia("(min-width: 993px)");
  var currentOpenItem = null;

  function reducedMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  function openPanel(item) {
    if (currentOpenItem && currentOpenItem !== item) {
      closePanel(currentOpenItem, true);
    }
    var caret = item.querySelector(".masthead-nav__caret");
    var panel = item.querySelector(".masthead-nav__panel");
    panel.hidden = false;
    void panel.offsetHeight; // force reflow so the opening transition runs
    // Add is-open first — CSS gives `.is-open` its own longer, flashier
    // transition (see _custom.scss), so it must already be present before
    // the max-height change below so that change actually uses it.
    panel.classList.add("is-open");
    // Mobile accordion only: measure the panel's real height so the
    // max-height transition animates to an exact target instead of the
    // desktop-only CSS relying on natural (unconstrained) sizing.
    if (!desktopMQ.matches) {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
    caret.setAttribute("aria-expanded", "true");
    currentOpenItem = item;
  }

  function closePanel(item, immediate) {
    var caret = item.querySelector(".masthead-nav__caret");
    var panel = item.querySelector(".masthead-nav__panel");
    caret.setAttribute("aria-expanded", "false");
    panel.classList.remove("is-open");
    if (!desktopMQ.matches) {
      panel.style.maxHeight = "0px";
    }
    if (immediate || reducedMotion()) {
      panel.hidden = true;
    } else {
      // Wait for the closing transition before removing from the a11y tree;
      // the timeout is a fallback in case transitionend never fires.
      var hideIfStillClosed = function () {
        if (!panel.classList.contains("is-open")) panel.hidden = true;
      };
      panel.addEventListener("transitionend", hideIfStillClosed, { once: true });
      // Comfortably above the closing transition's own duration (0.2s) —
      // this is purely a safety net for when transitionend never fires, not
      // a second race to win; set it too tight and it fires first, cutting
      // the real transition off mid-flight.
      setTimeout(hideIfStillClosed, 300);
    }
    if (currentOpenItem === item) currentOpenItem = null;
  }

  items.forEach(function (item) {
    var caret = item.querySelector(".masthead-nav__caret");
    var panel = item.querySelector(".masthead-nav__panel");
    if (!caret || !panel) return;

    caret.addEventListener("click", function (e) {
      e.preventDefault();
      if (panel.hidden || !panel.classList.contains("is-open")) {
        openPanel(item);
      } else {
        closePanel(item);
      }
    });

    // Hover-intent open/close — desktop, mouse-driven only. Touch devices
    // (no fine hover) rely purely on the caret click above.
    var openTimer, closeTimer;
    item.addEventListener("mouseenter", function () {
      if (!desktopMQ.matches || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
      clearTimeout(closeTimer);
      openTimer = setTimeout(function () { openPanel(item); }, 80);
    });
    item.addEventListener("mouseleave", function () {
      if (!desktopMQ.matches || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;
      clearTimeout(openTimer);
      closeTimer = setTimeout(function () { closePanel(item); }, 150);
    });
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && currentOpenItem) {
      var item = currentOpenItem;
      var caret = item.querySelector(".masthead-nav__caret");
      closePanel(item, true);
      caret.focus();
    }
  });

  document.addEventListener("click", function (e) {
    if (currentOpenItem && !currentOpenItem.contains(e.target)) {
      closePanel(currentOpenItem, true);
    }
    // Mobile only: a tap outside the open menu sheet closes it. The toggle
    // button is excluded so this doesn't fight its own click handler below
    // (that handler already closes an open sheet on its own).
    if (
      !desktopMQ.matches &&
      navList &&
      navList.classList.contains("is-open") &&
      !navList.contains(e.target) &&
      !(toggle && toggle.contains(e.target))
    ) {
      closeList();
    }
  });

  // Same hidden-until-after-transition choreography as openPanel/closePanel
  // above, applied to the mobile menu sheet so it fades + slides instead of
  // popping instantly.
  function openList() {
    navList.hidden = false;
    void navList.offsetHeight; // force reflow so the opening transition runs
    navList.classList.add("is-open");
    // aria-expanded alone drives the "Menu"/"Close" label cross-fade via CSS
    // (see .masthead-nav__toggle-label in _custom.scss) — no text mutation here.
    toggle.setAttribute("aria-expanded", "true");
  }

  function closeList(immediate) {
    navList.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
    if (immediate || reducedMotion()) {
      navList.hidden = true;
    } else {
      var hideIfStillClosed = function () {
        if (!navList.classList.contains("is-open")) navList.hidden = true;
      };
      navList.addEventListener("transitionend", hideIfStillClosed, { once: true });
      // Comfortably above the list's real close transition duration (0.32s) —
      // a safety net for when transitionend never fires, not a second race to
      // win; too tight and it fires first, cutting the transition off mid-flight.
      setTimeout(hideIfStillClosed, 400);
    }
  }

  if (toggle && navList) {
    toggle.addEventListener("click", function () {
      var isOpen = toggle.getAttribute("aria-expanded") === "true";
      if (isOpen) {
        closeList();
      } else {
        openList();
      }
    });
  }

  // Leaf-node links — the nav's own <a> elements, as opposed to the caret and
  // toggle <button>s that only open/close a panel — always close whatever's
  // open once clicked, since a real navigation is about to happen. Matching
  // by tag rather than a class means this naturally excludes the caret and
  // toggle controls without any extra bookkeeping.
  if (navList) {
    navList.addEventListener("click", function (e) {
      var link = e.target.closest("a");
      if (!link) return;
      if (currentOpenItem) closePanel(currentOpenItem, true);
      if (toggle && !desktopMQ.matches) closeList(true);
    });
  }

  // Crossing the mobile/desktop breakpoint: reset all open state so nothing
  // is left stuck open in the presentation it's no longer in. Also clear any
  // inline max-height a mobile open left behind — the desktop panel doesn't
  // use max-height at all, so a stale mobile-measured pixel value here would
  // otherwise clip it if its unconstrained desktop content is ever taller.
  desktopMQ.addEventListener("change", function () {
    if (currentOpenItem) closePanel(currentOpenItem, true);
    if (toggle && navList) closeList(true);
    document.querySelectorAll(".masthead-nav__panel").forEach(function (panel) {
      panel.style.maxHeight = "";
    });
  });
});
