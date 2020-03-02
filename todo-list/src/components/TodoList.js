import React from 'react';

const TodoList = (props) => {
    console.log(props.list);
    return (
        <div>
            {props.list.map(item => {
                console.log(item.id)
                return (
                    <div className="item" onClick={() => props.toggleCompleted(item.id)} key={item.id}>
                        {!item.completed ? (
                            <h2 className="not-completed">{item.item}</h2>
                        ) : (
                            <h2 className="completed">{item.item}</h2>
                        )}
                    </div>
                )
            })}
        </div>
    )
}

export default TodoList;