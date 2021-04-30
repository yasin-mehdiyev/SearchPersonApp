import React, { useEffect, useState } from 'react';
import AddUser from './component/Users/AddUser';
import UserList from './component/Users/UserList';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  const initialState = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];

  // console.log(initialState);
  const [users, setusers] = useState(initialState);
  const [username, setusername] = useState('');
  const [age, setage] = useState('');
  const [filteredDate, setFilteredDate] = useState('2021');
  const [date, setDate] = useState(new Date(2021,3,29));
  const [editId, setEditId] = useState(0);
  const [editable, setEditable] = useState(false);



  const setChangeUsername = (e) => {
    setusername(e.target.value);
  }

  const setChangeAge = (e) => {
    setage(Number(e.target.value));
  }

  const setChangeFilteredDate = (e) => {
    setFilteredDate(e.target.value);
  }

  // console.log(filteredDate);

  const setChangeDate=(e)=>{
    setDate(e.target.value);
  }

  // console.log(date);

  const handleSubmit = (ev) => {
    ev.preventDefault();

    if(editable){
      //  console.log('edited');
       let res = users.map(user=>{
        //  console.log({...user,username,age,date});
         return user.id===editId ? {...user,username,age,date} : user;
       })

       setusers(res);
       
    }
    else{
      if(username!=='' && age!=='' && date!==''){
        // console.log(username,age);
  
        let mainData= {"id":uuidv4().slice(0, 1),username,age,date}
        // console.log(mainData);
        let data = [...users,mainData]
    
        setusers(data);
    
        // console.log(data);
      }
    }

    setEditable(false);
    setusername('');
    setage('');
    setDate('');
  }

  // console.log(username,age);

  const deleteUser = (id) =>{
    // console.log(id);
    let datas=users.filter(user=>user.id!==id);
    // console.log(datas);
    setusers(datas);
    setEditable(false);
    setusername('');
    setage('');
    setDate('');
  }

  const editedUser = (id) =>{
    // console.log(id);
    let clickedData=users.find(user=>user.id===id);
    // console.log(clickedData);
    let {username,age,date}=clickedData;
    // console.log(username,age,date);
    setusername(username);
    setage(age);
    setDate(date);
    setEditId(id);
    setEditable(true);

  }


  useEffect(() => {
    localStorage.setItem("users",JSON.stringify(users));
  }, [users])

  return (
    <React.Fragment>

      <AddUser 
       users={users}
       age={age}
       username={username}
       setChangeUsername={setChangeUsername}
       setChangeAge={setChangeAge}
       handleSubmit={handleSubmit}
       setChangeDate={setChangeDate}
       date={date}
       editable={editable}
       />

      <UserList 
       users={users}
       setChangeFilteredDate={setChangeFilteredDate}
       deleteUser={deleteUser}
       editUser={editedUser}
       filteredDate={filteredDate}
       />

    </React.Fragment>
  );
}

export default App;
