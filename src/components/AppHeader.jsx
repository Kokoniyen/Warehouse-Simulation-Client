import logo from '../assets/images/logo.png'

const AppHeader = () => {
	return (
		<header className='bg-navyBlue h-[70px]'>
			<div className='w-9/10 max-w-[1000px] h-full mx-auto flex items-center justify-between'>
				<h1 className='text-white text-4xl font-extrabold'>
					WAREHOUSE SIMULATION
				</h1>
				<div className='bg-white h-8 w-8'>
					<img src={logo} alt="logo" />
				</div>
			</div>
		</header>
	);
};

export default AppHeader;
