import React, { ReactNode } from 'react';

const Layout = ({ children }: { children: ReactNode }) => {
	return <div className="w-3/4 py-20 flex items-center justify-center flex-col">{children}</div>;
};

export default Layout;
