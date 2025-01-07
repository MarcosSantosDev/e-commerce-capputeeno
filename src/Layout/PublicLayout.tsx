import { Outlet } from 'react-router';

import Header from '@/components/app/Header/Header';

const PublicLayout = () => {
	return (
		<div className="grid h-screen w-screen grid-cols-1 grid-rows-[auto_1fr]">
			<Header />
			<div className="bg-white-200 h-full w-full">
				<div className="w-container mx-auto h-full">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default PublicLayout;
