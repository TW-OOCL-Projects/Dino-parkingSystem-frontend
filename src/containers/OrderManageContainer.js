import { connect } from 'react-redux';
import OrderManage from "../components/order/OrderManage";
import ResourceAPi from '../api/ResourceAPI';
import {getAllOrders} from '../actions';

const mapStateToProps = (state, ownProps) => {
    return {
      orders: state.orders
    };
  };
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getAllOrders: () => {
            ResourceAPi.getAllOrders(orders => dispatch(getAllOrders(orders)));
        }
    }
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderManage);