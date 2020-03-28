const brlValue = (number) => Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
}).format(number);

export default brlValue;
