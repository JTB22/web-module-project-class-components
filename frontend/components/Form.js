import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  pushTodo = (e) => {
    e.preventDefault();
    this.props.addTodo(e, this.state.title);
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder="Add Todo" onChange={this.handleChange}/>
          <button onClick={this.pushTodo}>Add Todo</button>
        </form>
      </div>
    )
  }
}
