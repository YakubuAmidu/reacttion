import React from 'react';
import { REACTION_OBJECTS } from '../state/types';
import { useAppContext } from './hooks';
import { createReaction } from '../state/actions';

function CreateReaction(){
    const { state: { username }, pubsub: { publish }} = useAppContext();

    const publishReaction = ({ type, emoji, pubsub: { publish }}) => {
        publish(createReaction({ type, emoji, username }));
    }

    return (
        <div className='CreateReaction'>
            {
               REACTION_OBJECTS.map(REACTION_OBJECT => {
                const { type, emoji } = REACTION_OBJECT;

                return (
                <span key={type}>{emoji}</span>
                );
               })
            }
        </div>
    )
}

export default CreateReaction;