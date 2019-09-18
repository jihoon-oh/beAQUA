import React                        from 'react';
import {NavLink}                    from 'react-router-dom';
import QRCode                       from 'qrcode'
import {toast}                      from 'react-toastify';

import {post_}                      from '../../../function/fetch'
import {variables}                  from '../../../function/variables'
import {getCookie}                  from '../../../function/cookies'
import {timeRemaining}              from '../../../function/timeRemaining'

import icon1                        from '../../../assets/img/icons/001.png'
import icon2                        from '../../../assets/img/icons/006.png'
import icon3                        from '../../../assets/img/icons/018.png'
import icon4                        from '../../../assets/img/icons/021.png'
import icon5                        from '../../../assets/img/icons/028.png'
import icon6                        from '../../../assets/img/icons/033.png'


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
                <div id="team1" className="mb60_">
                    <div className="container jumbotron">
                        <div className="jumbotron-header">Team</div>
                    </div>
                </div>
                <div id="team2" className="mt60_ mb60_">
                    <div className="container">
                        <div className="col-xs-12 col-sm-3 mb60_">
                            <span className="title1">Our world-class team</span>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <div className="col-xs-6 col-sm-12 icon-wrapper mb60_">
                                <img src={icon1} alt=""/>
                                <div className="mt30_ title3">Michael Fassbender</div>
                            </div>
                            <div className="col-xs-6 col-sm-12 icon-wrapper mb60_">
                                <img src={icon2} alt=""/>
                                <div className="mt30_ title3">Jason Smith</div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <div className="col-xs-6 col-sm-12 icon-wrapper mb60_">
                                <img src={icon3} alt=""/>
                                <div className="mt30_ title3">Amanda Peterson</div>
                            </div>
                            <div className="col-xs-6 col-sm-12 icon-wrapper mb60_">
                                <img src={icon4} alt=""/>
                                <div className="mt30_ title3">Billy Maxwell</div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-sm-3">
                            <div className="col-xs-6 col-sm-12 icon-wrapper mb60_">
                                <img src={icon5} alt=""/>
                                <div className="mt30_ title3">Joshua Harris</div>
                            </div>
                            <div className="col-xs-6 col-sm-12 icon-wrapper mb60_">
                                <img src={icon6} alt=""/>
                                <div className="mt30_ title3">Esther Ford</div>
                            </div>
                        </div>
                    </div>
                </div>
            </>  
        );
    }

}

export default Main;