import * as React from 'react';

import { Loading } from '../Loading/Loading';

export const Suspense = ({ children }: React.PropsWithChildren) => {
	return <React.Suspense fallback={<Loading />}>{children}</React.Suspense>;
};
