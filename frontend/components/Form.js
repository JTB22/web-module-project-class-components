import React from 'react'

export default class Form extends React.Component {
  render() {
    return (
      <div>
        <form onSubmit={this.props.addTodo}>
          <input type="text" placeholder="Add Todo" />
          <button>Add Todo</button>
        </form>
      </div>
    )
  }
}
