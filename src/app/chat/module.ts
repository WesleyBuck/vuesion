import { Module } from 'vuex';
import { ChatDefaultState, IChatState } from './state';
import { IState } from '@/app/state';
import { ChatActions } from './actions';
import { ChatGetters } from './getters';
import { ChatMutations } from './mutations';
import moment from 'moment';

export const ChatModule: Module<IChatState, IState> = {
  namespaced: true,
  actions: {
    ...ChatActions,
  },
  getters: {
    ...ChatGetters,
  },
  state: {
    ...ChatDefaultState(),
  },
  mutations: {
    ...ChatMutations,
  },
};
