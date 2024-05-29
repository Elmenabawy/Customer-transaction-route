// import React from 'react';
// import styles from './Register.module.css';
// import RegisterImg from '../../../src/Assets/images/Personal settings.gif';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useState } from 'react';

// export default function Register() {
//   const navigate = useNavigate();
//   const [error, seterror] = useState(null);
//   const [isLoading, setisLoading] = useState(false);

//   async function submitRegister(values) {
//     setisLoading(true);
//     let { data } = await axios.post('https://gogreenserver-1-1.onrender.com/api/Registration', values)
//       .catch(
//         (err) => {
//           setisLoading(false);
//           console.log(err.response.data.message)
//           seterror(err.response.data.message);
//         }
//       );
//     if (data.message === 'success') {
//       setisLoading(false);
//       navigate('/login');
//     }
//   }

//   const phoneRegExp = /^[0-9]{11}$/; // Assuming phone numbers are 10 digits long
//   const passwordRegExp = /^(?=.*[a-zA-Z@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/; // Assuming passwords are at least 8 characters long and contain at least one letter and one special character

//   let validationSchema = Yup.object({
//     name: Yup.string().min(3, "Name minimum length is 3").max(10, "Name maximum length is 10").required("Name is required"),
//     email: Yup.string().email("Email is invalid").required("Email is required"),
//     phone: Yup.string().matches(phoneRegExp, "Phone number is invalid").required("Phone number is required"),
//     password: Yup.string().matches(passwordRegExp, "Invalid password").required("Password is required"),
//     rePassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Password confirmation is required")
//   });

//   let formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       phone: "",
//       age: "",
//       password: "",
//       rePassword: ""
//     },
//     validationSchema: validationSchema,
//     onSubmit: submitRegister
//   });

//   return (

//     <div className="container my-3 rounded-3 d-flex justify-content-center align-items-center">
//       <div className="row border rounded-3 p-3 bg-white shadow box-area">
//         <div className="col-md-6 rounded-3 d-flex justify-content-center align-items-center flex-column left-box">
//           <div className='d-flex justify-content-center align-items-center flex-column'>
//             <img src={RegisterImg} alt="Register Gif" className='w-100' />
//             <p className="fs-4">Be Verified</p>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="w-75 m-auto">
//             <form onSubmit={formik.handleSubmit}>

//               {error !== null ? <div className="alert alert-danger">{error}</div> : ""}

//               <h4 className='my-2'>Register Here :</h4>

//               <label htmlFor="name" className="m-2">Name :</label>
//               <input
//                 id="name"
//                 name="name"
//                 type="text"
//                 className="form-control"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.name}
//               />
//               {formik.errors.name && formik.touched.name && (
//                 <div className="alert alert-danger p-2 mt-2">{formik.errors.name}</div>
//               )}

//               <label htmlFor="email" className="m-2">Email :</label>
//               <input
//                 id="email"
//                 name="email"
//                 type="text"
//                 className="form-control"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.email}
//               />
//               {formik.errors.email && formik.touched.email && (
//                 <div className="alert alert-danger p-2 mt-2">{formik.errors.email}</div>
//               )}

//               <label htmlFor="password" className="m-2">Password :</label>
//               <input
//                 id="password"
//                 name="password"
//                 type="password"
//                 className="form-control"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.password}
//               />
//               {formik.errors.password && formik.touched.password && (
//                 <div className="alert alert-danger p-2 mt-2">{formik.errors.password}</div>
//               )}

//               <label htmlFor="rePassword" className="m-2">Confirm Password :</label>
//               <input
//                 id="rePassword"
//                 name="rePassword"
//                 type="password"
//                 className="form-control"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.rePassword}
//               />
//               {formik.errors.rePassword && formik.touched.rePassword && (
//                 <div className="alert alert-danger p-2 mt-2">{formik.errors.rePassword}</div>
//               )}

//               <label htmlFor="phone" className="m-2">Phone :</label>
//               <input
//                 id="phone"
//                 name="phone"
//                 type="tel"
//                 className="form-control"
//                 onChange={formik.handleChange}
//                 onBlur={formik.handleBlur}
//                 value={formik.values.phone}
//               />
//               {formik.errors.phone && formik.touched.phone && (
//                 <div className="alert alert-danger p-2 mt-2">{formik.errors.phone}</div>
//               )}


