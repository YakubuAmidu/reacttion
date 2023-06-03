import { NEW_MESSAGE, SET_USERNAME } from './types';
import * as uuid from 'uuid'

export const newMessage = ({ text, username }) => ({
    type: NEW_MESSAGE,
    item: { id: uuid.v4(), text, username, timestamp: Date.now() }
});

export const setUsername = username => ({
    type: SET_USERNAME, username
});

export const createReaction = ({ type, emoji, username, messageId }) => ({
    type,
    item: { id: uuid.v4(), timestamp: Date.now(), emoji, username, messageId }
});