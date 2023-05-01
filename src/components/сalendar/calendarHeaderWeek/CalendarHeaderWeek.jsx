
import css from "./CalendarHeaderWeek.module.css"
import { newWeek} from "components/сalendar/helps/createNewWeek";
import { useSelector } from "react-redux";
import moment from "moment/moment";
import { getCurrentDate } from "../../../redux/calendar/selectors";

const CalendarHeaderWeek = () => {
      // const navigate = useNavigate();
    // const dispatch = useDispatch();
    const currentDate = useSelector(getCurrentDate);
    const deserialized = moment(currentDate);

    const week = newWeek(deserialized);
    
  // const clickDay = (day) => {
  //       navigate(`/main/calendar/tasks/${day.format("YYYY-MM-DD")}`);
  //       dispatch(chosedDateAction(day.format("YYYY-MM-DD")));
  //   }

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
                        // onClick={() => clickDay(item)}
                        // to={`/main/calendar/tasks/${item.format("YYYY-MM-DD")}`}
                    >
                    <div className={`${css.days} `}> {item.format('ddd')}</div>
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

