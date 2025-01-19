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

     useEffect(() =>{
      fetchusers();
     },[]);

 const hc = (e) => {
   setInputValue(e.target.innerText);
   setDrop(false);
   setFilteredUsers([]);
 }


  return (
    <div style={{textAlign:'center',
      
    }}>
        <input style={{padding:'5px',cursor:'pointer'}} type='text' value={inputValue} onChange={handleChanges}  placeholder='Please type the name...'/>
        {showDrop && 
        <ul>
          {filteredUsers.map((user,index) => (
            <h5 key={index} style={{cursor:'pointer'}} onClick={hc}>{user} </h5>
          ))}
        </ul>
        
        }
    </div>
  )
}

  export default App
