import React, {Component} from 'react';

class Searchbar extends Component{
	constructor(prop) {
		super(prop);

		this.state = {term: ''}
	}
	render() {
		return(
			<div>
				value : {this.state.term}
				<input onChange = { event => this.setState({term: event.target.value})} />
			</div>
			); 
	}
}
export default Searchbar;     
