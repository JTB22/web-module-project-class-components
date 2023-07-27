import React from 'react'

import TodoList from './TodoList'
import Form from './Form'

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo: [
        {
          name: 'Organize Garage',
          id: 1528817077286, // could look different, you could use a timestamp to generate it
          completed: false
        },
        {
          name: 'Bake Cookies',
          id: 1528817084358,
          completed: false
        }
      ]
    };
  }

  addTodo = (e, title) => {
    e.preventDefault();
    const newTodo = {
      name: title,
      id: Date.now(),
      completed: false,
    };
    this.setState({
      toDo: [...this.state.toDo, newTodo]
    });
  };

  toggleCompleted = id => {
    this.setState({
      toDo: this.state.toDo.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed
          };
        }
        return todo;
      })
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      toDo: this.state.toDo.filter(todo => !todo.completed)
    });
  };



  render() {
    return (
      <div>
        <TodoList todo={this.state.toDo} toggleCompleted={this.toggleCompleted} />
        <Form addTodo={this.addTodo} />
        <button onClick={this.clearCompleted}>Clear Completed</button>
      </div>
    )
  }
}
