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
                <div className="mb15_">
                    <div className="title1">Request data</div>
                </div>
                <div className="mb15_">
                    <div className="title2">Example request</div>
                </div>
                <div className="mb15_">
                    <div className="code_">
                        <pre>
                            <code>
                                <div className="mb30_">
                                    <div className="title3 m0_">Resource URL</div> 
                                    <div className="docs_info">https://api.aquapay.com/v1/hello</div>
                                </div>
                                <div className="mb30_">
                                    <div className="title3 m0_">Method</div>
                                    <div className="docs_info">POST</div>
                                </div>
                            </code>
                        </pre>
                    </div>
                </div>
                <div className="table-responsive mb60_ mt60_">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <td className="title3">Parameters</td>
                                <td className="title3">Required</td>
                                <td className="title3">Description</td>
                                <td className="title3">Default value</td>
                                <td className="title3">Example</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>public_key</td>
                                <td>Yes</td>
                                <td>Public API key.</td>
                                <td></td>
                                <td>OfC2uemaknXr8s2FiUqFJDLdiebA</td>
                            </tr>
                            <tr>
                                <td>order</td>
                                <td>No</td>
                                <td>Order of results</td>
                                <td>DESC</td>
                                <td>ASC</td>
                            </tr>
                            <tr>
                                <td>count</td>
                                <td>Optional</td>
                                <td>Total amount of results, maximum 1000.</td>
                                <td>50</td>
                                <td>1000</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="mb15_">
                    <div className="title2">Example response</div>
                </div>
                <div className="code_">
                    <pre>
                        <code>
                            <div className="mb5_">
                                <span className="">{'{'}</span>
                            </div>
                            <div className="mb5_">
                                <span className="">    "status": <span className="code_string">"success"</span>,</span>
                            </div>
                            <div className="mb5_">
                                <span className="">    "message": <span className="code_string">"Hello!!!"</span>,</span>
                            </div>
                            <div className="mb5_">
                                <span className="">    "something": <span className="code_boolen">true</span>,</span>
                            </div>
                            <div className="mb5_">
                                <span className="">    "qwerty": <span className="code_boolen">null</span>,</span>
                            </div>
                            <div className="mb5_">
                                <span className="">    "number": <span className="code_string">123456789</span>,</span>
                            </div>
                            <div className="mb5_">
                                <span className="">{'}'}</span>
                            </div>
                        </code>
                    </pre>
                </div>
            </>  
        );
    }
    
    componentDidMount() {

    }

   
    
}

export default Main;