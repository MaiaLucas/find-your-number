export function decimal2Binary(num: number, shift: number) {
  const binValue = (0 | num).toString(2).split("");
  const shiftValue = (0 | shift).toString(2).split("");
  return shiftValue.map((el, idx) => binValue[idx] ?? "0").join("");
}
