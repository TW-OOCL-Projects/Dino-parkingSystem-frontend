import ResourceAPI from '../api/ResourceAPI';

export default (state = [], action) => {
    switch (action.type) {
      case 'GET_ALL_ORDERS': {
          console.log(action.orders);
        return action.orders;
      }
      default:
        return state;
    }
  };
  