import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import AddUserModal from './AddUserModal';
import UpdateUserModal from './UpdateUserModal';
import DeleteUserModal from './DeleteUserModal';

const AdminPage = () => {
  const [users, setUsers] = useState([
    { id: 1, name: 'User 1', email: 'user1@example.com', expanded: false },
    { id: 2, name: 'User 2', email: 'user2@example.com', expanded: false },
    //Ay7aaaaaaaaaaagaaaaaaaaaaa
  ]);

  const addUser = (user) => {
    setUsers([...users, { ...user, expanded: false }]);
  };

  const deleteUser = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const updateUser = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  };

  const toggleExpand = (userId) => {
    setUsers(users.map(user => ({
      ...user,
      expanded: user.id === userId ? !user.expanded : user.expanded
    })));
  };

  // Static consumption data
  const staticConsumption = Array.from({ length: 12 }, (_, index) => ({
    month: index + 1,
    consumption: Math.floor(Math.random() * (500 - 200 + 1)) + 200,
  }));

  return (
    <>
      <div className="container my-5 p-3 bg-white shadow-lg rounded">
        <h1>Admin Page</h1>
        <AddUserModal addUser={addUser} />
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <React.Fragment key={user.id}>
                <tr onClick={() => toggleExpand(user.id)}>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td >
                    <UpdateUserModal user={user} updateUser={updateUser} />
                    <DeleteUserModal userId={user.id} deleteUser={deleteUser} />
                  </td>
                </tr>
                {user.expanded && (
                  <tr>
                    <td colSpan="4">
                      <UserConsumption consumptionData={staticConsumption} />
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

const UserConsumption = ({ consumptionData }) => (
  <table className="table">
    <thead>
      <tr>
        <th>Month</th>
        <th>Consumption</th>
      </tr>
    </thead>
    <tbody>
      {consumptionData.map(data => (
        <tr key={data.month}>
          <td>{data.month}</td>
          <td>{data.consumption}</td>
        </tr>
      ))}
    </tbody>
    <h4>package : 1</h4>
  </table>

);

export default AdminPage;
