import React                        from 'react';
import {NavLink}                    from 'react-router-dom';

import Navbar                       from './navbar';
import Overview                     from './pages/overview';
import AllTransactions              from './pages/allTransactions'
import SuccessfulTransactions       from './pages/successfulTransactions'
import PendingTransactions          from './pages/pendingTransactions'
import FailedTransactions           from './pages/failedTransactions'
import Setup                        from './pages/setup'
import OnlinePayment                from './pages/onlinePayments'
import InvoicePayments              from './pages/invoicePayments'
import Plans                        from './pages/plans'
import Settings                     from './pages/settings'
import Developers                   from './pages/developers'
import Notifications                from './pages/notifications'

class Main extends React.Component {
    constructor(props){
      super(props);

      this.state = {
        pages: ['Overview', 'Analytics', 'AllTransactions', 'SuccessfulTransactions', 'PendingTransactions', 'FailedTransactions', 'Online', 'Invoice', 'Settings', 'Setup', 'Plans', 'Developers', 'Notifications']
      }
    }
    render() { 
        return (
            <>
                <div id="dashboard">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-xs-12 col-md-offset-2 col-md-10  hidden-sm hidden-xs">
                                <div className="title1 mb0_ mt60_" id="dashboardTitle"></div>
                            </div>
                            <Navbar />
                            <div id="dashboardMainView" className="col-xs-12 col-md-10">
                                <div className="box_">
                                    <div className="col-xs-12 hidden-md hidden-lg">
                                        <div className="title1 mb30_" id="dashboardTitle_"></div>
                                    </div>
                                    <div id="dashboardOverview" className="dashboardPages">
                                        <Overview user={this.props.user} />
                                    </div>
                                    <div id="dashboardAllTransactions" className="dashboardPages hide">
                                        <AllTransactions user={this.props.user} />
                                    </div>
                                    <div id="dashboardSuccessfulTransactions" className="dashboardPages hide">
                                        <SuccessfulTransactions user={this.props.user} />
                                    </div>
                                    <div id="dashboardPendingTransactions" className="dashboardPages hide">
                                        <PendingTransactions user={this.props.user} />
                                    </div>
                                    <div id="dashboardFailedTransactions" className="dashboardPages hide">
                                        <FailedTransactions user={this.props.user} />
                                    </div>
                                    <div id="dashboardAnalytics" className="dashboardPages hide">
                                        {/* <Analytics user={this.props.user} /> */}
                                    </div>
                                    <div id="dashboardOnline" className="dashboardPages hide">
                                        <OnlinePayment user={this.props.user} />
                                    </div>
                                    <div id="dashboardInvoice" className="dashboardPages hide">
                                        <InvoicePayments user={this.props.user} />
                                    </div>
                                    <div id="dashboardSettings" className="dashboardPages hide">
                                        <Settings user={this.props.user} />
                                    </div>
                                    <div id="dashboardSetup" className="dashboardPages hide">
                                        <Setup user={this.props.user} />
                                    </div>
                                    <div id="dashboardPlans" className="dashboardPages hide">
                                        <Plans user={this.props.user} />
                                    </div>
                                    <div id="dashboardDevelopers" className="dashboardPages hide">
                                        <Developers user={this.props.user} />
                                    </div>
                                    <div id="dashboardNotifications" className="dashboardPages hide">
                                        <Notifications user={this.props.user} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </>  
        );
    }
    
