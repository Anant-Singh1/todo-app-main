import React, { useState } from 'react';
import { nanoid } from 'nanoid';

function TodoForm(props) {
    const [input, setinput] = useState('');

    const handleChange = e => {
        setinput(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        props.onSubmit({
            id: nanoid(),
            text: input
        });

        setinput('');

    };

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input type="text" placeholder='Add a Todo' value={input}
                className='todo-input' onChange={handleChange} />
            <button className="todo-button">Add Todo</button>
        </form>
    )
}

export default TodoForm;