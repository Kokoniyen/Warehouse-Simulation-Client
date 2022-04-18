import { useNavigate } from 'react-router-dom';
import LocationGrid from '../../components/LocationGrid';
import { useLocationGridContext } from '../../contexts/LocationGridContext';

const EntryExit = () => {
	const navigate = useNavigate();
	const { activeTab, setActiveTab } = useLocationGridContext();

	const handleTabClick = (tab) => {
		navigate(tab);
		setActiveTab(tab);
	};

	return (
		<div>
			<div className='flex justify-between'>
				<div
					onClick={() => handleTabClick('doors')}
					className='px-4 py-2 rounded-md bg-[#42D9C8] text-white text-sm cursor-pointer'
				>
					Doors
				</div>
				<div
					onClick={() => handleTabClick('windows')}
					className='px-4 py-2 rounded-md bg-[#28464B] text-white text-sm cursor-pointer'
				>
					Windows
				</div>
				<div
					onClick={() => handleTabClick('pallets')}
					className='px-4 py-2 rounded-md bg-[#6D435A] text-white text-sm cursor-pointer'
				>
					Pallets
				</div>
				<div
					onClick={() => handleTabClick('vents')}
					className='px-4 py-2 rounded-md bg-[#648DE5] text-white text-sm cursor-pointer'
				>
					Vents
				</div>
			</div>
			<div className='mt-6'>
				<LocationGrid />
			</div>
		</div>
	);
};

export default EntryExit;
