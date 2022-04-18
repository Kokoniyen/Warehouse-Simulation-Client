import { createContext, useContext, useState } from 'react';

const LocationGridContext = createContext();

export const LocationGridContextProvider = ({ children }) => {
	const [activeTab, setActiveTab] = useState('doors');
	const [selected, setSelected] = useState({});

	return (
		<LocationGridContext.Provider
			value={{ activeTab, setActiveTab, selected, setSelected }}
		>
			{children}
		</LocationGridContext.Provider>
	);
};

export const useLocationGridContext = () => useContext(LocationGridContext);
