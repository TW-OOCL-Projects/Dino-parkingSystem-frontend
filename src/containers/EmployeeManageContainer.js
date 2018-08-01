import { connect } from 'react-redux';
import EmployeeManage from "../components/EmployeeManage";

const mapStateToProps = (state, ownProps) => {
    return {
      employees: state.employees
    };
  };
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(EmployeeManage);