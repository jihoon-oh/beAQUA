import React                        from 'react';
import MetaTags                     from 'react-meta-tags';
import {auth_}                      from '../../function/auth'
import {variables}                  from '../../function/variables'

import Header                       from '../../_components/header';
import Footer                       from '../../_components/footer';

import Main                         from './components/main';

import Logo                         from '../../assets/img/logo.png';


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