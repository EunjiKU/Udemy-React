import React, { useState, Fragment } from 'react';

import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';


function App() {
const [usersList, setUsersList] = useState([]);

const addUserHandler = (uName, uAge) => {
  setUsersList((prevUserList) => {
    return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}];
  });
  console.log(usersList);
}

  return (
    <Fragment>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={usersList}></UserList>
    </Fragment>
  );
}

export default App;
