import React, {Component} from 'react';
import {Router,Scene,Stack, Actions} from 'react-native-router-flux';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import RegisterOTP from './pages/RegisterOTP'
export default class Routes extends Component {
    render(){
        return(
                <Router>
                  <Stack key="root" hideNavBar={true}>
                    <Scene key="login" component={Login} title="Login"  />
                    <Scene key="Signup" component={Signup} title="Signup" initial={true}  />
                    <Scene key="home" component={Home} title='home'/>
                    <Scene key="otp" component={RegisterOTP}/>
                  </Stack>
                </Router>
              
        );

    }
}
