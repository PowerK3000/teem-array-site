/* Teem Array site: one job. Start the closing logo sequence when it scrolls into view.
   Without this script (or if it fails) the logo simply shows complete. No tracking, no network calls. */
(function () {
  var root = document.documentElement;
  root.classList.add('js');
  function start() {
    var mark = document.querySelector('.mark');
    if (!mark) return;
    if (!('IntersectionObserver' in window)) { mark.classList.add('go'); return; }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { mark.classList.add('go'); io.disconnect(); }
      });
    }, { threshold: 0.6 });
    io.observe(mark);
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