    componentDidMount(){
        if(this.state.pages.indexOf(window.location.hash.substr(1)) !== -1){
            if(window.location.hash.substr(1) === 'Overview'){
                document.getElementById('dashboardTitle').innerHTML = 'Overview'
                document.getElementById('dashboardTitle_').innerHTML = 'Overview'
            } else if(window.location.hash.substr(1) === 'Analytics'){
                document.getElementById('dashboardTitle').innerHTML = 'Analytics'
                document.getElementById('dashboardTitle_').innerHTML = 'Analytics'
            } else if(window.location.hash.substr(1) === 'AllTransactions'){
                document.getElementById('dashboardTitle').innerHTML = 'All Transactions'
                document.getElementById('dashboardTitle_').innerHTML = 'All Transactions'
            } else if(window.location.hash.substr(1) === 'SuccessfulTransactions'){
                document.getElementById('dashboardTitle').innerHTML = 'Successful Transactions'
                document.getElementById('dashboardTitle_').innerHTML = 'Successful Transactions'
            } else if(window.location.hash.substr(1) === 'PendingTransactions'){
                document.getElementById('dashboardTitle').innerHTML = 'Pending Transactions'
                document.getElementById('dashboardTitle_').innerHTML = 'Pending Transactions'
            } else if(window.location.hash.substr(1) === 'FailedTransactions'){
                document.getElementById('dashboardTitle').innerHTML = 'Failed Transactions'
                document.getElementById('dashboardTitle_').innerHTML = 'Failed Transactions'
            } else if(window.location.hash.substr(1) === 'Online'){
                document.getElementById('dashboardTitle').innerHTML = 'Create online payment'
                document.getElementById('dashboardTitle_').innerHTML = 'Create online payment'
            } else if(window.location.hash.substr(1) === 'Invoice'){
                document.getElementById('dashboardTitle').innerHTML = 'Create invoice payment'
                document.getElementById('dashboardTitle_').innerHTML = 'Create invoice payment'
            } else if(window.location.hash.substr(1) === 'Settings'){
                document.getElementById('dashboardTitle').innerHTML = 'Settings'
                document.getElementById('dashboardTitle_').innerHTML = 'Settings'
            } else if(window.location.hash.substr(1) === 'Setup'){
                document.getElementById('dashboardTitle').innerHTML = 'Account setup'
                document.getElementById('dashboardTitle_').innerHTML = 'Account setup'
            } else if(window.location.hash.substr(1) === 'Plans'){
                document.getElementById('dashboardTitle').innerHTML = 'Plans'
                document.getElementById('dashboardTitle_').innerHTML = 'Plans'
            } else if(window.location.hash.substr(1) === 'Developers'){
                document.getElementById('dashboardTitle').innerHTML = 'Developers'
                document.getElementById('dashboardTitle_').innerHTML = 'Developers'
            } else if(window.location.hash.substr(1) === 'Notifications'){
                document.getElementById('dashboardTitle').innerHTML = 'Notifications'
                document.getElementById('dashboardTitle_').innerHTML = 'Notifications'
            } else {
                document.getElementById('dashboardTitle').innerHTML = ''
                document.getElementById('dashboardTitle_').innerHTML = ''
            }
            for(var i=0; i < document.querySelectorAll('.dashboardNavbar_').length; i++){
                if(document.querySelectorAll('.dashboardNavbar_')[i].getAttribute('data-page') === window.location.hash.substr(1)){
                    document.querySelectorAll('.dashboardNavbar_')[i].classList.add('activeNavbar')
                } else {
                    document.querySelectorAll('.dashboardNavbar_')[i].classList.remove('activeNavbar'); 
                }
            }
            for(i=0; i < document.querySelectorAll('.dashboardPages').length; i++){
                document.querySelectorAll('.dashboardPages')[i].classList.add('hide'); 
            }
            document.getElementById('dashboard'+window.location.hash.substr(1)).classList.remove('hide')
        } else {
            document.getElementById('dashboardTitle').innerHTML = 'Overview'
            document.getElementById('dashboardTitle_').innerHTML = 'Overview'
            window.location.hash = 'Overview'  
            document.getElementById('dashboardOverview').classList.remove('hide')
            for(i=0; i < document.querySelectorAll('.dashboardNavbar_').length; i++){
                if(document.querySelectorAll('.dashboardNavbar_')[i].getAttribute('data-page') === 'Overview'){
                    document.querySelectorAll('.dashboardNavbar_')[i].classList.add('activeNavbar')
                }
            }
        }
    }

