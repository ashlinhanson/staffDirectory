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
              <td key={user.picture.thumbnail}><img src={user.picture.medium} alt={user.name.first}/></td>
              <td key={user.name.first}>{user.name.first}</td>
              <td key={user.name.last}>{user.name.last}</td>
              <td key={user.email}>{user.email}</td>
              <td key={user.phone}>{user.phone}</td>
              <td key={user.dob.age}>{user.dob.age} years old</td>
              <td key={user.location.country}>{user.location.country}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default SearchResults;
