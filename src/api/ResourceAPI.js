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
    
    modifyEmployeeInfo(employee, successCallBack) {
        axios.
            put(`${this.apiUrl}/users/${employee.id}`, employee)
            .then(function (response) {
                successCallBack(response.status);
            }) 
            .catch(function (error) {
                console.log(error);
            })
    },

    changeEmployeeStatus(employeeId, employeeStatus, successCallBack) {
        axios({
            method: 'patch',
            url: `${this.apiUrl}/users/${employeeId}`,
            headers: { 'content-type': 'application/json' },
            data: employeeStatus
        })
            .then(function (response) {
                successCallBack(response.status);
            })
            .catch(function (error) {
                console.log(error);
            })
    },

    getAllParkingLots(successCallBack) {
        axios
            .get(`${this.apiUrl}/parkingLots`)
            .then(function (response) {
                successCallBack(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    getAllOrders(successCallBack) {
        axios
            .get(`${this.apiUrl}/orders`)
            .then(function (response) {
                successCallBack(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    getAllParkingBoys(successCallBack) {
        axios
            .get(`${this.apiUrl}/parkingBoys`)
            .then(function (response) {
                successCallBack(response.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    },

    dispatchOrder(orderId, parkingBoyId, successCallBack) {
        axios
            .put(`${this.apiUrl}/orders/${orderId}`, {
                "status":"waitPark",
                "parkingBoyId":parkingBoyId
            })
            .then(function (response) {
                successCallBack(response.status);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
}

export default ResourceAPi;