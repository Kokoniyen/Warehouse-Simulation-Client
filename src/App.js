import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import BasicInfo from './views/pages/BasicInfo';
import Area from './views/pages/Area';
import Pallets from './views/pages/Pallets';
import RiskMap from './views/pages/RiskMap';

const App = () => {
	return (
		<Router>
			<Routes>
				<Route path='/' element={<DefaultLayout />}>
					<Route index element={<BasicInfo />} />
					<Route path='basic-info' element={<BasicInfo />} />
					<Route path='area' element={<Area />} />
					<Route path='pallets' element={<Pallets />} />
					<Route path='risk-map' element={<RiskMap />} />
				</Route>
			</Routes>
		</Router>
	);
};

export default App;
