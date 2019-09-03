import React                        from 'react';

class Main extends React.Component {
    constructor(props){
      super(props);

     this.state = {
         
     }
    }

    render() { 
        return (
            <>
                <div id="dashDevelopers">
                    <div className="container-fluid">
                        <div className="row mb60_">
                            <div className="col-xs-12 col-md-offset-2 col-md-8">
                                <div className="title2">Coming soon</div>
                                {/* <div className="box_">
                                    <label>Something</label>
                                    <input className="form-control mb15_" placeholder="" type="text" />
                                    <div className="text-right">
                                        <div className="btn_">Something</div>
                                    </div>
                                </div> */}
                            </div>
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