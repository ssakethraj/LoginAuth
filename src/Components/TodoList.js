import React from 'react';

class TodoList extends React.Component {
    render() {
        return(
            <ul>
                {
                    this.props.todo.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })
                }
            </ul>
        )
    }
}

export default TodoList;