import React from 'react';
import { shallow } from 'enzyme';
import Login from '../Pages/Login/login';


describe('Test case for testing login',() =>{
let wrapper;
test('username check',()=>
{
wrapper = shallow(<Login/>);
/* wrapper.find('input[type="text"]').simulate('change', {target: {name: 'username', value: 'archanarajgowda'}});
expect(wrapper.state('username')).toEqual('archanarajgowda'); */
})

it('password check',()=>{
wrapper = shallow(<Login/>);
/* wrapper.find('input[type="password"]').simulate('change', {target: {name: 'password', value: 'archanarajgowda123'}});
expect(wrapper.state('password')).toEqual('archanarajgowda123'); */
})
})

