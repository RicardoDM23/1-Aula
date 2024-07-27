// App.js
import React from 'react';
import { AuthProvider, useAuth } from './AuthContext';
import Login from './Login';
import IPAdressFinder from './IPAddressFinder'
import LanguegeTranslator from './LanguageTranslator'
import MovieSearchEngine from './MovieSearchEngine'
import QRCodeGenerator from './QRCodeGenerator'

const ProtectedContent = () => {
    return (
        <div>
            <LanguegeTranslator />
            <MovieSearchEngine />
            <QRCodeGenerator />
            <IPAdressFinder />
        </div>
    );
};

const Main = () => {
    const { isAuthenticated } = useAuth()

    return (
        <div>
            {isAuthenticated ? <ProtectedContent /> : <Login />}
        </div>
    );
};

export default () => (
    <AuthProvider>
        <Main />
    </AuthProvider>
)
