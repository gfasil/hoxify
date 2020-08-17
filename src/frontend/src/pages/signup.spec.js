import React, { Component } from 'react';
import {render, cleanup,fireEvent} from '@testing-library/react';
 import '@testing-library/jest-dom/extend-expect';
import Signup from './signup'
import { findAllInRenderedTree } from 'react-dom/test-utils';

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

    describe('Interactions',()=>{

        const changeEvent=(content)=>{

           return { target:{
                value:content
            }}
        }

        let button,displayNameInput,userInput,passwordInput,repeatPasswordInput;
        const mockAsyncDelayed=()=>{
            return jest.fn().mockImplementation(()=>{

                return new Promise((resolve,reject)=>{
                    setTimeout(()=>{
                     resolve({})   
                    },300)
                })
            })
        }
        const setupforSubmit=(props)=>{
            
            const rendered=render(<Signup  {...props}/>);
            const {container,queryByPlaceholderText}=rendered;
              
                displayNameInput=queryByPlaceholderText('your display name')
                userInput=queryByPlaceholderText('your user name')
                passwordInput=queryByPlaceholderText('your password')
                repeatPasswordInput=queryByPlaceholderText('repeat your password')
                button=container.querySelector('button');
              
                fireEvent.change(displayNameInput,changeEvent('my-display-name'));
                fireEvent.change(userInput,changeEvent('my-user-name'));
                fireEvent.change(passwordInput,changeEvent('my-password'));
                fireEvent.change(repeatPasswordInput,changeEvent('my-repeated-password'));
                return rendered;
            
        }
        it('sets the display name value to state',()=>{
            const {queryByPlaceholderText}=render(<Signup/>)
            const displayNameInput=queryByPlaceholderText('your display name')
            
            fireEvent.change(displayNameInput,changeEvent('my-display-name'));
            expect(displayNameInput).toHaveValue('my-display-name');

        })

        it('sets the user name value to state',()=>{
            const {queryByPlaceholderText}=render(<Signup/>)
            const userInput=queryByPlaceholderText('your user name')
            
           
            fireEvent.change(userInput,changeEvent('my-user-name'));
            expect(userInput).toHaveValue('my-user-name');

        })
        it('sets the password name value to state',()=>{
            const {queryByPlaceholderText}=render(<Signup/>)
            const passwordInput=queryByPlaceholderText('your password')
            
           
            fireEvent.change(passwordInput,changeEvent('my-password'));
            expect(passwordInput).toHaveValue('my-password');

        })
        
        it('sets the rpeated password  value to state',()=>{
            const {queryByPlaceholderText}=render(<Signup/>)
            const passwordInput=queryByPlaceholderText('repeat your password')
            
           fireEvent.change(passwordInput,changeEvent('my-repeated-password'));
           expect(passwordInput).toHaveValue('my-repeated-password');

        })

        it('calls postsignup when the fields are valid and the actions are provided in props',()=>{
            
            const actions={
                postSignUp:jest.fn().mockResolvedValueOnce({}) // revoled promise is mocked which sends empty json
            }
            setupforSubmit({actions})
            
            fireEvent.click(button);
            expect(actions.postSignUp).toHaveBeenCalledTimes(1);
            

        })
        
        it('calls postsignup with user body when fields are valid',()=>{
            
            const actions={
                postSignUp:jest.fn().mockResolvedValueOnce({}) // revoled promise is mocked which sends empty json
            }
            setupforSubmit({actions})
            const expecteduserinput={
                displayName:'my-display-name',
                userName:'my-user-name',
                password:'my-password'
            }
            fireEvent.click(button);
            expect(actions.postSignUp).toHaveBeenCalledWith(expecteduserinput);
            

        })

        it('does not allow when there is an ongoing api call',()=>{
            
            const actions={
                postSignUp:mockAsyncDelayed() // revoled promise is mocked which sends empty json
            }
            setupforSubmit({actions})
            
            fireEvent.click(button);
            fireEvent.click(button);
            expect(actions.postSignUp).toHaveBeenCalledTimes(1);
            

        })


        it('calls postsignup and does not throw exception when the fields are valid and the actions are not provided in props',()=>{
            
            
            setupforSubmit();
            expect(()=>{
                fireEvent.click(button);
            }).not.toThrow();
            

        })


    })
})
