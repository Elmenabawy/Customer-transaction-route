import React from 'react';
import styles from './Register.module.css';
import RegisterImg from '../../../src/Assets/images/Personal settings.gif';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Register() {
  const navigate = useNavigate();
  const [error, seterror] = useState(null);
  const [isLoading, setisLoading] = useState(false);

  async function submitRegister(values) {
    setisLoading(true);
    let { data } = await axios.post('https://gogreenserver-1-1.onrender.com/api/Registration', values)
      .catch(
        (err) => {
          setisLoading(false);
          console.log(err.response.data.message)
          seterror(err.response.data.message);
        }
      );
    if (data.message === 'success') {
      setisLoading(false);
      navigate('/login');
    }
  }

  const phoneRegExp = /^[0-9]{11}$/; // Assuming phone numbers are 10 digits long
  const passwordRegExp = /^(?=.*[a-zA-Z@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/; // Assuming passwords are at least 8 characters long and contain at least one letter and one special character

  let validationSchema = Yup.object({
    name: Yup.string().min(3, "Name minimum length is 3").max(10, "Name maximum length is 10").required("Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    phone: Yup.string().matches(phoneRegExp, "Phone number is invalid").required("Phone number is required"),
    password: Yup.string().matches(passwordRegExp, "Invalid password").required("Password is required"),
    rePassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Password confirmation is required")
  });

  let formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      age: "",
      password: "",
      rePassword: ""
    },
    validationSchema: validationSchema,
    onSubmit: submitRegister
  });

  return (

    <div className="container my-3 rounded-3 d-flex justify-content-center align-items-center">
      <div className="row border rounded-3 p-3 bg-white shadow box-area">
        <div className="col-md-6 rounded-3 d-flex justify-content-center align-items-center flex-column left-box">
          <div className='d-flex justify-content-center align-items-center flex-column'>
            <img src={RegisterImg} alt="Register Gif" className='w-100' />
            <p className="fs-4">Be Verified</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="w-75 m-auto">
            <form onSubmit={formik.handleSubmit}>

              {error !== null ? <div className="alert alert-danger">{error}</div> : ""}

              <h4 className='my-2'>Register Here :</h4>

              <label htmlFor="name" className="m-2">Name :</label>
              <input
                id="name"
                name="name"
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.errors.name && formik.touched.name && (
                <div className="alert alert-danger p-2 mt-2">{formik.errors.name}</div>
              )}

              <label htmlFor="email" className="m-2">Email :</label>
              <input
                id="email"
                name="email"
                type="text"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
              />
              {formik.errors.email && formik.touched.email && (
                <div className="alert alert-danger p-2 mt-2">{formik.errors.email}</div>
              )}

              <label htmlFor="password" className="m-2">Password :</label>
              <input
                id="password"
                name="password"
                type="password"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.password}
              />
              {formik.errors.password && formik.touched.password && (
                <div className="alert alert-danger p-2 mt-2">{formik.errors.password}</div>
              )}

              <label htmlFor="rePassword" className="m-2">Confirm Password :</label>
              <input
                id="rePassword"
                name="rePassword"
                type="password"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.rePassword}
              />
              {formik.errors.rePassword && formik.touched.rePassword && (
                <div className="alert alert-danger p-2 mt-2">{formik.errors.rePassword}</div>
              )}

              <label htmlFor="phone" className="m-2">Phone :</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                className="form-control"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phone}
              />
              {formik.errors.phone && formik.touched.phone && (
                <div className="alert alert-danger p-2 mt-2">{formik.errors.phone}</div>
              )}


              {isLoading ? <button className="btn bg-main text-white mt-3" type="button">
                <i className='fas fa-spinner fa-spin'></i>
              </button> : <button disabled={!(formik.isValid && formik.dirty)} className="btn bg-main text-white mt-3" type="submit">Submit</button>}


            </form>
          </div>
        </div>
      </div>
    </div>

  );
}
