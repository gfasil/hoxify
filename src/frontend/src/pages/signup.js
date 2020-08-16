import React,{Component} from 'react';
   
 export default class signup extends Component{
 
        render(){

            return (
                <div>
                    <h1>sign up</h1>
                    <div>
                    <input placeholder="your display name"/>
                    </div>
                    <div>
                    <input placeholder="your user name"/>
                    </div>
                    <div>
                    <input placeholder="your password" type="password"/>
                    </div>
                    <div>
                    <input placeholder="repeat your password" type="password"/>
                    </div>
                   <button>submit</button>
                </div>)
        }
    
   
}
 