import React                        from 'react';
import MetaTags                     from 'react-meta-tags';

import {variables}                  from '../../function/variables'
import {auth_}                      from '../../function/auth'
import {user_}                      from '../../function/fetch'

import Header                       from '../../_components/header';
import Footer                       from '../../_components/footer';

import Main                         from './components/main';
import Logo                         from '../../assets/img/logo.png';

class View extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        loadingPage: true,
        user: []
      }
    }

    metaTAGs(){
      return  <MetaTags>
                <title>Dashboard | {variables('name')}</title>
                <meta name="description" content="Dashboard" />
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
          <Main isLoggedIn = {this.state.isLoggedIn} user={this.state.user} />
          <Footer />  
          </>  
      );
  }
  
  componentDidMount() {
    auth_().then(data=>{
      if(data === 'logged_in'){
          this.setState({
              isLoggedIn: true,
          })
          user_().then(data=>{
            this.setState({
              user: data,
              loadingPage: false
            });
          })
      } else {
        window.location.href = '/'
      }
    })
  }


}

export default View;
