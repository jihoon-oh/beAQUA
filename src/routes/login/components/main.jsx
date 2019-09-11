import React                        from 'react';
import {NavLink}                    from 'react-router-dom';
import QRCode                       from 'qrcode'
import {toast}                      from 'react-toastify';

import {post_}                      from '../../../function/fetch'
import {variables}                  from '../../../function/variables'
import {getCookie}                  from '../../../function/cookies'
import {timeRemaining}              from '../../../function/timeRemaining'


class Main extends React.Component {
    static propTypes = {

    };

    constructor(props){
      super(props);

      this.state = {
        isLoggedIn: false,
        onlinePaymentOptionWallet: 'hide',
        onlinePaymentOptionCopy: 'hide',
        onlinePaymentOption: 'hide',
        sendingAddressSent: 'hide',
        qr: '',
        sending_address: '',
        selectedCrypto: '',
        crypto_amount: '',
        contract_address: '',
        receiving_address: '',
        rate: '',
        id: '',
        enterAddress: '',
        expire: '',
        expireTimer: ''
      }
    }

    render() { 
        return (
            <>
                <div id="payment_">
                    <img id="logo" src={this.props.Logo} alt={variables('name')} title={variables('name')} className="img-responsive col-xs-12" style={{position: 'fixed', top: '50%', left: '50%', transform: 'translate(50%, 50%)'}} />
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-md-offset-3 col-md-6" style={{position: 'relative'}}>
                                <div id="aqua_______body">
                                    <div className="aqua_______header">
                                        <div className="row">
                                            <div className="col-xs-12 col-md-5">
                                                <img src={this.props.LogoW} className="img-responsive" alt={variables('name')} title={variables('name')} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="aqua_______paymentDetails row">
                                        <div className="col-xs-6"><b>{this.props.data.payment.merchant_name}</b></div>
                                        <div className="col-xs-6 text-right">{this.props.data.payment.total} {this.props.data.payment.currency} <span className="cursorPointer fas fa-chevron-down" onClick={(e)=>{this.expandList(e)}}></span></div>
                                        <div className={this.state.expandOnlineList}>
                                            <div className="col-xs-12">
                                                <div className="row" style={{padding: '15px 0'}}>
                                                    <div className="col-xs-8"><b>Products & services</b></div>
                                                    <div className="col-xs-4 text-right"><b>Total</b></div>
                                                </div>
                                            </div>
                                            <div  className=" col-xs-12">
                                                {
                                                    this.props.data.items.map((data, i)=>{
                                                        return (
                                                            <div key={i} className="row" style={{borderTop: '1px solid #D7D7D7', padding: '15px 0'}}>
                                                                <div className="col-xs-6">
                                                                    <div>{data.product}</div>
                                                                    <div className="small">Quantity: {data.quantity}</div>
                                                                    <div className="small">Unit price: {data.price} {this.props.data.payment.currency}</div>
                                                                </div>
                                                                <div className="col-xs-6 text-right">{(data.total)+' '+this.props.data.payment.currency}</div>
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
                                                    {
                                                        this.props.data.accepted_crypto.map((data, i)=>{
                                                            return (
                                                                <div key={i} onClick={()=>{this.activatePayment(data.id)}}>
                                                                    <div>
                                                                        <img src={'http://127.0.0.1/AQUA-Ecosystem/aquapay/public/cryptocurrency/'+data.img} title={data.id} alt={data.id} className="img-responsive" />
                                                                        <div>{data.symbol}</div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        })
                                                    }
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
                                                        {timeRemaining(this.state.expireTimer)}
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
                                                        <div>{this.state.crypto_amount} {this.state.selectedCrypto}</div>
                                                        <div className="small"><i>1 {this.state.selectedCrypto} = {this.state.rate} {this.props.data.payment.currency}</i></div>
                                                    </div>
                                                    <div className="text-left">
                                                        {/* <div className="">Wallets to pay with</div> */}
                                                        <div className="title1 text-center mt30_ mb15_">Coming soon</div>
                                                        <div className="title3 text-center">Please navigate to Copy address</div>
                                                        {/* <div>
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
                                                        <img src={this.state.qr} alt="qrcode" title="qrcode" className="img-responsive" /> */}
                                                    </div>
                                                </div>
                                                
                                            </div>
                                            <div className={this.state.onlinePaymentOptionCopy}>
                                                <div className="mt30_">
                                                    <div className={this.state.enterAddress}>
                                                        <div className="mb15_ red_">
                                                            Before you send your {this.state.selectedCrypto}, please enter the address you're going to be sending from. Once you click submit the timer will reset and a new price may be generated.
                                                        </div>
                                                        <div className="text-left">
                                                            <label>Your sending address</label>
                                                            <input className="form-control" type="text" value={this.state.sending_address} onChange={(e)=>{this.setState({sending_address: e.target.value})}} />
                                                        </div>
                                                        <div className="mt15_ text-right">
                                                            <button className="btn_" 
                                                                onClick={(e)=>{
                                                                    e.target.disabled = true;
                                                                    post_(
                                                                        e.target,
                                                                        '/create/submitSendingAddress/', 
                                                                        'Error submitting your address',
                                                                        JSON.stringify({
                                                                            id:                 this.props.id,
                                                                            id_:                this.state.id,
                                                                            address:            this.state.sending_address 
                                                                        })
                                                                    ).then(data=>{
                                                                        if(data){
                                                                            if(data.status === 'success'){
                                                                                this.expireTimer()
                                                                                this.setState({
                                                                                    sendingAddressSent: '',
                                                                                    enterAddress: 'hide',
                                                                                    expire: data.expire
                                                                                });
                                                                            }
                                                                        }
                                                                    })
                                                                }}
                                                            >Next</button>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={this.state.sendingAddressSent}>
                                                    <div className="text-center mt15_">
                                                        <div>{this.state.crypto_amount} {this.state.selectedCrypto}</div>
                                                        <div className="small"><i>1 {this.state.selectedCrypto} = {this.state.rate} {this.props.data.payment.currency}</i></div>
                                                    </div>
                                                    <div className="mt30_">
                                                        <div>
                                                            Please send <b>{this.state.crypto_amount} {this.state.selectedCrypto}</b> to the address below.
                                                        </div>
                                                    </div>
                                                    <div className="mt45_ text-left">
                                                        <div className="mb15_">
                                                            <label>Amount</label>
                                                            <input className="form-control" value={this.state.crypto_amount+' '+this.state.selectedCrypto} type="text" readOnly="readonly" />
                                                        </div>
                                                        <div>
                                                            <label>Address</label>
                                                            <input className="form-control" value={this.state.receiving_address} type="text" readOnly="readonly" />
                                                        </div>
                                                    </div>
                                                    <CheckContractAddress contract_address={this.state.contract_address} network={this.state.network} />
                                                </div>
                                            </div>
                                            <div className="mt30_ cursorPointer"><u onClick={()=>{window.open('/faq', '_blank')}}>Need help paying?</u></div>
                                        </div>
                                    </div>
                                </div>
                                <GoBack type={this.props.data.payment.type} />
                            </div>
                        </div>
                    </div>
                </div> 
            </>  
        );
    }
    
    componentDidMount(){

    }

    expandList(e){
        if(e.target.classList.contains('fa-chevron-down')){
            e.target.classList.remove('fa-chevron-down')
            e.target.classList.add('fa-chevron-up')
            this.setState({expandOnlineList: 'hide'})
        } else if(e.target.classList.contains('fa-chevron-up')){
            e.target.classList.remove('fa-chevron-up')
            e.target.classList.add('fa-chevron-down')
            this.setState({expandOnlineList: ''})
        }
    }

    generate_qr(a){
        return QRCode.toDataURL(a, {
            color: {
                dark: '#005AC6',  // Blue dots
                light: '#0000' // Transparent background
            },
            rendererOpts: {
                quality: 1
            },
            scale: 10
        })
        .then(data => {
            this.setState({qr: data})
            return true
        })
        .catch()
    }

    activatePayment(a){
        fetch(variables('api')+'/create/activatePayment/', {method: 'POST',headers: {'Accept': 'application/json','Content-Type': 'application/json'},
            body: JSON.stringify({
                id:                 this.props.id,
                crypto:             a
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 'success'){
                this.generate_qr(variables('accountsApi')+variables('accountsApi')).then((qr_data)=>{
                    if(qr_data === true){
                        this.setState({
                            onlinePaymentMethod: 'hide', 
                            onlinePaymentOption: '', 
                            cryptoCurrencySelected: '', 
                            onlinePaymentOptionWallet: '', 
                            activePaymentOptionWallet: 'activePaymentOption',
                            selectedCrypto: data.data.symbol,
                            crypto_amount: data.data.amount,
                            contract_address: data.data.contract_address,
                            receiving_address: data.data.address,
                            rate: data.data.rate,
                            expire: data.data.expire,
                            id: data.data.id
                        });
                        this.expireTimer()
                    } else {
                        toast.error('Error, please try again', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: false});
                    }
                })                
            } else if(data.status === 'error'){
                toast.error(data.message, {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: false});
            } else {
                toast.error('Error, please try again', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: false});
            }
        })
        .catch(() => {
            toast.error('Error, please try again', {position: "top-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: false});
        });
    }

    expireTimer(){
        if(this.state.expire.length > 0){
            var timer =  setInterval(()=>{
                var time = (this.state.expire - (Math.floor(Date.now() / 1000)))
                if(time >= 0){
                    this.setState({expireTimer: time})
                } else {
                    this.setState({expireTimer: ''})
                    clearInterval(timer)
                }
            }, 1000)
        }
    }
}

export default Main;


class GoBack extends React.Component {
    render(){
        if(this.props.type === 'Payment'){
            return <div className="text-center mt30_ btn_" onClick={()=>{window.history.go(-1)}}>Go back</div>
        }
        return <></>
    }
}

class CheckContractAddress extends React.Component {
    render(){
        if(this.props.contract_address.length > 0 && this.props.network === 'Ethereum'){
            return (
                <div className="mt45_ text-left">
                    <div>
                        <div className="title3">Double check contract address?</div>
                        <label>Contract address (ERC20 Token)</label>
                        <input className="form-control" value={this.props.contract_address} type="text" readOnly="readonly" />
                    </div>
                </div>
            )
        }
        return <></>
    }
}



