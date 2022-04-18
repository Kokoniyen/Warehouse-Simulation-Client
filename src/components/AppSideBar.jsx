import { NavLink, useNavigate } from 'react-router-dom';
import { ArrowNarrowRightIcon } from '@heroicons/react/solid';

import '../css/style.css';
import { useState } from 'react';

const AppSidebar = () => {
	const [currentTab, setCurrentTab] = useState(0);
	const navigate = useNavigate(0);

	const tabs = [
		{ link: '/' },
		{ link: '/area' },
		{ link: '/entry-exit' },
		{ link: '/risk-map' },
	];

	const handlePrevious = () => {
		if (currentTab === 0) return;
		setCurrentTab(currentTab - 1);
		navigate(`${tabs[currentTab - 1].link}`);
	};

	const handleNext = () => {
		if (currentTab === 3) return;
		setCurrentTab(currentTab + 1);
		navigate(`${tabs[currentTab + 1].link}`);
	};

	return (
		<nav className='w-[230px] h-full bg-navyBlue absolute left-0 py-8 px-8 flex flex-col justify-between'>
			<div className='flex flex-col'>
				<NavLink
					onClick={() => setCurrentTab(0)}
					to='/'
					className={({ isActive }) =>
						'nav-link' + (isActive ? ' activated' : '')
					}
				>
					<ArrowNarrowRightIcon className='w-5 mr-2 arrow-right' />{' '}
					<span>Basic Info</span>
				</NavLink>
				<NavLink
					onClick={() => setCurrentTab(1)}
					to='/area'
					className={({ isActive }) =>
						'nav-link' + (isActive ? ' activated' : '')
					}
				>
					<ArrowNarrowRightIcon className='w-5 mr-2 arrow-right' />{' '}
					<span>Inputs</span>
				</NavLink>
				<NavLink
					onClick={() => setCurrentTab(2)}
					to='/entry-exit'
					className={({ isActive }) =>
						'nav-link' + (isActive ? ' activated' : '')
					}
				>
					<ArrowNarrowRightIcon className='w-5 mr-2 arrow-right' />{' '}
					<span>Pallets</span>
				</NavLink>
				<NavLink
					onClick={() => setCurrentTab(3)}
					to='/risk-map'
					className={({ isActive }) =>
						'nav-link' + (isActive ? ' activated' : '')
					}
				>
					<ArrowNarrowRightIcon className='w-5 mr-2 arrow-right' />{' '}
					<span>Risk Map</span>
				</NavLink>
			</div>
			<div className='flex justify-between'>
				<button
					onClick={handlePrevious}
					className={
						currentTab === 0
							? 'text-gray-500 cursor-not-allowed'
							: 'text-white cursor-pointer'
					}
				>
					Prev
				</button>
				<button
					onClick={handleNext}
					className={
						currentTab === 3
							? 'text-gray-500 cursor-not-allowed'
							: 'text-white cursor-pointer'
					}
				>
					Next
				</button>
			</div>
		</nav>
	);
};

export default AppSidebar;
