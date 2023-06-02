import React, { useReducer, useEffect } from 'react';

// Reducers
import reducer, { initialState  } from '../state/reducer';

// Context api
import Context from '../context';

// Imported components
import PublishMessage from './PublishMessage';
import MessageBoard from './MessageBoard';
import PubSub from '../pubsub';
import '../pubsub';

const pubsub = new PubSub();

setTimeout(() => {
  pubsub.publish({ type: 'foo', value: 'bar' });
}, 1000);

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    pubsub.addListener({
      message: messageObject => {
         const { channel, message } = messageObject;
    
         console.log('Received message', message, 'channel', channel);

         dispatch(message);
      }
    })
  }, []);

  console.log('state', state);

  return (
    <Context.Provider value={{ state, dispatch, pubsub }}>
      <h2>Reaction</h2>
      <hr />
      <PublishMessage/>
      <hr />
      <MessageBoard/>
    </Context.Provider>
  );
}

export default App;
