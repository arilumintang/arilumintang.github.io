// Keep the current page's tab visible when the tab row scrolls on a phone.
(function () {
  var tabs = document.querySelector('.odin-tabs');
  var current = tabs && tabs.querySelector('[aria-current="page"]');
  if (current && tabs.scrollWidth > tabs.clientWidth) {
    tabs.scrollLeft = current.offsetLeft - tabs.offsetLeft - (tabs.clientWidth - current.offsetWidth) / 2;
  }
})();

// Theme switch shared with the portfolio (same localStorage key "theme").
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (!btn) return;
  function label(theme) {
    btn.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
  }
  label(root.getAttribute('data-theme') || 'light');
  btn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    try { localStorage.setItem('theme', next); } catch (e) { /* storage blocked: theme still switches for this view */ }
    label(next);
  });
})();
