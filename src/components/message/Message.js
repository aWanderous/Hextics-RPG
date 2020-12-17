import React from 'react';
import './Message.css';

function Message ({message}) {
    return (
        <div className='textbox'>
            <span id='message'>{message}</span>
        </div>
    )
}

export default Message;