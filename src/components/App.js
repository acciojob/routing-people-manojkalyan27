
import React from "react";
import './../styles/App.css';

const App = () => {
  const [data,setData] = useState([]);

   const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    .then((result) =>{ setData(result)
        // console.log(result);          
    })
   }

  useEffect(()=>{
        getData();
    },[])

  
  return (
    <div>
       <Router>
                <Routes>
                    <Route path='/' element={<Homepage />}/>
                    <Route path='/users/:num' element={<Userdetails />}/>
                </Routes>
             </Router>
    </div>
  )
}

const Userdetails = () => {
    const {num} = useParams();    
    const filteredData = data.filter((item) => 
        // console.log(item.id); 
        // console.log(num === item.id);             
        Number(num) === item.id)
    console.log("filteredData",filteredData);

    return(
        <>
            {filteredData.map((item, key) => {
                return <div key={key}>
                    <h1>User Details</h1>
                    <p><b>Name:</b> {item.name}</p>
                    <p><b>Username:</b> {item.username}</p>
                    <p><b>Email:</b> {item.email}</p>
                    <p><b>Phone:</b> {item.phone}</p>
                    <p><b>Website:</b> {item.website}</p>
                </div>
            })}
        </>
    )

}

const Homepage = () =>{
    return(
        <>
            <h2>User List</h2>
            <ul>
                {data.map((iten,key) => {
                    return <li key={key}>
                        <Link to={`/users/${iten.id}`} >{item.name}</Link>
                    </li>
                })}
            </ul>
        </>
    )

}
export default App
