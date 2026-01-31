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

    function applyWidth(value) {
        const r = document.documentElement.style;
        if (!value || value === "default") {
            r.removeProperty(WIDTH_VAR);       // <- restores the theme’s own width
        } else {
            r.setProperty(WIDTH_VAR, value);   // e.g. "70em", "1200px", "90%", "none"
        }
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
        if (v === "default") return v;
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
        input.value = saved.width || "100%";

        function doApply() {
            const norm = normalizeWidth(input.value);
            if (!norm) {
                input.setCustomValidity("Enter a value like 61em, 1200px, 90%, 'none', or 'default'");
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
            input.value = "100%";
            saved.width = "100%";
            applyWidth(saved.width);
            save(saved);
        });
    });
})();
