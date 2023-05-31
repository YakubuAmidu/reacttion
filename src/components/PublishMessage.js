import React, { useState } from 'react';
import { newMessage } from '../state/actions';

function PublishMessage(){
    const [text, setText] = useState('');

    const updateText = event => {
        setText(event.target.value);
    }

    const publishMessage = () => {

    }

    return (
        <div>
            <h3>Got something to say!</h3>
            <input value={text} onChange={updateText}/>
            {' '}
            <button onClick={publishMessage}>Publish it!</button>
        </div>
    )
}

export default PublishMessage;