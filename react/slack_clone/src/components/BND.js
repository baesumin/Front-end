import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
import styled from 'styled-components';
import { auth, db } from '../firebase';
import Column from './Column';
import { v4 as uuidv4 } from 'uuid';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useSelector } from 'react-redux';
import firebase from 'firebase';
import moment from 'moment';
import 'moment/locale/ko';
import randomColor from 'randomcolor';

const initialData = {
  tasks: {
    'task-1': {
      id: 'task-1',
      content: '분리수거 하기',
      name: '배수민',
      timestamp: '2021년 05월 18일 오후 1:52',
      color: 'pink'
    },
    'task-2': {
      id: 'task-2',
      content: '영화 감상',
      name: '배수민',
      timestamp: '2021년 05월 18일 오후 1:52',
      color: 'pink'
    },
    'task-3': {
      id: 'task-3',
      content: '핸드폰 충전하기',
      name: '배수민',
      timestamp: '2021년 05월 18일 오후 1:52',
      color: 'pink'
    },
    'task-4': {
      id: 'task-4',
      content: '저녁 차리기',
      name: '배수민',
      timestamp: '2021년 05월 18일 오후 1:52',
      color: 'pink'
    }
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
const Todo = [
  '공부 하기',
  '밥 먹기',
  '산책 하기',
  '물 마시기',
  '계단 오르기',
  '영화 보기'
];

function BND() {
  const [_initialstate, setInitialstate] = useState();
  const [addClick, setAddClick] = useState(false);
  const [input, setInput] = useState('');
  const [FInitialData] = useDocument(db.collection('calendar').doc('one'));
  const [GoogleUser] = useAuthState(auth);
  const { user } = useSelector((state) => state.user);
  const curUser = GoogleUser ? GoogleUser : user;

  useEffect(() => {
    const fetchData = () => {
      if (FInitialData) setInitialstate(FInitialData.data());
    };
    return fetchData();
  }, [FInitialData]);

  useEffect(() => {
    const setData = () => {
      // db.runTransaction((transaction) => {
      //   if (_initialstate)
      //     //transaction.set(db.collection('calendar').doc('one'), _initialstate);
      //     db.collection('calendar').doc('one').set(_initialstate);
      // }).then(() => console.log(_initialstate));
      if (_initialstate) db.collection('calendar').doc('one').set(_initialstate);
    };
    return setData();
  }, [_initialstate]);

  const sendMessage = (e) => {
    e.preventDefault();
    console.log(typeof _initialstate);
    if (typeof _initialstate === 'undefined') {
      const uuid = uuidv4();

      const newState = {
        columns: {
          [uuid]: {
            id: uuid,
            title: e.target.value,
            taskIds: []
          }
        },
        columnOrder: [uuid]
      };
      // if (newState) db.collection('calendar').doc('one').set(newState);
      setInitialstate(newState);

      return;
    }

    if (
      !(
        Object.keys(_initialstate).length === 0 &&
        JSON.stringify(_initialstate) === JSON.stringify({})
      )
    ) {
      const uuid = uuidv4();

      const newState = {
        ..._initialstate,
        columns: {
          ..._initialstate.columns,
          [uuid]: {
            id: uuid,
            title: e.target.value,
            taskIds: []
          }
        },
        columnOrder: [..._initialstate.columnOrder, uuid]
      };
      // if (newState) db.collection('calendar').doc('one').set(newState);
      setInitialstate(newState);
    }

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

    const uuid = uuidv4();
    const newState = {
      ..._initialstate,
      tasks: {
        ..._initialstate.tasks,
        [uuid]: {
          id: uuid,
          content: Todo[Math.floor(Math.random() * 5)],
          name: curUser.displayName,
          timestamp: moment().format('LLL'),
          color: randomColor({ luminosity: 'light' })
        }
      },
      columns: {
        ..._initialstate.columns,
        [columnID]: {
          ..._initialstate.columns[columnID],
          taskIds: [..._initialstate.columns[columnID].taskIds, uuid]
        }
      }
    };
    // if (newState) db.collection('calendar').doc('one').set(newState);
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
      // if (newState) db.collection('calendar').doc('one').set(newState);
      setInitialstate(newState);
      return;
    }

    // Moving from one list to same list
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
      // if (newState) db.collection('calendar').doc('one').set(newState);
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
    // if (newState) db.collection('calendar').doc('one').set(newState);
    setInitialstate(newState);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <CalendarContainer>
        <Droppable droppableId="all-columns" direction="horizontal" type="column">
          {(provided) => (
            <Container {...provided.droppableProps} ref={provided.innerRef}>
              {_initialstate?.columnOrder?.map((columnId, index) => {
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
    </DragDropContext>
  );
}

export default BND;

const Container = styled.div`
  display: flex;
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
    color: #aaa9a7;
    :hover {
      background-color: #efefef;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;
