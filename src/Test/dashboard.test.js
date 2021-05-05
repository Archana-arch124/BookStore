import React from 'react';
import { shallow } from 'enzyme';
import Dashboard from '../Pages/Dashboard/dashboard';

describe('Test case for testing Dashboard',() =>{
    let wrapper;
    test('username check',()=>
    {
    wrapper = shallow(<Dashboard/>);
})
})