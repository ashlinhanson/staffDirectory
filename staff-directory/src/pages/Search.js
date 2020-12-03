import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";

class Search extends Component {
    state = {
        search: "",
        users: [],
        error: "",
        results: []
    };

    componentDidMount(){
        API.getUsers()
        .then(res => {
            console.log(res);
            this.setState({ users: res.data.results })
        })
        .catch(err => console.log(err));
    }

    handleInputChange = event => {
        this.setState({ search: event.target.value});
    };

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     API.getUsers(this.state.search)
    //     .then(res =>  {
    //         if(res.data.status === "error") {
    //             throw new Error(res.data.data);
    //         }
    //         this.setState({results: res.data.data, error: ""});
    //     })
    //     .catch(err => this.setState({ error: err.message }))
    // };

    render(){
        return (
            <div>
              <Container style={{ minHeight: "80%" }}>
                <h4 className="text-center">Search for Staff Members!</h4>
                <SearchForm
                //   handleFormSubmit={this.handleFormSubmit}
                  handleInputChange={this.handleInputChange}
                  users={this.state.users}
                />
                <SearchResults users={this.state.users} search={this.state.search} />
              </Container>
            </div>
          );
    }
}

export default Search;