import React from "react";
import "./styles/SortBtns.css"
//button components to sort the users listed on the page.
    const SortBtns = ({
        firstNameAsc,
        lastNameAsc,
        locationAsc
    }) => {
        return (
        <div className="button-container text-center">
            <button className="btn mx-5 mb-4" onClick={firstNameAsc}>
                First Name: A - Z
            </button>
            <button className="btn mx-5 mb-4" onClick={lastNameAsc}>
                Last Name: A - Z
            </button>
            <button className="btn mx-5 mb-4" onClick={locationAsc}>
                Location: A - Z
            </button>
    </div>
        )
}

export default SortBtns;