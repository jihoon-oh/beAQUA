import React                        from 'react';

import Plans                        from '../../../pricing/components/plans'
import {post_, user_}               from '../../../../function/fetch'
import {getCookie}                  from '../../../../function/cookies'
import {timeRemaining}              from '../../../../function/timeRemaining'
import {variables}                  from '../../../../function/variables'

class Main extends React.Component {
    constructor(props){
      super(props);

     this.state = {
        showFree: 'hide',
        showStarter: 'hide',
        showEssential: 'hide',
        showPro: 'hide',
        paymentTimer: '',
        next_plan: [],
        planPasswordFree: 'hide',
        pwFree: '',
        planPasswordStarter: 'hide',
        pwStarter: '',
        planPasswordEssential: 'hide',
        pwEssential: '',
        planPasswordPro: 'hide',
        pwPro: ''
     }
    }

    render() { 
        return (
            <>
                <div id="dashPlans">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-sm-6 col-md-4 mb30_">
                                <div className="labelAll">
                                    <div>
                                        <b>Current plan</b>
                                        <div className="small mt15_">
                                            {this.state.plan} plan
                                        </div>
                                        <div className="small mt15_">
                                            {this.state.paymentTimer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-sm-6 col-md-offset-2 col-md-6 mb30_">
                                <div className="labelAllWhite">
                                    <div>
                                        <b>Next payment due</b>
                                        <div className="mt15_">
                                            <div className="title3 mb5_">{this.state.next_plan.plan} Plan</div>
                                            <div className="title1 mb5_">${this.state.next_plan.cost}</div>
                                        </div>
                                        <IsNotFree status={this.state.next_plan.plan} billing_date={this.state.billing_date_} />
                                    </div>
                                </div>
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
                                    <div className="text-center mt15_"> What's included?&nbsp;&nbsp; 
                                        <span onClick={(e)=>{
                                            if(e.target.classList.contains('fa-chevron-down')){
                                                e.target.classList.remove('fa-chevron-down')
                                                e.target.classList.add('fa-chevron-up')
                                                this.setState({showFree: ''})
                                            } else if(e.target.classList.contains('fa-chevron-up')){
                                                e.target.classList.remove('fa-chevron-up')
                                                e.target.classList.add('fa-chevron-down')
                                                this.setState({showFree: 'hide'})
                                            }
                                        }} className="cursorPointer fas fa-chevron-down"></span>
                                    </div>
                                    <div className={this.state.showFree}>
                                        <Plans plan="free" />
                                    </div>
                                    <div className="mt30_ text-center">
                                        <button className="btn_" onClick={()=>{
                                            this.setState({planPasswordFree: ''})
                                        }}>Change plan</button>
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
                                    <div className="text-center mt15_"> What's included?&nbsp;&nbsp; 
                                        <span onClick={(e)=>{
                                            if(e.target.classList.contains('fa-chevron-down')){
                                                e.target.classList.remove('fa-chevron-down')
                                                e.target.classList.add('fa-chevron-up')
                                                this.setState({showStarter: ''})
                                            } else if(e.target.classList.contains('fa-chevron-up')){
                                                e.target.classList.remove('fa-chevron-up')
                                                e.target.classList.add('fa-chevron-down')
                                                this.setState({showStarter: 'hide'})
                                            }
                                        }} className="cursorPointer fas fa-chevron-down"></span>
                                    </div>
                                    <div className={this.state.showStarter}>
                                        <Plans plan="starter" />
                                    </div>
                                    <div className="mt30_ text-center">
                                        <button className="btn_" onClick={()=>{
                                            this.setState({planPasswordStarter: ''})
                                        }}>Change plan</button>
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
                                    <div className="text-center mt15_"> What's included?&nbsp;&nbsp; 
                                        <span onClick={(e)=>{
                                            if(e.target.classList.contains('fa-chevron-down')){
                                                e.target.classList.remove('fa-chevron-down')
                                                e.target.classList.add('fa-chevron-up')
                                                this.setState({showEssential: ''})
                                            } else if(e.target.classList.contains('fa-chevron-up')){
                                                e.target.classList.remove('fa-chevron-up')
                                                e.target.classList.add('fa-chevron-down')
                                                this.setState({showEssential: 'hide'})
                                            }
                                        }} className="cursorPointer fas fa-chevron-down"></span>
                                    </div>
                                    <div className={this.state.showEssential}>
                                        <Plans plan="essential" />
                                    </div>
                                    <div className="mt30_ text-center">
                                        <button className="btn_" onClick={()=>{
                                            this.setState({planPasswordEssential: ''})
                                        }}>Change plan</button>
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
                                    <div className="text-center mt15_"> What's included?&nbsp;&nbsp; 
                                        <span onClick={(e)=>{
                                            if(e.target.classList.contains('fa-chevron-down')){
                                                e.target.classList.remove('fa-chevron-down')
                                                e.target.classList.add('fa-chevron-up')
                                                this.setState({showPro: ''})
                                            } else if(e.target.classList.contains('fa-chevron-up')){
                                                e.target.classList.remove('fa-chevron-up')
                                                e.target.classList.add('fa-chevron-down')
                                                this.setState({showPro: 'hide'})
                                            }
                                        }} className="cursorPointer fas fa-chevron-down"></span>
                                    </div>
                                    <div className={this.state.showPro}>
                                        <Plans plan="pro" />
                                    </div>
                                    <div className="mt30_ text-center">
                                        <button className="btn_" onClick={()=>{
                                            this.setState({planPasswordPro: ''})
                                        }}>Change plan</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'darkOverLay '+this.state.planPasswordFree} onClick={()=>{this.setState({planPasswordFree: 'hide'})}}></div>
                <div className={'box_ box_OverLay '+this.state.planPasswordFree}>
                    <div className="closeOverlay" onClick={()=>{this.setState({planPasswordFree: 'hide'})}}>&times;</div>
                    <div className="title2">Enter your password to change your plan</div>
                    <div className="mb15_">
                        <input className="form-control" placeholder="Password" type="password" value={this.state.pwFree} onChange={(e)=>{this.setState({pwFree: e.target.value})}} />
                    </div>
                    <div className="text-right">
                        <button className="btn_" onClick={(e)=>{
                            this.setState({pwFree: ''})
                            e.target.disabled = true;
                            post_(
                                e.target,
                                '/plans/change/', 
                                'Error changing plan',
                                JSON.stringify({
                                    token:              getCookie('token'),
                                    access_token:       getCookie('access_token'),
                                    plan:               0,
                                    pw:                 this.state.pwFree
                                })
                            ).then(res=>{
                                if(res === 'success'){
                                    this.setState({planPasswordFree: 'hide'})
                                    user_().then(data=>{
                                        this.setState({
                                            plan: data.plan,
                                            billing_date: data.billing_data,
                                            billing_date_: data.billing_date_,
                                            next_plan: data.next_plan
                                        })
                                    })
                                }
                            }).catch(()=>{})
                        }}>Change plan</button>
                    </div>
                    <div className="mt15_ red_">
                        Your plan will be changed once you've paid for your new plan.
                    </div>
                </div>

                <div className={'darkOverLay '+this.state.planPasswordStarter} onClick={()=>{this.setState({planPasswordStarter: 'hide'})}}></div>
                <div className={'box_ box_OverLay '+this.state.planPasswordStarter}>
                    <div className="closeOverlay" onClick={()=>{this.setState({planPasswordStarter: 'hide'})}}>&times;</div>
                    <div className="title2">Enter your password to change your plan</div>
                    <div className="mb15_">
                        <input className="form-control" placeholder="Password" type="password" value={this.state.pwStarter} onChange={(e)=>{this.setState({pwStarter: e.target.value})}} />
                    </div>
                    <div className="text-right">
                        <button className="btn_" onClick={(e)=>{
                            this.setState({pwStarter: ''})
                            e.target.disabled = true;
                            post_(
                                e.target,
                                '/plans/change/', 
                                'Error changing plan',
                                JSON.stringify({
                                    token:              getCookie('token'),
                                    access_token:       getCookie('access_token'),
                                    plan:               1,
                                    pw:                 this.state.pwStarter
                                })
                            ).then(res=>{
                                if(res === 'success'){
                                    this.setState({planPasswordStarter: 'hide'})
                                    user_().then(data=>{
                                        this.setState({
                                            plan: data.plan,
                                            billing_date: data.billing_data,
                                            billing_date_: data.billing_date_,
                                            next_plan: data.next_plan
                                        })
                                    })
                                }
                            }).catch(()=>{})
                        }}>Change plan</button>
                    </div>
                    <div className="mt15_ red_">
                        Your plan will be changed once you've paid for your new plan.
                    </div>
                </div>

                <div className={'darkOverLay '+this.state.planPasswordEssential} onClick={()=>{this.setState({planPasswordEssential: 'hide'})}}></div>
                <div className={'box_ box_OverLay '+this.state.planPasswordEssential}>
                    <div className="closeOverlay" onClick={()=>{this.setState({planPasswordEssential: 'hide'})}}>&times;</div>
                    <div className="title2">Enter your password to change your plan</div>
                    <div className="mb15_">
                        <input className="form-control" placeholder="Password" type="password" value={this.state.pwEssential} onChange={(e)=>{this.setState({pwEssential: e.target.value})}} />
                    </div>
                    <div className="text-right">
                        <button className="btn_" onClick={(e)=>{
                            this.setState({pwEssential: ''})
                            e.target.disabled = true;
                            post_(
                                e.target,
                                '/plans/change/', 
                                'Error changing plan',
                                JSON.stringify({
                                    token:              getCookie('token'),
                                    access_token:       getCookie('access_token'),
                                    plan:               2,
                                    pw:                 this.state.pwEssential
                                })
                            ).then(res=>{
                                if(res === 'success'){
                                    this.setState({planPasswordEssential: 'hide'})
                                    user_().then(data=>{
                                        this.setState({
                                            plan: data.plan,
                                            billing_date: data.billing_data,
                                            billing_date_: data.billing_date_,
                                            next_plan: data.next_plan
                                        })
                                    })
                                }
                            }).catch(()=>{})
                        }}>Change plan</button>
                    </div>
                    <div className="mt15_ red_">
                        Your plan will be changed once you've paid for your new plan.
                    </div>
                </div>

                <div className={'darkOverLay '+this.state.planPasswordPro} onClick={()=>{this.setState({planPasswordPro: 'hide'})}}></div>
                <div className={'box_ box_OverLay '+this.state.planPasswordPro}>
                    <div className="closeOverlay" onClick={()=>{this.setState({planPasswordPro: 'hide'})}}>&times;</div>
                    <div className="title2">Enter your password to change your plan</div>
                    <div className="mb15_">
                        <input className="form-control" placeholder="Password" type="password" value={this.state.pwPro} onChange={(e)=>{this.setState({pwPro: e.target.value})}} />
                    </div>
                    <div className="text-right">
                        <button className="btn_" onClick={(e)=>{
                            this.setState({pwPro: ''})
                            e.target.disabled = true;
                            post_(
                                e.target,
                                '/plans/change/', 
                                'Error changing plan',
                                JSON.stringify({
                                    token:              getCookie('token'),
                                    access_token:       getCookie('access_token'),
                                    plan:               3,
                                    pw:                 this.state.pwPro
                                })
                            ).then(res=>{
                                if(res === 'success'){
                                    this.setState({planPasswordPro: 'hide'})
                                    user_().then(data=>{
                                        this.setState({
                                            plan: data.plan,
                                            billing_date: data.billing_data,
                                            billing_date_: data.billing_date_,
                                            next_plan: data.next_plan
                                        })
                                    })
                                }
                            }).catch(()=>{})
                        }}>Change plan</button>
                    </div>
                    <div className="mt15_ red_">
                        Your plan will be changed once you've paid for your new plan.
                    </div>
                </div>

            </>  
        );
    }
    
