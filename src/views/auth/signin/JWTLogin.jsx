import React from 'react';
import axios from 'axios';
import { Row, Col, Alert, Button } from 'react-bootstrap';
import * as Yup from 'yup';
import { Formik } from 'formik';

// ==============================|| JWT LOGIN ||============================== //

const JWTLogin = () => {
  // Function to handle form submission
  const handleSubmit = async (values, { setErrors, setStatus, setSubmitting }) => {
    try {
      // Example API call to authenticate the user
      // const response = await axios.post('/api/auth/login', {
      //   email: values.email,
      //   password: values.password,
      // });

      // Handle the response here (e.g., save token, redirect, etc.)
      // if (response.data.token) {
      //   // Store token in local storage or context
      //   localStorage.setItem('token', response.data.token);

      //   // Set status to success
      //   setStatus({ success: true });

      //   // Redirect user or perform other actions
       
      // }
      window.location.href = './views/dashboard';
    } catch (error) {
      // Set the error message to be displayed on the form
      setErrors({ submit: error.response ? error.response.data.message : 'Something went wrong' });
      setStatus({ success: false });
    } finally {
      // Set submitting to false to re-enable the submit button
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={{
          email: 'admin@jmv.com',
          password: 'admin',
          submit: null,
        }}
        validationSchema={Yup.object().shape({
          email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
          password: Yup.string().max(255).required('Password is required'),
        })}
        onSubmit={handleSubmit} // Attach the handleSubmit function here
      >
        {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
          <form noValidate onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <input
                className="form-control"
                label="Email Address / Username"
                name="email"
                onBlur={handleBlur}
                onChange={handleChange}
                type="email"
                value={values.email}
              />
              {touched.email && errors.email && <small className="text-danger form-text">{errors.email}</small>}
            </div>
            <div className="form-group mb-4">
              <input
                className="form-control"
                label="Password"
                name="password"
                onBlur={handleBlur}
                onChange={handleChange}
                type="password"
                value={values.password}
              />
              {touched.password && errors.password && <small className="text-danger form-text">{errors.password}</small>}
            </div>

            <div className="custom-control custom-checkbox text-start mb-4 mt-2">
              <input type="checkbox" className="custom-control-input mx-2" id="customCheck1" />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me.
              </label>
            </div>

            {errors.submit && (
              <Col sm={12}>
                <Alert variant="danger">{errors.submit}</Alert>
              </Col>
            )}

            <Row>
              <Col mt={2}>
                <Button className="btn-block mb-4" color="primary" disabled={isSubmitting} size="large" type="submit" variant="primary">
                  Sign in
                </Button>
              </Col>
            </Row>
          </form>
        )}
      </Formik>
      {/* <Row>
        <Col sm={12}>
          <h5 className="my-3"> OR </h5>
        </Col>
      </Row> */}
{/* 
      <Row>
        <Col sm={12}>
          <Button variant="danger">
            <i className="fa fa-lock" /> Sign in with Google
          </Button>
        </Col>
      </Row> */}

      <hr />
    </>
  );
};

export default JWTLogin;
