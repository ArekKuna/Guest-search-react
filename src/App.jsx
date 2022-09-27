import React, {useState, useContext} from 'react';

import AuthContext from './components/Store/Auth-context';
import Header from './components/UI/Header/Header';
import Main from './components/UI/Main/Main';

import './App.scss';

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    }

    const handleLogout = () => {
        setIsLoggedIn(false);
    }

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
            }}
        >
            <Header onLogin={handleLogin} onLogout={handleLogout} />
            <Main />
        </AuthContext.Provider>
    );
}

export default App;