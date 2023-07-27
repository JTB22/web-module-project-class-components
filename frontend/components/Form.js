import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: 'PLACEHOLDER'
    }
  }

  handleChange = (e) => {
    this.setState({
      title: e.target.value
    })
  }

  pushTodo = (e) => {
    e.preventDefault();
    if (this.state.title === '' || this.state.title === 'PLACEHOLDER') {
      return;
    }
    this.props.addTodo(e, this.state.title);
    this.setState({
      title: ''
    })
  }

  render() {
    return (
      <div>
        <form>
          <input type="text" placeholder={this.state.title} onChange={this.handleChange}/>
          <button onClick={this.pushTodo}>Add Todo</button>
        </form>
      </div>
    )
  }
}
