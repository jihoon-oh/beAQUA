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
                                <div className="box_">
                                    <label>Generate API key</label>
                                    <input className="form-control mb15_" placeholder="" type="text" />
                                    <div className="text-right">
                                        <div className="btn_">Generate</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>  
        );
    }
    
    componentDidMount() {
       //can only update merchant name once every 7 days
    }

}

export default Main;