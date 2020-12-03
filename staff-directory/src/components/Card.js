import React from "react";

function Card(props){
    return(
        <div className="col-6">
        <div className="card">
            <div className="img-container">
                <img src={props.picture} alt={props.user.name}/>
            </div>
            <div className="content">
                <ul>
                    <li key={props.user.name}>
                        {props.user.name}
                    </li>
                    <li key={props.user.location.country}>
                        {props.user.location.country}
                    </li>
                    <li key={props.user.dob.age}>
                        {props.user.dob.age}
                    </li>
                    <li>
                        {props.user.email}
                    </li>
                    <li>
                        {props.user.phone}
                    </li>
                </ul>
            </div>
        </div>
        </div>
    );
}

export default Card;