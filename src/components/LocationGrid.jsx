import { useState } from 'react';
import { useLocationGridContext } from '../contexts/LocationGridContext';

const LocationGrid = () => {
	const { activeTab, setActiveTab, selected, setSelected } =
		useLocationGridContext();

	const tabColors = {
		doors: '#42D9C8',
		windows: '#28464B',
		pallets: '#6D435A',
		vents: '#648DE5',
	};

	const [grids, setGrids] = useState({
		doors: [],
		windows: [],
		pallets: [],
		vents: [],
	});

	const setTabBackground = (box) => {
		const exists = selected.find((el) => el.number === box);
		if (!exists) return;
	};

	const handleBoxClick = (box) => {
		const selectedClone = { ...selected };
		const exists = selected[`${box}`];
		if (exists) {
			if (exists.tab !== activeTab) {
				return;
			} else {
				delete selectedClone[box];
			}
		} else {
			selectedClone[box] = {
				number: box,
				bgColor: tabColors[activeTab],
				tab: activeTab,
			};
		}

		setSelected(selectedClone);
	};

	return (
		<div className='grid grid-cols-10 w-[500px] h-[500px] mx-auto border-[0.5px] border-black'>
			{Array(100)
				.fill(undefined)
				.map((el, i) => {
					return (
						<div
							onClick={() => handleBoxClick(i)}
							className={`border-[0.5px] border-black flex items-center justify-center cursor-pointer text-sm ${
								selected[i] && `bg-[${selected[i].bgColor}] text-white`
							}`}
							key={i}
						>
							{i}
						</div>
					);
				})}
		</div>
	);
};

export default LocationGrid;
