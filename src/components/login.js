import React from 'react'
import './../support/css/style.css'

class Login extends React.Component{
    render(){
        return (
          <div className='bgimg'>
            <div className='container'>
                  <div className='row justify-content-center'>
                    <div className='col-md-4'>
                      <form style={{backgroundColor:'white'}}>
                      <h2>Login</h2>
                        <div className="form-group">
                          <label htmlFor="exampleInputEmail1">Email address</label>
                          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" ref='username' />
                          <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        </div>
                        <div className="form-group">
                          <label htmlFor="exampleInputPassword1">Password</label>
                          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                        </div>
                        <div className="form-group form-check">
                          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                          <label className="form-check-label" htmlFor="exampleCheck1">Remember Me</label>
                        </div>
                        <a href=''>Forgot your passwords?</a>
                        <br/>
                        <input type="button" className="btn btn-primary"  value='Submit'></input>
                      </form> 
                      </div>
                  </div>
              </div>
                <div className="layerlogin">

                </div>
            </div>
        )
    }
}

export default Login