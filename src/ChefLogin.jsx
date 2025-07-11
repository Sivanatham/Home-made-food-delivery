import { Link } from "react-router-dom";
function ChefLogin (){
    return(
        <div className="chefBox">
            <div className="Chef">
                <h3 style={{ marginTop:'10px',color : 'black', fontSize : '45px',textAlign:'center'}}>Restarant Login</h3>
                <input className="c1" type="text" placeholder="Enter the Username" />  
                <input className="c2" type="password" placeholder="Enter the Password"/>  
                <button className="cb1">
                    <Link to ="/menu" style={{textDecoration:'none',cursor:'pointer'}}> 
                        <label style={{textDecoration:'none',fontSize:'20px', color:'black'}} >
                        sign In
                        </label>
                    </Link>
                    
                </button>
                <br /><br />
                    <h4 style={{ marginLeft:'15px', fontSize:'16px'}}>Add a new Restaurant ? <span> <Link to="/chef-registration" style={{textDecoration:'none',color:'brown'}}>Sign Up</Link></span></h4>
                
            </div>
        </div>
    );
};
export default ChefLogin;