    componentDidMount() {
        this.paymentDueReminder();  

        //enter password to update plan


        this.setState({
            plan: this.props.user.plan,
            billing_date: this.props.user.billing_date,
            billing_date_: this.props.user.billing_date_,
            next_plan: this.props.user.next_plan
        })
    }

    paymentDueReminder(){
        if(this.state.billing_date > 0){
            setInterval(()=>{
                if(this.state.billing_date > 0)
                var date = Math.round(new Date() / 1000);
                this.setState({paymentTimer: 'Expires: '+timeRemaining(this.state.billing_date - date)})
            }, 1000)
        } else {
            this.setState({paymentTimer: ''});
        }
    }
}


class IsNotFree extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render() { 
        if(this.props.status !== 'Free'){
            return (
                <>
                    <div className="small mt15_">
                        <small className="small">{this.props.billing_date_}</small>
                    </div>
                    <div className="mt30_">
                        <div className="btn_" onClick={(e)=>{
                            e.target.disabled = true;
                            post_(
                                e.target,
                                '/plans/makePayment/', 
                                'Error making payment',
                                JSON.stringify({
                                    token:              getCookie('token'),
                                    access_token:       getCookie('access_token'),
                                })
                            ).then(res=>{
                                if(res.length === 69){
                                    console.log(res)
                                    //redirect and pay
                                    window.location.href = variables('host')+'/payments/'+res
                                }
                            }).catch(()=>{})
                        }}>Make payment</div>
                    </div>
                    <div className="mt15_ red_">
                        <div className="small"><small>Payments must be made within 7 days of your plan ending to avoid disruptions to your business.</small></div>
                    </div>
                </>
            )
        }
        return <></>
    }
}








export default Main;