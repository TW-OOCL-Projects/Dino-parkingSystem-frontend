import axios from 'axios';

const ResourceAPi = {
    apiUrl: 'https://dino-parking-system-backend.herokuapp.com',

    getAllEmployees(successCallBack) {
        axios
            .get(`${this.apiUrl}/users`)
            .then(function (response) {
                successCallBack(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    addEmployee(employee, successCallBack) {
        axios.
            post(`${this.apiUrl}/users`, employee)
            .then(function (response) {
                successCallBack(response.status);
            }) 
            .catch(function (error) {
                console.log(error);
            })
    }
}

export default ResourceAPi;