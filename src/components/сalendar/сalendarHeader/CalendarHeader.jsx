
import css from "./CalendarHeader.module.scss";
import currentDateFormatted from '../../../redux/calendar/getFormattedDate';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import {  NavLink, useNavigate} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { chosedDateAction, swichAction} from "../../../redux/calendar/actions";
import moment from "moment/moment";
import { getCurrentDate, getDayOrMonth} from "../../../redux/calendar/selectors";
import { setDate } from "redux/tasks/taskSlice";
// import { fetchTasks } from "redux/tasks/tasksOperations";


export const CalendarHeader = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const currentDate = useSelector(getCurrentDate);
    const swich = useSelector(getDayOrMonth);
    const deserialized = moment(currentDate);
    
    const activeButton = (isDayOrMonth) => {
        if (!isDayOrMonth) {
        navigate(`/calendar/day/${deserialized.format("YYYY-MM-DD")}`);
        }
        dispatch( swichAction(isDayOrMonth))
    }

    const handleNext = (day) => {
        dispatch(setDate(day.format("YYYY-MM")))
         navigate(`/calendar/month/${day.format("YYYY-MM")}`);
        dispatch(chosedDateAction(moment(deserialized.clone().add(1, "month")).format()))
        // dispatch(fetchTasks())
    };
    
    const handlePrev = (day) => {
      dispatch(setDate(day.format("YYYY-MM")))
    navigate(`/calendar/month/${day.format("YYYY-MM")}`);
        dispatch(chosedDateAction(moment(deserialized.clone().subtract(1, "month")).format())) 
        // dispatch(fetchTasks())
  };
    
    return (
        <>
        <div className={css.caledr_header_wrapper}>
            
            <div className={css.caledr_wrapper_month_prev_next}>
            <div className={css.caledr_month_title_wrap}>
                        <span className={css.caledr_month_title}>
                            {swich
                                ?
                                `${deserialized.format("MMMM")} ${deserialized.format("YYYY")}`
                                :
                                `${deserialized.format("D MMMM YYYY")}`
                            }</span>
               </div>
               <div className={`${css.btn_prev_next}`}>
                        <button type="button" 
                        className={`${css.btn} ${css.prev} ${css.btn_arrow} `}
                        onClick={()=>handlePrev(deserialized.clone().subtract(1, "month"))} 
                        disabled={ currentDateFormatted.slice(0,7) === deserialized.format("YYYY-MM")}
                    ><FaChevronLeft /></button>
                    
                    <button type="button"
                        className={`${css.btn} ${css.next} ${css.btn_arrow} `}
                        onClick={()=>handleNext(deserialized.clone().add(1, "month"))}
                    ><FaChevronRight /></button>
                </div>
            </div>
            
            <div className={css.caledr_header_wrapper_btn}>
                    <button type="button"
                        
                        className={`${css.btn} ${css.month_day} ${css.month}
                ${swich ? css.active :""}`}
                        onClick={() => activeButton(true)}>
                        <NavLink>Month</NavLink>
                    </button>
                
                    <button type="button"
                        className={`${css.btn} 
                        ${css.month_day} ${css.next} ${css.day}
                        ${swich ? "" : css.active}`
                        }
                        onClick={() => activeButton(false)}>
                        <NavLink to={`/calendar/day/${deserialized.format("YYYY-MM-DD")}`}>Day</NavLink>
                    </button>
            </div>
            </div>
        </>
        
    )
  
}


    
//   const activeButton = useCallback((isDayOrMonth) => {
//     dispatch(swichAction(isDayOrMonth))
//   }, [dispatch]);

//   const handleNext = useCallback(() => {
//     swich ?
//       dispatch(chosedDateAction(currentDate.clone().add(1, "month")).format())
//       :
//       dispatch(chosedDateAction(currentDate.clone().add(1, "day")).format())
//   }, [swich, currentDate, dispatch]);

