import { RouteConfig } from 'vue-router/types/router';

export const ChatRoutes: RouteConfig[] = [
  {
    path: '/Chat',
    name: 'chat',
    component: () => import(/* webpackChunkName: "chat" */ './Chat/Chat.vue').then((m: any) => m.default),
  },
];
