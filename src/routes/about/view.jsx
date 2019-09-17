import React                        from 'react';
import MetaTags                     from 'react-meta-tags';
import { NavLink }                  from 'react-router-dom';

import {variables}                  from '../../function/variables'

import Header                       from '../../_components/header';
import Footer                       from '../../_components/footer';

import Main                         from './components/main';
import Logo                         from '../../assets/img/aqua_logo_solid.png';
import LogoW                        from '../../assets/img/logoWbg.png';
import {auth_}                      from '../../function/auth'


class View extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        
        loadingPage: true
      }
    }

    metaTAGs(){
      return  <MetaTags>
                <title>{variables('name')}</title>
                <meta name="description" content={''} />
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
            <Header />
            <Main data={this.state.data} id={this.props.match.params.id} LogoW={LogoW} Logo={Logo} />
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