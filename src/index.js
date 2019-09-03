import React                            from 'react';
import ReactDOM                         from 'react-dom';
import {Route, BrowserRouter, Switch}   from 'react-router-dom';
import {ToastContainer}                 from 'react-toastify';

import ScrollToTop                      from './_components/scroll'
import Home                             from './routes/home/view'
import Docs                             from './routes/docs/view'
import Pricing                          from './routes/pricing/view'
import Payments                         from './routes/payments/view'
import Dashboard                        from './routes/dashboard/view'
import Preview                          from './routes/dashboard/preview/view'

import FZF                              from './routes/404/view'

import  'bootstrap/dist/css/bootstrap.min.css';
import  '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import  '@fortawesome/fontawesome-free/css/all.min.css'
import  './assets/css/main.css';
import  './assets/css/hamburger.min.css';


class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <Switch>
                        <Route path="/"                                 component={Home} exact />
                        <Route path="/docs"                             component={Docs} exact />
                        <Route path="/pricing"                          component={Pricing} exact />
                        <Route path="/dashboard"                        component={Dashboard} exact />
                        <Route path="/dashboard/preview/:id"            component={Preview} exact />


                        <Route path="/:id"                              component={Payments} exact />
                        <Route component={FZF} />
                    </Switch>
                </ScrollToTop>
                <ToastContainer />
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));