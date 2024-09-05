import React from 'react';

// react-bootstrap
import { Row, Col, Card, Table, ListGroup } from 'react-bootstrap';

// third party
import Chart from 'react-apexcharts';
import PerfectScrollbar from 'react-perfect-scrollbar';
import './index.css';

// project import
import OrderCard from '../../components/Widgets/Statistic/OrderCard';
import SocialCard from '../../components/Widgets/Statistic/SocialCard';

import uniqueVisitorChart from './chart/analytics-unique-visitor-chart';
import customerChart from './chart/analytics-cuatomer-chart';
import customerChart1 from './chart/analytics-cuatomer-chart-1';

// assets
import avatar1 from '../../assets/images/user/avatar-1.jpg';
import imgGrid1 from '../../assets/images/gallery-grid/img-grd-gal-1.jpg';
import imgGrid2 from '../../assets/images/gallery-grid/img-grd-gal-2.jpg';
import imgGrid3 from '../../assets/images/gallery-grid/img-grd-gal-3.jpg';

// ==============================|| DASHBOARD ANALYTICS ||============================== //

const DashAnalytics = () => {
  return (
    <React.Fragment>
      <Row>
        {/* order cards */}
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'On Time Trains',
              class: 'bg-c-blue',
              icon: 'fa fa-train',
              primaryText: '4',
              secondaryText: 'Total On time Trains',
              extraText: '10'
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Early Trains',
              class: 'bg-c-green',
              icon: 'fa fa-clock',
              primaryText: '1',
              secondaryText: 'Total Early Trains',
              extraText: '5'
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Delayed Trains',
              class: 'bg-c-yellow',
              icon: 'fa fa-exclamation-triangle',
              primaryText: '3',
              secondaryText: 'Total Delayed Trains',
              extraText: '5'
            }}
          />
        </Col>
        <Col md={6} xl={3}>
          <OrderCard
            params={{
              title: 'Canceled Trains',
              class: 'bg-c-red',
              icon: 'fa fa-times',
              primaryText: '2',
              secondaryText: 'Total Canceled Trains',
              extraText: '7'
            }}
          />
        </Col>

        {/* <Col md={12} xl={6}>
          <Card>
            <Card.Header>
              <h5>Unique Visitor</h5>
            </Card.Header>
            <Card.Body className="ps-4 pt-4 pb-0">
              <Chart {...uniqueVisitorChart} />
            </Card.Body>
          </Card>
        </Col>
        <Col md={12} xl={6}>
          <Row>
            <Col sm={6}>
              <Card>
                <Card.Body>
                  <Row>
                    <Col sm="auto">
                      <span>Customers</span>
                    </Col>
                    <Col className="text-end">
                      <h2 className="mb-0">826</h2>
                      <span className="text-c-green">
                        8.2%
                        <i className="feather icon-trending-up ms-1" />
                      </span>
                    </Col>
                  </Row>
                  <Chart {...customerChart} />
                  <Row className="mt-3 text-center">
                    <Col>
                      <h3 className="m-0">
                        <i className="fas fa-circle f-10 mx-2 text-success" />
                        674
                      </h3>
                      <span className="ms-3">New</span>
                    </Col>
                    <Col>
                      <h3 className="m-0">
                        <i className="fas fa-circle text-primary f-10 mx-2" />
                        182
                      </h3>
                      <span className="ms-3">Return</span>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={6}>
              <Card className="bg-primary text-white">
                <Card.Body>
                  <Row>
                    <Col sm="auto">
                      <span>Customers</span>
                    </Col>
                    <Col className="text-end">
                      <h2 className="mb-0 text-white">826</h2>
                      <span className="text-white">
                        8.2%
                        <i className="feather icon-trending-up ms-1" />
                      </span>
                    </Col>
                  </Row>
                  <Chart {...customerChart1} />
                  <Row className="mt-3 text-center">
                    <Col>
                      <h3 className="m-0 text-white">
                        <i className="fas fa-circle f-10 mx-2 text-success" />
                        674
                      </h3>
                      <span className="ms-3">New</span>
                    </Col>
                    <Col>
                      <h3 className="m-0 text-white">
                        <i className="fas fa-circle f-10 mx-2 text-white" />
                        182
                      </h3>
                      <span className="ms-3">Return</span>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col lg={4} md={12}>
          <SocialCard
            params={{
              icon: 'fa fa-envelope-open',
              class: 'blue',
              variant: 'primary',
              primaryTitle: '8.62k',
              primaryText: 'Subscribers',
              secondaryText: 'Your main list is growing',
              label: 'Manage List'
            }}
          />
          <SocialCard
            params={{
              icon: 'fab fa-twitter',
              class: 'green',
              variant: 'success',
              primaryTitle: '+40',
              primaryText: 'Followers',
              secondaryText: 'Your main list is growing',
              label: 'Check them out'
            }}
          />
        </Col>
        <Col lg={8} md={12}>
          <Card>
            <Card.Header>
              <h5>Activity Feed</h5>
            </Card.Header>
            <Card.Body className="card-body pt-4">
              <ListGroup as="ul" bsPrefix=" " className="feed-blog ps-0">
                <ListGroup.Item as="li" bsPrefix=" " className="active-feed">
                  <div className="feed-user-img">
                    <img src={avatar1} className="img-radius " alt="User-Profile" />
                  </div>
                  <h6>
                    <span className="badge bg-danger">File</span> Eddie uploaded new files:{' '}
                    <small className="text-muted">2 hours ago</small>
                  </h6>
                  <p className="m-b-15 m-t-15">
                    hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s.
                  </p>
                  <Row>
                    <Col sm="auto" className="text-center">
                      <img src={imgGrid1} alt="img" className="img-fluid wid-100" />
                      <h6 className="m-t-15 m-b-0">Old Scooter</h6>
                      <p className="text-muted m-b-0">
                        <small>PNG-100KB</small>
                      </p>
                    </Col>
                    <Col sm="auto" className="text-center">
                      <img src={imgGrid2} alt="img" className="img-fluid wid-100" />
                      <h6 className="m-t-15 m-b-0">Wall Art</h6>
                      <p className="text-muted m-b-0">
                        <small>PNG-150KB</small>
                      </p>
                    </Col>
                    <Col sm="auto" className="text-center">
                      <img src={imgGrid3} alt="img" className="img-fluid wid-100" />
                      <h6 className="m-t-15 m-b-0">Microphone</h6>
                      <p className="text-muted m-b-0">
                        <small>PNG-150KB</small>
                      </p>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix=" " className="diactive-feed">
                  <div className="feed-user-img">
                    <img src={avatar1} className="img-radius" alt="User-Profile" />
                  </div>
                  <h6>
                    <span className="badge bg-success">Task</span> Sarah marked the Pending Review:{' '}
                    <span className="text-c-green"> Trash Can Icon Design</span>
                    <small className="text-muted"> 2 hours ago</small>
                  </h6>
                </ListGroup.Item>
                <ListGroup.Item as="li" bsPrefix=" " className="diactive-feed">
                  <div className="feed-user-img">
                    <img src={avatar1} className="img-radius" alt="User-Profile" />
                  </div>
                  <h6>
                    <span className="badge bg-primary">comment</span> abc posted a task:{' '}
                    <span className="text-c-green">Design a new Homepage</span> <small className="text-muted">6 hours ago</small>
                  </h6>
                  <p className="m-b-15 m-t-15">
                    hii <b> @everone</b> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry&apos;s standard dummy text ever since the 1500s.
                  </p>
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </Col> */}

        <Col sm={12}>
          <Card>
            <Card.Header>
              <Card.Title as="h5">Train Monitering</Card.Title>
            </Card.Header>
            <Card.Body className="p-0">
              <div className="table-card table-container" style={{ height: '362px' }}>
                <PerfectScrollbar>
                  <Table responsive>
                    <thead>
                      <tr>
                        <th>
                          <span>Journey date</span>
                        </th>
                        <th>
                          <span>Train ID</span>
                        </th>
                        <th>
                          <span>Journey From</span>
                        </th>
                        <th>
                          <span>Journey To</span>
                        </th>
                        <th>
                          <span>Current Location</span>
                        </th>
                        <th>
                          <span>Status</span>
                        </th>
                        <th>
                          <span>Time Efficiency</span>
                        </th>
                        <th>
                          <span>Energy Efficiency</span>
                        </th>
                        <th>
                          <span>Update</span>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>01-09-2024</td>
                        <td>1214522</td>
                        <td>Mumbai Lokmanya Tilak</td>
                        <td>Mumbai</td>
                        <td>Pune</td>
                        <td> <span className="badge bg-success">On Time</span></td>
                        <td style={{ color: "green" }}>+5 min</td>
                        <td>2.5 KWh</td>
                        <td><i className='fa fa-edit' style={{ color: 'green' }}></i></td>
                      </tr>
                      <tr>
                        <td>02-09-2024</td>
                        <td>1213446</td>
                        <td>Pune Junction</td>
                        <td>Pune</td>
                        <td>Mumbai Lokmanya Tilak</td>
                        <td><span className="badge bg-danger">Delayed</span></td>
                        <td style={{ color: "red" }}>-20 min</td>
                        <td>3.0 KWh</td>
                        <td><i className='fa fa-edit' style={{ color: 'green' }}></i></td>
                      </tr>
                      <tr>
                        <td>03-09-2024</td>
                        <td>1102305</td>
                        <td>Nagpur</td>
                        <td>Nagpur</td>
                        <td>Mumbai Chhatrapati Shivaji</td>
                        <td> <span className="badge bg-success">On Time</span></td>
                        <td style={{ color: "green" }}>+10 min</td>
                        <td>2.8 KWh</td>
                        <td><i className='fa fa-edit' style={{ color: 'green' }}></i></td>
                      </tr>
                      <tr>
                        <td>04-09-2024</td>
                        <td>1123006</td>
                        <td>Mumbai Chhatrapati Shivaji</td>
                        <td>Mumbai</td>
                        <td>Nagpur</td>
                        <td> <span className="badge bg-success">On Time</span></td>
                        <td style={{ color: "green" }}>+7 min</td>
                        <td>2.6 KWh</td>
                        <td><i className='fa fa-edit' style={{ color: 'green' }}></i></td>
                      </tr>
                      <tr>
                        <td>05-09-2024</td>
                        <td>1112027</td>
                        <td>Aurangabad</td>
                        <td>Aurangabad</td>
                        <td>Mumbai Lokmanya Tilak</td>
                        <td><span className="badge bg-danger">Delayed</span></td>
                        <td style={{ color: "red" }}>-15 min</td>
                        <td>2.9 KWh</td>
                        <td><i className='fa fa-edit' style={{ color: 'green' }}></i></td>
                      </tr>
                      <tr>
                        <td>06-09-2024</td>
                        <td>1167029</td>
                        <td>Solapur</td>
                        <td>Solapur</td>
                        <td>Pune Junction</td>
                        <td> <span className="badge bg-success">On Time</span></td>
                        <td style={{ color: "green" }}>+8 min</td>
                        <td>2.7 KWh</td>
                        <td><i className='fa fa-edit' style={{ color: 'green' }}></i></td>
                      </tr>
                      <tr>
                        <td>07-09-2024</td>
                        <td>1108933</td>
                        <td>Thane</td>
                        <td>Thane</td>
                        <td>Mumbai Lokmanya Tilak</td>
                        <td><span className="badge bg-danger ">Delayed</span></td>
                        <td style={{ color: "red" }}>-25 min</td>
                        <td>3.2 KWh</td>
                        <td><i className='fa fa-edit' style={{ color: 'green' }}></i></td>
                      </tr>
                      <tr>
                        <td>08-09-2024</td>
                        <td>1210942</td>
                        <td>Kolhapur</td>
                        <td>Kolhapur</td>
                        <td>Mumbai Lokmanya Tilak</td>
                        <td> <span className="badge bg-success">On Time</span></td>
                        <td style={{ color: "green" }}>+12 min</td>
                        <td>2.4 KWh</td>
                        <td><i className='fa fa-edit' style={{ color: 'green' }}></i></td>
                      </tr>
                      <tr>
                        <td>09-09-2024</td>
                        <td>1213447</td>
                        <td>Nasik</td>
                        <td>Nasik</td>
                        <td>Mumbai Lokmanya Tilak</td>
                        <td><span className="badge bg-danger">Delayed</span></td>
                        <td style={{ color: "red" }}>-18 min</td>
                        <td>3.1 KWh</td>
                        <td><i className='fa fa-edit' style={{ color: 'green' }}></i></td>
                      </tr>
                      <tr>
                        <td>10-09-2024</td>
                        <td>1212353</td>
                        <td>Dharmabad</td>
                        <td>Dharmabad</td>
                        <td>Mumbai Lokmanya Tilak</td>
                        <td> <span className="badge bg-success">On Time</span></td>
                        <td style={{ color: "green" }}>+6 min</td>
                        <td>2.6 KWh</td>
                        <td><i className='fa fa-edit' style={{ color: 'green' }}></i></td>
                      </tr>
                      <tr>
                        <td>11-09-2024</td>
                        <td>1212355</td>
                        <td>Jalgaon</td>
                        <td>Jalgaon</td>
                        <td>Mumbai Lokmanya Tilak</td>
                        <td><span className="badge bg-danger">Delayed</span></td>
                        <td style={{ color: "red" }}>-22 min</td>
                        <td>3.3 KWh</td>
                        <td><i className='fa fa-edit' style={{ color: 'green' }}></i></td>
                      </tr>
                    </tbody>

                  </Table>
                </PerfectScrollbar>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default DashAnalytics;
