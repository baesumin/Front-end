import React from 'react';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';

function Task({ task, index, column, TaskClick }) {
  return (
    <Draggable draggableId={task?.id} index={index}>
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
          <TaskContent>{task?.content}</TaskContent>

          <TaskInfo>{task?.timestamp}</TaskInfo>
          <TaskName color={task?.color}>{task?.name}</TaskName>
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
const TaskContent = styled.div`
  display: inline-block;
`;
const TaskInfo = styled.div`
  margin-top: 15px;
  font-size: 12px;
`;
const TaskName = styled.div`
  display: inline-block;
  font-size: 12px;
  background-color: ${(props) => props.color};
  padding-left: 5px;
  padding-right: 5px;
  border-radius: 3px;
`;
