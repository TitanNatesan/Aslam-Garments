// AppContext.js
import React, { createContext } from 'react';

const BaseContext = createContext();

const BaseProvider = ({ children }) => {
    const ip = `192.168.237.17`;
    const BaseUrl = `http://${ip}:8000/`;

    return (
        <BaseContext.Provider value={{ BaseUrl }}>
            {children}
        </BaseContext.Provider>
    );
};

export { BaseContext, BaseProvider };