import React from "react";

function SearchResults(props) {
  return (
    <table style={{ width: "100%" }} className="col-12 mx-auto table rounded">
      <thead>
        <tr>
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
        {props.users.map(user => (
            <tr>
              <td scope="row" key={user.picture.thumbnail}><img src={user.picture.medium} alt={user.name.first}/></td>
              <td scope="row" key={user.name.first}>{user.name.first}</td>
              <td scope="row" key={user.name.last}>{user.name.last}</td>
              <td scope="row" key={user.email}>{user.email}</td>
              <td scope="row" key={user.phone}>{user.phone}</td>
              <td scope="row" key={user.dob.age}>{user.dob.age} years old</td>
              <td scope="row" key={user.location.country}>{user.location.country}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default SearchResults;
