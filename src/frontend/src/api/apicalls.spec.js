import axios from 'axios';
import * as apicalls from './apicalls'

describe('apiCalls',()=>{
    describe('signup',()=>{

        it('calls /api/1.0/users',()=>{
            const mockSignUp=jest.fn();
            axios.post=mockSignUp;
            apicalls.signup();
    
            const path=mockSignUp.mock.calls[0][0];
            expect(path).toBe('/api/1.0/users');
        })
       
    })
})