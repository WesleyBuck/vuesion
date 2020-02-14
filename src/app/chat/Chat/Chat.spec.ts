import { createLocalVue, mount } from '@vue/test-utils';
import ChatComponent from './Chat.vue';

const localVue = createLocalVue();

// Here are some Jasmine 2.0 tests, though you can
// use any test runner / assertion library combo you prefer
describe('Chat.vue', () => {
  test('renders component with alternative background', () => {
    const wrapper = mount<any>(ChatComponent, {
      localVue,
      propsData: {
        alternative: true,
        image: 'foo',
      },
    });
    const actual = wrapper.findAll('.alternative');
    const expected = 1;

    expect(actual).toHaveLength(expected);
  });

  test('renders component in reversed order', () => {
    const wrapper = mount<any>(ChatComponent, {
      localVue,
      propsData: {
        flip: true,
        image: 'foo',
      },
    });
    const actual = wrapper.findAll('.flip');
    const expected = 1;

    expect(actual).toHaveLength(expected);
  });
});
