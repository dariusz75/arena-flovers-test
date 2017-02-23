import React, {Component} from 'react';

class Repo extends Component{

	render(){
		const {repo} = this.props;

		var letterStyle = {
				fontSize: "32"
			}

		return(
			<li className="list-group-item">
			 	<a style={letterStyle} href={repo.html_url}>
			 		{repo.name}
			 	</a>  : {repo.description}
			</li>
		)
	}
}

export default Repo