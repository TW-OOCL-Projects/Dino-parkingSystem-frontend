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
    },
    
    ModifyEmployeeInfo(employee, successCallBack) {
        axios.
            put(`${this.apiUrl}/users/${employee.id}`, employee)
            .then(function (response) {
                successCallBack(response.status);
            }) 
            .catch(function (error) {
                console.log(error);
            })
    },

    ChangeEmployeeStatus(employeeId, EmployeeStatus, successCallBack) {
        axios.
            patch(`${this.apiUrl}/users/${employeeId}`, EmployeeStatus)
            .then(function (response) {
                successCallBack(response.status);
            }) 
            .catch(function (error) {
                console.log(error);
            })
    },
}

export default ResourceAPi;