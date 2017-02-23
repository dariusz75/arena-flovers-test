import React, {Component} from 'react';


class Search extends Component{

	onSubmit(e){
		e.preventDefault();

		console.log('CLICKED!');

		let username = this.refs.username.value.trim();
		
		this.props.onFormSubmit(username);
		this.refs.username.value = '';

	}



	render(){
		return(
			<div id="custom-search-input">
       	<form onSubmit={this.onSubmit.bind(this)}>
    			<div className="form-group">
    				<label>Find a GitHub User</label>
      			<input type="text" ref="username" className="form-control" id="text" placeholder="Please type GitHub Username" />
    			</div>
    			<button type="submit" className="btn btn-default">Search</button>
  			</form>	         
      </div>
		)
	}
}

export default Search



