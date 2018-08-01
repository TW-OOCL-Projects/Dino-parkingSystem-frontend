

import employees from './employees';



export default  (state = [], action) => { 
  employees,
    switch (action.type) {
        case 'SHOW_PARKINGLOTSLIST':{
            let newState = JSON.parse(JSON.stringify(state));
            newState = [...action.list];
            return newState;
        }
        default:
            return state
    }
}


