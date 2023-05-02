
import css from "./CalendarHeaderWeek.module.scss"
import { newWeek} from "components/сalendar/helps/createNewWeek";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import { getCurrentDate } from "../../../redux/calendar/selectors";
import { useEffect, useState } from "react";

const CalendarHeaderWeek = () => {
    const currentDate = useSelector(getCurrentDate);
    const deserialized = moment(currentDate);
    const week = newWeek(deserialized);

        const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
    


    const isCurrentDay = (item) => moment().isSame(item, "D");
    const isCurrentChosedDay =(item)=> deserialized.isSame(item, "D")
    return (
        <div key={new Date()} className={`${css.days_wrapper } ${css.days_wrapp}`}>
            {
                week.map((item, i) =>
                    <div key={i}
                        className={
                            !isCurrentChosedDay(item)
                            ?
                            `${css.days_wrap} ${css.column} ${css.hover_color}`
                            :
                            `${css.days_wrap} ${css.column} ${css.back}  ${css.scale}`
                        }
                    >
                        <div className={`${css.days} `}>
                             {windowSize.width < 768 ? `${item.format('ddd').slice(0, 1)}`:`${item.format('ddd')}` }
                        </div>
                        {isCurrentDay(item)
                                ? 
                            <div className={`${ css.current_day} ${css.date} ${css.scale}  `}>
                                <span className={css.current_day} >{item.format('D')} </span>
                            </div>
                                :
                            <div className={`${css.date}  ${css.min_scale}  `}>
                                <span >{item.format('D')} </span>
                            </div>
                        }
                    </div>
                )
            }
        </div>
        
    )
}
export { CalendarHeaderWeek }

