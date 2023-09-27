import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { LoadingMessage } from 'app/components/LoadingMessage';

Enzyme.configure({adapter: new Adapter()});
describe('<LoadingMessage>', () => {
  describe('Props', () => {
    describe('message', () => {
      it('Should render the props message', () => {
        const message = 'Hello!';
        const wrapper = Enzyme.shallow(<LoadingMessage message={message} />);
        expect(wrapper.contains(<span>{message}</span>)).toBeTruthy(); //remove the question mark to make the test pass
      });
    });
  });
});
