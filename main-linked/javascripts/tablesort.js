document$.subscribe(function () {
  const selector = "article table:not([class]):has(tbody > tr + tr)";
  const tables = document.querySelectorAll(selector);
  tables.forEach((table) => new Tablesort(table));
});