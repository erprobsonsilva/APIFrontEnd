import React, {Component} from 'react'

export default class Entid_api extends Component {
	constructor(props){
		super(props);
		
		this.state = {
			entid_cods: 0,
			entid_nom: "",
			entid_list: [],
		}
		this.entid_ret_nom = this.entid_ret_nom.bind(this);
	}
	
	entid_ret_nom(){
		let cod_entids = this.state.entid_cods;
		let url = `http://localhost:8080/api/entids/${cod_entids}`;
		fetch(url) 
		.then(res => res.json())
		.then(
			(result) => {
			console.log(result);
			let entid_nom = result.en_nom;
			console.log(entid_nom);
			this.setState({entid_nom});
			}
		)
	}
	
	//<input type="text" onchange={(event) => {this.setState({entid_cod: event.target.value})}}> </input>
	
	render(){
		return(
			<div className="entid_api">  
				<input type="text" onChange={(event) => {this.setState({entid_cods: event.target.value})}}></input>
				<input type="button" value="Retorna Entidade" onClick={this.entid_ret_nom}></input>
				<h2> {this.state.entid_nom} </h2>
			</div>
		)
	}
	
}