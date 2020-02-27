import React from 'react';

const TodoList = (props) => {
    return (
        <div>
            {  props.list.map(item => {
                return (
                    <h1>{item.item}</h1>
                )
            })}
        </div>
    )
}

export default TodoList;