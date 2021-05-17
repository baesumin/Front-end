import React from 'react';
import Task from './Task';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';

function Column({ column, tasks, index, AddTask, TaskClick }) {
  return (
    <Draggable draggableId={column.id} index={index}>
      {(provided) => (
        <Container {...provided.draggableProps} ref={provided.innerRef}>
          <Title>
            <TitleText {...provided.dragHandleProps}>{column.title}</TitleText>
            <TitleAddButton onClick={() => AddTask(column)}>
              <AddIcon />
            </TitleAddButton>
          </Title>

          <Droppable droppableId={column.id} type="task">
            {(provided, snapshot) => (
              <TaskList
                ref={provided.innerRef}
                {...provided.droppableProps}
                isDraggingOver={snapshot.isDraggingOver}
              >
                {tasks.map((task, index) => (
                  <Task
                    key={task.id}
                    task={task}
                    index={index}
                    column={column}
                    TaskClick={TaskClick}
                  />
                ))}
                {provided.placeholder}
              </TaskList>
            )}
          </Droppable>
        </Container>
      )}
    </Draggable>
  );
}

export default Column;

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  background-color: white;
  border-radius: 2px;
  width: 220px;

  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
`;
const TitleAddButton = styled.div`
  margin-left: auto;
  margin-right: 10px;

  > .MuiSvgIcon-root {
    :hover {
      cursor: pointer;
    }
  }
`;
const TitleText = styled.h3`
  padding: 8px;
  overflow: hidden;
  max-width: 170px;
`;
const TaskList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${(props) => (props.isDraggingOver ? 'skyblue' : 'inherit')};
  flex-grow: 1;
  min-height: 100px;
`;
