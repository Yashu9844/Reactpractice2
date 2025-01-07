import React, { useEffect, useState } from 'react'

const App = () => {

     const [users , setUsers] = useState([]);
     const [inputValue, setInputValue] = useState('');
     const [filteredUsers, setFilteredUsers] = useState([]);
   const [showDrop,setDrop]= useState(false)

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
          setDrop(true);
          }else{
            setFilteredUsers([]);
            setDrop(false);
          }

     }
   console.log(filteredUsers);
     useEffect(() =>{
      fetchusers();
     },[]);

  return (
    <div style={{textAlign:'center',
      
    }}>
        <input style={{padding:'5px'}} type='text' value={inputValue} onChange={handleChanges}  placeholder='Please type the name...'/>
        {showDrop && 
        <ul>
          {filteredUsers.map((user,index) => (
            <h5 key={index}>{user}</h5>
          ))}
        </ul>
        
        }
    </div>
  )
}

  export default App
