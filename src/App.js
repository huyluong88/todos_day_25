import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import base from './config'

class App extends Component {

  constructor(){
    super()
    this.state = {
      newTodo: []
    }
  }
  componentDidMount(){
    base.syncState('newTodo',{
      context: this,
      state: 'newTodo',
      asArray: true
    })
  }

addToDo (e) {
    if(this.input.value == "") {
         alert("Please add your to-do first")
    }
    if(e.keyCode === 13){
    let text = this.input.value.trim()
    let newToDo = { text: text }
    let newToDoArray = this.state.newTodo.concat(newToDo)
    this.setState({
      newTodo: newToDoArray
    })
    this.input.value = ''
    console.log(newToDoArray)
  }
  }
  destroy (index){
    var newList = this.state.newTodo;
     newList.splice(index, 1);
     this.setState({
       newTodo: newList
     })
   }

  render() {
    return (
      <section className="todoapp">

      <header className="header">
      <h1>todos</h1>
      <input
      onKeyUp={this.addToDo.bind(this)}
      className="new-todo"
      placeholder="What needs to be done?"
      ref={element => this.input = element} autoFocus/>
      </header>

      <section className="main">

      <input className="toggle-all" type="checkbox"/>

      <label htmlFor="toggle-all">Mark all as complete</label>

      <ul className="todo-list">
      {this.state.newTodo.map((msg, index) => {
        return <li key={index}>
        <div className="view">
        <input className="toggle" type='checkbox'/>
        <label>{msg.text}</label>
        <button onClick={this.destroy.bind(this, msg)} className="destroy"></button>
        </div>
        <input className="edit" value="Create a TodoMVC template"/>
        </li>
        })
      }
      </ul>
      </section>

      <footer className="footer">
      <span className="todo-count"><strong>0</strong> item left</span>
      <ul className="filters">
        <li>
          <a className="selected" href="#/">All</a>
        </li>
        <li>
          <a href="#/active">Active</a>
        </li>
        <li>
          <a href="#/completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
      </footer>
      </section>
    );
  }
}

export default App;
