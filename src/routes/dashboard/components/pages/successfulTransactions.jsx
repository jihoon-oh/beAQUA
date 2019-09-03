import React                        from 'react';
import TransactionsTemplate         from './_transactions'

class Main extends React.Component {
    constructor(props){
      super(props);

      this.state = {

      }
    }

    render() { 
        return <TransactionsTemplate query={'Successful'} />
    }
}

export default Main;