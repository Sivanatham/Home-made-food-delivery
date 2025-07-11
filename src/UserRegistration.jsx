// import { Link } from 'react-router-dom';
import { useNavigate ,Link  } from 'react-router-dom';
import { useState } from 'react';

function UserRegistration (){

    const [name,setName]=useState('');
    const [mailID,setMailID]=useState('');
    const [password,setPassword]=useState('');
    const navigate=useNavigate();

    const handleSubmit= async (e)=>{
        e.preventDefault();

        const newUser={ name,mailID,password};
    
   try {
  const res = await fetch("http://localhost:5500/api/user/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, mailID, password })
  });

  if (res.ok) {
    alert("User Registered!");
  } else {
    alert("error occured");
  }
} catch (error) {
  alert("error occured");
}

};
    return(
        <div className="userBox">
            <div className="userId">
                <h3 style={{ marginTop:'10px',color : 'black', fontSize : '50px',textAlign:'center'}}>New User</h3>
                <input type="text" className="in1"  placeholder="Enter the Username" value={name} onChange={(e)=> setName(e.target.value)} />  
                <input type="text" className="in1"  placeholder="Enter the Email-ID"  value={mailID} onChange={(e)=> setMailID(e.target.value)} />  
                <input type="password" className="in2" placeholder="Enter the Password"  value={password} onChange={(e)=> setPassword(e.target.value)} />  
                <button className="ub1" onClick={handleSubmit}  style={{textDecoration:'none',fontSize:'20px', color:'black'}}>
                    
                        SUMBIT
                    
                </button>
                <br /><br /><br />
                <h4 style={{ marginLeft:'15px', fontSize:'16px'}}><span> <Link to='/' style={{textDecoration:'none',color:'brown',marginBottom:'20px',}}>Back to Home</Link></span></h4>
            </div>
        </div>
    );
};
export default UserRegistration;