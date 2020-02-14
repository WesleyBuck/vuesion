import { IChatState } from './state';
import moment from 'moment';

export interface IChatMutations {
  newMessage(state: IChatState, message: any): void;

  setParticipants(state: IChatState, participants: any[]): void;

  setMyself(state: IChatState, myself: any): void;

  setMessage(state: IChatState, messages: any[]): void;

  setChatTitle(state: IChatState, title: string): void;

  setPlaceholder(state: IChatState, placeholder: string): void;
}

export const ChatMutations: IChatMutations = {
  newMessage: (state, message) => {
    message.timestamp = message.timestamp.toISOString();
    message.myself = message.participantId === state.myself.id;
    state.messages = [...state.messages, message];
  },
  setParticipants: (state, participants) => {
    state.participants = participants;
  },
  setMyself: (state, myself) => {
    state.myself = myself;
  },
  setMessage: (state, messages) => {
    messages.map((message) => {
      message.timestamp = moment(message.timestamp).toISOString();
      message.myself = message.participantId === state.myself.id;
    });
    state.messages = messages;
  },
  setChatTitle: (state, title) => {
    state.chatTitle = title;
  },
  setPlaceholder: (state, placeholder) => {
    state.placeholder = placeholder;
  },
};
