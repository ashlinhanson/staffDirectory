import React, { Component } from "react";
import API from "../utils/API";
import Container from "../components/Container";
import SearchForm from "../components/SearchForm";
import SearchResults from "../components/SearchResults";
import SortBtns from "../components/SortBtns";

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

    firstNameAsc = () => {
        const users = this.state.users.sort((a, b) =>
            a.name.first.localeCompare(b.name.first)
        );
        this.setState({ users: users })
    }

    lastNameAsc = () => {
        const users = this.state.users.sort((a,b) =>
            a.name.last.localeCompare(b.name.last)
        );
        this.setState({ users: users })
    }

    locationAsc = () => {
        const users = this.state.users.sort((a, b) =>
            a.location.country.localeCompare(b.location.country)
        );
        this.setState({ users: users })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getUsers(this.state.search)
        .then(res =>  {
            if(res.data.status === "error") {
                throw new Error(res.data.data);
            }
            this.setState({results: res.data.data, error: ""});
        })
        .catch(err => this.setState({ error: err.message }))
    };

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
                <SortBtns
                firstNameAsc={this.firstNameAsc}
                lastNameAsc ={this.lastNameAsc}
                locationAsc={this.locationAsc}
                />
                <SearchResults users={this.state.users} search={this.state.search} />
              </Container>
            </div>
          );
    }
}

export default Search;