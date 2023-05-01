// создаем новую неделю от выбраного дня
const newWeek = day => {
  const middleWeek = [];
  const week = [];
  for (let i = 1; i < 4; i++) {
    const dayOfCurrentWeek = day.clone().subtract(i, 'day');
    week.push(dayOfCurrentWeek);
  }
  for (let i = 0; i < 4; i++) {
    const dayOfCurrentWeek = day.clone().add(i, 'day');
    middleWeek.push(dayOfCurrentWeek);
  }
  // добавляем день на третью позицию массива
  return [...week.reverse(), ...middleWeek];
};
// import { addDays, subDays } from 'date-fns';

// const newWeek = day => {
//   const middleWeek = [];
//   const week = [];
//   for (let i = 1; i < 4; i++) {
//     const dayOfCurrentWeek = subDays(day, i);
//     week.push(dayOfCurrentWeek);
//   }
//   for (let i = 0; i < 4; i++) {
//     const dayOfCurrentWeek = addDays(day, i);
//     middleWeek.push(dayOfCurrentWeek);
//   }
//   // добавляем день на третью позицию массива
//   return [...week.reverse(), ...middleWeek];
// };

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
