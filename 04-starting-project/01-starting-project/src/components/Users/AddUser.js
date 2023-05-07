import React from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';

// ⭐ 새로운 사용자를 추가하는 로직이 있는 컴포넌트

const AddUser = props => {
  const addUserHandler = (event) => {
    event.preventDefault();
  }
  
  return (
    <Card cccccc={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default AddUser; 