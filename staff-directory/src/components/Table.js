import React from "react";
import "./styles/Table.css"
//table component
function Table(props) {
    return (

    <table style={{ width: "100%" }} className="col-12 mx-auto table rounded">
      <thead>
        <tr>
        {/* each column for data element */}
          <th scope="col">Photo</th>
          <th scope="col">First Name</th>
          <th scope="col">Last Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone Number</th>
          <th scope="col">Age</th>
          <th scope="col">Location</th>
        </tr>
      </thead>
      <tbody>
        {/* mapping over the users in the api to render them */}
        {props.users.map((user) => (
            <tr>
                {/* each type of data from the api to fill the columns */}
              <th scope="row" key={user.phone}><img src={user.picture.large} alt={user.name.first} className="image"/></th>
              <td>{user.name.first}</td>
              <td>{user.name.last}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.dob.age} years old</td>
              <td>{user.location.country}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    );
};

export default Table;