import axios from "axios";

//exporting object containing the method to use the randomuser api

export default {
    getUsers: function() {
    return axios.get('https://randomuser.me/api/?results=20&inc=name,dob,location,phone,email,picture,id')
    }
};

