function ChefLogin (){
    return(
        <div className="chefBox">
            <div className="Chef">
                <h3>Add Restarant</h3>
                <input type="text" placeholder="Enter the Username" />  
                <input type="password" placeholder="Enter the Password"/>  
                <button>
                    <label>
                        sign In
                    </label>
                </button>
                <button>
                    <label >
                        sign Up
                    </label>
                </button>
            </div>
        </div>
    );
};
export default ChefLogin