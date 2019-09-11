import React                        from 'react'
import { NavLink }                  from 'react-router-dom'
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

import aquaLogoStripe               from '../../../assets/img/aqua_logo_stripe.png'
import stripeBackground             from '../../../assets/img/stripe_background.png' 

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
              <div id="home">
                <div className="container-fluid">
                  <div id="wrapper" className="col-sm-8 float-none">
                    <div className="row mb15_">
                        <img src={aquaLogoStripe} alt="" className="img-responsive"/>
                    </div>
                    <div className="row text-right float-right mb15_">
                        <span className="title1 blue_">Helping the world transition to a digital future on blockchain.</span>
                    </div>
                    <div className="row text-right float-right mb15_">
                      <a href="#home3">
                        <button className="btn blueBG_ title3">LEARN MORE</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div id="home2" style={{backgroundImage: 'linear-gradient(180deg, transparent 39%, #005ac6 90%), url("' + stripeBackground + '")'}}>
              </div>
              <div id="home3" className="blueBG_ text-center">
                <div className="container-fluid mt30_ mb30_">
                  <div className="row small-header">
                    <span>WHAT WE BELIEVE IN</span>
                  </div>
                  <div id="subtitle" className="row big-header">
                    <span>Grow your business, establish your brand, and put your customers first.</span>
                  </div>
                </div>
              </div>
              <div id="home4" className="blueBG_ text-center">
                <div className="container-fluid mx-auto">
                  <div className="row">
                    <div className="col-xs-12 col-sm-6 mb30_">
                      <div className="small-header mb15_">ABOUT</div>
                      <div className="big-header mb15_">Who We Are</div>
                      <div className="description mb15_ mr15_">Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.</div>
                      <NavLink to="/about">
                        <button className="btn blueBG_ title3">LEARN MORE</button>
                      </NavLink>
                    </div>
                    <div className="col-xs-12 col-sm-6 mb30_">
                      <div className="small-header mb15_">TEAM</div>
                      <div className="big-header mb15_">What We Do</div>
                      <div className="description mb15_ ml15_">Nulla vel sodales tellus, quis condimentum enim. Nunc porttitor venenatis feugiat. Etiam quis faucibus erat, non accumsan leo. Aliquam erat volutpat. Vestibulum ac faucibus eros. Cras ullamcorper gravida tellus ut consequat.</div>
                      <NavLink to="/team">
                        <button className="btn blueBG_ title3">LEARN MORE</button>
                      </NavLink>
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