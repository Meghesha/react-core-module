import React from "react";
import Axios from "axios";
import { CLIENT_ID, CLIENT_SECRET } from "./credentials/github.credentials";
import GithubRepos from "./GithubRepos";
import GithubProfile from "./GithubProfile";

class GithubProfileSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      githubUsername: "",
      githubProfile: {},
      githubRepos: [],
      errorMsg: "",
    };
  }

  clickSearch = (e) => {
    e.preventDefault();
    this.searchProfileInfo(this.state.githubUsername);
    this.searchReposInfo(this.state.githubUsername);
  };

  searchProfileInfo = (githubUsername) => {
    let dataURL = `https://api.github.com/users/${githubUsername}?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    Axios.get(dataURL)
      .then((response) => {
        this.setState({
          ...this.state,
          githubProfile: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          ...this.state,
          errorMsg: error,
        });
      });
  };

  searchReposInfo = (githubUsername) => {
    let dataURL = `https://api.github.com/users/${githubUsername}/repos?client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
    Axios.get(dataURL)
      .then((response) => {
        this.setState({
          ...this.state,
          githubRepos: response.data,
        });
      })
      .catch((error) => {
        this.setState({
          ...this.state,
          errorMsg: error,
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        {/* <pre>{JSON.stringify(this.state.githubProfile)}</pre>
        <pre>{JSON.stringify(this.state.gitthubRepos)}</pre> */}
        <section className="p-3">
          <div className="container">
            <div className="row">
              <div className="col">
                <p className="h4 text-primary">GitHub Profile Search</p>
                <p className="lead">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                  odit minima quidem? Voluptatum magnam, voluptatibus assumenda
                  rerum est consectetur optio accusantium magni suscipit,
                  molestias facilis!
                </p>
                <form onSubmit={this.clickSearch} className="form-inline">
                  <div className="form-group">
                    <input
                      name="githubUsername"
                      value={this.state.githubUsername}
                      onChange={(e) =>
                        this.setState({ githubUsername: e.target.value })
                      }
                      type="text"
                      className="form-control"
                      placeholder="Enter github username"
                    />
                  </div>
                  <div>
                    <input
                      type="submit"
                      className="btn btn-primary btn-sm"
                      value="Search"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                {Object.keys(this.state.githubProfile).length > 0 ? (
                  <React.Fragment>
                    <GithubProfile githubProfile={this.state.githubProfile}/>
                  </React.Fragment>
                ) : null}
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col">
                {this.state.githubRepos.length > 0 ? (
                  <React.Fragment>
                    <GithubRepos githubRepos={this.state.githubRepos}/>
                  </React.Fragment>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </React.Fragment>
    );
  }
}
export default GithubProfileSearch;
