import React, { useEffect, useState } from 'react'

const App = () => {

     const [users , setUsers] = useState([]);
     const [inputValue, setInputValue] = useState('');
     const [filteredUsers, setFilteredUsers] = useState([]);


     const fetchusers =async ()=>{

      const res = await fetch('https://dummyjson.com/users')
      const data = await res.json()

      setUsers(data.users.map(user=>user.firstName))
      
     }
 console.log(users);
     const handleChanges = (e) => {
      
      const query = e.target.value.toLowerCase();
      setInputValue(e.target.value);
          if(query.length > 1){
          const filterData = users && users.length ? users.filter(user => user.toLowerCase().indexOf(query) > -1) : [];
          setFilteredUsers(filterData);
          }

     }
   console.log(filteredUsers);
     useEffect(() =>{
      fetchusers();
     },[]);

  return (
    <div>
        <input type='text' value={inputValue} onChange={handleChanges} />
    </div>
  )
}

  export default App
