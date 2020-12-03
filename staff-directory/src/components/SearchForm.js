import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
    return (
        <form>
            <div className="form-group text-center mx-auto">
                <label className="mx-2 my-4">Search:</label>
                <input name="search"
                type="text"
                className="form-group"
                placeholder="Search Staff..."
                value={props.search}/>
                <button onChange={props.handleFormSubmit} className="btn btn-secondary mx-2">
                Search
                </button>
            </div>
        </form>
    );
}

export default SearchForm;
