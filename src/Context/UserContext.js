// UserContext.js
import { useState } from "react";
import { createContext } from "react";

export let UserContext = createContext();

export default function UserContextProvider(props) {
    const [userToken, setUserToken] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <UserContext.Provider value={{ userToken, setUserToken, isAdmin, setIsAdmin }}>
            {props.children}
        </UserContext.Provider>
    );
}