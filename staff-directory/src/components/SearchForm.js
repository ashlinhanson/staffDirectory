import React from "react";
//will use when the search form is working
// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
    return (
        //search form component
        <form className="text-center">
            <input 
                className="searchForm m-4"
                type="search"
                onChange={props.handleInputChange}
                placeholder="Search by last name..."
                />
                <button type="search" onClick={props.handleFormSubmit} className="btn btn-secondary mx-2">
                        Search
            </button>
        </form>
    );
}

export default SearchForm;
