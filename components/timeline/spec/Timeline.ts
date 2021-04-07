import { createElement as h } from 'react';
import { mount } from '@not-govuk/component-test-helpers';
import Timeline from '../src/Timeline';

describe('Timeline', () => {
  describe('when given valid props', () => {
    const component = mount(h(Timeline, {
      items: [
        {
          action: 'Response submitted',
          date: new Date('15 Mar 2021 16:27'),
          description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        },
        {
          action: 'Issue under investigation',
          by: 'Douglas Pollock',
          date: new Date('15 Mar 2021 10:04'),
          description: 'This is a description of the event. This field accepts unformatted text only.'
        },
        {
          action: 'Issue raised on GitHub',
          by: 'Karypun',
          date: new Date('25 Jan 2021 09:35'),
          description: 'This is a description of the event.'
        }
      ]
    }));

    it('renders', () => undefined);
  });

  // TODO - when given no props, it does not render
});
