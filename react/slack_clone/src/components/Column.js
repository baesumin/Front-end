import React from 'react';
import Task from './Task';
import { Droppable } from 'react-beautiful-dnd';

const divStyle = {
  margin: '10px',
  height: '350px',
  border: '1px solid black'
};

export default class Column extends React.Component {
  render() {
    return (
      <div style={divStyle}>
        <h3>{this.props.column.title}</h3>
        <Droppable droppableId={this.props.column.id}>
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              {this.props.tasks.map((task, index) => (
                <Task key={task.id} task={task} index={index} />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </div>
    );
  }
}
