import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { getCurrentDate } from 'redux/calendar/selectors';

const CalendarRedirect = () => {
  const navigate = useNavigate();
    const currentDate = useSelector(getCurrentDate);
   

  useEffect(() => {
   navigate(`/calendar/month/${currentDate.slice(0, 7)}`);
  }, [currentDate, navigate]);

  return <Outlet />;
};

export default CalendarRedirect;
