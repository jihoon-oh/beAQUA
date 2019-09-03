import React                        from 'react';

import {currency_, post_, user_}    from '../../../../function/fetch'
import {getCookie}                  from '../../../../function/cookies'

class Main extends React.Component {
    constructor(props){
      super(props);

     this.state = {
        currencySearch: '',
        currentCurrencies: [],
        currentFiatCurrencies: [],
        currenciesToAdd: [],
        fiatToAdd: [],
        bitcoinAddress: '',
        ethereumAddress: '',
        bitcoinConfirmation: 1,
        ethereumConfirmation: 15,
     }
    }

    render() { 
        return (
            <>
                <div id="dashSetup">
                    <div className="container-fluid">
                        <div className="row mb60_">
                            <div className="col-xs-12 col-md-offset-2 col-md-4">
                                <label>Cryptocurrencies available</label>
                                <div className="scrollableBox">
                                    <div className="">
                                        {
                                            this.state.currenciesToAdd.map((data, i) =>{
                                                return <div key={i} onClick={()=>{
                                                    post_(
                                                        null, 
                                                        '/update/currency/', 
                                                        'Error adding currency', 
                                                        JSON.stringify({
                                                            token:              getCookie('token'),
                                                            access_token:       getCookie('access_token'),
                                                            type:               'crypto',
                                                            action:             'add',
                                                            currency_id:        data.id,
                                                        })
                                                    ).then(()=>{
                                                        user_().then(data=>{
                                                            this.setState({
                                                                currentCurrencies:      data.accepted_crypto,
                                                            });
                                                        })
                                                    }).catch(()=>{})
                                                }}>({data.symbol}) {data.name}</div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <label>Currently accepting</label>
                                <div className="scrollableBox">
                                    <div className="">
                                        {
                                            this.state.currentCurrencies.map((data, i) =>{
                                                return <div key={i} onClick={()=>{
                                                    post_(
                                                        null, 
                                                        '/update/currency/', 
                                                        'Error removing currency', 
                                                        JSON.stringify({
                                                            token:              getCookie('token'),
                                                            access_token:       getCookie('access_token'),
                                                            type:               'crypto',
                                                            action:             'remove',
                                                            currency_id:        data.id,
                                                        })
                                                    ).then(()=>{
                                                        user_().then(data=>{
                                                            this.setState({
                                                                currentCurrencies:      data.accepted_crypto,
                                                            });
                                                        })
                                                    }).catch(()=>{})
                                                }}>({data.symbol}) {data.name}</div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mb60_">
                            <div className="col-xs-12 col-md-offset-2 col-md-4">
                                <label>Fiat currencies available</label>
                                <div className="scrollableBox">
                                    <div className="">
                                        {
                                            this.state.fiatToAdd.map((data, i) =>{
                                                return <div key={i} onClick={()=>{
                                                    post_(
                                                        null, 
                                                        '/update/currency/', 
                                                        'Error adding currency', 
                                                        JSON.stringify({
                                                            token:              getCookie('token'),
                                                            access_token:       getCookie('access_token'),
                                                            type:               'fiat',
                                                            action:             'add',
                                                            currency_id:        data.id,
                                                        })
                                                    ).then(()=>{
                                                        user_().then(data=>{
                                                            this.setState({
                                                                currentFiatCurrencies:  data.accepted_fiat,
                                                            });
                                                        })
                                                    }).catch(()=>{})
                                                }}>({data.symbol}) {data.name}</div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-4">
                                <label>Currently added</label>
                                <div className="scrollableBox">
                                    <div className="">
                                        {
                                            this.state.currentFiatCurrencies.map((data, i) =>{
                                                return <div key={i} onClick={()=>{
                                                    post_(
                                                        null, 
                                                        '/update/currency/', 
                                                        'Error removing currency', 
                                                        JSON.stringify({
                                                            token:              getCookie('token'),
                                                            access_token:       getCookie('access_token'),
                                                            type:               'fiat',
                                                            action:             'remove',
                                                            currency_id:        data.id,
                                                        })
                                                    ).then(()=>{
                                                        user_().then(data=>{
                                                            this.setState({
                                                                currentFiatCurrencies:  data.accepted_fiat,
                                                            });
                                                        })
                                                    }).catch(()=>{})
                                                }}>({data.symbol}) {data.name}</div>
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-offset-2 col-md-8">
                            <div className="row mb60_">
                                <div>
                                    <div className="col-xs-12 col-md-9">
                                        <label>Add your Bitcoin address</label>
                                        <input className="form-control" placeholder="" type="text" value={this.state.bitcoinAddress} onChange={(e)=>{this.setState({bitcoinAddress: e.target.value})}} />
                                    </div>
                                    <div className="col-xs-12 col-md-3">
                                        <label>Confirmations</label>
                                        <input className="form-control" placeholder="" type="number" defaultValue="1" min="1" max="999" value={this.state.bitcoinConfirmation} onChange={(e)=>{this.setState({bitcoinConfirmation: e.target.value})}} />
                                    </div>
                                </div>
                                <div>
                                    <div className="col-xs-12"> 
                                        <label>&nbsp;</label>  
                                        <div className="text-right">
                                            <button className="btn_" onClick={(e)=>{
                                                post_(
                                                    e.target, 
                                                    '/update/cryptoAddress/', 
                                                    'Error updating address', 
                                                    JSON.stringify({
                                                        token:              getCookie('token'),
                                                        access_token:       getCookie('access_token'),
                                                        network:            'bitcoin',
                                                        address:            this.state.bitcoinAddress,
                                                        confirmations:      this.state.bitcoinConfirmation,
                                                    })
                                                )
                                            }}>Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb60_">
                                <div>
                                    <div className="col-xs-12 col-md-9">
                                        <label>Add your Ethereum address</label>
                                        <input className="form-control" placeholder="" type="text" value={this.state.ethereumAddress} onChange={(e)=>{this.setState({ethereumAddress: e.target.value})}} />
                                    </div>
                                    <div className="col-xs-12 col-md-3">
                                        <label>Confirmations</label>
                                        <input className="form-control" placeholder="" type="number" defaultValue="15" min="1" max="999" value={this.state.ethereumConfirmation} onChange={(e)=>{this.setState({ethereumConfirmation: e.target.value})}} />
                                    </div>
                                </div>
                                <div>
                                    <div className="col-xs-12"> 
                                        <label>&nbsp;</label>  
                                        <div className="text-right">
                                            <button className="btn_" onClick={(e)=>{
                                                post_(
                                                    e.target, 
                                                    '/update/cryptoAddress/', 
                                                    'Error updating address', 
                                                    JSON.stringify({
                                                        token:              getCookie('token'),
                                                        access_token:       getCookie('access_token'),
                                                        network:            'ethereum',
                                                        address:            this.state.ethereumAddress,
                                                        confirmations:      this.state.ethereumConfirmation,
                                                    })
                                                )
                                            }}>Update</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row mb60_">
                                <div className="col-xs-12 col-md-12">
                                    <label>Do you want send your customers an email receipt after they've paid?</label>
                                    <div className="row">
                                        <div className="col-xs-6 col-md-3">
                                            <div className="btn_inv" id="emailReceiptYes" onClick={
                                                (e)=>{
                                                    post_(
                                                        e.target, 
                                                        '/update/emailReceipt/', 
                                                        'Error updating email receipt', 
                                                        JSON.stringify({
                                                            token:              getCookie('token'),
                                                            access_token:       getCookie('access_token'),
                                                            email_receipt:      'yes',
                                                        })
                                                    )
                                                    e.target.classList.remove('btn_inv')
                                                    e.target.classList.add('btn_')
                                                    document.getElementById('emailReceiptNo').classList.remove('btn_')
                                                    document.getElementById('emailReceiptNo').classList.add('btn_inv')
                                                    this.setState({emailReceipt: true})
                                                }
                                            }>yes</div>
                                        </div>
                                        <div className="col-xs-6 col-md-3">
                                            <div className="btn_inv" id="emailReceiptNo" onClick={
                                                (e)=>{
                                                    post_(
                                                        e.target, 
                                                        '/update/emailReceipt/', 
                                                        'Error updating email receipt', 
                                                        JSON.stringify({
                                                            token:              getCookie('token'),
                                                            access_token:       getCookie('access_token'),
                                                            email_receipt:      'no',
                                                        })
                                                    )
                                                    e.target.classList.remove('btn_inv')
                                                    e.target.classList.add('btn_')
                                                    document.getElementById('emailReceiptYes').classList.remove('btn_')
                                                    document.getElementById('emailReceiptYes').classList.add('btn_inv')
                                                    this.setState({emailReceipt: false})
                                                }
                                            }>No</div>
                                        </div>
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
        currency_('crypto').then(data=>{
            this.setState({
                currenciesToAdd: data.crypto
            })
        })
        currency_('fiat').then(data=>{
            this.setState({
                fiatToAdd: data.fiat
            })
        })
        this.setState({
            currentCurrencies: this.props.user.accepted_crypto,
            currentFiatCurrencies:  this.props.user.accepted_fiat,
            bitcoinAddress: this.props.user.bitcoin_address,
            ethereumAddress: this.props.user.bitcoin_address,
            bitcoinConfirmation: this.props.user.bitcoin_confirmations,
            ethereumConfirmation: this.props.user.ethereum_confirmations
        })

        if(this.props.user.email_receipt === '0'){
            document.getElementById('emailReceiptNo').classList.add('btn_')
            document.getElementById('emailReceiptNo').classList.remove('btn_inv')
            document.getElementById('emailReceiptYes').classList.remove('btn_')
            document.getElementById('emailReceiptYes').classList.add('btn_inv')
        }
        if(this.props.user.email_receipt === '1'){
            document.getElementById('emailReceiptYes').classList.add('btn_')
            document.getElementById('emailReceiptYes').classList.remove('btn_inv')
            document.getElementById('emailReceiptNo').classList.remove('btn_')
            document.getElementById('emailReceiptNo').classList.add('btn_inv')
        }

    }

}

export default Main;