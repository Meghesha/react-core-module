import React from 'react';

class GithubProfileDetails extends React.Component{
    constructor(props) {
        super(props);
        this.state={

        }
    }
    render() {
        let {githubProfile} = this.props;
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header">
                        <span className="badge badge-success mx-2">{githubProfile.followers}Followers</span>
                        <span className="badge badge-warning mx-2">{githubProfile.public_repos}Repos</span>
                        <span className="badge badge-danger mx-2">{githubProfile.public_gists}Gists</span>
                        <span className="badge badge-primary mx-2">{githubProfile.following}Following</span>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            <li className="list-group-item">
                                Name : <span className='font-weight-bold'>{githubProfile.name}</span>
                            </li>
                            <li className="list-group-item">
                                Email : <span>{githubProfile.email}</span>
                            </li>
                            <li className="list-group-item">
                                Location : <span>{githubProfile.location}</span>
                            </li>
                            <li className="list-group-item">
                                Company : <span>{githubProfile.company}</span>
                            </li>
                            <li className="list-group-item">
                                Blog : <span><a href={githubProfile.blog} target="_blank">blog</a> </span>
                            </li>
                            <li className="list-group-item">
                                Created at : <span>{githubProfile.created_at}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </React.Fragment>
        );
    }
    
};
export default GithubProfileDetails;