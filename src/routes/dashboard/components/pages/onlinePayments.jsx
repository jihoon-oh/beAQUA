import React                        from 'react';
import {post_}                      from '../../../../function/fetch'
import {getCookie}                  from '../../../../function/cookies'
import { variables } from '../../../../function/variables';

class Main extends React.Component {
    constructor(props){
      super(props);

     this.state = {
        count: 1,
        option: {
            invoice: 'btn_inv_active',
            online: '',
        },
        fiat: '',
        customerName: '',
        customerEmail: '',
        phoneNumber: '',
        al1: '',
        al2: '',
        city: '',
        state: '',
        country: '',
        zip: '',
        p_1_name: '',
        p_1_quantity: '',
        p_1_price: '',
        p_2_name: '',
        p_2_quantity: '',
        p_2_price: '',
        p_3_name: '',
        p_3_quantity: '',
        p_3_price: '',
        p_4_name: '',
        p_4_quantity: '',
        p_4_price: '',
        p_5_name: '',
        p_5_quantity: '',
        p_5_price: '',
        p_6_name: '',
        p_6_quantity: '',
        p_6_price: '',
        p_7_name: '',
        p_7_quantity: '',
        p_7_price: '',
        p_8_name: '',
        p_8_quantity: '',
        p_8_price: '',
        p_9_name: '',
        p_9_quantity: '',
        p_9_price: '',
        p_10_name: '',
        p_10_quantity: '',
        p_10_price: '',
        payemntUrl: '',
     }
    }

