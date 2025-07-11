import { Link } from "react-router-dom";
function UserLogin (){
    return(
        <div className="userBox">
            <div className="userId">
                <h3 style={{ marginTop:'10px',color : 'black', fontSize : '50px',textAlign:'center'}}>Login</h3>
                <input type="text" className="in1"  placeholder="Enter the Username" />  
                <input type="password" className="in2" placeholder="Enter the Password"  />  
                <Link to="/" style={{textDecoration:'none',fontSize:'20px', color:'black'}}>
                        <button className="ub1">Sign In</button>
                </Link>
                <br /><br /><br />
                <h4 style={{ marginLeft:'15px', fontSize:'16px'}}>Create a new Annam account ? <span> <Link to="/user-registration" style={{textDecoration:'none',color:'brown'}}>Sign Up</Link></span></h4>
            </div>
        </div>
    );
};
export default UserLogin 

/* <button className="ub1">
                    <label>
                        <Link to='/' style={{textDecoration:'none',fontSize:'20px', color:'black'}}>Sign In</Link>
                    </label>
                </button> */