//               {isLoading ? <button className="btn bg-main text-white mt-3" type="button">
//                 <i className='fas fa-spinner fa-spin'></i>
//               </button> : <button disabled={!(formik.isValid && formik.dirty)} className="btn bg-main-dark text-white mt-3" type="submit">Submit</button>}


//             </form>
//           </div>
//         </div>
//       </div>
//     </div>

//   );
// }


















// import React, { useState } from 'react';
// import styles from './Register.module.css';
// import RegisterImg from '../../../src/Assets/images/Personal settings.gif';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import ConsumptionRegistration from './ConsumptionRegistration/ConsumptionRegistration'; // Import the ConsumptionRegistration component

// export default function Register() {

//   const navigate = useNavigate();
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1); // State to track the current page of the form
//   const [consumptionData, setConsumptionData] = useState({}); // State to store consumption data for each month

//   async function submitRegister(values) {
//     setIsLoading(true);
//     try {
//       const requestData = {
//         ...values,
//         ...consumptionData
//       };

//       const response = await axios.post('https://gogreenserver-1-1.onrender.com/api/Registration', requestData);
//       const responseData = response.data;
//       if (!responseData) {
//         throw new Error("Response data is undefined");
//       }
//       const { data } = responseData;
//       if (data.message === 'success') {
//         setIsLoading(false);
//         navigate('/login');
//       }
//     } catch (err) {
//       setIsLoading(false);
//       console.log(err.message);
//       setError(err.message);
//     }
//   }

//   async function submitConsumption(values) {
//     setIsLoading(true);
//     try {
//       // Combine registration data with consumption data
//       const requestData = { ...values, ...consumptionData };

//       // Your consumption data submission code here
//     } catch (err) {
//       setIsLoading(false);
//       console.log(err.message);
//       setError(err.message);
//     }
//   }
  


//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       phone: "",
//       password: "",
//       rePassword: ""
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().min(3, "Name minimum length is 3").max(10, "Name maximum length is 10").required("Name is required"),
//       email: Yup.string().email("Email is invalid").required("Email is required"),
//       phone: Yup.string().matches(/^[0-9]{11}$/, "Phone number is invalid").required("Phone number is required"),
//       password: Yup.string().matches(/^(?=.*[a-zA-Z@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/, "Invalid password").required("Password is required"),
//       rePassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Password confirmation is required")
//     }),
//     onSubmit: (values) => {
//       if (currentPage === 1) {
//         setCurrentPage(2); // Move to the next page after successful submission
//       } else if (currentPage === 2) {
//         submitRegister(values); // Call the submitRegister function
//       }
//     }
//   });

//   return (
//     <div className="container w-100 my-3 rounded-3 d-flex justify-content-center align-items-center">
//       <div className="row border rounded-3 p-3 bg-white shadow box-area">
//         <div className="col-md-6 rounded-3 d-flex justify-content-center align-items-center flex-column left-box">
//           <div className='d-flex justify-content-center align-items-center flex-column'>
//             <img src={RegisterImg} alt="Register Gif" className='w-100' />
//             <p className="fs-4">Be Verified</p>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="w-75 m-auto">
//             {currentPage === 1 && (
//               // Render the first page of the form
//               <form onSubmit={formik.handleSubmit}>

//                 {error !== null ? <div className="alert alert-danger">{error}</div> : ""}

//                 <h4 className='my-2'>Register Here :</h4>

//                 {/* Input fields for user details */}
//                 {/* Name */}
//                 <label htmlFor="name" className="m-2">Name :</label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   className="form-control"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.name}
//                 />
//                 {formik.errors.name && formik.touched.name && (
//                   <div className="alert alert-danger p-2 mt-2">{formik.errors.name}</div>
//                 )}

//                 {/* Repeat the above pattern for other user details */}
//                 {/* Email */}
//                 <label htmlFor="email" className="m-2">Email :</label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="text"
//                   className="form-control"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.email}
//                 />
//                 {formik.errors.email && formik.touched.email && (
//                   <div className="alert alert-danger p-2 mt-2">{formik.errors.email}</div>
//                 )}

