import React, {Component} from "react";

const styles = {
    span: {
        display: 'flex',
        margin: '10px 30px'
    },
    li: {
        display: 'inline'
    }
}


export default class TodoItem extends Component {

    render() {
        return <li className={`col-8`} style={styles.li}>
            <span className={`${this.props.todo.completed ? 'done' : ''}`} style={styles.span}>
                <input type='checkbox'
                       checked={this.props.todo.completed}
                       onChange={this.handleChange}
                />
                {this.props.todo.title}
            </span>
            <button className={'float-end'} onClick={this.delete}> &#8224; </button>
        </li>
    }
    handleChange = () => {
        this.props.handleChange(this.props.todo.id);
    }
    delete = () => {
        this.props.removeTodo(this.props.todo.id);
    }
}