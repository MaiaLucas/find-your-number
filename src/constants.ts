interface CardsProps {
  1: number[];
  2: number[];
  4: number[];
  8: number[];
  16: number[];
  32: number[];
}

const generateArray = (initial: number, length: number) => {
  const sumValue: Readonly<number> = initial + 1;
  const arr = Array.from({ length });
  const arrGenerated: number[] = [initial];

  arr.reduce((acc: number, curVal) => {
    const isDividedByInitial = (acc + 1) % initial === 0;
    const newValue =
      isDividedByInitial && acc !== initial ? acc + sumValue : acc + 1;
    arrGenerated.push(newValue);
    return newValue;
  }, initial);

  return arrGenerated;
};

export const CARDS: Readonly<CardsProps> = {
  1: Array.from({ length: 64 }, (x, y) => y).filter((el) => el % 2 !== 0),
  2: generateArray(2, 31),
  4: generateArray(4, 31),
  8: generateArray(8, 31),
  16: generateArray(16, 31),
  32: generateArray(32, 31),
};

export type CARDS_STEPS = 1 | 2 | 4 | 8 | 16 | 32;
