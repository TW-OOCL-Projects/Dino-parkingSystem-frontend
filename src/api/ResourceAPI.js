import axios from 'axios';

const ResourceAPi = {
    apiUrl: 'http://localhost:8082',

    getAllEmployees(successCallBack) {
        axios
            .get(`${this.apiUrl}/employees`)
            .then(function (response) {
                successCallBack(response.data._embedded.todos);
            })
            .catch(function (error) {
                console.log(error);
            });
    },
}

export default ResourceAPi;