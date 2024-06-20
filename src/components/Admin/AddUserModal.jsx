import React, { useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button, Form } from 'react-bootstrap';

const monthNames = [
    'january', 'february', 'march', 'april', 'may', 'june',
    'july', 'august', 'september', 'october', 'november', 'december'
];

const AddUserModal = ({ addUser, setRefreshTable }) => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: '',
        phoneNumber: '',
        address: '',
        months: Array(12).fill(''), // Initialize an array for 12 months of consumption
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name.startsWith('month')) {
            const monthIndex = parseInt(name.replace('month', ''), 10);
            const newMonths = [...formData.months];
            newMonths[monthIndex] = value;
            setFormData({
                ...formData,
                months: newMonths,
            });
        } else {
            setFormData({
                ...formData,
                [name]: value,
            });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Prepare the data to be sent to the API
            const monthsData = monthNames.reduce((acc, month, index) => {
                acc[month.toLowerCase()] = parseInt(formData.months[index], 10); // Ensure consumption is stored as integer
                return acc;
            }, {});

            const apiData = {
                name: formData.name,
                email: formData.email,
                password: formData.password,
                phoneNumber: formData.phoneNumber,
                address: formData.address,
                months: monthsData
            };

            // Make the API call to register the user
            const response = await axios.post('https://gogreenserver-1-1-numd.onrender.com/api/Registration', apiData);

            // Handle the response
            if (response.status === 201 || response.status === 200) {
                const newUser = response.data; // Assuming the API response contains the new user data
                addUser(newUser);
                setRefreshTable(true); // Trigger a refresh of the user table
                handleClose();
            } else {
                console.error('Failed to register user:', response.data);
            }
        } catch (error) {
            console.error('Error registering user:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <>
            <Button variant="primary" onClick={handleShow} className='my-2 float-end'>
                Add User
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add User</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit}>
                        <Form.Group>
                            <label htmlFor="name" className="m-2">Name :</label>
                            <input
                                id="name"
                                name="name"
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                value={formData.name}
                            />
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="email" className="m-2">Email :</label>
                            <input
                                id="email"
                                name="email"
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                value={formData.email}
                            />
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="password" className="m-2">Password :</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                className="form-control"
                                onChange={handleChange}
                                value={formData.password}
                            />
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="rePassword" className="m-2">Confirm Password :</label>
                            <input
                                id="rePassword"
                                name="rePassword"
                                type="password"
                                className="form-control"
                                onChange={handleChange}
                                value={formData.rePassword}
                            />
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="phoneNumber" className="m-2">Phone Number :</label>
                            <input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                className="form-control"
                                onChange={handleChange}
                                value={formData.phoneNumber}
                            />
                        </Form.Group>
                        <Form.Group>
                            <label htmlFor="address" className="m-2">Address :</label>
                            <input
                                id="address"
                                name="address"
                                type="text"
                                className="form-control"
                                onChange={handleChange}
                                value={formData.address}
                            />
                        </Form.Group>
                        {Array.from({ length: 12 }).map((_, index) => (
                            <Form.Group key={index}>
                                <label htmlFor={`month${index}`} className="m-2">{monthNames[index].charAt(0).toUpperCase() + monthNames[index].slice(1)} Consumption :</label>
                                <input
                                    id={`month${index}`}
                                    name={`month${index}`}
                                    type="number"
                                    className="form-control"
                                    onChange={handleChange}
                                    value={formData.months[index]}
                                />
                            </Form.Group>
                        ))}
                        <Button variant="primary" type="submit" className="my-3">
                            Add User
                        </Button>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};

export default AddUserModal;
