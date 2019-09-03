import React                        from 'react';
import {variables}                  from '../../../../function/variables' 
import {getCookie}                  from '../../../../function/cookies' 
import {post_}                      from '../../../../function/fetch'

class Main extends React.Component {
    constructor(props){
      super(props);

     this.state = {
         merchant_name: '',
         email: '',
         number: '',
         al1: '',
         al2: '',
         city: '',
         state: '',
         country: '',
         zip: '',
         pw: '',
         npw: '',
         npw2: ''
     }
    }

    render() { 
        return (
            <>
                <div id="dashSettings">
                    <div className="container-fluid">
                        <div className="row mb60_">
                            <div className="col-xs-12 col-md-offset-2 col-md-8">
                                <div className="box_">
                                    <label>Merchant name</label>
                                    <input className="form-control mb15_" placeholder="Merchant name" type="text" value={this.state.merchant_name} onChange={(e)=>{if(e.target.value.length <= 64){this.setState({merchant_name: e.target.value, merchant_name_count: e.target.value.length})}}} />
                                    <div className="small">{this.state.merchant_name_count}/64 characters</div>
                                    <div className="text-right">
                                        <button className="btn_" 
                                            onClick={(e)=>{
                                                e.target.disabled = true;
                                                post_(
                                                    e.target,
                                                    '/update/merchantName/', 
                                                    'Error updating merchant name',
                                                    JSON.stringify({
                                                        token:              getCookie('token'),
                                                        access_token:       getCookie('access_token'),
                                                        merchant_name:      this.state.merchant_name 
                                                    })
                                                )
                                            }}
                                        >Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb60_">
                            <div className="col-xs-12 col-md-offset-2 col-md-8">
                                <div className="box_">
                                    <label>Update email</label>
                                    <input className="form-control mb15_" placeholder="Email" type="text" value={this.state.email} onChange={(e)=>{this.setState({email: e.target.value})}} />
                                    <div className="text-right">
                                        <button className="btn_" 
                                            onClick={(e)=>{
                                                e.target.disabled = true;
                                                post_(
                                                    e.target,
                                                    '/update/email/', 
                                                    'Error updating email address',
                                                    JSON.stringify({
                                                        token:              getCookie('token'),
                                                        access_token:       getCookie('access_token'),
                                                        email:              this.state.email 
                                                    })
                                                )
                                            }}
                                        >Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row mb60_">
                            <div className="col-xs-12 col-md-offset-2 col-md-8">
                                <div className="box_">
                                    <label>Mobile number</label>
                                    <input className="form-control mb15_" placeholder="Mobile number" type="text" value={this.state.number} onChange={(e)=>{this.setState({number: e.target.value})}} />
                                    <div className="text-right">
                                    <button className="btn_" 
                                            onClick={(e)=>{
                                                e.target.disabled = true;
                                                post_(
                                                    e.target,
                                                    '/update/number/', 
                                                    'Error updating mobile number',
                                                    JSON.stringify({
                                                        token:              getCookie('token'),
                                                        access_token:       getCookie('access_token'),
                                                        number:              this.state.number 
                                                    })
                                                )
                                            }}
                                        >Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb60_">
                            <div className="col-xs-12 col-md-offset-2 col-md-8">
                                <div className="box_">
                                    <label>Update address</label>
                                    <input className="form-control mb5_" placeholder="Address line 1" type="text" value={this.state.al1} onChange={(e)=>{this.setState({al1: e.target.value})}} />
                                    <input className="form-control mb5_" placeholder="Address line 2" type="text" value={this.state.al2} onChange={(e)=>{this.setState({al2: e.target.value})}} />
                                    <input className="form-control mb5_" placeholder="City/town" type="text" value={this.state.city} onChange={(e)=>{this.setState({city: e.target.value})}} />
                                    <input className="form-control mb5_" placeholder="State" type="text" value={this.state.state} onChange={(e)=>{this.setState({state: e.target.value})}} />
                                    <input className="form-control mb15_" placeholder="Country" type="text" value={this.state.country} onChange={(e)=>{this.setState({country: e.target.value})}} />
                                    <input className="form-control mb15_" placeholder="Zipcode" type="text" value={this.state.zip} onChange={(e)=>{this.setState({zip: e.target.value})}} />
                                    <div className="text-right">
                                        <button className="btn_" 
                                            onClick={(e)=>{
                                                e.target.disabled = true;
                                                post_(
                                                    e.target,
                                                    '/update/address/', 
                                                    'Error updating address',
                                                    JSON.stringify({
                                                        token:              getCookie('token'),
                                                        access_token:       getCookie('access_token'),
                                                        al1:                this.state.al1,
                                                        al2:                this.state.al2,
                                                        city:               this.state.city,
                                                        state:              this.state.state,
                                                        country:            this.state.country,
                                                        zip:                this.state.zip
                                                    })
                                                )
                                            }}
                                        >Update</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb60_">
                            <div className="col-xs-12 col-md-offset-2 col-md-8">
                                <div className="box_">
                                    <label>Update password</label>
                                    <input className="form-control mb5_" placeholder="Current password" type="password" value={this.state.pw} onChange={(e)=>{this.setState({pw: e.target.value})}} />
                                    <input className="form-control mb5_" placeholder="New password" type="password" value={this.state.npw} onChange={(e)=>{this.setState({npw: e.target.value})}} />
                                    <input className="form-control mb15_" placeholder="Repeat new password" type="password" value={this.state.npw2} onChange={(e)=>{this.setState({npw2: e.target.value})}} />
                                    <div className="text-right">
                                        <button className="btn_"
                                            onClick={(e)=>{
                                                e.target.disabled = true;
                                                post_(
                                                    e.target,
                                                    '/update/password/', 
                                                    'Error updating password',
                                                    JSON.stringify({
                                                        token:              getCookie('token'),
                                                        access_token:       getCookie('access_token'),
                                                        pw:                 this.state.pw,
                                                        npw:                this.state.npw,
                                                        npw2:               this.state.npw2,
                                                    })
                                                )
                                            }}
                                        >Update</button>
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
       //can only update merchant name once every 7 days
       this.setState({
            merchant_name:          this.props.user.merchant_name,
            merchant_name_count:    this.props.user.merchant_name.length,
            email:                  this.props.user.email,
            number:                 this.props.user.number,
            al1:                    this.props.user.al1,
            al2:                    this.props.user.al2,
            city:                   this.props.user.city,
            state:                  this.props.user.state,
            country:                this.props.user.country,
            zip:                    this.props.user.zip
       })
    }

}

export default Main;