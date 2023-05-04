import React, { Component } from 'react';

class Auth extends Component {
    login()
    {
        console.warn("state",this.state);
        fetch('https://dummyjson.com/auth/login',{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                
            },
            body:JSON.stringify({
                username: 'kminchelle',
                password: '0lelplR',
            })        
        })
        .then((result)=>{
            result.json().then((res)=>{
                console.log(res.token);
                localStorage.setItem("auth",JSON.stringify(res.token))
            })
        })
    }
    render(){
        return (
            <div>
                <div>
                    <input type="text" onChange={(e)=>{this.setState({email:e.target.value})}}></input><br/><br/>
                    <input type="text" onChange={(e)=>{this.setState({password:e.target.value})}}></input><br/><br/>
                    <button onClick={()=>this.login()}>Login</button>
                </div>
            </div>
          );
    }
  
}


export default Auth
