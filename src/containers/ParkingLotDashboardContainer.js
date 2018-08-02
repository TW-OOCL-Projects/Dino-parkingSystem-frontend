import {connect} from 'react-redux';
import ParkingLotDashboard from "../components/parkingLot/ParkingLotDashboard";
import {showParkingLotsList} from '../actions/index'
import ParkingLotDashboardAPI from '../api/ParkingLotDashboardAPI'

const mapStateToProps = (state, ownProps) => {
  let lotsList = [];
  if (state !== null) {
    lotsList = [...state.dashboard];
  }

  return {lotsList}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    load: () => {
      ParkingLotDashboardAPI.initServerData(dispatch, showParkingLotsList);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ParkingLotDashboard);