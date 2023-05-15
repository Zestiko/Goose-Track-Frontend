import moment from 'moment';

const checkPeriodValid = (period, navigate) => {
  const periodValid = moment(period, ['YYYY-MM', 'YYYY-MM-DD'], true).isValid();
  if (!periodValid) {
    navigate(`404`);
  }
};

export default checkPeriodValid;
