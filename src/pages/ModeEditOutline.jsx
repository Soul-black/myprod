import React, { useState } from 'react';
import TableCell from '@mui/material/TableCell';


const initialUsers = [
    {id:1, name:'Матвей', post:"Сварщик", experience: 4, salary:90000} ,
    {id:2, name: 'Иван', post: "Токарь", experience: 7, salary: 60000},
    {id:3, name:'Константин', post:"Слесарь", experience: 12, salary:35000},
    {id:4, name:'Юрий', post:"Уборщик", experience: 1, salary:12000},
    {id:5, name:'Василий', post:"Мастер", experience: 5, salary:70000}
];

function UserList() {
  const [users, setUsers] = useState(initialUsers);
  const [selectedUserId, setSelectedUserId] = useState(null);
  
  const handleEditUser = (userId, newName) => {
    const updatedUsers = users.map(user => {
      if (user.id === userId) {
        return { ...user, name: newName };
      }
      return user;
    });
    setUsers(updatedUsers);
  };
  
  const handleUserClick = (userId) => {
    setSelectedUserId(userId);
  };
  
  return (
    <div>
      {selectedUserId ? (
        <div>
          <h1>Редактировать пользователя</h1>
          <input type="text" defaultValue={users.find(user => user.id === selectedUserId).name } />
          <input type="text" defaultValue={users.find(user => user.id === selectedUserId).post } />
          <input type="text" defaultValue={users.find(user => user.id === selectedUserId).experience } />
          <input type="text" defaultValue={users.find(user => user.id === selectedUserId).salary } />
          <button onClick={() => handleEditUser(selectedUserId, document.querySelector('input').value)}>Сохранить</button>
          <button onClick={() => setSelectedUserId(null)}>Отмена</button>
        </div>
      ) : (
        <table>
          <thead>
            <tr>
                        <TableCell align="center"><b>id</b></TableCell>
                        <TableCell align="center"><b>Имя</b></TableCell>
                        <TableCell align="center"><b>Должность</b></TableCell>
                        <TableCell align="center"><b>Опыт</b></TableCell>
                        <TableCell align="center"><b>Зарплата</b></TableCell>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id} onClick={() => handleUserClick(user.id)}>
               <TableCell align="center">{user.id}</TableCell>
                            <TableCell align="center">{user.name}</TableCell>
                            <TableCell align="center">{user.post}</TableCell>
                            <TableCell align="center">{user.experience}</TableCell>
                            <TableCell align="center">{user.salary}</TableCell>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserList;