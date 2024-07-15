import React, { createContext, useContext, useState } from 'react';

const MainContext = createContext()

const MainProvider = ({ children }) => {
    const options = [
        { value: 'Data Analyst' },
        { value: 'Participant' },
        { value: 'Data Scientist' },
        { value: 'Junior Data Scientist' },
    ];

    const [selectedValue, setSelectedValue] = useState(options[0].value);

    const handleOptionChange = (selectedOption) => {
        setSelectedValue(selectedOption.value);
    };

    return (
        <MainContext.Provider value={{ options, selectedValue, handleOptionChange }}>
            {children}
        </MainContext.Provider>
    );
};

const useMainContext = () => {
    return useContext(MainContext);
};

export { MainProvider, useMainContext };
