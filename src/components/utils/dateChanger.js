const monthMinus = month => {
  return month.subtract(1, 'month').format('YYYY-MM');
};
const monthPlus = month => {
  return month.add(1, 'month').format('YYYY-MM');
};
const dayMinus = day => {
  return day.subtract(1, 'day').format('YYYY-MM-DD');
};
const dayPlus = day => {
  return day.add(1, 'day').format('YYYY-MM-DD');
};

export { monthMinus, monthPlus, dayMinus, dayPlus };
