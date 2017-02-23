import React, {Component} from 'react';

class Search extends Component{

	onSubmit(e){
		e.preventDefault();
		console.log('yes, yes,yes');
	}

	render(){
		return(
			<div id="custom-search-input">
       	<form onSubmit={this.onSubmit.bind(this)}>
    			<div className="form-group">
      			<input type="text" className="form-control" id="email" placeholder="Please type GitHub Username"></input>
    			</div>
    			<button type="submit" className="btn btn-default">Search</button>
  			</form>	         
      </div>
		)
	}
}

export default Search