    render() { 
        return (
            <>
                <div id="dashCreate">
                    <div className="container-fluid">
                        <div className="row mb30_">
                            <div className="col-xs-12 col-md-offset-2 col-md-4">
                                <label>Customer name (optional)</label>
                                <input className="form-control" placeholder="" type="text" value={this.state.customerName} onChange={(e)=>{this.setState({customerName: e.target.value})}} />
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <label>Customer email (optional)</label>
                                <input className="form-control" placeholder="" type="text" value={this.state.customerEmail} onChange={(e)=>{this.setState({customerEmail: e.target.value})}} />
                            </div>
                        </div>
                        <div className="row mb30_">
                            <div className="col-xs-12 col-md-offset-2 col-md-4">
                                <label>Your merchant name</label>
                                <input className="form-control" readOnly="readOnly" placeholder="" type="text" value={this.props.user.merchant_name} />
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <label>Your email</label>
                                <input className="form-control" readOnly="readOnly" placeholder="" type="text" value={this.props.user.email} />
                            </div>
                        </div>
                        <div className="row mb30_">
                            <div className="col-xs-12 col-md-offset-2 col-md-4">
                                <label>Phone number (optional)</label>
                                <input className="form-control" placeholder="" type="text" value={this.state.phoneNumber} onChange={(e)=>{this.setState({phoneNumber: e.target.value})}} />
                            </div>
                        </div>
                        <div className="row mb30_">
                            <div className="col-xs-12 col-md-offset-2 col-md-8">
                                <label>Customer address (optional)</label>
                            </div>
                            <div className="col-xs-12 col-md-offset-2 col-md-4">
                                <div>
                                    <label>Address line 1</label>
                                    <input className="form-control mb5_" placeholder="" type="text" value={this.state.al1} onChange={(e)=>{this.setState({al1: e.target.value})}} />
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div>
                                    <label>Address line 2</label>
                                    <input className="form-control mb5_" placeholder="" type="text" value={this.state.al2} onChange={(e)=>{this.setState({al2: e.target.value})}} />
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-offset-2 col-md-4">
                                <div>
                                    <label>City/town</label>
                                    <input className="form-control mb5_" placeholder="" type="text" value={this.state.city} onChange={(e)=>{this.setState({city: e.target.value})}} />
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div>
                                    <label>State</label>
                                    <input className="form-control mb5_" placeholder="" type="text" value={this.state.state} onChange={(e)=>{this.setState({state: e.target.value})}} />
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-offset-2 col-md-4">
                                <div>
                                    <label>Country</label>
                                    <input className="form-control mb5_" placeholder="" type="text" value={this.state.country} onChange={(e)=>{this.setState({country: e.target.value})}} />
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <div>
                                    <label>Zip/postcode</label>
                                    <input className="form-control mb5_" placeholder="" type="text" value={this.state.zip} onChange={(e)=>{this.setState({zip: e.target.value})}} />
                                </div>
                            </div>
                        </div>
                        <div className="row mb60_">
                            <div className="col-xs-12 col-md-offset-2 col-md-3">
                                <label>Fiat currency</label>
                                <select onChange={(e)=>{this.setState({fiat: e.target.value})}} value={this.state.fiat} className="form-control">
                                    {
                                        this.props.user.accepted_fiat.map((data, i)=>{
                                            return <option key={i} value={data.id}>{data.symbol}</option>
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="row mb30_">
                            {/* <AddProucts /> */}
                            <div id="addMoreProduct1">
                                <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                                    <label>Product or service name (1)</label>
                                    <input className="form-control" placeholder="Product or service name" type="text" value={this.state.p_1_name} onChange={(e)=>{this.setState({p_1_name: e.target.value})}} />
                                </div>
                                <div className="col-xs-12 col-md-4 mb30_">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Quantity</label>
                                            <input className="form-control" placeholder="Quantity" type="number" defaultValue="0" min="0" step="1" max="99999999" value={this.state.p_1_quantity} onChange={(e)=>{this.setState({p_1_quantity: e.target.value})}} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Price in fiat</label>
                                            <input className="form-control" placeholder="Price in fiat" type="text" value={this.state.p_1_price} onChange={(e)=>{this.setState({p_1_price: e.target.value})}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="addMoreProduct2" className="hide">
                                <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                                    <label>Product or service name (2)</label>
                                    <input className="form-control" placeholder="Product or service name" type="text" value={this.state.p_2_name} onChange={(e)=>{this.setState({p_2_name: e.target.value})}} />
                                </div>
                                <div className="col-xs-12 col-md-4 mb30_">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Quantity</label>
                                            <input className="form-control" placeholder="Quantity" type="number" defaultValue="0" min="0" step="1" max="99999999" value={this.state.p_2_quantity} onChange={(e)=>{this.setState({p_2_quantity: e.target.value})}} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Price in fiat</label>
                                            <input className="form-control" placeholder="Price in fiat" type="text" value={this.state.p_2_price} onChange={(e)=>{this.setState({p_2_price: e.target.value})}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="addMoreProduct3" className="hide">
                                <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                                    <label>Product or service name (3)</label>
                                    <input className="form-control" placeholder="Product or service name" type="text" value={this.state.p_3_name} onChange={(e)=>{this.setState({p_3_name: e.target.value})}} />
                                </div>
                                <div className="col-xs-12 col-md-4 mb30_">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Quantity</label>
                                            <input className="form-control" placeholder="Quantity" type="number" defaultValue="0" min="0" step="1" max="99999999" value={this.state.p_3_quantity} onChange={(e)=>{this.setState({p_3_quantity: e.target.value})}} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Price in fiat</label>
                                            <input className="form-control" placeholder="Price in fiat" type="text" value={this.state.p_3_price} onChange={(e)=>{this.setState({p_3_price: e.target.value})}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="addMoreProduct4" className="hide">
                                <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                                    <label>Product or service name (4)</label>
                                    <input className="form-control" placeholder="Product or service name" type="text" value={this.state.p_4_name} onChange={(e)=>{this.setState({p_4_name: e.target.value})}} />
                                </div>
                                <div className="col-xs-12 col-md-4 mb30_">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Quantity</label>
                                            <input className="form-control" placeholder="Quantity" type="number" defaultValue="0" min="0" step="1" max="99999999" value={this.state.p_4_quantity} onChange={(e)=>{this.setState({p_4_quantity: e.target.value})}} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Price in fiat</label>
                                            <input className="form-control" placeholder="Price in fiat" type="text" value={this.state.p_4_price} onChange={(e)=>{this.setState({p_4_price: e.target.value})}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="addMoreProduct5" className="hide">
                                <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                                    <label>Product or service name (5)</label>
                                    <input className="form-control" placeholder="Product or service name" type="text" value={this.state.p_5_name} onChange={(e)=>{this.setState({p_5_name: e.target.value})}} />
                                </div>
                                <div className="col-xs-12 col-md-4 mb30_">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Quantity</label>
                                            <input className="form-control" placeholder="Quantity" type="number" defaultValue="0" min="0" step="1" max="99999999" value={this.state.p_5_quantity} onChange={(e)=>{this.setState({p_5_quantity: e.target.value})}} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Price in fiat</label>
                                            <input className="form-control" placeholder="Price in fiat" type="text" value={this.state.p_5_price} onChange={(e)=>{this.setState({p_5_price: e.target.value})}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="addMoreProduct6" className="hide">
                                <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                                    <label>Product or service name (6)</label>
                                    <input className="form-control" placeholder="Product or service name" type="text" value={this.state.p_6_name} onChange={(e)=>{this.setState({p_6_name: e.target.value})}} />
                                </div>
                                <div className="col-xs-12 col-md-4 mb30_">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Quantity</label>
                                            <input className="form-control" placeholder="Quantity" type="number" defaultValue="0" min="0" step="1" max="99999999" value={this.state.p_6_quantity} onChange={(e)=>{this.setState({p_6_quantity: e.target.value})}} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Price in fiat</label>
                                            <input className="form-control" placeholder="Price in fiat" type="text" value={this.state.p_6_price} onChange={(e)=>{this.setState({p_6_price: e.target.value})}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="addMoreProduct7" className="hide">
                                <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                                    <label>Product or service name (7)</label>
                                    <input className="form-control" placeholder="Product or service name" type="text" value={this.state.p_7_name} onChange={(e)=>{this.setState({p_7_name: e.target.value})}} />
                                </div>
                                <div className="col-xs-12 col-md-4 mb30_">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Quantity</label>
                                            <input className="form-control" placeholder="Quantity" type="number" defaultValue="0" min="0" step="1" max="99999999" value={this.state.p_7_quantity} onChange={(e)=>{this.setState({p_7_quantity: e.target.value})}} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Price in fiat</label>
                                            <input className="form-control" placeholder="Price in fiat" type="text" value={this.state.p_7_price} onChange={(e)=>{this.setState({p_7_price: e.target.value})}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="addMoreProduct8" className="hide">
                                <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                                    <label>Product or service name (8)</label>
                                    <input className="form-control" placeholder="Product or service name" type="text" value={this.state.p_8_name} onChange={(e)=>{this.setState({p_8_name: e.target.value})}} />
                                </div>
                                <div className="col-xs-12 col-md-4 mb30_">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Quantity</label>
                                            <input className="form-control" placeholder="Quantity" type="number" defaultValue="0" min="0" step="1" max="99999999" value={this.state.p_8_quantity} onChange={(e)=>{this.setState({p_8_quantity: e.target.value})}} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Price in fiat</label>
                                            <input className="form-control" placeholder="Price in fiat" type="text" value={this.state.p_8_price} onChange={(e)=>{this.setState({p_8_price: e.target.value})}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="addMoreProduct9" className="hide">
                                <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                                    <label>Product or service name (9)</label>
                                    <input className="form-control" placeholder="Product or service name" type="text" value={this.state.p_9_name} onChange={(e)=>{this.setState({p_9_name: e.target.value})}} />
                                </div>
                                <div className="col-xs-12 col-md-4 mb30_">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Quantity</label>
                                            <input className="form-control" placeholder="Quantity" type="number" defaultValue="0" min="0" step="1" max="99999999" value={this.state.p_9_quantity} onChange={(e)=>{this.setState({p_9_quantity: e.target.value})}} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Price in fiat</label>
                                            <input className="form-control" placeholder="Price in fiat" type="text" value={this.state.p_9_price} onChange={(e)=>{this.setState({p_9_price: e.target.value})}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="addMoreProduct10" className="hide">
                                <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                                    <label>Product or service name (10)</label>
                                    <input className="form-control" placeholder="Product or service name" type="text" value={this.state.p_10_name} onChange={(e)=>{this.setState({p_10_name: e.target.value})}} />
                                </div>
                                <div className="col-xs-12 col-md-4 mb30_">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label>Quantity</label>
                                            <input className="form-control" placeholder="Quantity" type="number" defaultValue="0" min="0" step="1" max="99999999" value={this.state.p_10_quantity} onChange={(e)=>{this.setState({p_10_quantity: e.target.value})}} />
                                        </div>
                                        <div className="col-md-6">
                                            <label>Price in fiat</label>
                                            <input className="form-control" placeholder="Price in fiat" type="text" value={this.state.p_10_price} onChange={(e)=>{this.setState({p_10_price: e.target.value})}} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                      
                            <div className="col-xs-12 text-center cursorPointer" onClick={(e)=>{
                                if(this.state.count < 10){
                                    document.getElementById('addMoreProduct'+(this.state.count + 1)).classList.remove('hide')
                                    this.setState({count: (this.state.count + 1)})
                                    if((this.state.count + 1) === 10){
                                        e.target.classList.add('hide')
                                    }
                                }
                            }}
                            >Add more</div>

                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="text-center">{this.state.payemntUrl}</div>
                            </div>
                            <div className="col-xs-6 col-md-offset-2 col-md-4">
                                &nbsp;
                            </div>
                            <div className="col-xs-6 col-md-4 text-right">
                                <button className="btn_" 
                                        onClick={(e)=>{
                                            e.target.disabled = true;
                                            post_(
                                                e.target,
                                                '/create/onlinePayment/', 
                                                'Error creating payment',
                                                JSON.stringify({
                                                    token:              getCookie('token'),
                                                    access_token:       getCookie('access_token'),
                                                    customerName: this.state.customerName,
                                                    customerEmail: this.state.customerEmail,
                                                    phoneNumber: this.state.phoneNumber,
                                                    al1: this.state.al1,
                                                    al2: this.state.al2,
                                                    city: this.state.city,
                                                    state: this.state.state,
                                                    country: this.state.country,
                                                    zip: this.state.zip,
                                                    fiat: this.state.fiat,
                                                    p_1_name: this.state.p_1_name,
                                                    p_1_quantity: this.state.p_1_quantity,
                                                    p_1_price: this.state.p_1_price,
                                                    p_2_name: this.state.p_2_name,
                                                    p_2_quantity: this.state.p_2_quantity,
                                                    p_2_price: this.state.p_2_price,
                                                    p_3_name: this.state.p_3_name,
                                                    p_3_quantity: this.state.p_3_quantity,
                                                    p_3_price: this.state.p_3_price,
                                                    p_4_name: this.state.p_4_name,
                                                    p_4_quantity: this.state.p_4_quantity,
                                                    p_4_price: this.state.p_4_price,
                                                    p_5_name: this.state.p_5_name,
                                                    p_5_quantity: this.state.p_5_quantity,
                                                    p_5_price: this.state.p_5_price,
                                                    p_6_name: this.state.p_6_name,
                                                    p_6_quantity: this.state.p_6_quantity,
                                                    p_6_price: this.state.p_6_price,
                                                    p_7_name: this.state.p_7_name,
                                                    p_7_quantity: this.state.p_7_quantity,
                                                    p_7_price: this.state.p_7_price,
                                                    p_8_name: this.state.p_8_name,
                                                    p_8_quantity: this.state.p_8_quantity,
                                                    p_8_price: this.state.p_8_price,
                                                    p_9_name: this.state.p_9_name,
                                                    p_9_quantity: this.state.p_9_quantity,
                                                    p_9_price: this.state.p_9_price,
                                                    p_10_name: this.state.p_10_name,
                                                    p_10_quantity: this.state.p_10_quantity,
                                                    p_10_price: this.state.p_10_price
                                                })
                                            ).then((res)=>{
                                                if(res.length === 69){
                                                    this.setState({payemntUrl: variables('host')+'/'+res})
                                                }
                                            }).catch(()=>{})
                                        }}
                                    >Create</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>  
        );
    }
    
    componentDidMount() {
        this.setState({
            fiat: this.props.user.accepted_fiat[0].id
        })
    }
}


class InvoiceNumber extends React.Component {
    constructor(props){
        super(props);
  
        this.state = {
            reoccurringNo: 'btn_inv_active',
            reoccurringYes: '',
            reoccurring: 'No',
            reoccurringFrequency: 'hide'
        }
      }

    
    render() { 
        if(this.props.type === 'invoice'){
            return (
                <>
                    <div className="row mb30_">
                        <div className="col-xs-12 col-md-offset-2 col-md-4">
                            <label>Invoice number</label>
                            <input className="form-control" placeholder="" type="text" />
                        </div>
                        <div className="col-xs-12 col-md-4">
                            <label>Invoice date</label>
                            <input className="form-control" placeholder="" type="date" />
                        </div>
                    </div>
                    <div className="row mb30_">
                        <div className="col-xs-12 col-md-offset-2 col-md-4">
                            <label>Recurring invoice</label>
                            <div>
                                <div onClick={()=>{
                                        this.setState({
                                            reoccurringNo: 'btn_inv_active',
                                            reoccurringYes: '',
                                            reoccurring: 'no',
                                            reoccurringFrequency: 'hide'
                                        })
                                    }} className={"btn_inv "+this.state.reoccurringNo}>No</div>
                                <div onClick={()=>{
                                        this.setState({
                                            reoccurringNo: '',
                                            reoccurringYes: 'btn_inv_active',
                                            reoccurring: 'yes',
                                            reoccurringFrequency: ''
                                        })
                                }} className={"btn_inv "+this.state.reoccurringYes}>Yes</div>
                            </div>
                        </div>
                        <div className={'col-xs-12 col-md-6 '+this.state.reoccurringFrequency}>
                            <label>Frequency</label>
                            <select className="form-control">
                                <option value="">Every Monday</option>
                                <option value="">Every Tuesday</option>
                                <option value="">Every Wednesday</option>
                                <option value="">Every Thursday</option>
                                <option value="">Every Friday</option>
                                <option value="">Every Saturday</option>
                                <option value="">Every Sunday</option>
                                <option value="">Every 1st of the month</option>
                                <option value="">Every 2nd of the month</option>
                                <option value="">Every 3rd of the month</option>
                                <option value="">Every 4th of the month</option>
                                <option value="">Every 5th of the month</option>
                                <option value="">Every 6th of the month</option>
                                <option value="">Every 7th of the month</option>
                                <option value="">Every 8th of the month</option>
                                <option value="">Every 9th of the month</option>
                                <option value="">Every 10th of the month</option>
                                <option value="">Every 11th of the month</option>
                                <option value="">Every 12th of the month</option>
                                <option value="">Every 13th of the month</option>
                                <option value="">Every 14th of the month</option>
                                <option value="">Every 15th of the month</option>
                                <option value="">Every 16th of the month</option>
                                <option value="">Every 17th of the month</option>
                                <option value="">Every 18th of the month</option>
                                <option value="">Every 19th of the month</option>
                                <option value="">Every 20th of the month</option>
                                <option value="">Every 21st of the month</option>
                                <option value="">Every 22nd of the month</option>
                                <option value="">Every 23rd of the month</option>
                                <option value="">Every 24th of the month</option>
                                <option value="">Every 25th of the month</option>
                                <option value="">Every 26th of the month</option>
                                <option value="">Every 27th of the month</option>
                                <option value="">Every 28th of the month</option>
                                <option value="">Every 29th of the month</option>
                                <option value="">Every 30th of the month</option>
                                <option value="">Every 31st of the month</option>

                            </select>
                        </div>
                    </div>
                </>
            )
        }
        return <></>
    }
}

/*
class AddProucts extends React.Component {
    constructor(props){
        super(props);
  
       this.state = {
          count: 1
       }
      }
    render(){
        return (
            <>
                <div id="addMoreProduct1">
                    <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                        <label>Product or service name (1)</label>
                        <input className="form-control" placeholder="" type="text" />
                    </div>
                    <div className="col-xs-12 col-md-4 mb30_">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Quantity</label>
                                <input className="form-control" placeholder="" type="number" defaultValue="1" min="1" max="99999999" value={this.state.p_1_quantity} onChange={(e)=>{this.setState({p_1_quantity: e.target.value})}} />
                            </div>
                            <div className="col-md-6">
                                <label>Price in fiat</label>
                                <input className="form-control" placeholder="" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="addMoreProduct2" className="hide">
                    <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                        <label>Product or service name (2)</label>
                        <input className="form-control" placeholder="" type="text" />
                    </div>
                    <div className="col-xs-12 col-md-4 mb30_">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Quantity</label>
                                <input className="form-control" placeholder="" type="number" defaultValue="1" min="1" max="99999999" value={this.state.p_1_quantity} onChange={(e)=>{this.setState({p_1_quantity: e.target.value})}} />
                            </div>
                            <div className="col-md-6">
                                <label>Price in fiat</label>
                                <input className="form-control" placeholder="" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="addMoreProduct3" className="hide">
                    <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                        <label>Product or service name (3)</label>
                        <input className="form-control" placeholder="" type="text" />
                    </div>
                    <div className="col-xs-12 col-md-4 mb30_">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Quantity</label>
                                <input className="form-control" placeholder="" type="number" defaultValue="1" min="1" max="99999999" value={this.state.p_1_quantity} onChange={(e)=>{this.setState({p_1_quantity: e.target.value})}} />
                            </div>
                            <div className="col-md-6">
                                <label>Price in fiat</label>
                                <input className="form-control" placeholder="" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="addMoreProduct4" className="hide">
                    <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                        <label>Product or service name (4)</label>
                        <input className="form-control" placeholder="" type="text" />
                    </div>
                    <div className="col-xs-12 col-md-4 mb30_">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Quantity</label>
                                <input className="form-control" placeholder="" type="number" defaultValue="1" min="1" max="99999999" value={this.state.p_1_quantity} onChange={(e)=>{this.setState({p_1_quantity: e.target.value})}} />
                            </div>
                            <div className="col-md-6">
                                <label>Price in fiat</label>
                                <input className="form-control" placeholder="" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="addMoreProduct5" className="hide">
                    <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                        <label>Product or service name (5)</label>
                        <input className="form-control" placeholder="" type="text" />
                    </div>
                    <div className="col-xs-12 col-md-4 mb30_">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Quantity</label>
                                <input className="form-control" placeholder="" type="number" defaultValue="1" min="1" max="99999999" value={this.state.p_1_quantity} onChange={(e)=>{this.setState({p_1_quantity: e.target.value})}} />
                            </div>
                            <div className="col-md-6">
                                <label>Price in fiat</label>
                                <input className="form-control" placeholder="" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="addMoreProduct6" className="hide">
                    <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                        <label>Product or service name (6)</label>
                        <input className="form-control" placeholder="" type="text" />
                    </div>
                    <div className="col-xs-12 col-md-4 mb30_">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Quantity</label>
                                <input className="form-control" placeholder="" type="number" defaultValue="1" min="1" max="99999999" value={this.state.p_1_quantity} onChange={(e)=>{this.setState({p_1_quantity: e.target.value})}} />
                            </div>
                            <div className="col-md-6">
                                <label>Price in fiat</label>
                                <input className="form-control" placeholder="" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="addMoreProduct7" className="hide">
                    <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                        <label>Product or service name (7)</label>
                        <input className="form-control" placeholder="" type="text" />
                    </div>
                    <div className="col-xs-12 col-md-4 mb30_">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Quantity</label>
                                <input className="form-control" placeholder="" type="number" defaultValue="1" min="1" max="99999999" value={this.state.p_1_quantity} onChange={(e)=>{this.setState({p_1_quantity: e.target.value})}} />
                            </div>
                            <div className="col-md-6">
                                <label>Price in fiat</label>
                                <input className="form-control" placeholder="" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="addMoreProduct8" className="hide">
                    <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                        <label>Product or service name (8)</label>
                        <input className="form-control" placeholder="" type="text" />
                    </div>
                    <div className="col-xs-12 col-md-4 mb30_">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Quantity</label>
                                <input className="form-control" placeholder="" type="number" defaultValue="1" min="1" max="99999999" value={this.state.p_1_quantity} onChange={(e)=>{this.setState({p_1_quantity: e.target.value})}} />
                            </div>
                            <div className="col-md-6">
                                <label>Price in fiat</label>
                                <input className="form-control" placeholder="" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="addMoreProduct9" className="hide">
                    <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                        <label>Product or service name (9)</label>
                        <input className="form-control" placeholder="" type="text" />
                    </div>
                    <div className="col-xs-12 col-md-4 mb30_">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Quantity</label>
                                <input className="form-control" placeholder="" type="number" defaultValue="1" min="1" max="99999999" value={this.state.p_1_quantity} onChange={(e)=>{this.setState({p_1_quantity: e.target.value})}} />
                            </div>
                            <div className="col-md-6">
                                <label>Price in fiat</label>
                                <input className="form-control" placeholder="" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div id="addMoreProduct10" className="hide">
                    <div className="col-xs-12 col-md-offset-2 col-md-4 mb30_">
                        <label>Product or service name (10)</label>
                        <input className="form-control" placeholder="" type="text" />
                    </div>
                    <div className="col-xs-12 col-md-4 mb30_">
                        <div className="row">
                            <div className="col-md-6">
                                <label>Quantity</label>
                                <input className="form-control" placeholder="" type="number" defaultValue="1" min="1" max="99999999" value={this.state.p_1_quantity} onChange={(e)=>{this.setState({p_1_quantity: e.target.value})}} />
                            </div>
                            <div className="col-md-6">
                                <label>Price in fiat</label>
                                <input className="form-control" placeholder="" type="text" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xs-12 text-center cursorPointer" onClick={(e)=>{
                    if(this.state.count < 10){
                        document.getElementById('addMoreProduct'+(this.state.count + 1)).classList.remove('hide')
                        this.setState({count: (this.state.count + 1)})
                        if((this.state.count + 1) === 10){
                            e.target.classList.add('hide')
                        }
                    }
                }}
                >Add more</div>
            </>
        )
    }
}
*/
export default Main;