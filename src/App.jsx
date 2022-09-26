import React, {useState, useContext} from 'react';

import AuthContext from './components/Store/Auth-context';
import Header from './components/UI/Header/Header';
import Main from './components/UI/Main/Main';

import './App.scss';

function App() {

    const LoginState = useContext(AuthContext);

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <AuthContext.Provider
            value={{
                LoginState: isLoggedIn,
            }}
        >
            <Header />
            <Main />
        </AuthContext.Provider>
    );
}

export default App;