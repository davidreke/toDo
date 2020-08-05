import React , {Component} from 'react';
import Todos from "./Todos"
import AddTodo from "./AddTodo"


class App extends Component{
  state = {
    todos: [
      {id: 1, content: 'put away laundry'},
      {id: 2, content: 'run the roomba'}
    ]
  }

  deleteTodo = (id) => {
    // console.log(id)

    const newTodos = this.state.todos.filter( todo => {
      return todo.id !== id
    })

    this.setState({
      todos: newTodos
    })

  }

  addTodo = (todo) => {
      // console.log(todo)
      todo.id = Math.random()
      let todos = [...this.state.todos, todo];

      this.setState({
        todos: todos
      })
  }

  render () {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todos</h1>
        <Todos todos={this.state.todos } deleteTodo = {this.deleteTodo} />
        <AddTodo addTodo={this.addTodo}/>
      </div>
    )
  }
}

export default App;
