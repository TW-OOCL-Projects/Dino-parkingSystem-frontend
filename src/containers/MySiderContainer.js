import { connect } from 'react-redux';
import EmployeeManage from "../components/EmployeeManage";
import MySider from '../components/MySider';
import ResourceAPi from '../api/ResourceAPI';

const mapStateToProps = (state, ownProps) => {
    return {
      
    };
  };
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        
    }
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MySider);