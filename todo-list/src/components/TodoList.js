import React from 'react';

const TodoList = (props) => {
    return (
        <div>
            {props.list.map(item => {
                return (
                    <div key={item.id}>
                        <h1>{item.item}</h1>
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList;