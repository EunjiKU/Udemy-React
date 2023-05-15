import React, { useState } from 'react';

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
    <div>
      <AddUser onAddUser={addUserHandler}></AddUser>
      <UserList users={usersList}></UserList>
    </div>
  );
}

export default App;
