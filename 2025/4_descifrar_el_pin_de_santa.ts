function decodeSantaPin(code: string): string {
  // Resultado de cada vuelta
  let result: number = 0;
  // Solucion final
  let sol: string = "";
  for (let i = 0; i < code.length; i++) {
    switch (code[i]) {
      case "+":
        result = (result + 1) % 10;
        break;
      case "-":
        result = (result - 1 + 10) % 10;
        break;
      case "<":
        sol += sol[sol.length - 1];
        i++;
        break;
      case "]":
        sol += result;
        break;
      case "[":
        continue;
      default:
        result = parseInt(code[i]);
    }
  }

  return sol.length > 3 ? sol : null;
}
