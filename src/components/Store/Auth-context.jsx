import React, {useState, useEffect} from "react";

const AuthContext = React.createContext({
    isLoggedIn: false,
    onLogin: () => { },
    onLogout: () => { }
});

export const AuthContextProvider = (props) => {
    
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const userLoginCheck = localStorage.getItem("isLoggedIn");
        
        if (userLoginCheck === "1") {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogin = () => {
        localStorage.setItem("isLoggedIn", "1");
        setIsLoggedIn(true);
    }

    const handleLogout = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    }
    
    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogin: handleLogin,
                onLogout: handleLogout,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;