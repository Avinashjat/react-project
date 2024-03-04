
import {useEffect , useState}  from "react";


function Github() {
    const [Data ,setData] = useState([])
    useEffect(() => {
    fetch( 'https://api.github.com/users/Avinashjat')
    .then(res=>{
        res.json()
    })
    .then(Data=>{
        setData(Data);
        console.log(Data)
    })
      
    }, [])
    
  
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers:{Data.following}
    <img src={Data} alt="Git pic" width={300} />
    </div>
  )
}

export default Github
