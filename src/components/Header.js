import React from "react";
import "./styles/Header.css";

function Header(){
    //the jumbotron component
    return (
        <div className="jumbotron">
            <h1 className="text-center">Staff Directory</h1>
            <p className="text-center">Keep your staff organized by first name, last name, or location by clicking the buttons below</p>
        </div>
    );
}

export default Header;