import React from 'react';
import { shallow } from 'enzyme';
import SignUp from '../Pages/Signup/signUp';

describe('Test case for testing registration',() =>{
    let wrapper;
    test('username check',()=>
    {
    wrapper = shallow(<SignUp/>);
})
})