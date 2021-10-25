import React, {Component} from "react";

export default class TodoForm extends Component {
    render() {
        return <form onSubmit={this.props.addTodo}>
            <input type="text" name="title" />
            <input type="submit" value={'Submit'} />
        </form>
    }
}