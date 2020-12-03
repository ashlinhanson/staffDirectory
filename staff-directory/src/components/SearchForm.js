import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
  return (
    <form className="search col-6 mx-auto">
      <div className="form-group">
        <label htmlFor="users"></label>
        <input
          value={props.search}
          onChange={props.handleInputChange}
          name="user"
          list="users"
          type="text"
          className="form-control"
          placeholder="Type your search here"
          id="searchForm"
        />
      </div>
    </form>
  );
}

export default SearchForm;
