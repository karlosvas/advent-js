function elfBattle(elf1: string, elf2: string): number {
  let firstElfLive: number = 3;
  let secondElfLive: number = 3;
  let finish: boolean = false;

  for (let i = 0; i < Math.max(elf1.length, elf2.length) && !finish; i++) {
    // Obtenemos las operaciones, si existen
    let firstElfOP: string = elf1[i] || "";
    let secoundElfOP: string = elf2[i] || "";

    // Figth
    if (firstElfOP == "A" && secoundElfOP != "B") secondElfLive--;
    else if (firstElfOP == "F") secondElfLive -= 2;

    if (secoundElfOP == "A" && firstElfOP != "B") firstElfLive--;
    else if (secoundElfOP == "F") firstElfLive -= 2;

    // Validación de si pelea terminó
    if (secondElfLive <= 0 || firstElfLive <= 0) finish = true;
  }

  // Comparamos ganador
  if (firstElfLive > secondElfLive) return 1;
  else if (secondElfLive > firstElfLive) return 2;
  return 0;
}
