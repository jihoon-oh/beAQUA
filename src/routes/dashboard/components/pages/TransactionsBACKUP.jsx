import React                        from 'react';
import {NavLink}                    from 'react-router-dom';

import {isNull_}                    from '../../../../function/functions'
import {variables}                  from '../../../../function/variables'
import {getCookie}                  from '../../../../function/cookies' 
import {transactions_}              from '../../../../function/fetch'

class Main extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        transactions: [],
        amountASC: '',
        amountDESC: '',
        dateASC: '',
        dateDESC: 'blue_',
        timeFrame: '1d',
        date: (new Date()).toLocaleDateString('en-CA'),
        order: 'dateDESC'
      }
    }

    render() { 
        var data = [
            {
                tid: '#2365476',
                hash: '',
                network: 'Bitcoin',
                currency: 'BTC',
                amount: 0.123456789123456789,
                fiat: 'USD',
                rate: 8000,
                product: 'Shoes',
                category: 'Uncategorised (Invoice)',
                date: '05 May 2019 12:58',//Timestamp?
                status: {
                    status: 0,
                    reason: 'Expired'
                },
                customer: {
                    address: '0xfeae7f6a94b5fac8fef5e66f6493ff1cd6b71173',
                    custom: 'edmond@amaning.com'
                }
            },
            {
                tid: '#56789',
                currency: 'ETH',
                amount: 7.998,
                fiat: 'USD',
                rate: 350,
                product: 'MacBook',
                category: 'Electronics',
                date: '06 Jun 2019 03:32',
                status: {
                    status: 1,
                    reason: ''
                },
                customer: {
                    address: '0xfeae7f6a94b5fac8fef5e66f6493ff1cd6b71173',
                    custom: 'edmond@amaning.com'
                }
            },
            {
                tid: '#56789',
                currency: 'ETH',
                amount: 7.99345678,
                fiat: 'USD',
                rate: 350,
                product: 'MacBook',
                category: 'Electronics',
                date: '06 Jun 2019 03:32',
                status: {
                    status: 2,
                    reason: ''
                },
                customer: {
                    address: '0xfeae7f6a94b5fac8fef5e66f6493ff1cd6b71173',
                    custom: 'edmond@amaning.com'
                }
            }
        ]
        return (
            <>
                <div id="dashTransactions">
                    <div className="container-fluid">
                        <div className="row mb30_">
                            <div className="col-xs-12 text-left">
                                <div id="dashTransactionsAll" className="chartChanger">
                                    <span onClick={(e)=>{this.activeFilter(e, 'time', '1d')}} className="chartChangerActive">1d</span>
                                    <span onClick={(e)=>{this.activeFilter(e, 'time', '1w')}}>1w</span>
                                    <span onClick={(e)=>{this.activeFilter(e, 'time', '4w')}}>4w</span>
                                    <span onClick={(e)=>{this.activeFilter(e, 'time', 'mtd')}}>Mtd</span>
                                    <span onClick={(e)=>{this.activeFilter(e, 'time', 'ytd')}}>Ytd</span>
                                    <span onClick={(e)=>{this.activeFilter(e, 'time', 'all')}}>All</span>
                                </div>
                            </div>
                            <div className="col-xs-12 col-md-3 text-left mb30_">    
                                <input className="form-control" placeholder="" type="date"  value={this.state.date} 
                                    onChange={
                                        (e)=>{
                                            this.setState({date: e.target.value})
                                            transactions_(this.state.timeFrame, e.target.value, this.state.order)
                                            .then((data)=>{
                                                this.setState({
                                                    transactions: data,
                                                });
                                            })
                                        }
                                    } 
                                />
                            </div>
                            {/* <div className="col-xs-12 col-md-1 hidden-sm hidden-xs text-center" style={{paddingTop: '15px'}}>-</div>
                            <div className="col-xs-12 col-md-3 text-left mb30_">    
                                <input className="form-control" placeholder="" type="date" value={(new Date()).toLocaleDateString('en-CA')} />
                            </div> */}
                        </div>
                        <div className="row">
                            <div className="col-xs-12">
                                <div className="col-xs-12 col-md-3">
                                    Amount <span onClick={(e)=>{this.reOrder(e, 'amount', 'asc')}} className={"fas fa-sort-numeric-up-alt "+this.state.amountASC}></span> <span onClick={(e)=>{this.reOrder(e, 'amount', 'desc')}} className={"fas fa-sort-numeric-down-alt "+this.state.amountDESC}></span>
                                </div>
                                <div className="col-xs-12 col-md-2">
                                    Type
                                </div>
                                <div className="col-xs-12 col-md-3 hidden-sm hidden-xs">
                                    Customer 
                                </div>
                                <div className="col-xs-12 col-md-2">
                                    Date <span onClick={(e)=>{this.reOrder(e, 'date', 'asc')}} className={"fas fa-sort-numeric-up-alt "+this.state.dateASC}></span> <span onClick={(e)=>{this.reOrder(e, 'date', 'desc')}} className={"fas fa-sort-numeric-down-alt "+this.state.dateDESC}></span>
                                </div>
                            </div>
                            <div className="col-xs-12">
                                <Transactions transactions={this.state.transactions} />
                            </div>
                            <LoadMoreTransactions transactions={this.state.transactions} />
                        </div>
                    </div>

                   
                </div>
            </>  
        );
    }
    
    componentDidMount() {
        this.setState({
            mainViewWidth: (document.querySelector('.chartContainer').offsetWidth * 0.95),
            mainViewHeight: (document.getElementById('dashboardMainView').offsetHeight * 0.3),
            overviewPlanLabelHeight: document.getElementById('overviewPlanLabel').offsetHeight
        })

        transactions_(this.state.timeFrame, this.state.date, this.state.order)
        .then((data)=>{
            this.setState({
                transactions: data,
            });
        })
    }

    componentDidUpdate(){
        
    }

    reOrder(e, a, b){
        if(a === 'amount'){
            if(b === 'desc'){
                this.setState({
                    amountASC: '',
                    amountDESC: 'blue_',
                    dateASC: '',
                    dateDESC: '',
                })
                transactions_(this.state.timeFrame, this.state.date, 'amountDESC')
                .then((data)=>{
                    this.setState({
                        transactions: data,
                    });
                })
            } else if(b === 'asc') {
                this.setState({
                    amountASC: 'blue_',
                    amountDESC: '',
                    dateASC: '',
                    dateDESC: '',
                })
                transactions_(this.state.timeFrame, this.state.date, 'amountASC')
                .then((data)=>{
                    this.setState({
                        transactions: data,
                    });
                })
            }
        }
        if(a === 'date'){
            if(b === 'desc'){
                this.setState({
                    dateASC: '',
                    dateDESC: 'blue_',
                    amountASC: '',
                    amountDESC: '',
                })
                transactions_(this.state.timeFrame, this.state.date, 'dateDESC')
                .then((data)=>{
                    this.setState({
                        transactions: data,
                    });
                })
            } else if(b === 'asc') {
                this.setState({
                    dateASC: 'blue_',
                    dateDESC: '',
                    amountASC: '',
                    amountDESC: '',
                })
                transactions_(this.state.timeFrame, this.state.date, 'dateASC')
                .then((data)=>{
                    this.setState({
                        transactions: data,
                    });
                })
            }
        }
    }

    activeFilter(e, a, b){
        document.querySelector('#dashTransactionsAll .chartChangerActive').classList.remove('chartChangerActive');
        e.target.classList.add('chartChangerActive')
        this.setState({timeFrame: b});
        
        transactions_(b, this.state.date, this.state.order)
        .then((data)=>{
            this.setState({
                transactions: data,
            });
        })
    }


}

