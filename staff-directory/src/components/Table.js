import React, { Component } from "react";
// import "./Table.css"

class Table extends Component {
    state = {
        search: "",
        sortOrder: "ASC",
    }
    
    
    
    render (props) {
        return (
        <table className="table text-center">
        <thead>
            <tr>
            <th scope="col">id</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Position</th>
            <th scope="col">Salary</th>
            <th scope="col">Date Hired</th>
            <th scope="col">Email</th>
            <th scope="col">Phone Number</th>
            <th scope="col">Address</th>
            </tr>
        </thead>
        <tbody>
            {props.employees.map(employee => (
            <tr>
            <th scope="row" key={employee.id}>{employee.id}</th>
            <td key={employee.firstName}>{employee.firstName}</td>
            <td key={employee.lastName}>{employee.lastName}</td>
            <td key={employee.position}>{employee.position}</td>
            <td key={employee.salary}>{employee.salary}</td>
            <td key={employee.dateHired}>{employee.dateHired}</td>
            <td key={employee.email}>{employee.email}</td>
            <td key={employee.phoneNumber}>{employee.phoneNumber}</td>
            <td key={employee.address}>{employee.address}</td>
            </tr>
            ))};
        </tbody>
        </table>
    
        )}
}

export default Table;