# Preferences

## Font

<div class="font-prefs">
<p>
<label for="font-large">Large headers (H1–H2):</label>
<select id="font-large">
<option value='"Beaufort W01 Heavy", var(--md-text-font), serif'>Beaufort W01 Heavy (default)</option>
<option value='"Test Newzald", var(--md-text-font), serif'>Test Newzald</option>
<option value='"Source Serif 4"'>Source Serif 4</option>
<option value='"Inter", var(--md-text-font), sans-serif'>Inter</option>
<option value='"system-ui", var(--md-text-font), serif'>System UI</option>
</select>
</p>

<p>
<label for="font-small">Small headers (H3–H6):</label>
<select id="font-small">
<option value='"Test Newzald", var(--md-text-font), serif'>Test Newzald (Default)</option>
<option value='"Beaufort W01 Heavy", var(--md-text-font), serif'>Beaufort W01 Heavy</option>
<option value='"Source Serif 4"'>Source Serif 4</option>
<option value='"Inter", var(--md-text-font), sans-serif'>Inter</option>
<option value='"system-ui", var(--md-text-font), serif'>System UI</option>
</select>
</p>

<p>
<label for="font-text">Body text:</label>
<select id="font-text">
<option value='"BerlingskeSlab-DBd", Georgia, "Times New Roman", serif'>Berlingske Slab (Default)</option>
<option value='"Source Serif 4"'>Source Serif 4</option>
<option value='"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Arial, "Noto Sans", sans-serif'>Inter</option>
<option value='-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", Arial, "Noto Sans", sans-serif'>System UI</option>
</select>
</p>

<p>
<label for="font-code">Code:</label>
<select id="font-code">
<option value='"JetBrains Mono", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'>JetBrains Mono (Default)</option>
<option value='"Fira Code", ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'>Fira Code</option>
<option value='ui-monospace, SFMono-Regular, Menlo, Consolas, monospace'>System Monospace</option>
</select>
</p>
</div>

## Page width

<div class="width-prefs">
  <label for="width-range">Max width:</label>
  <input id="width-range" type="range" min="40" max="120" step="1" value="61">
  <output id="width-value">61em</output>

  <label style="display:block; margin-top:.5rem;">
    <input id="width-full" type="checkbox"> Full width (no max)
  </label>
</div>