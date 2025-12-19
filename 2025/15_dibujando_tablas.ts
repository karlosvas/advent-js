type Data = Array<Record<string, string | number>>;
type SortBy = string;

function drawTable(data: Data, sortBy: SortBy): string {
  // Ordenar datos
  const sorted = data.sort((a, b) => {
    const valA = a[sortBy];
    const valB = b[sortBy];
    return typeof valA === "string" ? valA.localeCompare(valB as string) : (valA as number) - (valB as number);
  });

  // Obtener keys y calcular anchos máximos por columna
  const keys = Object.keys(data[0]);
  const widths = keys.map((_, i) =>
    Math.max(
      1, // Ancho mínimo para letra de columna (A, B, C...)
      ...sorted.map((row) => String(Object.values(row)[i]).length)
    )
  );

  // Construir separador
  const separator = "+" + widths.map((w) => "-".repeat(w + 2)).join("+") + "+\n";

  // Construir header con letras A, B, C...
  let result = separator;
  const headers = keys.map((_, i) => String.fromCharCode(65 + i));
  result += "|" + headers.map((h, i) => ` ${h.padEnd(widths[i])} `).join("|") + "|\n";
  result += separator;

  // Construir filas
  sorted.forEach((row) => {
    const values = Object.values(row);
    result += "|" + values.map((v, i) => ` ${String(v).padEnd(widths[i])} `).join("|") + "|\n";
  });

  result += "+" + widths.map((w) => "-".repeat(w + 2)).join("+") + "+";
  return result;
}

export {};
