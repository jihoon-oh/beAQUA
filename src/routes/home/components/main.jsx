import React                        from 'react';
import {variables}                  from '../../../function/variables'

import icon1                        from '../../../assets/img/icons/001.png'
import icon2                        from '../../../assets/img/icons/005.png'
import icon3                        from '../../../assets/img/icons/007.png'
import icon4                        from '../../../assets/img/icons/012.png'
import icon5                        from '../../../assets/img/icons/019.png'
import icon6                        from '../../../assets/img/icons/010.png'
import icon7                        from '../../../assets/img/icons/025.png'
import icon8                        from '../../../assets/img/icons/028.png'
import icon9                        from '../../../assets/img/icons/031.png'
import icon10                       from '../../../assets/img/icons/033.png'
import icon11                       from '../../../assets/img/icons/034.png'
import icon12                       from '../../../assets/img/icons/035.png'
import icon13                       from '../../../assets/img/icons/036.png'

import aquaStripe                   from '../../../assets/img/AQUA_STRIPE_BG-02.png'

class Main extends React.Component {
    static propTypes = {

    };

    constructor(props){
      super(props);

      this.state = {

      }
    }

    render() { 
        return (
            <>
              <div id="home" style={{backgroundImage: 'URL("'+aquaStripe+'")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}>
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xs-12 col-md-6">
                      
                    </div>
                    <div className="col-xs-12 col-md-6">
                      
                    </div>
                  </div>
                </div>
              </div>
              <div id="home2">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xs-12 col-md-4">
                      <div><img src={icon1} alt="" title="" className="img-responsive invertImg" /></div>
                      <div className="title2">Easy to use</div>
                      <div className="mt15_">
                        Our simple UI makes it easy to adapt and use all our features
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                      <div><img src={icon2} alt="" title="" className="img-responsive invertImg" /></div>
                      <div className="title2">Decentralized, Secure, No middle man</div>
                      <div className="mt15_">
                        All payments get sent directly to your wallet from your customers wallet, we never touch your funds
                      </div>
                    </div>
                    <div className="col-xs-12 col-md-4">
                      <div><img src={icon3} alt="" title="" className="img-responsive invertImg" /></div>
                      <div className="title2">Always innovating</div>
                      <div className="mt15_">
                        We're always adding new features to make your life easier and experience better
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div id="home3">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xs-12 text-center">
                      <div className="title1">Different ways to accept payment</div>
                    </div>
                    <div className="col-xs-12 col-md-3">
                      <div className="title2">Online</div>
                      <div><img src={icon4} alt="" title="" className="img-responsive" /></div>
                      <div>Figure out your day to day so you can live your day to day</div>
                    </div>
                    <div className="col-xs-12 col-md-3">
                      <div className="title2">Create invoices</div>
                      <div><img src={icon5} alt="" title="" className="img-responsive" /></div>
                      <div>Send an invoice, never look back</div>
                    </div>
                    <div className="col-xs-12 col-md-3">
                      <div className="title2">Over the phone</div>
                      <div><img src={icon6} alt="" title="" className="img-responsive" /></div>
                      <div>Currently in development! {variables('name')} will be on the move, right with you</div>
                    </div>
                    <div className="col-xs-12 col-md-3">
                      <div className="title2">Face to face</div>
                      <div><img src={icon7} alt="" title="" className="img-responsive" /></div>
                      <div>QR codes in a snap, ready for your bank</div>
                    </div>
                  </div>
                </div>
                {/* <div className="container-fluid mt60_">
                  <div className="row">
                    <div className="col-xs-4 col-md-2">
                      <div>Merchant Logos</div>
                    </div>
                    <div className="col-xs-4 col-md-2">
                      <div>Merchant Logos</div>
                    </div>
                    <div className="col-xs-4 col-md-2">
                      <div>Merchant Logos</div>
                    </div>
                    <div className="col-xs-4 col-md-2">
                      <div>Merchant Logos</div>
                    </div>
                    <div className="col-xs-4 col-md-2">
                      <div>Merchant Logos</div>
                    </div>
                    <div className="col-xs-4 col-md-2">
                      <div>Merchant Logos</div>
                    </div>
                  </div>
                </div> */}
              </div>
              <div id="home5">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xs-12 text-center">
                      <div className="title1">One solution for your payments</div>
                    </div>
                    <div className="col-xs-12 col-md-4 mt60_">
                      <div className="title2">Analytical insight</div>
                      <div><img src={icon8} alt="" title="" className="img-responsive" /></div>
                      <div>Look into your past to see how you will shape your future</div>
                    </div>
                    <div className="col-xs-12 col-md-4 mt60_">
                      <div className="title2">Fraud protection</div>
                      <div><img src={icon9} alt="" title="" className="img-responsive" /></div>
                      <div>Fraud and chargebacks are a thing of the past, payments get sent direct to you</div>
                    </div>
                    <div className="col-xs-12 col-md-4 mt60_">
                      <div className="title2">1000+ cryptocurrencies</div>
                      <div><img src={icon10} alt="" title="" className="img-responsive" /></div>
                      <div>Accept as many as you’d like, how you’d like with more added every week</div>
                    </div>
                    <div className="col-xs-12 col-md-4 mt60_">
                      <div className="title2">Get paid instantly</div>
                      <div><img src={icon11} alt="" title="" className="img-responsive" /></div>
                      <div>Your wallet belongs to you, we are simply your friend walking your way</div>
                    </div>
                    <div className="col-xs-12 col-md-4 mt60_">
                      <div className="title2">Easy intergration</div>
                      <div><img src={icon12} alt="" title="" className="img-responsive" /></div>
                      <div>Easily intergrate {variables('name')} with a large majority of software you're already used to</div>
                    </div>
                    <div className="col-xs-12 col-md-4 mt60_">
                      <div className="title2">Bespoke solutions</div>
                      <div><img src={icon13} alt="" title="" className="img-responsive" /></div>
                      <div>Need a personalized, privatized, whats your sized solution? We got that for you</div>
                    </div>
                  </div>
                </div>
              </div>
            </>  
        );
    }
    
    componentDidMount(){
      // this.homeMobileBg();
      // window.addEventListener("resize", this.homeMobileBg.bind(this));
        
    }

    // homeMobileBg(){
    //   if(document.body.clientWidth >= 992){
    //     this.setState({homeMobileBg: ''})
    //   } else {
    //     this.setState({homeMobileBg:'url('+img_1+')'})
    //   }
    // }

  
    componentWillUnmount() {
      // window.removeEventListener("resize", this.homeMobileBg.bind(this));
    }

    adjustScreen(){
        // this.homeMobileBg();
    }

    
}

export default Main;