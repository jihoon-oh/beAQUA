import React                        from 'react';
import {NavLink}                    from 'react-router-dom';


class Main extends React.Component {
    constructor(props){
      super(props);

      this.state = {

      }
    }

    render() { 
        return (
            <>
                <div id="_404">
                    <div className="container">
                        <div className="row">
                            <div className="">404</div>
                            <div className="">Page not found</div>
                            <NavLink to="/" className="btn_">Home</NavLink>
                        </div>
                    </div>
                </div>
            </>  
        );
    }
    
    componentDidMount() {

    }


}

export default Main;