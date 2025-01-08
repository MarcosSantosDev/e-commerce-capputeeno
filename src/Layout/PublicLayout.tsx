import { Outlet } from 'react-router';

import Header from '@/components/app/Header/Header';

const PublicLayout = () => {
	return (
		<div className="h-screen w-screen bg-white-200">
			<Header />
			<div className="h-content mx-auto w-container">
				<Outlet />
			</div>
		</div>
	);
};

export default PublicLayout;
