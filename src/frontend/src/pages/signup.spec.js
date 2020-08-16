import React, { Component } from 'react';
import {render} from '@testing-library/react';
 import '@testing-library/jest-dom/extend-expect';
import {signup} from './signup'

describe('SignUp',()=>{

    describe('Layout',()=>{

        it('has header of sign up',()=>{
            const {container}=render(<signup/>);
            const header= container.querySelector('p');
            expect(header).toHaveAttribute('Sign Up')
             
       
        })
    })
})
