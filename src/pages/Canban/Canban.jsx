import { useSelector } from 'react-redux';
import { selectTasks } from 'redux/tasks/taskSelectors';
import TasksColumn from 'components/ChoosedDay/TasksColumn/TasksColumn';
import scss from './Canban.module.scss';

const Canban = () => {
  const tasks = useSelector(selectTasks);

  let clmns;
  let tasksByColumns;
  if (tasks.length > 0) {
    clmns = [...new Set(tasks.map(({ column }) => column))];
    console.log(clmns);
    tasksByColumns = clmns.reduce((acc, column) => {
      return {
        ...acc,
        [column]: tasks.filter(task => task.column === column),
      };
    }, {});
  }

  return (
    <>
      <h1 className={scss.titleTask}>Canban</h1>
      <div className={scss.listBox}>
        {clmns &&
          clmns.map(column => {
            //   const columnOptions = COLUMNS_OPTIONS.find(
            //     option => option.column === column
            //   );
            //   const title = columnOptions ? columnOptions.title : '';

            return (
              <TasksColumn
                key={column}
                tasks={tasksByColumns[column]}
                title={column}
                column={column}
              />
            );
          })}
      </div>
    </>
  );
};

export default Canban;
