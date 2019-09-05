import React                          from 'react';
import ReactDOM                       from 'react-dom';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import {ToastContainer}               from 'react-toastify';

import ScrollToTop                    from './_components/scroll'
import Home                           from './routes/home/view'
import About                          from './routes/about/view'
import Work                           from './routes/work/view'
import Team                           from './routes/team/view'
import Blog                           from './routes/blog/view'
import Contact                        from './routes/contact/view'

import FZF                            from './routes/404/view'

import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/css/bootstrap.min.css'; // 4.3.1
import '@fortawesome/fontawesome-free/css/fontawesome.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import './assets/css/main.css';
import './assets/css/hamburger.min.css';


class App extends React.Component{
    render() {
        return (
            <BrowserRouter>
                <ScrollToTop>
                    <Switch>
                        <Route path="/"        component={Home} exact />
                        <Route path="/about"   component={About} exact />
                        <Route path="/work"    component={Work} exact />
                        <Route path="/team"    component={Team} exact />
                        <Route path="/blog"    component={Blog} exact />
                        <Route path="/contact" component={Contact} exact />

                        <Route component={FZF} />
                    </Switch>
                </ScrollToTop>
                <ToastContainer />
            </BrowserRouter>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));