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

        // width controls
        const range = document.getElementById("width-range");
        const out   = document.getElementById("width-value");
        const full  = document.getElementById("width-full");

        function setFromRange() {
            const em = `${range.value}em`;
            out.textContent = em;
            saved.width = em;
            applyWidth(saved.width);
            save(saved);
        }

        function setFullWidth(on) {
            if (on) {
                range.disabled = true;
                saved.width = "none";
                out.textContent = "full";
            } else {
                range.disabled = false;
                setFromRange();
                return;
            }
            applyWidth(saved.width);
            save(saved);
        }

        if (range && out && full) {
            // init UI from saved width
            if (saved.width === "none") {
                full.checked = true;
                range.disabled = true;
                out.textContent = "full";
            } else if (saved.width && /^\d+(\.\d+)?em$/.test(saved.width)) {
                range.value = String(parseFloat(saved.width)); // strip "em"
                out.textContent = saved.width;
            } else {
                out.textContent = `${range.value}em`;
            }

            range.addEventListener("input", setFromRange);
            full.addEventListener("change", () => setFullWidth(full.checked));
        }
    });
})();
