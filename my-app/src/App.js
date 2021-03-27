import React, {Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Entid_api from "./componentes/Entid_api"

class App extends Component {
	render(){
	  return (
		<div className="App">
		  <Entid_api entid_cod="4256" > </Entid_api>
		</div>
	  );
	}
}

export default App;
