export const formatCentsToCurrency = (value: number) => {
  const floatNumber = value / 100

  const res = new Intl.NumberFormat('pt-br', {
    currency: 'BRL',
    style: 'currency',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return res.format(floatNumber)
}
