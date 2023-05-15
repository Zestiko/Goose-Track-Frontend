const newWeek = day => {
  const week = [day];
  for (let i = 1; i < 4; i++) {
    const prevDay = day.clone().subtract(i, 'day');
    const nextDay = day.clone().add(i, 'day');
    week.unshift(prevDay);
    week.push(nextDay);
  }
  return week;
};
//можно получить все дни текущего месяца ввиде обьекта
const getAllDayInCalendar = arrayDays => {
  const formattedDates = arrayDays.map(date => {
    const day = date.date();
    const month = date.month() + 1;
    const year = date.year();
    return { day, month, year };
  });
  return formattedDates;
};

export { newWeek, getAllDayInCalendar };
