import tinytime from 'tinytime'

export default (date, format) => {
  const f = tinytime(format, {
    padDays: true,
    padMonth: true
  }).render
  return (date instanceof Date) ? f(date): f(new Date(date))
}
