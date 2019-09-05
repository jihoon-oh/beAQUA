import React                        from 'react';
import {NavLink}                    from 'react-router-dom';
import { Redirect }                 from 'react-router'
import { instanceOf }               from 'prop-types';
import Toastify                     from 'toastify-js'
import $                            from 'jquery'

import {variables}                  from '../../../function/variables'
import {getCookie}                  from '../../../function/cookies'

import Plans                        from './plans'

class Main extends React.Component {
    static propTypes = {

    };

    constructor(props){
      super(props);

      this.state = {
        isLoggedIn: false
      }
    }

    render() { 
        return (
            <>
                <div id="pricing">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 text-center">
                                <div className="title1">Pricing</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 text-center">
                                <div className="title2">Plans for everyone</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-3 mb60_">
                                <div className="box_">
                                    <div className="title2 text-center">Free</div>
                                    <div className="pricing_charge">
                                        <div className="">$0</div>
                                        <div className="">Per month</div>
                                    </div>
                                    <Plans plan="free" />
                                    <div className="mt30_ text-center">
                                        <IsLoggedIn status={this.props.isLoggedIn} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 mb60_">
                                <div className="box_">
                                    <div className="title2 text-center">Starter</div>
                                    <div className="pricing_charge">
                                        <div className="">$6</div>
                                        <div className="">Per month</div>
                                    </div>
                                    <Plans plan="starter" />
                                    <div className="mt30_ text-center">
                                        <IsLoggedIn status={this.props.isLoggedIn} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 mb60_">
                                <div className="box_">
                                    <div className="title2 text-center">Essential</div>
                                    <div className="pricing_charge">
                                        <div className="">$29</div>
                                        <div className="">Per month</div>
                                    </div>
                                    <Plans plan="essential" />
                                    <div className="mt30_ text-center">
                                        <IsLoggedIn status={this.props.isLoggedIn} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-3 mb60_">
                                <div className="box_">
                                    <div className="title2 text-center">Pro</div>
                                    <div className="pricing_charge">
                                        <div className="">$99</div>
                                        <div className="">Per month</div>
                                    </div>
                                    <Plans plan="pro" />
                                    <div className="mt30_ text-center">
                                        <IsLoggedIn status={this.props.isLoggedIn} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>  
        );
    }
    
    componentDidMount() {
        
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
                    <NavLink className="btn_" to="/dashboard#Plans">Change plan</NavLink>
                </>
            )
        } else {
            return (
                <>
                    <a className="btn_" href={'http://127.0.0.1/AQUA-ECOSYSTEM/accounts.aqua/signup/aquapay?token='+getCookie('token')}>Sign up</a>
                </>
            )
        }
    }
}

export default Main;