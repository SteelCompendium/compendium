(function () {
    const KEY = "mkdocs:fontChoice";
    const FONTS = {
        inter:  { text: "Inter",              code: "JetBrains Mono" },
        merri:  { text: "Merriweather Sans",  code: "JetBrains Mono" }
    };

    function apply(choice) {
        const f = FONTS[choice]; if (!f) return;
        const r = document.documentElement;
        r.style.setProperty("--md-text-font", f.text);
        r.style.setProperty("--md-code-font", f.code);
        localStorage.setItem(KEY, choice);
    }

    // Apply saved preference ASAP
    const saved = localStorage.getItem(KEY);
    if (saved && FONTS[saved]) apply(saved);

    // Hook up the selector when present (e.g., on /preferences/)
    document.addEventListener("DOMContentLoaded", () => {
        const sel = document.getElementById("font-picker");
        if (!sel) return;
        if (saved && FONTS[saved]) sel.value = saved;
        sel.addEventListener("change", () => apply(sel.value));
    });
})();