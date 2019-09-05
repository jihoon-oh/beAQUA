import React                        from 'react';
import { NavLink }                  from 'react-router-dom';
import {auth_}                      from '../function/auth'
import {redirectPost}               from '../function/redirectPost'
import {getCookie, eraseCookie}     from '../function/cookies'
import {variables}                  from '../function/variables'

// import Logo from '../../assets/img/logotext_.png'
import Logo from '../assets/img/logo.png'

class Header extends React.Component {
    constructor(props){
      super(props);

      this.state = {

      }
    }

    render() { 
        return (
            <>
                <div id="header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="hidden-sm hidden-xs col-md-9">
                                <NavLink to="/about">About</NavLink>
                                <NavLink to="/work">Work</NavLink>
                                <NavLink to="/team">Team</NavLink>
                                <NavLink to="/blog">Blog</NavLink>
                                <NavLink to="/contact">Contact</NavLink>
                            </div>
                            <div className="hidden-md hidden-lg col-xs-9">
                                <div className="hamburger hamburger--collapse" onClick={()=>{this.menu()}}>
                                    <div className="hamburger-box">
                                        <div className="hamburger-inner"></div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center"> {/* col-md-3 was added to class */}
                                <NavLink to="/">
                                    <img id="logo" className="ml-md-5" src={Logo} alt={variables('name')} title={variables('name')} />
                                </NavLink>
                            </div>
                        </div>
                    </div>
                </div>
                 <div id="menu" className="hide">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12">
                                <div>
                                    <NavLink to="/about">About</NavLink>
                                </div>
                                <div>
                                    <NavLink to="/work">Work</NavLink>
                                </div>
                                <div>
                                    <NavLink to="/team">Team</NavLink>
                                </div>
                                <div>
                                    <NavLink to="/blog">Blog</NavLink>
                                </div>
                                <div>
                                    <NavLink to="/contact">Contact</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </>
        )
    }
    
    componentDidMount() {
        
    }

    menu(){
        if(document.querySelector('.hamburger--collapse').classList.contains('is-active')){
            document.querySelector('.hamburger--collapse').classList.remove('is-active');
            document.querySelector('#menu').classList.add('hide');
        } else {
            document.querySelector('.hamburger--collapse').classList.add('is-active');
            document.querySelector('#menu').classList.remove('hide');
        }
    }

}

class IsLoggedIn extends React.Component {
    constructor(props){
      super(props);

      this.state = {

      }
    }

    render(){
        if(this.props.status === true){
            return (
                <>
                    <NavLink to="/dashboard#Overview">Dashbaord</NavLink>
                    <NavLink to="/pricing">Pricing</NavLink>
                    <NavLink to="/docs">Docs</NavLink>
                    <a onClick={()=>{eraseCookie('token');eraseCookie('access_token')}} href={'http://127.0.0.1/AQUA-ECOSYSTEM/accounts.aqua/logout/aquapay?token='+getCookie('token')}>Logout</a>
                </>
            )
        } else {
            return (
                <>
                    <NavLink to="/pricing">Pricing</NavLink>
                    {/* <NavLink to="/integrations">Integrations</NavLink> */}
                    <NavLink to="/docs">Docs</NavLink>
                    <a href={'http://127.0.0.1/AQUA-ECOSYSTEM/accounts.aqua/login/aquapay?token='+getCookie('token')}>Login</a>
                    <a href={'http://127.0.0.1/AQUA-ECOSYSTEM/accounts.aqua/signup/aquapay?token='+getCookie('token')}>Sign up</a>
                </>
            )
        }
    }
}

class IsLoggedInMobile extends React.Component {
    constructor(props){
      super(props);

      this.state = {

      }
    }

    render(){
        if(this.props.status === true){
            return (
                <>
                    <div>
                        <NavLink to="/dashboard#Overview">Dashbaord</NavLink>
                    </div>
                    <div>
                        <NavLink to="/pricing">Pricing</NavLink>
                    </div>
                    <div>
                        <NavLink to="/docs">Docs</NavLink>
                    </div>
                    <div>
                        <a onClick={()=>{eraseCookie('token');eraseCookie('access_token')}} href={'http://127.0.0.1/AQUA-ECOSYSTEM/accounts.aqua/logout/aquapay?token='+getCookie('token')}>Logout</a>
                    </div>
                </>
            )
        } else {
            return (
                <>
                    <div>
                        <NavLink to="/pricing">Pricing</NavLink>
                    </div>
                    {/* <div>
                        <NavLink to="/integrations">Integrations</NavLink>
                    </div> */}
                    <div>
                        <NavLink to="/docs">Docs</NavLink>
                    </div>
                    <div>
                        <a href={'http://127.0.0.1/AQUA-ECOSYSTEM/accounts.aqua/login/aquapay?token='+getCookie('token')}>Login</a>
                    </div>
                    <div>
                        <a href={'http://127.0.0.1/AQUA-ECOSYSTEM/accounts.aqua/signup/aquapay?token='+getCookie('token')}>Sign up</a>
                    </div>
                </>
            )
        }
    }
}


export default Header;