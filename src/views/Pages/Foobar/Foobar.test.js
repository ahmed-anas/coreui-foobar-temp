import React from 'react';
import { shallow } from "enzyme";
import { isIterable } from 'core-js';
import Foobar from './Foobar';

describe('Foobar', ()=>{
    it('should render properly', ()=>{
        const wrapper = shallow(<Foobar />)
    });

    it('it should match snap', ()=>{
        const wrapper = shallow(<Foobar />)
        expect(wrapper.getElements()).toMatchSnapshot();
    })

    it('should properly handle input change', ()=>{
        const component = shallow(<Foobar />)
        const form = component.find("input[name='main']");

        form.props().onChange({target: {
            name: 'random doesn\'t matter',
            value: 'I am the man'
        }});

        expect(component.state('input')).toEqual('I am the man')
        
        

    })
})