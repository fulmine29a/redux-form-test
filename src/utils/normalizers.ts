export const priceNormalizer = (value: string) =>
  Number((value.match(/[0-9,.]/g) || []).join(''));

