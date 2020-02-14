import { IChatState } from './state';
import moment from 'moment';

export interface IChatGetters {
  getParticipantById(state: IChatState): (id: any) => any;
  messages(state: IChatState): any[];
  myself(state: IChatState): any;
}

export const ChatGetters: IChatGetters = {
  getParticipantById: (state) => (id: any) => {
    let currParticipant;
    state.participants.forEach((participant) => {
      if (participant.id === id) {
        currParticipant = participant;
      }
    });

    return currParticipant;
  },
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
