import VueGrid from '@components/VueGrid/VueGrid.vue';
import VueGridRow from '@components/VueGridRow/VueGridRow.vue';
import VueGridItem from '@components/VueGridItem/VueGridItem.vue';
import VueHeadline from '@components/VueHeadline/VueHeadline.vue';
import VueBreadcrumb from '@components/VueBreadcrumb/VueBreadcrumb.vue';
import 'reflect-metadata';
import { Prop, Component, Vue } from 'vue-property-decorator';
import { registerModule } from '@/app/store';
import { ChatModule } from '../module';
import { mapGetters } from 'vuex';
import { IPreLoad } from '@/server/isomorphic';

@Component({
  components: { VueBreadcrumb, VueHeadline, VueGridItem, VueGridRow, VueGrid },
})
export default class Chat extends Vue {
  @Prop({
    type: Object,
    required: true,
    default: {
      header: {
        bg: '#d30303',
        text: '#fff',
      },
      message: {
        myself: {
          bg: '#fff',
          text: '#bdb8b8',
        },
        others: {
          bg: '#fb4141',
          text: '#fff',
        },
        messagesDisplay: {
          bg: '#f7f3f3',
        },
      },
      submitIcon: '#b91010',
    },
  })
  public readonly colors: any | undefined;
  @Prop({ type: Object, default: { topLeft: '10px', topRight: '10px', bottomLeft: '10px', bottomRight: '10px' } })
  public readonly borderStyle!: any;
  @Prop({ type: Boolean, required: true, default: false }) public readonly hideCloseButton!: boolean;
  @Prop({ type: String, required: false, default: '15px' }) public readonly closeButtonIconSize!: string;
  @Prop({ type: Boolean, required: false, default: true }) public readonly asyncMode!: boolean;
  @Prop({ type: Object, required: true, default: { messageSent: true, messageReceived: false } })
  public readonly scrollBottom!: any;

  // data
  public visible = true;
  public participants = [
    {
      name: 'Arnaldo',
      id: 1,
    },
    {
      name: 'Adam',
      id: 2,
    },
  ];
  public myself = { name: 'John Doe', id: 3 };
  public messages = [
    {
      content: "Really?! I don't care! Haha",
      participantId: 1,
      timestamp: { year: 2012, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 },
      uploaded: true,
      viewed: true,
    },
    {
      content: "Really?! I don't care! Haha",
      participantId: 1,
      timestamp: { year: 2012, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 },
      uploaded: true,
      viewed: true,
    },
    {
      content: "Really?! I don't care! Haha",
      participantId: 1,
      timestamp: { year: 2012, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 },
      uploaded: true,
      viewed: true,
    },
    {
      content: "Really?! I don't care! Haha",
      participantId: 1,
      timestamp: { year: 2012, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 },
      uploaded: true,
      viewed: true,
    },
    {
      content: "Really?! I don't care! Haha",
      participantId: 1,
      timestamp: { year: 2012, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 },
      uploaded: true,
      viewed: true,
    },
    {
      content: "Really?! I don't care! Haha",
      participantId: 1,
      timestamp: { year: 2012, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 },
      uploaded: true,
      viewed: true,
    },
  ];
  public chatTitle = 'My chat title';
  public placeholder = 'send your message';
  public submitIconSize = '20px';
  public toLoad = [
    {
      content: 'Hey, John Doe! How are you today?',
      participantId: 2,
      timestamp: { year: 2011, month: 3, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123 },
      uploaded: true,
      viewed: true,
    },
    {
      content: "Hey, Adam! I'm feeling really fine this evening.",
      participantId: 3,
      timestamp: { year: 2010, month: 0, day: 5, hour: 19, minute: 10, second: 3, millisecond: 123 },
      uploaded: true,
      viewed: true,
    },
  ];

  public beforeCreate() {
    registerModule('chat', ChatModule);
  }

  public prefetch(options: IPreLoad) {
    registerModule('chat', ChatModule);
  }

  public filteredSelectedItems() {
    return;
  }
}
