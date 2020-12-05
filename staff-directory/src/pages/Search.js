// setting up dependencies and importing components
import React, { Component } from "react";
// import API from "../utils/API";
import SearchForm from "../components/SearchForm";
// import SearchResults from "../components/SearchResults";
import SortBtns from "../components/SortBtns";
import Table from "../components/Table";
import API from "../utils/API";

class Search extends Component {

        state = {
            search: "",
            users: []
        };

    componentDidMount(){
        API.getUsers()
        // .then((res) => res.json())
        .then((users) => {
            console.log(users);
            this.setState({ users: users.data.results })
        });
    }

    //the function to handle the input from the search box
    handleInputChange = event => {
        this.setState({ search: event.target.value});
    };


    //the function to sort the users by first name a-z
    firstNameAsc = () => {
        const users = this.state.users.sort((one, two) =>
            one.name.first.localeCompare(two.name.first)
        );
        this.setState({ users: users })
    }


    //the function to sort the users by last name a-z
    lastNameAsc = () => {
        const users = this.state.users.sort((one, two) =>
            one.name.last.localeCompare(two.name.last)
        );
        this.setState({ users: users })
    }


    //the function to sort the users by location from a-z
    locationAsc = () => {
        const users = this.state.users.sort((one, two) =>
            one.location.country.localeCompare(two.location.country)
        );
        this.setState({ users: users })
    }

    handleFormSubmit = event => {
        event.preventDefault();
        API.getUsers(this.state.search)

        .then(res =>  {
            if(res.data.status === "error") {
                throw new Error(res.search.results);
            }
            this.setState({results: res.search.results , error: ""});
        })
        .catch(err => this.setState({ error: err.message }))
        console.log("ksjdfljh")
    };
    // handleFormSubmit = event => {
    //     event.preventDefault();
    //     this.state.search.filter((user) =>
    //       user.name.last.includes(this.state.search.toLowerCase())
    //     );
    //     console.log("this is working!")
    //   };

    render(){

        const { users, search } = this.state;
        const searchedUsers = users.filter((user) =>
            user.name.last.toLowerCase().includes(search.toLowerCase())
        )

        return (
            <div>
                <SearchForm
                //   onClick={this.handleFormSubmit}
                  onChange={this.handleInputChange}
                //   users={this.state.results}
                />
                <SortBtns
                firstNameAsc={this.firstNameAsc}
                lastNameAsc ={this.lastNameAsc}
                locationAsc={this.locationAsc}
                />
                <Table users={searchedUsers}/>
            </div>
          );
    }
}

export default Search;