import React from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Particles from 'react-particles-js';

import Calendar from '../Calendar';

import './App.css';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = { isLoggedIn:true }
  }

  loginSuccess = (e) => {
    this.setState({isLoggedIn:true});
  }

  loginFail = (e) => {
    this.setState({isLoggedIn:false});
  }


  render(){
    return(
      <div>
        {!this.state.isLoggedIn ?
        <div>
          <Particles
            canvasClassName = "bg"
            height="100%"
            width="100%"
            params={require('./particlesjs-config.json')}
          />
          <div className="login">
            <h1><span className="icon">settings_input_svideo</span>carina</h1>
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLEOATHCLIENTID}
              onSuccess={this.loginSuccess}
              onFailure={this.loginFail} >
            </GoogleLogin>
            </div>
          </div>

          :
          <div className="mainbg">
            <header>
              <div className="headercontainer">
                <div className="settings"></div>
                <div id="logo"><span className="icon">settings_input_svideo</span>carina</div>
                <div className="logout">
                  <GoogleLogout
                    buttonText="Logout"
                    icon={false}
                    render={renderProps => (
                      <button id="logoutbtn" onClick={renderProps.onClick} disabled={renderProps.disabled}><span className="icon">exit_to_app</span></button>
                    )}
                    onLogoutSuccess={(response) => { this.setState(() => { return { isLoggedIn: false } }) }}
                  />
                </div>
              </div>
            </header>
              <main>
                <Calendar />
              </main>
          </div>
        }
      </div>
    );
  }
}

export default App;
