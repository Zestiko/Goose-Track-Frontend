const createCalendCells = currentDate => {
  //старт заполнения ячеек датами
  const startDay = currentDate.clone().startOf('month').startOf('week');
  const firstDayOfMonth = currentDate.clone().startOf('month').date(1);
  const lastDayOfMonth = currentDate.clone().endOf('month');

  const calendCells =
    firstDayOfMonth.day() === 0 || lastDayOfMonth.day() === 1 ? 42 : 35;
  const day = startDay.clone().subtract(1, 'day');
  return [...Array(calendCells)].map(() =>
    day.add(1, 'day').clone()
    );
    

};

export default createCalendCells;