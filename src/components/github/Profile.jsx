import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import RepoList from './RepoList.jsx';
import Search from './Search.jsx';

class Profile extends Component{

	render() {
		return(
			<div className="panel panel-default">
				<div className="panel-heading">
				<div className="row">
					<div className="col-sm-4"><h2>Profile Details</h2></div>
					<div className="col-sm-8"></div>
				</div>
				</div>
				<div className="panel-body">
					<div className="row">
						<div className="col-sm-4 photo"><img src={this.props.userData.avatar_url} /></div>
							<div className="col-sm-8">
								<h2>{this.props.userData.name}</h2>
								<h2>{this.props.userData.login}</h2>
								<h2>{this.props.userData.location}</h2>
								<h2>{this.props.userData.html_url}</h2>
								<a className="btn btn-primary" target="_blank" href={this.props.userData.html_url}>{this.props.userData.name} GitHub Account</a>
							</div>
					</div>
					<div className="row">
						<div className="col-sm-12">
							<h2>List of repositories</h2>
						</div>
						<div className="col-sm-12">
							<RepoList userRepos={this.props.userRepos} />
						</div>
					</div>
				</div>
			</div>
			);
	}
}



export default Profile;