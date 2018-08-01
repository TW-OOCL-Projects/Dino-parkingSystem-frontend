import ResourceAPI from '../api/ResourceAPI';

export default (state = [], action) => {
    switch (action.type) {
      case 'GET_ALL_EMPLOYEES': {
        return action.employees;
      }
      default:
        return state;
    }
  };
  