import { Suspense, useEffect } from 'react';
import { Outlet, useParams, useNavigate } from 'react-router-dom';
import CalendarToolbar from 'components/CalendarToolbar/CalendarToolbar';
import moment from 'moment';
import checkPeriodValid from 'components/utils/checkPeriodValid';

const CalendarPage = () => {
  const navigate = useNavigate();
  const { currentMonth, currentDay } = useParams();
  const period = currentMonth || currentDay;

  useEffect(() => {
    checkPeriodValid(period, navigate);
    if (!period) {
      const month = moment().format('YYYY-MM');
      navigate(`/calendar/month/${month}`);
    }
  }, [navigate, period]);

  const periodTypeMonth = moment(period, ['YYYY-MM'], true).isValid();

  return (
    <>
      <CalendarToolbar period={periodTypeMonth} date={period} />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default CalendarPage;