    componentDidUpdate(){ 
        if(this.state.pages.indexOf(window.location.hash.substr(1)) !== -1){
            if(window.location.hash.substr(1) === 'Overview'){
                document.getElementById('dashboardTitle').innerHTML = 'Overview'
                document.getElementById('dashboardTitle_').innerHTML = 'Overview'
            } else if(window.location.hash.substr(1) === 'Analytics'){
                document.getElementById('dashboardTitle').innerHTML = 'Analytics'
                document.getElementById('dashboardTitle_').innerHTML = 'Analytics'
            } else if(window.location.hash.substr(1) === 'AllTransactions'){
                document.getElementById('dashboardTitle').innerHTML = 'All Transactions'
                document.getElementById('dashboardTitle_').innerHTML = 'All Transactions'
            } else if(window.location.hash.substr(1) === 'SuccessfulTransactions'){
                document.getElementById('dashboardTitle').innerHTML = 'Successful Transactions'
                document.getElementById('dashboardTitle_').innerHTML = 'Successful Transactions'
            } else if(window.location.hash.substr(1) === 'PendingTransactions'){
                document.getElementById('dashboardTitle').innerHTML = 'Pending Transactions'
                document.getElementById('dashboardTitle_').innerHTML = 'Pending Transactions'
            } else if(window.location.hash.substr(1) === 'FailedTransactions'){
                document.getElementById('dashboardTitle').innerHTML = 'Failed Transactions'
                document.getElementById('dashboardTitle_').innerHTML = 'Failed Transactions'
            } else if(window.location.hash.substr(1) === 'Online'){
                document.getElementById('dashboardTitle').innerHTML = 'Create online payment'
                document.getElementById('dashboardTitle_').innerHTML = 'Create online payment'
            } else if(window.location.hash.substr(1) === 'Invoice'){
                document.getElementById('dashboardTitle').innerHTML = 'Create invoice payment'
                document.getElementById('dashboardTitle_').innerHTML = 'Create invoice payment'
            } else if(window.location.hash.substr(1) === 'Settings'){
                document.getElementById('dashboardTitle').innerHTML = 'Settings'
                document.getElementById('dashboardTitle_').innerHTML = 'Settings'
            } else if(window.location.hash.substr(1) === 'Setup'){
                document.getElementById('dashboardTitle').innerHTML = 'Account setup'
                document.getElementById('dashboardTitle_').innerHTML = 'Account setup'
            } else if(window.location.hash.substr(1) === 'Plans'){
                document.getElementById('dashboardTitle').innerHTML = 'Plans'
                document.getElementById('dashboardTitle_').innerHTML = 'Plans'
            } else if(window.location.hash.substr(1) === 'Developers'){
                document.getElementById('dashboardTitle').innerHTML = 'Developers'
                document.getElementById('dashboardTitle_').innerHTML = 'Developers'
            } else if(window.location.hash.substr(1) === 'Notifications'){
                document.getElementById('dashboardTitle').innerHTML = 'Notifications'
                document.getElementById('dashboardTitle_').innerHTML = 'Notifications'
            } else {
                document.getElementById('dashboardTitle').innerHTML = ''
                document.getElementById('dashboardTitle_').innerHTML = ''
            }
            for(var i=0; i < document.querySelectorAll('.dashboardNavbar_').length; i++){
                if(document.querySelectorAll('.dashboardNavbar_')[i].getAttribute('data-page') === window.location.hash.substr(1)){
                    document.querySelectorAll('.dashboardNavbar_')[i].classList.add('activeNavbar')
                } else {
                    document.querySelectorAll('.dashboardNavbar_')[i].classList.remove('activeNavbar'); 
                }
            }
            for(i=0; i < document.querySelectorAll('.dashboardPages').length; i++){
                document.querySelectorAll('.dashboardPages')[i].classList.add('hide'); 
            }
            document.getElementById('dashboard'+window.location.hash.substr(1)).classList.remove('hide')
        }
          
    }


}

export default Main;