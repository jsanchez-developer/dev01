import React, { Component } from 'react';
import logo from '../Images/logo.svg';
import '../Styles/App.css';
import Imagen from './Commons/Imagen';

class App extends Component {
  
  render() {
   const urls =["https://cdn4.iconfinder.com/data/icons/social-media-icons-the-circle-set/48/facebook_circle-512.png","http://icons.iconarchive.com/icons/sicons/basic-round-social/512/twitter-icon.png","http://www.yoaprendoapps.com/_/rsrc/1428526996932/icon_title_gmail.png"];
    return (
      <ul> 
        
          {
            urls.map((url)=> 
            <li>
               <Imagen text="Resultado" icon={url} /> 
            </li>
          )
          }
 
      </ul>
    );
  }
}

export default App;
