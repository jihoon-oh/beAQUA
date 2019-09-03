import React                        from 'react';
import {NavLink}                    from 'react-router-dom';

import {variables}                  from '../../../function/variables'

class Plans extends React.Component {
    static propTypes = {

    };

    constructor(props){
      super(props);

      this.state = {
          
      }
    }

    render() { 
        if(this.props.plan === 'free'){
            return (
                <div className="pricing_package">
                    {/* <div className="mb5_">
                        <span className="fas fa-check"></span> <b>1 user</b>
                    </div> */}
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Online payments</b>
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Limited analytical insight</b> <sup className="fas fa-info-circle"></sup>  
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>1 fiat conversion rate</b> 
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>1 cryptocurrency</b>
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Face to face payments</b> <sup className="fas fa-info-circle"></sup>
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Basic intergrations</b> <sup className="fas fa-info-circle"></sup>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Email receipts to customers</div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Create invoices</div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Recurring invoices</div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Advanced payments sorting <sup className="fas fa-info-circle"></sup></div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Real time analytics</div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Goal settings <sup className="fas fa-info-circle"></sup></div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Change minimum required confirmations <sup className="fas fa-info-circle"></sup></div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">SMS notifications <sup className="fas fa-info-circle"></sup></div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Over the phone payments <sup className="fas fa-info-circle"></sup></div>
                    </div>
                    {/* <div className="mb5_">
                        <div className="pricingNotIncluded">Multiple receiving addresses <sup className="fas fa-info-circle"></sup></div>
                    </div> */}
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Import historical data <sup className="fas fa-info-circle"></sup></div>
                    </div>
                </div>
            )
        } else if(this.props.plan === 'starter'){
            return (
                <div className="pricing_package">
                    {/* <div className="mb5_">
                        <span className="fas fa-check"></span> <b>1 user</b>
                    </div> */}
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Online payments</b>
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Limited analytical insight</b> <sup className="fas fa-info-circle"></sup>  
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>5 fiat conversion rates</b> 
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>5 cryptocurrencies</b>
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Face to face payments</b> <sup className="fas fa-info-circle"></sup>
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Basic intergrations</b> <sup className="fas fa-info-circle"></sup>
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Email receipts to customers</b> 
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Create invoices</b>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Recurring invoices</div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Advanced payments sorting <sup className="fas fa-info-circle"></sup></div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Real time analytics</div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Goal settings <sup className="fas fa-info-circle"></sup></div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Change minimum required confirmations <sup className="fas fa-info-circle"></sup></div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">SMS notifications <sup className="fas fa-info-circle"></sup></div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Over the phone payments <sup className="fas fa-info-circle"></sup></div>
                    </div>
                    {/* <div className="mb5_">
                        <div className="pricingNotIncluded">Multiple receiving addresses <sup className="fas fa-info-circle"></sup></div>
                    </div> */}
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Import historical data <sup className="fas fa-info-circle"></sup></div>
                    </div>
                </div>               
            )
        } else if(this.props.plan === 'essential'){
            return (
                <div className="pricing_package">
                    {/* <div className="mb5_">
                        <span className="fas fa-check"></span> <b>1 user</b>
                    </div> */}
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Online payments</b>
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Full analytical insight</b> <sup className="fas fa-info-circle"></sup>
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Unlimited fiat conversion rates</b> 
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Unlimited cryptocurrencies</b>
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Face to face payments</b> <sup className="fas fa-info-circle"></sup>
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Basic intergrations</b> <sup className="fas fa-info-circle"></sup>
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Email receipts to customers</b> 
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Create invoices</b>
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Recurring invoices</b>
                    </div>
                    <div className="mb5_">
                        <span className="fas fa-check"></span> <b>Advanced payments sorting</b> <sup className="fas fa-info-circle"></sup>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Real time analytics</div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Goal settings <sup className="fas fa-info-circle"></sup></div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Change minimum required confirmations <sup className="fas fa-info-circle"></sup></div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">SMS notifications <sup className="fas fa-info-circle"></sup></div>
                    </div>
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Over the phone payments <sup className="fas fa-info-circle"></sup></div>
                    </div>
                    {/* <div className="mb5_">
                        <div className="pricingNotIncluded">Multiple receiving addresses <sup className="fas fa-info-circle"></sup></div>
                    </div> */}
                    <div className="mb5_">
                        <div className="pricingNotIncluded">Import historical data <sup className="fas fa-info-circle"></sup></div>
                    </div>
                </div>             
            )
        } else if(this.props.plan === 'pro'){
            return (
                <>
                    <div className="pricing_package">
                        {/* <div className="mb5_">
                            <span className="fas fa-check"></span> <b>3 users<sup>1</sup></b>
                        </div> */}
                        <div className="mb5_">
                            <span className="fas fa-check"></span> <b>Online payments</b>
                        </div>
                        <div className="mb5_">
                            <span className="fas fa-check"></span> <b>Full analytical insight</b> <sup className="fas fa-info-circle"></sup>
                        </div>
                        <div className="mb5_">
                            <span className="fas fa-check"></span> <b>Unlimited fiat conversion rates</b> 
                        </div>
                        <div className="mb5_">
                            <span className="fas fa-check"></span> <b>Unlimited cryptocurrencies</b>
                        </div>
                        <div className="mb5_">
                            <span className="fas fa-check"></span> <b>Face to face payments</b> <sup className="fas fa-info-circle"></sup>
                        </div>
                        <div className="mb5_">
                            <span className="fas fa-check"></span> <b>Advanced intergrations</b> <sup className="fas fa-info-circle"></sup>
                        </div>
                        <div className="mb5_">
                            <span className="fas fa-check"></span> <b>Email receipts to customers</b> 
                        </div>
                        <div className="mb5_">
                            <span className="fas fa-check"></span> <b>Create invoices</b>
                        </div>
                        <div className="mb5_">
                            <span className="fas fa-check"></span> <b>Recurring invoices</b>
                        </div>
                        <div className="mb5_">
                            <span className="fas fa-check"></span> <b>Advanced payments sorting</b> <sup className="fas fa-info-circle"></sup>
                        </div>
                        <div className="mb5_">
                            <span className="fas fa-check"></span> <b>Real time analytics</b>
                        </div>
                        <div className="mb5_">
                            <span className="fas fa-check"></span> <b>Goal settings</b> <sup className="fas fa-info-circle"></sup>
                        </div>
                        <div className="mb5_">
                            <span className="fas fa-check"></span> <b>Change minimum required confirmations</b> <sup className="fas fa-info-circle"></sup>
                        </div>
                        <div className="mb5_">
                            <span className="fas fa-check"></span> <b>SMS notifications</b> <sup className="fas fa-info-circle"></sup> 
                        </div>
                        <div className="mb5_">
                            <span className="fas fa-check"></span> <b>Over the phone payments</b> <sup className="fas fa-info-circle"></sup>
                        </div>
                        {/* <div className="mb5_">
                            <span className="fas fa-check"></span> <b>Multiple receiving addresses</b> <sup className="fas fa-info-circle"></sup>
                        </div> */}
                        <div className="mb5_">
                            <span className="fas fa-check"></span> <b>Import historical data</b> <sup className="fas fa-info-circle"></sup>
                        </div>
                    </div>
                    <div className="mt30_">
                        <sup>1</sup> $10 per extra user
                    </div>
                    <div className="pricing_bespoke">
                        <div className="">Need a bespoke solution? Contact sales for pricing & solutions</div>
                    </div>
                </>
            )
        }
        return <></>
    }
    
}

export default Plans;