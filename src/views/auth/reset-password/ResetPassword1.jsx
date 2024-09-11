import React from 'react';
import { NavLink } from 'react-router-dom';

// react-bootstrap
import { Card, Row, Col } from 'react-bootstrap';
import './style.scss';

// project import
import Breadcrumb from '../../../layouts/AdminLayout/Breadcrumb';

// assets
import logoDark from '../../../assets/images/favicon.ico';
import logojmv from '../../../assets/images/jmv_logo1.png';

// ==============================|| RESET PASSWORD 1 ||============================== //

const ResetPassword1 = () => {
  return (
    <React.Fragment>
      <Breadcrumb />
      <div className="auth-wrapper">
        <div className="auth-content text-center">
          <Card className="borderless">
            <Row className="align-items-center text-center">
              <Col>
                <Card.Body className="card-body">
                <div>
              <img src={logoDark} alt="" className="img-fluid mb-4 me-3 logo-imgs"  />
              <img src={logojmv} alt="" className="img-fluid mb-4 logo-imgs" />
              </div>
                  <h4 className="mb-3 f-w-400">Reset your password</h4>
                  <div className="input-group mb-4">
                    <input type="email" className="form-control" placeholder="Email address" />
                  </div>
                  <button className="btn btn-block btn-primary mb-4">Reset password</button>
                  <p className="mb-0 text-muted">
                    Don’t have an account?{' '}
                    <NavLink to="#" className="f-w-400">
                      Signup
                    </NavLink>
                  </p>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ResetPassword1;
