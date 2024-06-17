// Context/UserContext.js
import React, { createContext, useState } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [userToken, setUserToken] = useState(null);
    const [isAdmin, setIsAdmin] = useState(false);

    return (
        <UserContext.Provider value={{ userToken, setUserToken, isAdmin, setIsAdmin }}>
            {children}
        </UserContext.Provider>
    );
}
