import React from 'react'

export default class Todo extends React.Component {
  render() {
    return (
      <div className={`todo${this.props.todo.done ? ' done' : ''}`} onClick={() => this.props.toggleDone(this.props.todo.id)}>
        <p>{this.props.todo.title}</p>
      </div>
    )
  }
}
