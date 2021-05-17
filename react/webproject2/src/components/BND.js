import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';
import { db } from '../firebase';
import Column from './Column';

const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
    },
    'column-2': {
      id: 'column-2',
      title: 'In progress',
      taskIds: []
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: []
    }
  },
  // Facilitate reordering of the columns
  columnOrder: ['column-1', 'column-2', 'column-3']
};

function BND() {
  const [FColumns] = useCollection(
    db
      .collection('calendar')
      .doc('calendarData')
      .collection('columns')
      .orderBy('index', 'asc')
  );
  const [FColumnOrder] = useDocument(db.collection('calendar').doc('calendarData'));
  const [FTasks] = useCollection(
    db.collection('calendar').doc('calendarData').collection('tasks')
  );
  const [_initialstate, setInitialstate] = useState(null);
  const [addClick, setAddClick] = useState(false);
  const [input, setInput] = useState('');
  const [FInitialData] = useDocument(db.collection('calendar').doc('one'));

  useEffect(() => {
    const fetchData = () => {
      if (FInitialData) setInitialstate(FInitialData.data());
    };
    return fetchData();
  }, [FInitialData]);

  useEffect(() => {
    const setData = () => {
      if (_initialstate) db.collection('calendar').doc('one').set(_initialstate);
    };
    return setData();
  }, [_initialstate]);

  const sendMessage = (e) => {
    e.preventDefault();

    const addCol = _initialstate.columnOrder.length;

    const newState = {
      ..._initialstate,
      columns: {
        ..._initialstate.columns,
        [addCol]: { id: `${addCol}`, title: e.target.value, taskIds: [] }
      },
      columnOrder: [..._initialstate.columnOrder, `${addCol}`]
    };
    setInitialstate(newState);

    setInput('');
  };
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      if (input) sendMessage(e);
      setAddClick();
    }
  };

  const AddCalendar = () => {
    setAddClick((prev) => !prev);
  };

  const AddTask = (column) => {
    const columnID = column.id;
    console.log(_initialstate.columns[columnID].taskIds);
    const addTask = Object.keys(_initialstate.tasks).length;
    const newState = {
      ..._initialstate,
      tasks: {
        ..._initialstate.tasks,
        [addTask]: { id: `${addTask}`, content: '제목없음' }
      },
      columns: {
        ..._initialstate.columns,
        [columnID]: {
          ..._initialstate.columns[columnID],
          taskIds: [..._initialstate.columns[columnID].taskIds, `${addTask}`]
        }
      }
    };
    setInitialstate(newState);
  };
  const TaskClick = (task, column) => {
    console.log(task);
    console.log(column);
  };

  const onDragEnd = (result) => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    // reordering column
    if (type === 'column') {
      const newColumnOrder = Array.from(_initialstate.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ..._initialstate,
        columnOrder: newColumnOrder
      };
      setInitialstate(newState);
      return;
    }

    // Moving from one list to same list

    // const start = source.droppableId;
    // const finish = destination.droppableId;
    // if (start === finish) {
    // }

    const start = _initialstate.columns[source.droppableId];
    const finish = _initialstate.columns[destination.droppableId];

    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      const newState = {
        ..._initialstate,
        columns: {
          ..._initialstate.columns,
          [newColumn.id]: newColumn
        }
      };
      setInitialstate(newState);
      return;
    }
    // Moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newState = {
      ..._initialstate,
      columns: {
        ..._initialstate.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    setInitialstate(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <CalendarContainer>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {(provided) => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {_initialstate?.columnOrder.map((columnId, index) => {
                const column = _initialstate?.columns[columnId];
                const tasks = column?.taskIds?.map(
                  (taskId) => _initialstate.tasks[taskId]
                );

                return (
                  <Column
                    AddTask={AddTask}
                    TaskClick={TaskClick}
                    key={column.id}
                    column={column}
                    tasks={tasks}
                    index={index}
                  />
                );
              })}
              {provided.placeholder}
            </Container>
          )}
        </Droppable>
        <AddGroup>
          {addClick ? (
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              autoFocus
              onBlur={() => AddCalendar()}
            />
          ) : (
            <p onClick={() => AddCalendar()}>+ 그룹 추가</p>
          )}
        </AddGroup>
      </CalendarContainer>

      {/* {FColumnOrder?.data().columnOrder.map((columnId) => {
        const tasks = [];
        let column = null;
        FColumns?.docs.map((doc) => {
          if (doc.data().id === columnId) {
            doc.data().taskIds.map((taskId) => {
              FTasks?.docs.map((task) => {
                if (task.data().id === taskId) {
                  tasks.push({ id: task.data().id, content: task.data().content });
                }
              });
            });
            column = doc;
          }
        });
        return <Column key={column.id} column={column.data()} tasks={tasks} />;
      })} */}
    </DragDropContext>
  );
}

export default BND;

const Container = styled.div`
  display: flex;
  border: 1px solid red;
`;
const CalendarContainer = styled.div`
  display: flex;
`;
const AddGroup = styled.div`
  margin: 8px;
  width: 100px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  > input {
    width: 120px;
    height: 20px;
    margin-left: 40px;

    :focus {
      border-color: #abddf1;
      border-radius: 3px;
      background-color: #f7f7f5;
    }
  }

  > p {
    :hover {
      background-color: #efefef;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
