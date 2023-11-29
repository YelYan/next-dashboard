import SideNav from '@/app/ui/dashboard/sidenav';
import React from 'react';

type Children = {
  children: React.ReactNode;
};

function Layout({ children }: Children) {
  return (
    <div className="flex h-screen flex-col border-2 border-red-600 md:flex-row md:overflow-hidden">
      <div className="w-full flex-none md:w-64">
        <SideNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}

export default Layout;
