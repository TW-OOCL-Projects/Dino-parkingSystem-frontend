export const showParkingLotsList = (list) => ({ type: 'SHOW_PARKINGLOTSLIST',list})
export const getAllEmployees = (employees) => ({type: 'GET_ALL_EMPLOYEES', employees})
export const getAllParkingLots = (parkingLots) => ({type: 'GET_ALL_PARKINGLOTS', parkingLots})
export const setSiderStatus = (status) => ({type: 'GET_SIDER_STATUS', status})
export const getAllOrders = (orders) => ({type: 'GET_ALL_ORDERS', orders})
export const getAllParkingBoys = (parkingBoys) => ({type: 'GET_ALL_PARKINGBOYS', parkingBoys})
export const dispatchOrderSuccess = (id) => ({type: 'DISPATCH_ORDER_SUCCESS', id})