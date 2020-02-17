import { IChatState } from './state';
import moment from 'moment';

export interface IChatGetters {
  messages(state: IChatState): any[];
  myself(state: IChatState): any;
}

export const ChatGetters: IChatGetters = {
  messages: (state) => {
    const messages: any[] = [];
    state.messages.forEach((message) => {
      const newMessage = { ...message };
      newMessage.timestamp = moment(newMessage.timestamp);
      messages.push(newMessage);
    });
    return messages;
  },
  myself: (state) => {
    return state.myself;
  },
};
