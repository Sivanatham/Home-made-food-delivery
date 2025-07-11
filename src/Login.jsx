import { Link } from "react-router-dom";
function Login () { 
    return (
        <div>
            <br />
            <h1 className="annam">Annam</h1>
            <br />
            <p className="solgan">Get the tasty, health, and homely feel — all in one meal.</p>
            <h4>
                <Link to ="/user-login" className="Logintag">Login</Link>
            </h4>
            <h4 >
                <Link to="/chef" className="Cheftag">Restraurnt Login</Link>
            </h4>
            
        </div>
    );
};
export default Login; 