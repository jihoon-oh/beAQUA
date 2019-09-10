import React                        from 'react';
import { NavLink }                  from 'react-router-dom';

import {variables}                  from '../function/variables'

import aquaLogoSolid from '../assets/img/aqua_logo_solid.png'

class Footer extends React.Component {
    constructor(props){
      super(props);

      this.state = {}
    }

    
    render() { 
        return (
            <>
                <footer>
                    <div id="footer1" className="container-fluid text-center">
                        <div className="big-header mb30_">
                            <span>Your digital future awaits.</span>
                        </div>
                        <div className="small-header mt30_ mb30_">
                            <span>Today is the day to build the business of your dreams. Share your mission with the world — and blow your customers away.</span>
                        </div>
                        <div className="mt30_">
                            <button className="btn title3 whiteBG_">START NOW</button>
                        </div>
                    </div>
                    <div id="footer2" className="container-fluid whiteBG_ text-center">
                        <img src={aquaLogoSolid} alt=""/>
                    </div>
                </footer>
            </>  
        );
    }
    
    componentDidMount() {

    }

}

export default Footer;