//   const handlePrev = useCallback(() => {
//     swich ?
//       dispatch(chosedDateAction(currentDate.clone().subtract(1, "month")).format())
//       :
//       dispatch(chosedDateAction(currentDate.clone().subtract(1, "day")).format())
//   }, [swich, currentDate, dispatch]);

//   useEffect(() => {
//     if (!swich) {
//       dispatch(chosedDateAction(currentDate));
//       navigate(`/tasks/${deserialized.format("YYYY-MM-DD")}`);
//     } else {
//       dispatch(chosedDateAction(currentDate));
//       navigate(`/calendar/month/${deserialized.format("YYYY-MM")}`);
//     }
//   }, [swich, currentDate, deserialized, dispatch, navigate]);


// =======================================
// import { useMemo } from "react";
// import css from "./CalendarHeader.module.css";
// import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
// import { NavLink, useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { chosedDateAction, swichAction } from "../../../redux/clendarSlice";
// import moment from "moment/moment";


// export const CalendarHeader = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();
//     const  = useSelector(state => state.calendar.);

//     const currentDate = useSelector(state => state.calendar.currentDate);
//     const swich = useSelector(state => state.calendar.isDayOrMonth);

//     const deserialized = moment(currentDate);

//     const activeButton = (isDayOrMonth) => {
//         dispatch(swichAction(isDayOrMonth))
//     }

//     const handleNext = () => {
//         swich ?
//             dispatch(chosedDateAction(currentDate.clone().add(1, "month")).format())
//             :
//             dispatch(chosedDateAction(currentDate.clone().add(1, "day")).format())
//     };

//     const handlePrev = () => {
//         swich ?
//             dispatch(chosedDateAction(currentDate.clone().subtract(1, "month")).format())
//             :
//             dispatch(chosedDateAction(currentDate.clone().subtract(1, "day")).format())
//     };

//     const headerContent = useMemo(() => {
//         if (!swich) {
//             return (
//                 <>
//                     <span className={css.caledr_month_title}>
//                         {`${deserialized.format("D MMMM YYYY")}`}
//                     </span>
//                     <button
//                         type="button"
//                         className={`${css.btn} ${css.prev} ${css.btn_arrow} `}
//                         onClick={handlePrev}
//                         disabled={ === deserialized.format("YYYY-MM")}
//                     >
//                         <FaChevronLeft />
//                     </button>
//                     <button
//                         type="button"
//                         className={`${css.btn} ${css.next} ${css.btn_arrow} `}
//                         onClick={handleNext}
//                     >
//                         <FaChevronRight />
//                     </button>
//                 </>
//             );
//         } else {
//             return (
//                 <>
//                     <span className={css.caledr_month_title}>
//                         {`${deserialized.format("MMMM")} ${deserialized.format("YYYY")}`}
//                     </span>
//                     <button
//                         type="button"
//                         className={`${css.btn} ${css.prev} ${css.btn_arrow} `}
//                         onClick={handlePrev}
//                         disabled={ === deserialized.format("YYYY-MM")}
//                     >
//                         <FaChevronLeft />
//                     </button>
//                     <button
//                         type="button"
//                         className={`${css.btn} ${css.next} ${css.btn_arrow} `}
//                         onClick={handleNext}
//                     >
//                         <FaChevronRight />
//                     </button>
//                 </>
//             );
//         }
//     }, [deserialized, handleNext, handlePrev, , swich]);

//     return (
//         <div className={css.caledr_header_wrapper}>
//             <div className={css.caledr_switch_btn}>
//                 <button
//                         type="button"
//                         className={`${css.btn} ${css.btn_month} ${swich ? "" : css.active_btn}`}
//                         onClick={() => activeButton(false)}
//                         disabled={swich === false}
//                         ></button>
//                 <button
//                         type="button"
//                         className={`${css.btn} ${css.btn_month} ${swich ? "" : css.active_btn}`}
//                         onClick={() => activeButton(true)}
//                         disabled={swich === false}
//                 ></button>
//             </div>
//                 {headerContent}
    
    
//         </div>
//     )
// }


