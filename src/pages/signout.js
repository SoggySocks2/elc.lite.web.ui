import Axios from '../api/axios';
import { useEffect } from "react";
import { useHistory  } from "react-router-dom";

function SignOut() {
    
    const history = useHistory();

        try 
        {
            useEffect(() => {
                Axios.post("/authentication/logout")
                .then((res) => {                 
                    if(res.status === 200) {
                        
                        localStorage.setItem("token", null);
                        //redirect to home
                        history.push("/home");
                    }
                    else
                    {
                        alert("Error signing out. Not OK");
                    }
                })
                .catch((err) => {
                    alert("Error signing out. Not Status 200. Error: " + err + ".");
                });
            }, []);
        }
        catch (err) {
            alert("Error signing out");
        }    

    return (
        <>
            <div>Sign out</div>
        </>
    );
}
    
export default SignOut;