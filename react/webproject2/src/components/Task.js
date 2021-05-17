import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

function Task({ task, index, column, TaskClick }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided, snapshot) => (
        <Container
          onClick={() => {
            TaskClick(task, column);
          }}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          {task.content}
        </Container>
      )}
    </Draggable>
  );
}

export default Task;

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  /* background-color: ${(props) => (props.isDragging ? 'lightgreen' : 'white')}; */
  background-color: white;

  :hover {
    cursor: pointer;
    background-color: #f4f4f3;
  }
`;
