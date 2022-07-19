import React from 'react';
import './styles.css'
import { useRef } from "react";

const InputBox = (props) => {

    const { visibilityHandler } = props;
    const { header, cardHandler } = props.data;
    const action_item = useRef();

    const addNewTodo = () => {
        const item = transformObject(header)
        item.text && cardHandler(item);
        visibilityHandler()
    };

    const transformObject = () => {
        let text = action_item.current.value
        let status = header && header.id === 0 ? 'complete' : header.id === 1 ? 'pending' : 'todo'
        return { text, status }
    }

    return (
        <div style={{ 'backgroundColor': 'lightgray', 'padding': '1rem' }}>
            <div className="Input">
                <input type="text" id="input" className="Input-text" placeholder="Type something...." ref={action_item} />
            </div>
            <div className='btn-end'>
                <button type="button" onClick={addNewTodo}> Add task </button>
                <button type="button" onClick={visibilityHandler}> Undo </button>
            </div>
            
        </div>
    );
}

export default InputBox;
