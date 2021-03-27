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
		this.entid_ret_lista = this.entid_ret_lista.bind(this);
		this.renderRow = this.renderRow.bind(this);
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
			this.setState({entid_nom});
			}
		)
	}
	
	entid_ret_lista(){
		let url = `http://localhost:8080/api/entids`;
		fetch(url) 
		.then(res => res.json())
		.then(
			(result) => {
			let entid_list = result;
			this.setState({entid_list});
			console.log(this.state.entid_list[0].en_cod);			
			}
		)
	}
	
	renderRow(row){
		return (<li>Num: {this.state.entid_list[row].en_nom} </li>);
	}
  
	render(){
		let rows = []
		for(let i=0; i<(this.state.entid_list.length); i++){
		  rows.push(i)
		}

		return(
			<div className="entid_api">
				<input type="text" onChange={(event) => {this.setState({entid_cods: event.target.value})}}></input>
				<input type="button" value="Retorna Entidade" onClick={this.entid_ret_nom}></input>
				<input type="button" value="Retorna Lista de Entidade" onClick={this.entid_ret_lista}></input>
				<h2> {this.state.entid_nom} </h2>
				<ul>
				  {rows.map(this.renderRow)}
				</ul>
			</div>
		)
	}
	
}