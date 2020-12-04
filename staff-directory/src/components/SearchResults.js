import React from "react";


// for search results
function SearchResults(props) {
  return (
    //setting up table 
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
              <td key={user.picture.medium}><img src={user.picture.medium} alt={user.name.first}/></td>
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