//                 {/* Phone */}
//                 <label htmlFor="phone" className="m-2">Phone :</label>
//                 <input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   className="form-control"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.phone}
//                 />
//                 {formik.errors.phone && formik.touched.phone && (
//                   <div className="alert alert-danger p-2 mt-2">{formik.errors.phone}</div>
//                 )}

//                 {/* Password */}
//                 <label htmlFor="password" className="m-2">Password :</label>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   className="form-control"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.password}
//                 />
//                 {formik.errors.password && formik.touched.password && (
//                   <div className="alert alert-danger p-2 mt-2">{formik.errors.password}</div>
//                 )}

//                 {/* Confirm Password */}
//                 <label htmlFor="rePassword" className="m-2">Confirm Password :</label>
//                 <input
//                   id="rePassword"
//                   name="rePassword"
//                   type="password"
//                   className="form-control"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.rePassword}
//                 />
//                 {formik.errors.rePassword && formik.touched.rePassword && (
//                   <div className="alert alert-danger p-2 mt-2">{formik.errors.rePassword}</div>
//                 )}

//                 {/* Submit button */}
//                 {isLoading ? <button className="btn bg-main text-white mt-3" type="button"><i className='fas fa-spinner fa-spin'></i></button> : <button disabled={!(formik.isValid && formik.dirty)} className="btn bg-main-dark text-white mt-3" type="submit">Next</button>}

//               </form>
//             )}

//             {currentPage === 2 && (
//               // Render the ConsumptionRegistration component on the second page
//               <ConsumptionRegistration onSubmit={submitConsumption} />
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }







































// import React, { useState } from 'react';
// import styles from './Register.module.css';
// import RegisterImg from '../../../src/Assets/images/Personal settings.gif';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useFormik } from 'formik';
// import * as Yup from 'yup';
// import ConsumptionRegistration from './ConsumptionRegistration/ConsumptionRegistration'; // Import the ConsumptionRegistration component

// export default function Register() {
//   const navigate = useNavigate();
//   const [error, setError] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);
//   const [currentPage, setCurrentPage] = useState(1); // State to track the current page of the form
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//     rePassword: "",
//     address: "", // Add address field
//     months: { // Initialize months object
//       january: 0,
//       february: 0,
//       march: 0,
//       april: 0,
//       may: 0,
//       june: 0,
//       july: 0,
//       august: 0,
//       september: 0,
//       october: 0,
//       november: 0,
//       december: 0
//     }
//   });

//   async function submitRegister() {
//     setIsLoading(true);
//     try {
//       const requestData = {
//         name: formData.name,
//         email: formData.email,
//         password: formData.password,
//         phoneNumber: formData.phone,
//         address: formData.address,
//         months: formData.months, // Ensure months are included
//         kind: "1"
//       };

//       console.log("Request Data:", JSON.stringify(requestData));

//       const response = await axios.post('https://gogreenserver-1-1.onrender.com/api/Registration', requestData);
//       console.log('Response:', response); // Log the entire response object
//       const responseData = response.data;
//       if (!responseData) {
//         throw new Error("Response data is undefined");
//       }
//       if (response.status === 201) { // Check the response status
//         setIsLoading(false);
//         navigate('/login');
//       }
//     } catch (err) {
//       setIsLoading(false);
//       console.log("Error:", err.message);
//       setError(err.message);
//     }
//   }


//   const formik = useFormik({
//     initialValues: {
//       name: "",
//       email: "",
//       phone: "",
//       password: "",
//       rePassword: "",
//     },
//     validationSchema: Yup.object({
//       name: Yup.string().min(3, "Name minimum length is 3").max(50, "Name maximum length is 50 char").required("Name is required"),
//       email: Yup.string().email("Email is invalid").required("Email is required"),
//       phone: Yup.string().matches(/^[0-9]{11}$/, "Phone number is invalid").required("Phone number is required"),
//       password: Yup.string().matches(/^(?=.*[a-zA-Z@$!%*?&])[a-zA-Z\d@$!%*?&]{8,}$/, "Invalid password").required("Password is required"),
//       rePassword: Yup.string().oneOf([Yup.ref("password")], "Passwords must match").required("Password confirmation is required")
//     }),
//     onSubmit: (values) => {
//       setCurrentPage(2); // Move to the next page after successful submission
//       setFormData({ ...formData, ...values }); // Update formData with values from the first page
//     }
//   });

