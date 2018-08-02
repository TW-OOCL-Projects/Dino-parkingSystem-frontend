import { connect } from 'react-redux';
import EmployeeManage from "../components/employee/EmployeeManage";
import MySider from '../components/MySider';
import ResourceAPi from '../api/ResourceAPI';
import {setSiderStatus} from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
      status: state.mysider
    };
  };
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setSiderStatus: (status) => dispatch(setSiderStatus(status))
    }
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MySider);