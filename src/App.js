import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import BasicInfo from './views/pages/BasicInfo';
import Area from './views/pages/Area';
import EntryExit from './views/pages/EntryExit';
import RiskMap from './views/pages/RiskMap';
import Doors from './components/Doors';
import Windows from './components/Windows';
import Pallets from './components/Pallets';
import Vents from './components/Vents';
import { LocationGridContextProvider } from './contexts/LocationGridContext';

const App = () => {
	return (
		<Router>
			<LocationGridContextProvider>
				<Routes>
					<Route path='/' element={<DefaultLayout />}>
						<Route index element={<BasicInfo />} />
						<Route path='basic-info' element={<BasicInfo />} />
						<Route path='area' element={<Area />} />
						<Route path='entry-exit' element={<EntryExit />}>
							<Route index element={<Doors />} />
							<Route path='doors' element={<Doors />} />
							<Route path='windows' element={<Windows />} />
							<Route path='pallets' element={<Pallets />} />
							<Route path='vents' element={<Vents />} />
						</Route>
						<Route path='risk-map' element={<RiskMap />} />
					</Route>
				</Routes>
			</LocationGridContextProvider>
		</Router>
	);
};

export default App;
