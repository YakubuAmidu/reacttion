import React, { useContext } from 'react';

// Context api
import Context from '../context';

function MessageBoard(){
    const { state: { messages }} = useContext(Context);

  return (
    <div>
        {
            messages.map(messageItem => {
                const { id, text, timestamp } = messageItem;

                return (
                    <div key={id}>
                        <h4>{new Date(timestamp).toLocaleString()}</h4>
                        <hr/>
                     <p>
                        {
                            text
                        }
                     </p>
                     <hr />
                    </div>
                )
            })
        }
    </div>
  )
}

export default MessageBoard;