//   const nextPage = () => {
//     setCurrentPage(2); // Move to the next page
//   };

//   const prevPage = () => {
//     setCurrentPage(1); // Move to the previous page
//   };


//   return (
//     <div className="container w-100 my-3 rounded-3 d-flex justify-content-center align-items-center">
//       <div className="row border rounded-3 p-3 bg-white shadow box-area">
//         <div className="col-md-6 rounded-3 d-flex justify-content-center align-items-center flex-column left-box">
//           <div className='d-flex justify-content-center align-items-center flex-column'>
//             <img src={RegisterImg} alt="Register Gif" className='w-100' />
//             <p className="fs-4">Be Verified</p>
//           </div>
//         </div>
//         <div className="col-md-6">
//           <div className="w-75 m-auto">
//             {currentPage === 1 && (
//               // Render the first page of the form
//               <form onSubmit={formik.handleSubmit}>

//                 {error !== null ? <div className="alert alert-danger">{error}</div> : ""}

//                 <h4 className='my-2'>Register Here :</h4>

//                 <label htmlFor="name" className="m-2">Name :</label>
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   className="form-control"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.name}
//                 />
//                 {formik.errors.name && formik.touched.name && (
//                   <div className="alert alert-danger p-2 mt-2">{formik.errors.name}</div>
//                 )}

//                 <label htmlFor="email" className="m-2">Email :</label>
//                 <input
//                   id="email"
//                   name="email"
//                   type="text"
//                   className="form-control"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.email}
//                 />
//                 {formik.errors.email && formik.touched.email && (
//                   <div className="alert alert-danger p-2 mt-2">{formik.errors.email}</div>
//                 )}

//                 <label htmlFor="password" className="m-2">Password :</label>
//                 <input
//                   id="password"
//                   name="password"
//                   type="password"
//                   className="form-control"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.password}
//                 />
//                 {formik.errors.password && formik.touched.password && (
//                   <div className="alert alert-danger p-2 mt-2">{formik.errors.password}</div>
//                 )}

//                 <label htmlFor="rePassword" className="m-2">Confirm Password :</label>
//                 <input
//                   id="rePassword"
//                   name="rePassword"
//                   type="password"
//                   className="form-control"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.rePassword}
//                 />
//                 {formik.errors.rePassword && formik.touched.rePassword && (
//                   <div className="alert alert-danger p-2 mt-2">{formik.errors.rePassword}</div>
//                 )}

//                 <label htmlFor="phone" className="m-2">Phone :</label>
//                 <input
//                   id="phone"
//                   name="phone"
//                   type="tel"
//                   className="form-control"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.phone}
//                 />
//                 {formik.errors.phone && formik.touched.phone && (
//                   <div className="alert alert-danger p-2 mt-2">{formik.errors.phone}</div>
//                 )}

//                 {/* Add the address input field */}
//                 <label htmlFor="address" className="m-2">Address :</label>
//                 <input
//                   id="address"
//                   name="address"
//                   type="text"
//                   className="form-control"
//                   onChange={formik.handleChange}
//                   onBlur={formik.handleBlur}
//                   value={formik.values.address}
//                 />
//                 {formik.errors.address && formik.touched.address && (
//                   <div className="alert alert-danger p-2 mt-2">{formik.errors.address}</div>
//                 )}

//                 <button disabled={!(formik.isValid && formik.dirty)} className="btn bg-main-dark text-white mt-3" type="submit">Next</button>

//               </form>
//             )}

//             {currentPage === 2 && (
//               <>
                
//                 <ConsumptionRegistration
//                   onSubmit={(formData) => {
//                     setFormData(formData); // Update formData with all form data including months
//                     submitRegister();
//                   }}
//                   isLoading={isLoading}
//                   currentPage={currentPage}
//                   goBack={() => setCurrentPage(1)} // Assuming you have a function to go back to the previous page
//                 />
                
                
//               </>
//             )}


//           </div>
//         </div>
//       </div>
//     </div>

//   );
// }
























