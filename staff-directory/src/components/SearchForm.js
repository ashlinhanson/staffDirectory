import React from "react";

// Using the datalist element we can create autofill suggestions based on the props.breeds array
function SearchForm(props) {
    return (
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
        // <form>
        //     <div className="form-group text-center mx-auto">
        //         <label className="mx-2 my-4">Search:</label>
        //         <input 
        //         name="search"
        //         type="text"
        //         className="form-group mx-2"
        //         placeholder="Search Staff..."
        //         onChange={props.handleInputChange}
        //         value={props.results}
        //         />
        //         {/* <button type="search" onClick={props.handleFormSubmit} className="btn btn-secondary mx-2">
        //             Search
        //         </button> */}
        //     </div>
        // </form>
    );
}

export default SearchForm;
