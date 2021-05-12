import React from 'react';
import { Draggable } from 'react-beautiful-dnd';

const divStyle = {
  margin: '10px',
  border: '1px solid black'
};

export default class Task extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.task.id} index={this.props.index}>
        {(provided, snapshot) => (
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            style={divStyle}
          >
            {this.props.task.content}
          </div>
        )}
      </Draggable>
    );
  }
}
