(function () {
  "use strict";

  function applyToggleLabel() {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    var current = document.documentElement.getAttribute("data-theme");
    if (current === "dark") {
      btn.textContent = "Light mode";
    } else if (current === "light") {
      btn.textContent = "Dark mode";
    } else {
      var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      btn.textContent = prefersDark ? "Light mode" : "Dark mode";
    }
  }

  function initThemeToggle() {
    var btn = document.querySelector(".theme-toggle");
    if (!btn) return;
    applyToggleLabel();
    btn.addEventListener("click", function () {
      var root = document.documentElement;
      var current = root.getAttribute("data-theme");
      var prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
      var effectiveIsDark = current ? current === "dark" : prefersDark;
      var next = effectiveIsDark ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("theme", next);
      } catch (e) {
        /* localStorage unavailable, e.g. file:// with strict privacy settings */
      }
      applyToggleLabel();
    });
  }

  function initTabs() {
    var groups = document.querySelectorAll("[data-tabs]");
    groups.forEach(function (group) {
      var buttons = group.querySelectorAll(".tab-btn");
      var panels = group.querySelectorAll(".tab-panel");
      buttons.forEach(function (btn) {
        btn.addEventListener("click", function () {
          var target = btn.getAttribute("data-tab-target");
          buttons.forEach(function (b) {
            b.classList.toggle("active", b === btn);
          });
          panels.forEach(function (p) {
            p.classList.toggle("active", p.getAttribute("data-tab") === target);
          });
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    initThemeToggle();
    initTabs();
  });
})();
