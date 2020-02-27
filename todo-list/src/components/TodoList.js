import React from 'react';

const TodoList = (props) => {
    console.log(props.list);
    return (
        <div>
            {props.list.map(item => {
                console.log(item.id)
                return (
                    <div onClick={() => props.toggleCompleted(item.id)} key={item.id}>
                        {!item.completed ? (
                            <h1 className="not-completed">{item.item}</h1>
                        ) : (
                            <h1 className="completed">{item.item}</h1>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList;