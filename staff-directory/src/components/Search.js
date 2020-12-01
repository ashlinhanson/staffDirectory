import React from "react";

function Search(){
    return (
        <form>
            <div className="form-group">
                <label>Search:</label>
                <input name="search"
                type="text"
                className="form-group"
                placeholder="Search Staff"/>
            </div>
        </form>
    );
}

export default Search;