import React, { useState } from 'react';
import styles from './Register.module.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const Register = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const monthsArray = [
    "january", "february", "march", "april", "may", "june",
    "july", "august", "september", "october", "november", "december"
  ];

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      password: '',
      rePassword: '',
      address: '',
      january: 0,
      february: 0,
      march: 0,
      april: 0,
      may: 0,
      june: 0,
      july: 0,
      august: 0,
      september: 0,
      october: 0,
      november: 0,
      december: 0,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      email: Yup.string().email('Invalid email address').required('Email is required'),
      phone: Yup.string().matches(/^[0-9]{11}$/, 'Invalid phone number').required('Phone number is required'),
      password: Yup.string().required('Password is required'),
      rePassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm password is required'),
      address: Yup.string().required('Address is required'),
      january: Yup.number().required('January consumption is required'),
      february: Yup.number().required('February consumption is required'),
      march: Yup.number().required('March consumption is required'),
      april: Yup.number().required('April consumption is required'),
      may: Yup.number().required('May consumption is required'),
      june: Yup.number().required('June consumption is required'),
      july: Yup.number().required('July consumption is required'),
      august: Yup.number().required('August consumption is required'),
      september: Yup.number().required('September consumption is required'),
      october: Yup.number().required('October consumption is required'),
      november: Yup.number().required('November consumption is required'),
      december: Yup.number().required('December consumption is required'),
    }),
    onSubmit: async (values) => {
      setIsLoading(true);
      try {
        const requestData = {
          name: values.name,
          email: values.email,
          password: values.password,
          phoneNumber: values.phone,
          address: values.address,
          months: {
            january: values.january,
            february: values.february,
            march: values.march,
            april: values.april,
            may: values.may,
            june: values.june,
            july: values.july,
            august: values.august,
            september: values.september,
            october: values.october,
            november: values.november,
            december: values.december,
          },
          kind: '1',
        };

        console.log('Request Data:', JSON.stringify(requestData));

        const response = await axios.post('https://gogreenserver-1-1.onrender.com/api/Registration', requestData);
        console.log('Response:', response); // Log the entire response object
        const responseData = response.data;
        if (!responseData) {
          throw new Error('Response data is undefined');
        }
        if (response.status === 201) { // Check the response status
          setIsLoading(false);
          navigate('/login');
        }
      } catch (err) {
        setIsLoading(false);
        console.log('Error:', err.message);
        setError(err.message);
      }
    },
  });

  return (
    <div className="container w-100 my-3 rounded-3 d-flex justify-content-center align-items-center">
      <div className="row border rounded-3 p-3 bg-white shadow box-area">
        <div className="col-md-12">
          <div className="row">
            <div className="col">
              <form onSubmit={formik.handleSubmit}>
                {error !== null ? <div className="alert alert-danger">{error}</div> : null}
                <div className="row">
                  <div className="col-md-6">
                    <h4 className="my-2">Register Here :</h4>

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

                    <label htmlFor="address" className="m-2">Address :</label>
                    <input
                      id="address"
                      name="address"
                      type="text"
                      className="form-control"
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      value={formik.values.address}
                    />
                    {formik.errors.address && formik.touched.address && (
                      <div className="alert alert-danger p-2 mt-2">{formik.errors.address}</div>
                    )}
                  </div>

                  <div className="col-md-6">
                    <h4 className="my-2">Enter Consumption for Each Month :</h4>

                    {/* Input fields for each month */}
                    <div className="row">
                      
                      {monthsArray.map((month, index) => (
                        index % 3 === 0 && <div className="row" key={index}>
                          {monthsArray.slice(index, index + 3).map((m, i) => (
                            <div className="col-md-4" key={i}>
                              <label htmlFor={m} className="m-2">{m.charAt(0).toUpperCase() + m.slice(1)}:</label>
                              <input
                                id={m}
                                name={m}
                                type="number"
                                className="form-control"
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values[m]}
                              />
                              {formik.errors[m] && formik.touched[m] && (
                                <div className="alert alert-danger p-2 mt-2">{formik.errors[m]}</div>
                              )}
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                

                <button
                  className="btn bg-main-dark text-white mt-3"
                  type="submit"
                  disabled={!(formik.isValid && formik.dirty) || isLoading}
                >
                  {isLoading ? <i className="fas fa-spinner fa-spin me-2"></i> : null}
                  {isLoading ? 'Loading...' : 'Register'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
