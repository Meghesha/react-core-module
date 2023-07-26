import React from 'react';

class GithubRepos extends React.Component{
    constructor(props) {
        super(props);
        this.state={
        }
    }
    render() {
        let {githubRepos} = this.props;
        return (
            <React.Fragment>
                <div className="card">
                    <div className="card-header">
                        <p className="h4">Your Repositories</p>
                    </div>
                    <div className="card-body">
                        <ul className="list-group">
                            {
                                githubRepos.map(repo => {
                                    return(
                                        <React.Fragment  key={repo.id}>
                                            <li className="list-group-item">
                                                <div className="d-flex justify-content-between">
                                                    <span className="h5">
                                                        <a href={repo.html_url} target='_blank'>{repo.name}</a>
                                                    </span>
                                                    <span className="badge badge-success">{repo.stargazers_count}Stars</span>
                                                    <span className="badge bage-warning">{repo.watchers_count}Watchers</span>
                                                </div>
                                            </li>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
                
            </React.Fragment>
        );
    }
};
export default GithubRepos;