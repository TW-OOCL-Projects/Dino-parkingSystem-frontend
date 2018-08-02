
export default (state = '', action) => {
    switch (action.type) {
      case 'GET_SIDER_STATUS': {
          console.log(action.status);
        return action.status;
      }
      default:
        return state;
    }
  };
  