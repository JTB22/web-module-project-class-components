import React from 'react'
import ToDo from './ToDo'

export default class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {
          this.props.todo.map(item => {  
            return (<ToDo todo={item} key={item.id} toggleCompleted={this.props.toggleCompleted} />)
          })
        }
      </ul>
    )
  }
}
