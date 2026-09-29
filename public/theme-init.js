(function () {
  try {
    var theme = localStorage.getItem("portfolio-theme");
    if (!theme) {
      theme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
    }
    document.documentElement.dataset.theme = theme;
  } catch {
    // Theme preference is optional.
  }
})();
