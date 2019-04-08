import React, {Component} from 'react';

class Searchbar extends Component{
	constructor(prop) {
		super(prop);

		this.state = {term: ''}
	}
	render() {
		return(
			<div className="search-bar">
				value : {this.state.term}
				<input onChange = { event => onInputChange(event.target.value)} />
			</div>
			); 
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSearchTermChange(term);
	}
}
export default Searchbar;     
