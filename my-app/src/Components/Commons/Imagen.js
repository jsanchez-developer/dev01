import React, {Component} from 'react';
import '../../Styles/App.css'


class Imagen extends Component {

    constructor(props) {
        super(props);
    }
    render(){
        return (
            <div>
     
                <h1>{this.props.text}</h1>
                <img src={this.props.icon} className="App-logo"/>
                
            </div>
        );
    }
}

export default Imagen;