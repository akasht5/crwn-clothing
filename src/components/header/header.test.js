import React from 'react'
import { shallow, mount } from 'enzyme'
import Header from './header.component'
import { CartDropdown } from '../cart-dropdown/cart-dropdown.component'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

describe('<Header /> component',() => {
    let wrapper;

    beforeEach(() => {
       const mockProps = {
           hidden: false
       }

       wrapper = mount(
        <BrowserRouter>
            <Provider store={store}>
            <Header {...mockProps} />
        </Provider>
        </BrowserRouter>
       ); 
    })

    it('Snapshot testing header',() => {
        expect(wrapper).toMatchSnapshot();
    })

    it('Checks for cartDropdown based on hidden state',() => {
        const mockProps = {
            hidden : false
        }
        wrapper = shallow(
            <BrowserRouter>
                <Provider store={store}>
                    <Header {...mockProps} />
            </Provider>
            </BrowserRouter>
           ); 

        const container = wrapper.find(`[data-test='cartdropdown']`);
        console.log(container);
        expect(container.length).toBe(1);
;    })

});