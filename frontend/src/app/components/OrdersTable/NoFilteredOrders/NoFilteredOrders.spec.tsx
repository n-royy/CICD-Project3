import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import { NoFilteredOrders } from '.';
import * as React from 'react';
import { Button } from 'app/components/Button';

const mockHandleResetOrders = jest.fn();
Enzyme.configure({adapter: new Adapter()});
describe('<NoFilteredOrders>', () => {
  let wrapper: Enzyme.ShallowWrapper;
  beforeEach(() => {
    wrapper = Enzyme.shallow(
      <NoFilteredOrders
        searchText=''
        handleResetOrders={mockHandleResetOrders}
      />,
    );
  });

  describe('when reset button is clicked', () => {
    it('should called handleResetOrders with empty string', () => {
      wrapper.find(Button).simulate('click');
      expect(mockHandleResetOrders).toBeCalledWith('');
    });
  });
});
