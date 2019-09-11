import React                        from 'react';
import MetaTags                     from 'react-meta-tags';
import { NavLink }                  from 'react-router-dom';

import {variables}                  from '../../function/variables'

import Footer                       from '../../_components/footer';

import Main                         from './components/main';
import Logo                         from '../../assets/img/aqua_logo_solid.png';
import LogoW                        from '../../assets/img/logoWbg.png';


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
            {/* <div id="header">
                  <div className="container-fluid">
                      <div className="row">
                          <div className="col-xs-7 col-md-4">
                              <NavLink to="/">
                                  <img id="logo" src={Logo} alt={variables('name')} title={variables('name')} className="img-responsive" />
                              </NavLink>
                          </div>
                          <div className="col-md-8 col-xs-5 text-right">
                              
                          </div>
                      </div>
                  </div>
              </div> */}
            <div style={{display: 'block', position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', backgroundImage: 'URL("'+this.state.bg+'")', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center'}}></div>  
            <Main data={this.state.data} id={this.props.match.params.id} LogoW={LogoW} Logo={Logo} />
            <Footer />  
            </>  
        );
    }
    
    componentDidMount() {
      if(this.props.match.params.id.length !== 69){
        window.location.href = '/'
        return false
      }
      fetch(variables('api')+'/data/payments/', {method: 'POST',headers: {'Accept': 'application/json','Content-Type': 'application/json'},
            body: JSON.stringify({
                id:                 this.props.match.params.id
            })
        })
        .then(response => response.json())
        .then(data => {
            if(data.status === 'success'){
                this.setState({loadingPage: false, data: data});
            } else if(data.status === 'error'){
              // window.location.href = '/'
            } else {
                // window.location.href = '/'
            }
        })
        .catch(() => {
            // window.location.href = '/'
        });

        var bg = [
            'https://www.creativeboom.com/uploads/articles/89/895d5dd7cff4e9ac8eb077361bcb6860cb6a43bf_2200.jpg',
            'https://www.creativeboom.com/uploads/articles/9e/9e0a9c4cc219cf001c4d15d6ece6a9e455829440_2200.jpg',
            'https://www.creativeboom.com/uploads/articles/7a/7aeedb513adcb6532d286844cf4f56917fcd5968_2200.jpg',
            'https://www.creativeboom.com/uploads/articles/d9/d9a1bf0ad6b0c0981f39546486b9c14c0784b6d7_2200.jpg',
            'https://craftwork.design/wp-content/uploads/Cover-Craftwork-Big-3.png',
            'http://www.fubiz.net/wp-content/uploads/2018/04/LorraineS1-2.jpg',
            'https://www.creativeboom.com/uploads/articles/6a/6a1e0e6575f95d14162fbcc6ec3a28dbfd121a79_2200.jpg',
            'https://www.creativeboom.com/uploads/articles/e9/e9559d48a31d9e073e3c41b1348dc8903441e1ea_2200.jpg',
            'https://www.creativeboom.com/uploads/articles/0e/0e747f65df5fd713f423c583638282b022dba644_2200.jpg',
            'https://www.creativeboom.com/uploads/articles/4e/4e1102de086cfb67c601b5f1073d86a2c74c0c81_2200.jpg',
            'https://www.creativeboom.com/uploads/articles/f0/f02ddb1c30a55432e8e1cce9e054808b6e52ac25_2200.jpg',
            'https://www.creativeboom.com/uploads/articles/95/958f4e54bbe14ec7226f5a8733a389a5b824ec27_2200.jpg',
            'https://www.creativeboom.com/uploads/articles/e1/e181ed026eccee565f8fe9a67f9be9e2ec53ea4d_2200.jpg',
            'https://www.creativeboom.com/uploads/articles/3a/3aade88d1f7711ad72263947bef222bad7d1849d_2200.jpg',
            'https://www.creativeboom.com/uploads/articles/0e/0ebd74a121818d7956550274525694456fed6117_2200.jpg',
            'https://www.creativeboom.com/uploads/articles/69/69cc94e11568f6e4d4e5c56822737514d38484aa_2200.jpg',
            'https://www.creativeboom.com/uploads/articles/a6/a63a55bd9a79df94c4dc7c87a71f4d2ed336a294_2200.jpg',
            'https://www.creativeboom.com/uploads/articles/41/4146eeed84b03fd213b5837f5ef99b3142f4f030_2200.jpg',
        ]
        this.setState({bg: bg[Math.floor(Math.random()*bg.length)]});
        // setInterval(()=>{
        //     this.setState({bg: bg[Math.floor(Math.random()*bg.length)]});
        // }, 1000)
        

    }

}

export default View;