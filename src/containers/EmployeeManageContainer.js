import { connect } from 'react-redux';
import EmployeeManage from "../components/EmployeeManage";
import ResourceAPi from '../api/ResourceAPI';

const mapStateToProps = (state, ownProps) => {
    return {
      employees: state.employees
    };
  };
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllEmployees: () => {
            ResourceAPi.getAllEmployees(employees => dispatch({type: 'GET_ALL_EMPLOYEES', employees}))
        }
    }
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeManage);