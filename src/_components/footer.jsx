import React                        from 'react';
import { NavLink }                  from 'react-router-dom';

import {variables}                  from '../function/variables'

import Logo from '../assets/img/logoWbg.png'

class Footer extends React.Component {
    constructor(props){
      super(props);

      this.state = {}
    }

    
    render() { 
        return (
            <>
                <footer>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="title1 col-xs-9 col-md-2">
                                    <img id="logo" src={Logo} alt={variables('name')} title={variables('name')} className="img-responsive" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-4">
                                <div className="title2">{variables('name')}</div>
                                <div><a href="https://beaqua.com" rel="noopener noreferrer" target="_blank">be AQUA</a></div>
                                <div><NavLink to="/about">About</NavLink></div>
                                <div><a href="https://medium.com/" rel="noopener noreferrer" target="_blank">blog</a></div>
                                
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div className="title2">Resources</div>
                                <div><a href="##" rel="noopener noreferrer" target="_blank">FAQ</a></div>
                                <div><NavLink to="/documentation">Documentation</NavLink></div>
                                {/* <div><NavLink to="/integrations">Integrations</NavLink></div> */}
                                <div><NavLink to="/pricing">Pricing</NavLink></div>
                                <div><NavLink to="/affiliate">Affiliate</NavLink></div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div className="title2">Support</div>
                                <div><a href="##" rel="noopener noreferrer" target="_blank">Contact us</a></div>
                                <div><NavLink to="/terms">Terms of use</NavLink></div>
                                <div><NavLink to="/privacyPolicy">Privacy policy</NavLink></div>
                                <div><NavLink to="/cookiePolicy">Cookies policy</NavLink></div>
                            </div>
                            <div className="col-xs-12 text-center">
                                <span onClick={()=>{window.open('https://facebook.com', '_blank')}} className="fab fa-facebook-f cursorPointer"></span>
                                <span onClick={()=>{window.open('https://twitter.com', '_blank')}} className="fab fa-twitter cursorPointer"></span>
                                <span onClick={()=>{window.open('https://instagram.com', '_blank')}} className="fab fa-instagram cursorPointer"></span>
                                <span onClick={()=>{window.open('https://medium.com', '_blank')}} className="fab fa-medium-m cursorPointer"></span>
                                <span onClick={()=>{window.open('https://t.me', '_blank')}} className="fab fa-telegram-plane cursorPointer"></span>
                            </div>
                            <div className="col-xs-12 text-center mt30_">
                                &copy; {(new Date().getFullYear())+' '+variables('name')}. All Rights Reserved.
                            </div>
                        </div>
                    </div>
                </footer>
            </>  
        );
    }
    
    componentDidMount() {

    }

}

export default Footer;