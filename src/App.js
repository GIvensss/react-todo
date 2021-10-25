import React, {Component} from "react";
import render from 'react-dom';
import './index.css';

import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import Cat from "./components/Cat";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: [
                {id: 0, completed: false, title: 'Купить хлеб'},
                {id: 1, completed: true, title: 'Продать хлеб'},
                {id: 2, completed: false, title: 'Помыть Хлеб'},
                {id: 3, completed: false, title: 'Белх'},
                {id: 4, completed: false, title: 'Хлеб'},
                {id: 5, completed: false, title: 'Хлеб Хлеб'},
            ]
        }
    }
    render() {
        return <div className={'container'}>
                <h1>Православный список дел</h1>
                <TodoForm  addTodo={this.addTodo} />
                <TodoList
                    todos={this.state.todos}
                    onToggle={this.toggleTodo.bind()}
                    deleteTodo={this.deleteTodo.bind()}
                />
            <Cat />
        </div>
    }
    toggleTodo = (id) => {
        this.setState(prevState => {
            let todo = prevState.todos.find(item => item.id === id);
            todo.completed = !todo.completed;
            return todo;
        });
    }
    addTodo = (e) => {
        e.preventDefault();
        this.setState(prevState => {

            const newTodo = {
                id: prevState.todos[prevState.todos.length - 1].id + 1,
                completed: false,
                title: e.target.title.value
            };
            e.target.title.value = '';
            return prevState.todos.push(newTodo);
        });
    }
    deleteTodo = (id) => {
        this.setState({
            todos: this.state.todos.filter(item => item.id !== id)
        });
    }
}
