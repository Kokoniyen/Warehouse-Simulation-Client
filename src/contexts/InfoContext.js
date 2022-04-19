import { createContext, useContext, useState } from 'react';

const InfoContext = createContext();

export const InfoContextProvider = ({ children }) => {
	const [info, setInfo] = useState({
		length: '',
		width: '',
		height: '',
		initialTemp: '',
		heatConductivity: '',
		numberOfHours: '',
	});

	return (
		<InfoContext.Provider value={{ info, setInfo }}>
			{children}
		</InfoContext.Provider>
	);
};

export const useInfoContext = () => useContext(InfoContext);
