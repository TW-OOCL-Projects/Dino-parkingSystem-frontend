

    import { combineReducers } from 'redux';
    import employees from './employees';
    import dashboard from './dashboard';
    export default combineReducers({    employees,dashboard  });   

    // export default  (state = [], action) => { 
    //     switch (action.type) {
           
    //             case 'SHOW_PARKINGLOTSLIST':{
    //                 let newState = JSON.parse(JSON.stringify(state));
    //                 newState = [...action.list];
    //                 return newState;
    //             }
    //             case 'GET_ALL_EMPLOYEES': {
    //       console.log(action.employees);
    //     return action.employees;
    //   }
    //             default:
    //                 return state;
    //         }
            
    //     }
    
    
    

