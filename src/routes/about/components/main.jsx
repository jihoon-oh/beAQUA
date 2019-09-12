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
      }
    }

    render() { 
        return (
            <>
                <div id="about1" className="mb60_">
                    <div className="container jumbotron">
                        <div className="jumbotron-header">About Us</div>
                    </div>
                </div>
                <div id="about2" className="mt60_ mb60_">
                    <div className="container text-center">
                        <div id="about2-header" className="col-xs-10 col-sm-5 mt30_ mb30_ blueBG_ mx-auto">
                            <div className="mx-auto">
                                <span>We’re a group of creative thinkers who have built a business to change the world.</span>
                            </div>
                        </div>
                        <div className="col-xs-10 col-sm-5 mt30_ mb30_ mx-auto">
                            <span>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                            <br/>   
                            <br/>                              
                            Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen.
                            <br/>
                            <br/>
                            She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane.
                            </span>
                        </div>
                    </div>
                </div>

            </>  
        );
    }

}

export default Main;