export type AmountType = 'salary' | 'MROT' | 'daily' | 'hourly'

export type AmountControlValue = {
  type: AmountType,
  NDFL: boolean,
  amount: number
}

export type AmountControlProps = {
  label: string,
  disabled?: boolean
}
