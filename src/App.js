import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [user,setUser] = useState({
    name:'mohsen',age:'32',adress:'soukra'
  }) 

  const [count, setCount] = useState(0)
  
  useEffect(()=>{
    console.log(user)
  },[])

  const increment=()=> setCount(count+1)
  const [text,setText] = useState('')

  return (
    <div className="App">
        <h3>{count}</h3>
        <button onClick={increment}>Increment</button>
      <h1>{user.name}</h1>
      <h1>{user.age}</h1>
      <h1>{user.adress}</h1>


     {/* <input onChange={(e)=>setUser({...user,name: e.target.value})} type='text' placeholder='type a name'/>
     <button onClick={()=>setUser({...user,name:'yassine'})}>Change Name</button>*/}
     
     <input onChange={(e)=>setText(e.target.value)}  type='text' placeholder='type a name' />
      <button onClick={()=>setUser({...user,name:text})}>Change Name</button>
      
    </div>
  );
}

export default App;
