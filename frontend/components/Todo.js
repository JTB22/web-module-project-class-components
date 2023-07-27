import React from 'react'

export default class Todo extends React.Component {

  toggle = () => {
    this.props.toggleCompleted(this.props.todo.id)
  }

  render() {
    return (
      <li onClick={this.toggle} key={this.props.todo.id} >{this.props.todo.name} {this.props.todo.completed ? <span> - X</span> : <span></span>}</li>
    )
  }
}
