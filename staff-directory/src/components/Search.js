import React from "react";

function Search(props){
    return (
        <form>
            <div className="form-group text-center">
                <label>Search:</label>
                <input name="search"
                type="text"
                className="form-group"
                placeholder="Search Staff..."
                value={props.search}/>
                <button onChange={props.handleFormSubmit} className="btn btn-primary">
                Search
                </button>
            </div>
        </form>
    );
}

export default Search;