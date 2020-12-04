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
        const users = this.state.users.sort((one, two) =>
            one.name.first.localeCompare(two.name.first)
        );
        this.setState({ users: users })
    }

    lastNameAsc = () => {
        const users = this.state.users.sort((one, two) =>
            one.name.last.localeCompare(two.name.last)
        );
        this.setState({ users: users })
    }

    locationAsc = () => {
        const users = this.state.users.sort((one, two) =>
            one.location.country.localeCompare(two.location.country)
        );
        this.setState({ users: users })
    }

    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     API.getUsers(this.state.search)

        // .then(res =>  {
        //     if(res.data.status === "error") {
        //         throw new Error(res.search.results);
        //     }
        //     this.setState({results: res.search.results , error: ""});
        // })
        // .catch(err => this.setState({ error: err.message }))
    // };
    handleFormSubmit = event => {
        event.preventDefault();
        this.state.users.filter((user) =>
          user.name.last.toLowerCase().includes(this.state.search.toLowerCase())
        );
      };

    render(){

        return (
            <div>
              <Container style={{ minHeight: "80%" }}>
                <h4 className="text-center">Search for Staff Members!</h4>
                <SearchForm
                //   onClick={this.handleFormSubmit}
                //   onChange={this.handleInputChange}
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