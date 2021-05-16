import { Divider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useCollection, useDocument } from 'react-firebase-hooks/firestore';
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
  const [_initialstate, setInitialstate] = useState(initialData);

  const onDragEnd = (result) => {
    console.log(result);
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

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
      console.log(newState);
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
      {/* {_initialstate.columnOrder.map((columnId) => {
        const column = _initialstate.columns[columnId];
        const tasks = column.taskIds.map((taskId) => _initialstate.tasks[taskId]);
        console.log(tasks);
        return <Column key={column.id} column={column} tasks={tasks} />;
      })} */}
      {FColumnOrder?.data().columnOrder.map((columnId) => {
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
      })}
    </DragDropContext>
  );
}

export default BND;
