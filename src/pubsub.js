import PubNub from 'pubnub';
import pubnubConfig from './pubnub.config';

const pubnub = new PubNub(pubnubConfig);

export const MESSAGE_CHANNEL = 'MESSAGE_CHANNEL';

pubnub.subscribe({ channels: [MESSAGE_CHANNEL]});

pubnub.addListener({
    message: messageObj => {
        console.log('messageObj', messageObj);
    }
});

pubnub.publish({
    message: 'foo',
    channel: MESSAGE_CHANNEL
})