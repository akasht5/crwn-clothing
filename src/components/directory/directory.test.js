import React from 'react'
import { shallow } from 'enzyme'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import Directory from './directory.component'

describe('<Directory />',() => {
    const mockSections = [];

    let wrapper = shallow(
    <Provider store={store}>
        <Directory mockSections={mockSections} />
    </Provider>
    );

    it('Check for snapshot testing',() => {
        expect(wrapper).toMatchSnapshot();
    })
})