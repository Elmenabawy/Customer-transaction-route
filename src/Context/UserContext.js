// Context/UserContext.js
import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
    const [userToken, setUserToken] = useState(() => {
        const storedToken = localStorage.getItem('userToken');
        return storedToken ? storedToken : null;
    });

    useEffect(() => {
        localStorage.setItem('userToken', userToken);
    }, [userToken]);

    const [isAdmin, setIsAdmin] = useState(false);
    const [Prediction, setPrediction] = useState(null);

    return (
        <UserContext.Provider value={{ userToken, setUserToken, isAdmin, setIsAdmin, Prediction, setPrediction }}>
            {children}
        </UserContext.Provider>
    );
}