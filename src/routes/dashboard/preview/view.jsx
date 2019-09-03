import React                        from 'react';
import MetaTags                     from 'react-meta-tags';

import {variables}                  from '../../../function/variables'
import {getCookie}                  from '../../../function/cookies' 

import Main                         from './components/main';


import Logo                         from '../../../assets/img/logo.png';

class View extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        previewData: [],
        loadingPage: true
      }
    }

    metaTAGs(){
      return  <MetaTags>
                <title>Preview invoice | {variables('name')}</title>
                <meta name="description" content="Preview invoice" />
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
              <Main token = {this.state.token} data = {this.state.previewData} />
            </>  
        );
    }
    
    componentDidMount() {
      fetch(variables('api')+'/data/previewInvoice/', {method: 'POST',headers: {'Accept': 'application/json','Content-Type': 'application/json',},
        body: JSON.stringify({
          token:             getCookie('token'),
          access_token:      getCookie('access_token'),
          id:                this.props.match.params.id                           
        })
      })
      .then(response => response.json())
      .then(data => {
        if(data.status === 'success'){
          this.setState({
            previewData: data,
            loadingPage: false
          });
        } else {
          // window.location.href = '/'
        }
      })
      .catch(() => {
        // window.location.href = '/'
      });
    }


}

export default View;