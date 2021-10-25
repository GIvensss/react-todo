import React, {Component} from "react";
import TodoItem from "./TodoItem";

const styles = {
    ul: {
        listStyle: 'none'
    }
}

export default class TodoList extends Component{
    render() {
        return <ul style={styles.ul}>
            {this.props.todos.map((item)=>
                <TodoItem
                    key={item.id}
                    todo={item}
                    handleChange={this.props.onToggle}
                    removeTodo={this.props.deleteTodo}
                />
            )}
        </ul>
    }
}