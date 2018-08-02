import React from 'react';
import {Layout} from 'antd';
import {Card, Col, Row} from 'antd';
import {Progress} from 'antd';

const {Content} = Layout;

class ParkingLotDashboard extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    this
      .props
      .load();
  }

  render() {
    return (
      <Content style={{
        padding: '0 24px',
        minHeight: 280
      }}>
        <div style={{
          padding: '50px'
        }}>
          <Row gutter={16}>

            {/* <DashBoardCard/> */}
            <div>
              {this
                .props
                .lotsList
                .map(item => <Col span={8}>
                  <Card title={item.parkingLotName}>
                    {/* <Progress type="dashboard" percent={(((item.size-item.carNum) / item.size) * 100).toFixed(2)}/> */}
                    <Progress type="dashboard" format={() => `${item.carNum}/${item.size}`} percent={(((item.carNum) / item.size) * 100).toFixed(2)}/>
                    <div>停车员:{item.parkingBoyName}
                    </div>
                  </Card>
                </Col>)}
            </div>
          </Row>
        </div>
      </Content>

    );
  }
}


export default ParkingLotDashboard;