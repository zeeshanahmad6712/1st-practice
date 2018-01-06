import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
class App extends React.Component{
    constructor(){
        super();
        this.state ={
            firstname:['waqas','umer','shan']
        }
    }
    render(){
        return(
            <ul>
               {this.state.firstname}
               <App2/>
            </ul>
        )
    }
}
class App2 extends React.Component{
    render(){
        return(
            <li>
              waqas
            </li>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'))