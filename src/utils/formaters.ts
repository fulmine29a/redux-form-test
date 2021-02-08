export const priceFormatter = (value: string | number) =>
  Number(value).toLocaleString('ru', {currency: 'rub', maximumFractionDigits: 2})
