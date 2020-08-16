import React, { Component } from 'react';
import {render, cleanup} from '@testing-library/react';
 import '@testing-library/jest-dom/extend-expect';
import Signup from './signup'

beforeEach(cleanup);
describe('SignUp',()=>{

    describe('Layout',()=>{

        it('has header of sign up',()=>{
            const {container}=render(<Signup/>);
            const header= container.querySelector('h1');
            expect(header).toHaveTextContent('sign up')
             
       
        })
        it('has input field for display name',()=>{
            const {queryByPlaceholderText}=render(<Signup/>)
            const displayNameInput=queryByPlaceholderText('your display name')
            expect(displayNameInput).toBeInTheDocument();

        })
        it('has input field for user name',()=>{
            const {queryByPlaceholderText}=render(<Signup/>)
            const displayNameInput=queryByPlaceholderText('your user name')
            expect(displayNameInput).toBeInTheDocument();

        })
        it('has input field for password',()=>{
            const {queryByPlaceholderText}=render(<Signup/>)
            const displayNameInput=queryByPlaceholderText('your password')
            expect(displayNameInput).toBeInTheDocument();

        })
        it('has input field for password',()=>{
            const {queryByPlaceholderText}=render(<Signup/>)
            const displayNameInput=queryByPlaceholderText('your password')
            expect(displayNameInput.type).toBe('password');

        })
        it('has input field for repeat password',()=>{
            const {queryByPlaceholderText}=render(<Signup/>)
            const displayNameInput=queryByPlaceholderText('repeat your password')
            expect(displayNameInput).toBeInTheDocument();

        })
        it('has input field for password',()=>{
            const {queryByPlaceholderText}=render(<Signup/>)
            const displayNameInput=queryByPlaceholderText('repeat your password')
            expect(displayNameInput.type).toBe('password');

        })
        it('has header of sign up',()=>{
            const {container}=render(<Signup/>);
            const header= container.querySelector('button');
            expect(header).toHaveTextContent('submit')
             
       
        })
    })
})
