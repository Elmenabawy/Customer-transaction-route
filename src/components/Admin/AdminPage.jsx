import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SkeletonLoader from './SkeletonLoader';
import AddUserModal from './AddUserModal';
import UpdateUserModal from './UpdateUserModal';
import DeleteUserModal from './DeleteUserModal';
import styles from './AdminPage.module.css';

const AdminPage = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [refreshTable, setRefreshTable] = useState(false);

  const getToken = () => localStorage.getItem('userToken');

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const token = getToken();
      const response = await axios.get('https://gogreenserver-1-1-numd.onrender.com/api/admin/getAllUsers', {
        headers: { 'x-auth-token': token }
      });
      setUsers(response.data.users);
    } catch (error) {
      console.error('Error fetching users:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [refreshTable]);

  const toggleExpand = (userId) => {
    setUsers(users.map(user => ({
      ...user,
      expanded: user._id === userId ? !user.expanded : user.expanded
    })));
  };

  const handleUpdateModalOpen = (user) => {
    setSelectedUser(user);
    setShowUpdateModal(true);
  };

  const handleUpdateModalClose = () => {
    setSelectedUser(null);
    setShowUpdateModal(false);
  };

  const handleDeleteModalOpen = (user) => {
    setSelectedUser(user);
    setShowDeleteModal(true);
  };

  const handleDeleteModalClose = () => {
    setSelectedUser(null);
    setShowDeleteModal(false);
  };

  const handleDeleteUser = async (userId) => {
    const token = getToken();
    await axios.delete(`https://gogreenserver-1-1-numd.onrender.com/api/admin/deleteUser/${userId}`, {
      headers: { 'x-auth-token': token }
    });
    setRefreshTable(!refreshTable);
    handleDeleteModalClose();
  };

  const handleUpdateUser = async (updatedUserData) => {
    try {
      const token = getToken();
      const response = await axios.put(`https://gogreenserver-1-1-numd.onrender.com/api/admin/updateUser/${updatedUserData._id}`, updatedUserData, {
        headers: { 'x-auth-token': token }
      });
      const updatedUser = response.data.user;
      setUsers(users.map(user => (user._id === updatedUser._id ? updatedUser : user)));
      setRefreshTable(!refreshTable);
      handleUpdateModalClose();
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleAddUser = async (newUser) => {
    try {
      const token = getToken();
      await axios.post('https://gogreenserver-1-1-numd.onrender.com/api/Registration', newUser, {
        headers: { 'x-auth-token': token }
      });
      setRefreshTable(!refreshTable);
    } catch (error) {
      console.error('Error adding user:', error);
    }
  };

  return (
    <div className="container my-5 p-3 bg-white shadow-lg rounded">
      <h1>Admin Page</h1>
      {loading ? (
        <SkeletonLoader rowCount={7} />
      ) : (
        <>
          <div className="container">
            <div className="row">
              <div className="float-left">
                <AddUserModal addUser={handleAddUser} setRefreshTable={setRefreshTable} />
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered table-striped">
                <thead className="thead-dark">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {users.map(user => (
                    <React.Fragment key={user._id}>
                      <tr onClick={() => toggleExpand(user._id)} style={{ cursor: 'pointer' }}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                          <UpdateUserModal
                            show={showUpdateModal && selectedUser === user}
                            handleClose={handleUpdateModalClose}
                            user={user}
                            updateUser={handleUpdateUser}
                            setRefreshTable={setRefreshTable}
                          />
                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={(e) => { e.stopPropagation(); handleDeleteModalOpen(user); }}
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                      {user.expanded && (
                        <tr>
                          <td colSpan="4">
                            <UserDetails user={user} />
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}

      {selectedUser && showUpdateModal && (
        <UpdateUserModal
          show={showUpdateModal}
          handleClose={handleUpdateModalClose}
          user={selectedUser}
          updateUser={handleUpdateUser}
          setRefreshTable={setRefreshTable}
        />
      )}

      {selectedUser && showDeleteModal && (
        <DeleteUserModal
          show={showDeleteModal}
          handleClose={handleDeleteModalClose}
          onDelete={() => handleDeleteUser(selectedUser._id)}
        />
      )}
    </div>
  );
};

const UserDetails = ({ user }) => {
  const { months} = user;

  return (
    <div>
      <h4>Consumption Data:</h4>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>Month</th>
            <th>Consumption</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(months).map(([month, consumption]) => (
            <tr key={month}>
              <td>{month}</td>
              <td>{consumption}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default AdminPage;
