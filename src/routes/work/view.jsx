import React                        from 'react';
import MetaTags                     from 'react-meta-tags';
import Toastify                     from 'toastify-js'

import {variables}                  from '../../function/variables'
import {auth_}                      from '../../function/auth'

import Header                       from '../../_components/header';
import Footer                       from '../../_components/footer';

import Main                         from './components/main';
import Logo                         from '../../assets/img/aqua_logo_solid.png';


class View extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        
        loadingPage: true
      }
    }

    metaTAGs(){
      return  <MetaTags>
                <title>Pricing | {variables('name')}</title>
                <meta name="description" content={variables('name')+' pricing.'} />
              </MetaTags>
    }

    render() { 
        if(this.state.loadingPage) {  
            return  (  
                <><div id="loadingGIF"><img id="logo" src={Logo} alt={variables('name')} title={variables('name')} className="img-responsive" /></div></>
            );
        }
        return (
            <>
            {this.metaTAGs()}
            <Header isLoggedIn = {this.state.isLoggedIn} />
            <Main isLoggedIn = {this.state.isLoggedIn} />
            <Footer />  
            </>  
        );
    }
    
    componentDidMount() {
      auth_().then(data=>{
        if(data === 'logged_in'){
            this.setState({
                isLoggedIn: true
            })
        }
        this.setState({loadingPage: false})
      })
    }

}

export default View;