export default Main;



class TransactionStatus extends React.Component {
    constructor(props){
      super(props);

      this.state = {
          
      }
    }

    render(){
        if(this.props.status === 0){
            return <div className="label_ redBG_">Failed</div>
        }
        if(this.props.status === 1){
            return <div className="label_ greenBG_">Success</div>
        }
        if(this.props.status === 2){
            return <div className="label_ amberBG_">Pending</div>
        }
        return <></>
    }

}

class LoadMoreTransactions extends React.Component {
    constructor(props){
        super(props);
  
        this.state = {
            
        }
    }

      render(){
        if(this.props.transactions.length === 0){
            return <></>
        }
        return (
            <div className="col-xs-12 text-center mt30_ mb30_ cursorPointer">
                Load more
            </div>
        )
      }
}


class Transactions extends React.Component {
    constructor(props){
      super(props);

      this.state = {
          
      }
    }

    render(){
        if(this.props.transactions.length === 0){
            return <div className="mt30_ text-center">No data</div>
        } else {
            return this.props.transactions.map((data, i) => {
                return (
                    <div key={i}>
                        <div className="listOf_">
                            <div className="row">
                                <div className="col-xs-12 col-md-3">
                                    <div><b>{data.amount}</b> {data.currency}</div>
                                    <div className="small">({data.amount_fiat} {data.fiat})</div>
                                </div>
                                <div className="col-xs-12 col-md-2">
                                    <div><b>{data.type}</b></div>
                                </div>
                                <div className="col-xs-12 col-md-3">
                                    <div className="hidden-sm hidden-xs">{data.customer.custom}</div>
                                    <div className="small hidden-sm hidden-xs">{data.customer.address}</div>
                                </div>
                                <div className="col-xs-12 col-md-2">
                                    {data.date}
                                </div>
                                <div className="col-xs-12 col-md-1 hidden-sm hidden-xs">
                                    <TransactionStatus status={data.status.status} />
                                </div>
                                <div className="col-xs-12 col-md-1 text-right">
                                    <span className="pull-left hidden-md hidden-lg"><TransactionStatus status={data.status.status} /></span>
                                    <span className="fas fa-ellipsis-h"
                                        onClick={()=>{
                                            document.getElementById('allTrandactionsExpand_'+data.tid).classList.remove('hide')
                                        }}
                                    ></span>
                                </div>
                            </div>
                        </div>
                        <div className="listOf_ blueBG_ hide" id={'allTrandactionsExpand_'+data.tid}>
                            <div className="cursorPointer title1 text-right mb0_"
                                onClick={()=>{
                                    document.getElementById('allTrandactionsExpand_'+data.tid).classList.add('hide')
                                }}
                            >&times;</div>
                            <div className="row">
                                <div className="col-xs-12 col-md-11">
                                    
                                </div>
                                <div className="col-xs-12 col-md-1">
                                    <div className="pull-right"><TransactionStatus status={data.status.status} /></div>
                                </div>
                                <div className="col-xs-12">
                                    <div className="table-responsive">
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td><b>Transaction ID</b></td>
                                                    <td>{data.tid}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Type</b></td>
                                                    <td>{data.type}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Created</b></td>
                                                    <td>{data.date}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Network</b></td>
                                                    <td>{data.network}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Currency</b></td>
                                                    <td>{data.currency}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Transaction hash</b></td>
                                                    <td>{data.hash}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Amount</b></td>
                                                    <td>{isNull_(data.amount)+' '+isNull_(data.currency)}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Fiat amount</b></td>
                                                    <td>{data.amount_fiat+' '+data.fiat}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>{data.fiat+'/'+isNull_(data.currency)}</b></td>
                                                    <td>{data.rate}</td>
                                                </tr>
                                                <tr>
                                                    <td><b>Customer</b></td>
                                                    <td>{data.customer.address}<div>{data.customer.custom}</div></td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }
    }
}