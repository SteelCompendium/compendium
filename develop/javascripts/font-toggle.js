(function () {
    const KEY = "mkdocs:fontPrefs";
    const VARS = {
        large: "--md-large-header-font",
        small: "--md-small-header-font",
        text:  "--md-text-font",
        code:  "--md-code-font",
    };

    function apply(prefs) {
        const r = document.documentElement.style;
        Object.entries(VARS).forEach(([k, cssVar]) => {
            if (prefs[k]) r.setProperty(cssVar, prefs[k]);
        });
        localStorage.setItem(KEY, JSON.stringify(prefs));
    }

    // Apply saved prefs ASAP
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch {}
    if (Object.keys(saved).length) apply(saved);

    document.addEventListener("DOMContentLoaded", () => {
        const sel = {
            large: document.getElementById("font-large"),
            small: document.getElementById("font-small"),
            text:  document.getElementById("font-text"),
            code:  document.getElementById("font-code"),
        };

        // Initialize controls from saved values
        for (const k of Object.keys(sel)) {
            if (sel[k] && saved[k]) sel[k].value = saved[k];
        }

        function update() {
            const prefs = {
                large: sel.large?.value,
                small: sel.small?.value,
                text:  sel.text?.value,
                code:  sel.code?.value,
            };
            apply(prefs);
        }

        for (const k of Object.keys(sel)) {
            sel[k]?.addEventListener("change", update);
        }
    });
})();
