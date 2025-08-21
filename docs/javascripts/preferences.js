(function () {
    const KEY = "mkdocs:fontPrefs"; // reuse your existing key
    const VARS = {
        large: "--md-large-header-font",
        small: "--md-small-header-font",
        text:  "--md-text-font",
        code:  "--md-code-font",
    };
    const WIDTH_VAR = "--md-max_width";

    function applyFonts(prefs) {
        const r = document.documentElement.style;
        Object.entries(VARS).forEach(([k, cssVar]) => {
            if (prefs[k]) r.setProperty(cssVar, prefs[k]);
        });
    }

    function applyWidth(width) {
        if (!width) return;
        const r = document.documentElement.style;
        // allow "none" for truly full width, otherwise expect a CSS length (e.g. "976px" or "70rem")
        r.setProperty(WIDTH_VAR, width);
    }

    function save(prefs) {
        localStorage.setItem(KEY, JSON.stringify(prefs));
    }

    // Accept: number+unit (em/rem/px/%), or 'none'/'full'
    // If user enters a bare number, default to 'em'.
    function normalizeWidth(raw) {
        if (!raw) return null;
        let v = String(raw).trim().toLowerCase();
        if (v === "full") v = "none";
        if (v === "none") return v;
        if (/^\d+(\.\d+)?(em|rem|px|%)$/.test(v)) return v;
        if (/^\d+(\.\d+)?$/.test(v)) return v + "em";  // default unit
        return null;
    }

    // Load + apply ASAP (pre-DOM)
    let saved = {};
    try { saved = JSON.parse(localStorage.getItem(KEY) || "{}"); } catch {}
    if (Object.keys(saved).length) {
        applyFonts(saved);
        if (saved.width) applyWidth(saved.width);
    }

    document.addEventListener("DOMContentLoaded", () => {
        // font selects (if present)
        const sel = {
            large: document.getElementById("font-large"),
            small: document.getElementById("font-small"),
            text:  document.getElementById("font-text"),
            code:  document.getElementById("font-code"),
        };

        for (const k of Object.keys(sel)) {
            if (sel[k] && saved[k]) sel[k].value = saved[k];
            sel[k]?.addEventListener("change", () => {
                saved[k] = sel[k].value;
                applyFonts(saved);
                save(saved);
            });
        }

        const input = document.getElementById("width-input");
        const applyBtn = document.getElementById("width-apply");
        const resetBtn = document.getElementById("width-reset");

        if (!input || !applyBtn || !resetBtn) return;

        // Initialize field
        input.value = saved.width || "61em";

        function doApply() {
            const norm = normalizeWidth(input.value);
            if (!norm) {
                input.setCustomValidity("Enter a value like 61em, 1200px, 90%, or 'none'");
                input.reportValidity();
                return;
            }
            input.setCustomValidity("");
            saved.width = norm;
            applyWidth(saved.width);
            save(saved);
        }

        // Apply on button click or Enter
        applyBtn.addEventListener("click", doApply);
        input.addEventListener("keydown", (e) => {
            if (e.key === "Enter") { e.preventDefault(); doApply(); }
        });

        // Reset to theme default
        resetBtn.addEventListener("click", () => {
            input.value = "61em";
            saved.width = "61em";
            applyWidth(saved.width);
            save(saved);
        });
    });
})();
