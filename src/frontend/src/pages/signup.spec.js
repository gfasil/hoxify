import React, { Component } from 'react';
import {render} from '@testing-library/react';
 import '@testing-library/jest-dom/extend-expect';
import Signup from './signup'

describe('SignUp',()=>{

    describe('Layout',()=>{

        it('has header of sign up',()=>{
            const {container}=render(<Signup/>);
            const header= container.querySelector('h1');
            expect(header).toHaveTextContent('sign up')
             
       
        })
    })
})
