import React, { useState ,useEffect} from "react";
import UserContext from "./userContext";

const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState(localStorage.getItem('firstName') === "" ? null : localStorage.getItem('firstName'))
    const [isloggedIn, setIsloggedIn] = useState(localStorage.getItem('email') === "" ? false : true);
 
    return (
        <UserContext.Provider value={{ user, setUser, isloggedIn, setIsloggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;