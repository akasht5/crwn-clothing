import React from 'react';
import { shallow } from 'enzyme';

import WithSpinner from './with-spinner.component';
import { SpinnerOverlay,SpinnerContainer } from './with-spinner.styles'

describe('WithSpinner HOC', () => {
  const TestComponent = () => <div className='test' />;
  const WrappedComponent = WithSpinner(TestComponent);

  describe('if loading is true', () => {
    it('should render Spinner component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={true} />);

      expect(wrapper.exists(SpinnerOverlay)).toBe(true);
    });
  });

  describe('if loading is false', () => {
    it('should not render component', () => {
      const wrapper = shallow(<WrappedComponent isLoading={false} />);

      expect(wrapper.exists(SpinnerOverlay)).toBe(false);
    });
  });
});