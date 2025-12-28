function execute(code: string): number {
  let count: number = 0;
  for (let i = 0; i < code.length; i++) {
    switch (code[i]) {
      case "+":
        count++;
        break;
      case "-":
        count--;
        break;
      case "]":
        count = 0;
        break;
      case "{":
        if (count == 0) while (code[i] !== "}") i++;
    }
  }
  return count;
}
