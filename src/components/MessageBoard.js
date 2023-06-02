import React from 'react';

// Context api
import { useAppContext } from './hooks';

import CreactReaction from './CreateReaction';

function MessageBoard(){
    const { state: { messages }} = useAppContext();

  return (
    <div>
        {
            messages.map(messageItem => {
                const { id, text, username, timestamp } = messageItem;

                return (
                    <div key={id}>
                        <h4>{new Date(timestamp).toLocaleString()}</h4>
                        <hr/>
                     <p>{text}</p>
                     <h4>- {username}</h4>
                     <CreactReaction />
                     <hr />
                    </div>
                )
            })
        }
    </div>
  )
}

export default MessageBoard;