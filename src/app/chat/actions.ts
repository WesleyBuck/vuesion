import { ActionContext } from 'vuex';
import { IChatState } from './state';
import { IState } from '@/app/state';
import { HttpService } from '@shared/services/HttpService/HttpService';

export interface IChatActions {
    getParticipantById(context: ActionContext<IChatState, IState>, id: number): any;
}

export const ChatActions: IChatActions = {
    getParticipantById({ commit, state }: ActionContext<IChatState, IState>, id: number) {
        let currParticipant;
        state.participants.forEach((participant) => {
            if (participant.id === id) {
                currParticipant = participant;
            }
        });
        return currParticipant;
    },
};
