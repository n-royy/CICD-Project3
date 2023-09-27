import * as React from 'react';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { Empty } from '.';

Enzyme.configure({adapter: new Adapter()});
describe('<Empty />', () => {
  describe('When rendering the component', () => {
    it('Should render correctly', () => {
      const wrapper = Enzyme.shallow(<Empty title='No orders at the moment' />);
      expect(wrapper).toBeDefined();
    });
  });
});
