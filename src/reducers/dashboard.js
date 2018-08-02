export default  (state = [], action) => { 
    
    switch (action.type) {
        
        case 'SHOW_PARKINGLOTSLIST':{
            let newState = JSON.parse(JSON.stringify(state));
            newState = [...action.list];
            return newState;
        }
        default:
            return state;
    }
}