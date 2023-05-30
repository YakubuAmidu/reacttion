import { NEW_MESSAGE } from './types';
import * as uuid from 'uuid'

export const newMessage = text => ({
    type: NEW_MESSAGE,
    item: { id: uuid.v4(), text, timestamp: Date.now() }
})