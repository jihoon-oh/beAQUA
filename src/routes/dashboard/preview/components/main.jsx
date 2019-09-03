import React                        from 'react';
import {NavLink}                    from 'react-router-dom';
import QRCode                       from 'qrcode'


import {variables}                  from '../../../../function/variables'


class Main extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        expandOnlineList: 'hide',
        onlinePaymentMethod: '',
        onlinePaymentOption: 'hide',
        cryptoCurrencySelected: '',
        activePaymentOptionCopy: '',
        activePaymentOptionWallet: 'activePaymentOption',
        onlinePaymentOptionCopy: 'hide',
        onlinePaymentOptionWallet: '',
        qr: '',
        invoiceNo: '192',
        name: 'John Doe',
        email: 'JohnDoe@gmail.com',
        from: 'Edmond Amaning',
        fromEmail: 'emdond@amaning.com',
        due: '12/12/2019',
        date: new Date(),
        fiat: 'GBP',
        items: [],
        months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
      }
    }
    render() { /*
        return (
            <>
                <div className="title1 text-center">Preview online payment</div>
                <div id="preview">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-offset-3 col-md-6" style={{position: 'relative'}}>
                                <div style={{position: 'absolute', top: '-60px', right: '30px', fontSize: '40px', cursor: 'pointer'}} onClick={()=>{window.close()}}>&times;</div>
                                <div id="aqua_______body">
                                    <div className="aqua_______header">
                                        <span className="">{variables('name')}</span>
                                    </div>
                                    <div className="aqua_______paymentDetails row">
                                        <div className="col-xs-6"><b>Apple store</b></div>
                                        <div className="col-xs-6 text-right">1,209.09 GBP <span className="cursorPointer fas fa-chevron-down" onClick={(e)=>{this.expandList(e)}}></span></div>
                                        <div className={this.state.expandOnlineList}>
                                            <div className="col-xs-12">
                                                <div className="row" style={{padding: '15px 0'}}>
                                                    <div className="col-xs-8"><b>Products & services</b></div>
                                                    <div className="col-xs-4 text-right"><b>Amount</b></div>
                                                </div>
                                            </div>
                                            <div  className=" col-xs-12">
                                                {
                                                    this.state.items.map((data, i)=>{
                                                        return (
                                                            <div key={i} className="row" style={{borderBottom: '1px solid #D7D7D7', padding: '15px 0'}}>
                                                                <div className="col-xs-8">
                                                                    <div>{data.product}</div>
                                                                    <div className="small">Quantity: {data.quantity}</div>
                                                                </div>
                                                                <div className="col-xs-4 text-right">{(data.price * data.quantity)+' '+this.state.fiat}</div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="aqua_______container ">
                                        <div className={'aqua_______paymentMethod '+this.state.onlinePaymentMethod}>
                                            <div className="mb15_">
                                                How would you like to pay?
                                            </div>
                                            <div>
                                                <div>
                                                    <div onClick={()=>{this.setState({onlinePaymentMethod: 'hide', onlinePaymentOption: '', cryptoCurrencySelected: ''})}}>
                                                        <div>
                                                            <img src="http://127.0.0.1/AQUA-Ecosystem/aquapay/public/cryptocurrency/bitcoin.png" title="Bitcoin" alt="Bitcoin" className="img-responsive" />
                                                            <div>BTC</div>
                                                        </div>
                                                    </div>
                                                    <div onClick={()=>{this.setState({onlinePaymentMethod: 'hide', onlinePaymentOption: '', cryptoCurrencySelected: ''})}}>
                                                        <div>
                                                            <img src="http://127.0.0.1/AQUA-Ecosystem/aquapay/public/cryptocurrency/ethereum.png" title="Ethereum" alt="Ethereum" className="img-responsive" />
                                                            <div>ETH</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className={'aqua_______paymentOption '+this.state.onlinePaymentOption}>
                                            <div className="row paymentTimer">
                                                <div className="col-xs-6">
                                                    <div className="text-left">
                                                        Awaiting payment
                                                    </div>
                                                </div>
                                                <div className="col-xs-6">
                                                    <div className="text-right">
                                                        15:00
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">    
                                                <div className={'col-xs-6 '+this.state.activePaymentOptionWallet} onClick={()=>{this.setState({activePaymentOptionWallet: 'activePaymentOption', activePaymentOptionCopy: '', onlinePaymentOptionCopy: 'hide', onlinePaymentOptionWallet: ''})}}>
                                                    Pay via wallet
                                                </div>
                                                <div className={'col-xs-6 '+this.state.activePaymentOptionCopy} onClick={()=>{this.setState({activePaymentOptionWallet: '', activePaymentOptionCopy: 'activePaymentOption', onlinePaymentOptionCopy: '', onlinePaymentOptionWallet: 'hide'})}}>
                                                    Copy address
                                                </div>
                                            </div>
                                            <div className={this.state.onlinePaymentOptionWallet}>
                                                <div>
                                                    <div className="text-center mt15_">
                                                        <div>8.84379 BTC</div>
                                                        <div className="small"><i>1 BTC = 9823 GBP</i></div>
                                                    </div>
                                                    <img src={this.state.qr} alt="qrcode" title="qrcode" className="img-responsive" />
                                                    <div className="text-left">
                                                        <div className="">Wallets to pay with</div>
                                                        <div>
                                                            <div className="onlinePaymentWalletLogo">
                                                                <img src="https://www.enjinwallet.io/images/enjin-coin-logo.png" alt="" title="" className="img-responsive " />
                                                            </div>
                                                            <div className="onlinePaymentWalletLogo">
                                                                <img src="https://www.enjinwallet.io/images/enjin-coin-logo.png" alt="" title="" className="img-responsive " />
                                                            </div>
                                                            <div className="onlinePaymentWalletLogo">
                                                                <img src="https://www.enjinwallet.io/images/enjin-coin-logo.png" alt="" title="" className="img-responsive " />
                                                            </div>
                                                            <div className="onlinePaymentWalletLogo">
                                                                <img src="https://www.enjinwallet.io/images/enjin-coin-logo.png" alt="" title="" className="img-responsive " />
                                                            </div>
                                                            <div className="onlinePaymentWalletLogo">
                                                                <img src="https://www.enjinwallet.io/images/enjin-coin-logo.png" alt="" title="" className="img-responsive " />
                                                            </div>
                                                            <div className="onlinePaymentWalletLogo">
                                                                <img src="https://www.enjinwallet.io/images/enjin-coin-logo.png" alt="" title="" className="img-responsive " />
                                                            </div>
                                                            <div className="onlinePaymentWalletLogo">
                                                                <img src="https://www.enjinwallet.io/images/enjin-coin-logo.png" alt="" title="" className="img-responsive " />
                                                            </div>
                                                            <div className="onlinePaymentWalletLogo">
                                                                <img src="https://www.enjinwallet.io/images/enjin-coin-logo.png" alt="" title="" className="img-responsive " />
                                                            </div>
                                                            <div className="onlinePaymentWalletLogo">
                                                                <img src="https://www.enjinwallet.io/images/enjin-coin-logo.png" alt="" title="" className="img-responsive " />
                                                            </div>
                                                            <div className="onlinePaymentWalletLogo">
                                                                <img src="https://www.enjinwallet.io/images/enjin-coin-logo.png" alt="" title="" className="img-responsive " />
                                                            </div>
                                                            <div className="onlinePaymentWalletLogo">
                                                                <img src="https://www.enjinwallet.io/images/enjin-coin-logo.png" alt="" title="" className="img-responsive " />
                                                            </div>
                                                            <div className="onlinePaymentWalletLogo">
                                                                <img src="https://www.enjinwallet.io/images/enjin-coin-logo.png" alt="" title="" className="img-responsive " />
                                                            </div>
                                                            
                                                        </div>
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className={this.state.onlinePaymentOptionCopy}>
                                                <div className="text-center mt15_">
                                                    <div>8.84379 BTC</div>
                                                    <div className="small"><i>1 BTC = 9823 GBP</i></div>
                                                </div>
                                                <div className="mt30_">
                                                    <div>
                                                        Please send 8.84379 BTC to the address below.
                                                    </div>
                                                </div>
                                                <div className="mt45_ text-left">
                                                    <div className="mb15_">
                                                        <label>Amount</label>
                                                        <input className="form-control" value="8.84379" type="text" readonly="readonly" />
                                                    </div>
                                                    <div>
                                                        <label>Address</label>
                                                        <input className="form-control" value="0x24a99ac215c1e5c8e01a53235b4e153dd3570822" type="text" readonly="readonly" />
                                                    </div>
                                                </div>
                                                <div className="mt45_ text-left">
                                                    <div>
                                                        <div className="title3">Double check contract address?</div>
                                                        <label>Contract address (ERC20 Token)</label>
                                                        <input className="form-control" value="0x24a99ac215c1e5c8e01a53235b4e153dd3570822" type="text" readonly="readonly" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="mt30_ cursorPointer"><u>Need help paying?</u></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </>
        )*/
        return (
            <>
                <div className="title1 text-center">Preview invoice</div>
                <div id="preview">
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-offset-2 col-md-8" style={{position: 'relative'}}>
                                <div style={{position: 'absolute', top: '-60px', right: '10px', fontSize: '40px', cursor: 'pointer'}} onClick={()=>{window.close()}}>&times;</div>
                                <div className="text-right">
                                    <div className="title3 mb5_">Invoice #{this.state.invoiceNo}</div>
                                    <div className="small">{this.state.date.getDate()+' '+this.state.months[this.state.date.getMonth()]+' '+this.state.date.getFullYear()}</div>
                                </div>
                                <div className="row mt30_">
                                    <div className="col-xs-12 col-md-6 mt30_">
                                        <div className="title3 mb5_">To</div>
                                        <div className="">{this.state.name}</div>
                                        <div className="">{this.state.phoneNumber}</div>
                                        <div className="">{this.state.email}</div>
                                        <div className="">{this.state.al1}</div>
                                        <div className="">{this.state.al2}</div>
                                        <div className="">{this.state.state+' '+this.state.city}</div>
                                        <div className="">{this.state.country}</div>
                                        <div className="">{this.state.zip}</div>
                                    </div>  
                                    <div className="col-xs-12 col-md-6 mt30_">
                                        <div className="title3 mb5_">From</div>
                                        <div className="">{this.state.from}</div>
                                        <div className="">{this.state.fromEmail}</div>
                                    </div>                            
                                </div>
                                <div className="row mt60_ mb60_" style={{borderTop: '1px solid #191919',borderBottom: '1px solid #191919', padding: '60px 0'}}>
                                    <div className="col-xs-12">
                                        <div className="row" style={{padding: '15px 0'}}>
                                            <div className="col-xs-8"><b>Invoice products & services</b></div>
                                            <div className="col-xs-4 text-right"><b>Amount</b></div>
                                        </div>
                                        {
                                            this.state.items.map((data, i)=>{
                                                return (
                                                    <div key={i} className="row" style={{borderBottom: '1px solid #D7D7D7', padding: '15px 0'}}>
                                                        <div className="col-xs-7">
                                                            <div>{data.product}</div>
                                                            <div className="small">Quantity: {data.quantity}</div>
                                                        </div>
                                                        <div className="col-xs-5 text-right" style={{wordBreak: 'break-all'}}>{(data.price * data.quantity)+' '+this.state.fiat}</div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>                            
                                </div>
                                <div className="row">
                                    <div className="col-xs-12 text-right">
                                        <div className="title2 mb5_">Total</div>
                                        <div className="title2 mb5_">{this.state.amount+' '+this.state.fiat}</div>
                                        <div className="small">Payment due {this.state.due}</div>
                                    </div>
                                </div>
                                <div className="row mt30_">
                                    <div className="col-xs-12 text-right">
                                        <button className="btn_">Make payment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>  
        );
    }
    
    componentDidMount(){
        this.setState({
            invoiceNo: this.props.data.invoice_number,
            name: this.props.data.customer_name,
            email: this.props.data.customer_email,
            from: this.props.data.merchant_name,
            fromEmail: this.props.data.merchant_email,
            due: this.props.data.invoice_date,
            fiat: this.props.data.fiat,
            items: this.props.data.items,
            amount: this.props.data.amount,
            phoneNumber: this.props.data.phone_number,
            al1: this.props.data.al1,
            al2: this.props.data.al2,
            city: this.props.data.city,
            state: this.props.data.state,
            country: this.props.data.country,
            zip: this.props.data.zip
        })


        QRCode.toDataURL('The data will ahve payemnt details for the sender.. Need to talk to wallet providers about how to send them data')
        .then(url => {
            this.setState({qr: url})
        })
        .catch(err => {
            console.error(err)
        })
    }

    componentDidUpdate(){ 
          
    }

    expandList(e){
        if(e.target.classList.contains('fa-chevron-down')){
            e.target.classList.remove('fa-chevron-down')
            e.target.classList.add('fa-chevron-up')
            this.setState({expandOnlineList: ''})
        } else if(e.target.classList.contains('fa-chevron-up')){
            e.target.classList.remove('fa-chevron-up')
            e.target.classList.add('fa-chevron-down')
            this.setState({expandOnlineList: 'hide'})
        }
    }


}

export default Main;