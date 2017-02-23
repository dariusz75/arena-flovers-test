import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class App extends Component{
	constructor(props) {
		super(props);

		this.state = {
			username: 'dariusz75',
			userData: [],
			userRepos: [],
			perPage: 5
		}
	}

	getUserData() {
		$.ajax({
			url: 'https://api.github.com/users/' + this.state.username + '?client_id=' + this.props.clientId + '&client_secret' + this.props.clientSecret,
			dataType: 'json',
			cache: false,
			success: function(data) {
				console.log(data);
			}.bind(this),
			error: function(xhr, tatus, error) {
				alert(error);
			}.bind(this),
		});
	}

	componentDidMount() {
		this.getUserData();
	}

	render() {
		return(
			<div>{this.props.clientId}</div>
			);
	}
}

App.propTypes = {
	clientId: React.PropTypes.string,
	clientSecret: React.PropTypes.string,
};

App.defaultProps = {
	clientId: '71139bbfc6e123f5e388',
	clientSecret: '32955c13201cf60a35231c334106937ff58529e6',
};

export default App;