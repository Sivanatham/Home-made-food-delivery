import { Link } from "react-router-dom";
function ChefRegistration(){
    return(
        <div className="chefBox">
            <div className="Chef">
                <h3  style={{ marginTop:'10px',color : 'black', fontSize : '45px',textAlign:'center'}}>Add Restarant</h3>
                <input className="cr1" type="text"  placeholder="Enter the Username" />  
                <input className="cr2" type="text" placeholder="Enter the Email ID" />  
                <input className="cr3" type="text" placeholder="Enter the Location" />  
                <input className="cr4" type="password" placeholder="Enter the Password"/>  
                <button className="crb1">
                    <label>
                        SUMBIT
                    </label>
                </button>
                    <br />
                    <br />
                <h4><Link to="/" style={{textDecoration:'none',color:'white',marginLeft:'20px'}}>Back to Home Page</Link></h4>
            </div>
        </div>
    );
};
export default ChefRegistration;