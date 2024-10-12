export const formatNumberToCurrency = (value: number) => {
  const res = new Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return res.format(value)
}
