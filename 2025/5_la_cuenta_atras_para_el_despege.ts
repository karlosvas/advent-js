type ElfDateTime = `${number}*${number}*${number}@${number}|${number}|${number} NP`;

function timeUntilTakeOff(fromTime: ElfDateTime, takeOffTime: ElfDateTime): number {
  // Separar fecha y hora
  const [fromDateStr, fromTimeStr] = fromTime.split("@");
  const [toDateStr, toTimeStr] = takeOffTime.split("@");

  // Parsear fecha y hora directamente en un Date
  const [y1, m1, d1] = fromDateStr.split("*").map(Number);
  const [h1, min1, sec1] = fromTimeStr.split("|").map((n) => parseInt(n.split(" ")[0]));
  const fromDate = new Date(y1, m1 - 1, d1, h1, min1, sec1);

  const [y2, m2, d2] = toDateStr.split("*").map(Number);
  const [h2, min2, sec2] = toTimeStr.split("|").map((n) => parseInt(n.split(" ")[0]));
  const toDate = new Date(y2, m2 - 1, d2, h2, min2, sec2);

  // Diferencia en segundos
  const diffSec = (toDate.getTime() - fromDate.getTime()) / 1000;

  return diffSec;
}
