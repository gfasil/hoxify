import React,{Component} from 'react';

 export  default class signup extends Component{
        




        state={
            displayName:'',
            userName:'',
            password:'',
            repeatPassword:''
        }

        handleChange=(event)=> {
          this.setState({[event.target.name]:event.target.value})
      }   
      onClickSignUp=()=>{

        const user={
            displayName:this.state.displayName,
            userName:this.state.userName,
            password:this.state.password
        }
               this.props.actions.postSignUp(user); 
        
           
            
      };

      
    
        render(){

            return (
                <div className="container">
                    <h1 className="text-center">sign up</h1>
                    <div className="col-12 mb-3">
                    <label>Display name</label>
                    <input className="form-control" placeholder="your display name"
                        value={this.state.displayName}
                        onChange={this.handleChange}
                        name='displayName'
                    />
                    </div>
                    <div className="col-12 mb-3">
                    <label>User Name</label>
                    <input className="form-control"  placeholder="your user name"
                          value={this.state.userName}
                        onChange={this.handleChange}
                        name='userName'
                    />
                    </div>
                    <div className="col-12 mb-3">
                    <label>password</label>
                    <input className="form-control"  placeholder="your password" type="password"
                     value={this.state.password}
                     onChange={this.handleChange}
                     name='password'

                    />
                    </div>
                    <div className="col-12 mb-3">
                    <label>repeat password</label>
                    <input className="form-control"  placeholder="repeat your password" type="password"
                        value={this.state.repeatPassword}
                     onChange={this.handleChange}
                     name='repeatPassword'

                    />
                    </div>
                    <div className="text-center">
                    <button className="btn btn-primary" onClick={this.onClickSignUp}>submit</button>
                    </div>
                  
                </div>)
        }
    
   
}
signup.defaultProps={

    actions:{
        postSignUp:()=>new Promise((resolve,reject)=>{

            resolve({});
        })
    }
}
 