import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const UpdateUserModal = ({ updateUser, user }) => {
    const [show, setShow] = useState(false);
    const [formData, setFormData] = useState(user || {
        name: '',
        email: '',
        password: '',
        rePassword: '',
        phone: '',
        address: '',
    });

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateUser(formData);
        handleClose();
    };

    return (
        <>
            <Button variant="info" onClick={handleShow} className='me-2'>
                Update
            </Button>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit User</Modal.Title>
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
                            <label htmlFor="phone" className="m-2">Phone :</label>
                            <input
                                id="phone"
                                name="phone"
                                type="tel"
                                className="form-control"
                                onChange={handleChange}
                                value={formData.phone}
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
                        <Button variant="primary" type="submit">
                            Update User
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

export default UpdateUserModal;
