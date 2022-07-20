import React from "react";
export const ListContext = React.createContext({});

export const ProviderList = ({ children }) => {

        let storage = localStorage;

    return (
        <ListContext.Provider value={storage}>
            {children}
        </ListContext.Provider>
    )
}