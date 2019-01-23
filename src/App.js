import React, { Component } from 'react';
import Todos from './Todos';
import AddTodo from './AddTodo';

class App extends Component {
    state = {
        todos: [
            {id: 1, content: 'Make the beds'},
            {id: 2, content: 'Feed the dogs'}
        ]
    }

    deleteTodo = (id) => {
        const todos = this.state.todos.filter(todo => {
            return todo.id !== id
        });
        this.setState({
            todos
        })
    }

    addTodo = (todo) => {
        todo.id = Math.random();
        let todos = [...this.state.todos, todo]
        this.setState({
            todos
        })
    }

    

  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Harry's Todo's</h1>
        <h6 id="date" className="center blue-text text-darken-3">For: {new Date().toDateString()}</h6>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo}/>
        <AddTodo addTodo={this.addTodo}/>
      </div>
    );
  }
}

export default App;
