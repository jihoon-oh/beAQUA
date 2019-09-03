import React                        from 'react';
import {NavLink}                    from 'react-router-dom';


import Navbar                       from './navbar';

class Main extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        createPaymentsNav: 'hide',
        transactionsNav: 'hide'
      }
    }

    render() { 
        return (
            <>
                <div id="dashboardNavbar" className="col-xs-12 col-md-2">
                    <div>
                        <div className="dashboardNavbar_" data-page="Overview" onClick={(e)=>{this.navSelect(e)}}>
                            <span className="fas fa-eye"></span> <span>Overview</span>
                        </div>
                        <div className="dashboardNavbar_"  onClick={()=>{if(this.state.createPaymentsNav === 'hide'){this.setState({createPaymentsNav: ''})}else{this.setState({createPaymentsNav: 'hide'})}}}>
                            <span className="fas fa-plus"></span> <span>Create payments</span>
                        </div>
                        <div className={this.state.createPaymentsNav}>
                            <div className="dashboardNavbar_" data-page="Online" onClick={(e)=>{this.navSelect(e)}}>
                                <span className="">&nbsp;</span> <span>Online</span>
                            </div>
                            <div className="dashboardNavbar_"data-page="Invoice" onClick={(e)=>{this.navSelect(e)}}>
                                <span className="">&nbsp;</span> <span>Invoice</span>
                            </div>
                        </div>
                        <div className="dashboardNavbar_" data-page="Analytics" onClick={(e)=>{this.navSelect(e)}}>
                            <span className="far fa-chart-bar"></span> <span>Analytics</span>
                        </div>
                        <div className="dashboardNavbar_"  onClick={()=>{if(this.state.transactionsNav === 'hide'){this.setState({transactionsNav: ''})}else{this.setState({transactionsNav: 'hide'})}}}>
                            <span className="fas fa-receipt"></span> <span>Transactions</span>
                        </div>
                        <div className={this.state.transactionsNav}>
                            <div className="dashboardNavbar_" data-page="AllTransactions" onClick={(e)=>{this.navSelect(e)}}>
                                <span className="">&nbsp;</span> <span>All</span>
                            </div>
                            <div className="dashboardNavbar_" data-page="SuccessfulTransactions" onClick={(e)=>{this.navSelect(e)}}>
                                <span className="">&nbsp;</span> <span>Successful</span>
                            </div>
                            <div className="dashboardNavbar_" data-page="PendingTransactions" onClick={(e)=>{this.navSelect(e)}}>
                                <span className="">&nbsp;</span> <span>Pending</span>
                            </div>
                            <div className="dashboardNavbar_" data-page="FailedTransactions" onClick={(e)=>{this.navSelect(e)}}>
                                <span className="">&nbsp;</span> <span>Failed</span>
                            </div>
                        </div>
                        <div className="dashboardNavbar_" data-page="Setup" onClick={(e)=>{this.navSelect(e)}}>
                            <span className="fab fa-btc"></span> <span>Account setup</span>
                        </div>
                        <div className="dashboardNavbar_" data-page="Plans" onClick={(e)=>{this.navSelect(e)}}>
                            <span className="far fa-id-badge"></span> <span>Plans</span>
                        </div>
                        <div className="dashboardNavbar_" data-page="Notifications" onClick={(e)=>{this.navSelect(e)}}>
                            <span className="far fa-bell"></span> <span>Notifications</span>
                        </div>
                        <div className="dashboardNavbar_" data-page="Settings" onClick={(e)=>{this.navSelect(e)}}>
                            <span className="fas fa-tools"></span> <span>Settings</span>
                        </div>
                        <div className="dashboardNavbar_" data-page="Developers" onClick={(e)=>{this.navSelect(e)}}>
                            <span className="fas fa-code"></span> <span>Developers</span>
                        </div>
                    </div>
                </div>
            </>  
        );
    }
    
    componentDidMount() {
        if(window.location.hash.substr(1) === 'Online' 
        || window.location.hash.substr(1) === 'Invoice'){
            this.setState({
                createPaymentsNav: '',
            });
        } else {
            this.setState({
                createPaymentsNav: 'hide'
            });
        }
        if(window.location.hash.substr(1) === 'AllTransactions' 
        || window.location.hash.substr(1) === 'SuccessfulTransactions'
        || window.location.hash.substr(1) === 'PendingTransactions'
        || window.location.hash.substr(1) === 'FailedTransactions'){
            this.setState({
                transactionsNav: ''
            });
        } else {
            this.setState({
                transactionsNav: 'hide'
            });
        }
    }

    componentDidUpdate(){
        
    }

    navSelect(e){
        for(var i=0; i < document.querySelectorAll('.dashboardNavbar_').length; i++){
            document.querySelectorAll('.dashboardNavbar_')[i].classList.remove('activeNavbar'); 
        }
        for(i=0; i < document.querySelectorAll('.dashboardPages').length; i++){
            document.querySelectorAll('.dashboardPages')[i].classList.add('hide'); 
        }
        e.currentTarget.classList.add('activeNavbar')
        document.getElementById('dashboard'+e.currentTarget.getAttribute('data-page')).classList.remove('hide')

        window.location.hash= e.currentTarget.getAttribute('data-page');

        if(window.location.hash.substr(1) === 'Online' 
        || window.location.hash.substr(1) === 'Invoice'){
            this.setState({
                createPaymentsNav: '',
            });
        } else {
            this.setState({
                createPaymentsNav: 'hide'
            });
        }
        if(window.location.hash.substr(1) === 'AllTransactions' 
        || window.location.hash.substr(1) === 'SuccessfulTransactions'
        || window.location.hash.substr(1) === 'PendingTransactions'
        || window.location.hash.substr(1) === 'FailedTransactions'){
            this.setState({
                transactionsNav: ''
            });
        } else {
            this.setState({
                transactionsNav: 'hide'
            });
        }
    }


}

export default Main;