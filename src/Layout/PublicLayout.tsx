import { Outlet } from 'react-router';

import Header from '@/components/app/Header/Header';

const PublicLayout = () => {
	return (
		<div className="grid h-screen w-screen grid-cols-1 grid-rows-[auto_1fr]">
			<Header />
			<div className="h-full w-full bg-white-200">
				<div className="mx-auto h-full w-container">
					<Outlet />
				</div>
			</div>
		</div>
	);
};

export default PublicLayout;
