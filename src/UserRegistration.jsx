import { Link } from 'react-router-dom';
function UserRegistration (){
    return(
        <div className="userBox">
            <div className="userId">
                <h3 style={{ marginTop:'10px',color : 'black', fontSize : '50px',textAlign:'center'}}>Login</h3>
                <input type="text" className="in1"  placeholder="Enter the Username" />  
                <input type="password" className="in2" placeholder="Enter the Password"  />  
                <button className="ub1">
                    <label>
                        <Link to='/' style={{textDecoration:'none',fontSize:'20px', color:'black'}}>Sign In</Link>
                    </label>
                </button>
                <br /><br /><br />
                <h4 style={{ marginLeft:'15px', fontSize:'16px'}}>Create a new Annam account ? <span> <Link to='/chef' style={{textDecoration:'none',color:'brown'}}>Sign Up</Link></span></h4>
            </div>
        </div>
    );
};
export default UserRegistration;