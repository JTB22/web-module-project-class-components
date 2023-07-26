import React from 'react'

import TodoList from './TodoList'
import Form from './Form'

const toDo = [
  {
    title: 'Learn React',
    id: Date.now(),
    done: false,
  },

];

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      toDo
    };
  }

  addTodo = (e, title) => {
    e.preventDefault();
    const newTodo = {
      title: title,
      id: Date.now(),
      done: false,
    };
    this.setState({
      toDo: [...this.state.toDo, newTodo]
    });
  };

  toggleDone = id => {
    this.setState({
      toDo: this.state.toDo.map(todo => {
        if (todo.id === id) {
          return {
            ...todo,
            done: !todo.done
          };
        }
        return todo;
      })
    });
  };



  render() {
    return (
      <div>
        <TodoList toDo={this.state.toDo} toggleDone={this.toggleDone} />
      </div>
    )
  }
}
