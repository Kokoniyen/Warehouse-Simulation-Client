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
	const [basicInfo, setBasicInfo] = useState({
		warehouseName: '',
		location: '',
		email: '',
		phone: '',
	});

	return (
		<InfoContext.Provider value={{ info, setInfo, basicInfo, setBasicInfo }}>
			{children}
		</InfoContext.Provider>
	);
};

export const useInfoContext = () => useContext(InfoContext);
