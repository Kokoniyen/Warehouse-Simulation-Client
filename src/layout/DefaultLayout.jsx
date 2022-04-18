import { Outlet } from 'react-router-dom';
import AppHeader from '../components/AppHeader';
import AppSidebar from '../components/AppSideBar';

const DefaultLayout = () => {
	return (
		<div>
			<AppHeader />
			<div className='w-9/10 max-w-[1200px] h-[80vh] mx-auto relative mt-12 flex border border-navyBlue'>
				<AppSidebar />
				<div className='ml-[230px] p-8 w-full bg-[#f7f7f7] overflow-auto'>
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default DefaultLayout;
