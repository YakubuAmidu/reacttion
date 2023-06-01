import React from 'react';

function MessageBoard({ messages }){
  return (
    <div>
        {
            messages.map(messageItem => {
                const { id, text, timestamp } = messageItem;

                return (
                    <div key={id}>
                        <h4>{new Date(timestamp).toLocalString()}</h4>
                        <hr/>
                        {
                            text
                        }
                    </div>
                )
            })
        }
    </div>
  )
}

export default MessageBoard;