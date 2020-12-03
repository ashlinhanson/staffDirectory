import React from "react";

    const SortBtns = ({
        firstNameAsc,
        lastNameAsc,
        locationAsc
    }) => {
        return (
        <div className="button-container text-center">
            <button className="btn btn-secondary mx-5 mb-4" onClick={firstNameAsc}>
                First Name: A - Z
            </button>
            <button className="btn btn-secondary mx-5 mb-4" onClick={lastNameAsc}>
                Last Name: A - Z
            </button>
            <button className="btn btn-secondary mx-5 mb-4" onClick={locationAsc}>
                Location: A - Z
            </button>
    </div>
        )
}

export default SortBtns;