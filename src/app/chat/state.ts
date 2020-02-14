export interface IChatState {
  messages: any[];
  myself: any;
  participants: any[];
  chatTitle: string;
  placeholder: string;
}

export const ChatDefaultState = (): IChatState => {
  return {
    messages: [],
    myself: {},
    participants: [],
    chatTitle: '',
    placeholder: '',
  };
};
