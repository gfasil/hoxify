import React,{Component} from 'react';
   
 export default class signup extends Component{


        state={
            displayName:'',
            userName:'',
            password:''
        }

        handleChange=(event)=> {
          this.setState({[event.target.name]:event.target.value})
      }   

      
    
        render(){

            return (
                <div>
                    <h1>sign up</h1>
                    <div>
                    <input placeholder="your display name"
                        value={this.state.displayName}
                        onChange={this.handleChange}
                        name='displayName'
                    />
                    </div>
                    <div>
                    <input placeholder="your user name"
                          value={this.state.userName}
                        onChange={this.handleChange}
                        name='userName'
                    />
                    </div>
                    <div>
                    <input placeholder="your password" type="password"
                     value={this.state.password}
                        onChange={this.handleChange}
                        name='password'

                    />
                    </div>
                    <div>
                    <input placeholder="repeat your password" type="password"/>
                    </div>
                   <button>submit</button>
                </div>)
        }
    
   
}
 