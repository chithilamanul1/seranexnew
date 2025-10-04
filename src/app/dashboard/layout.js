'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { UserButton } from '@clerk/nextjs';

const SeranexLogo = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
        <path d="M11.5 2C11.13 2 10.88 2.3 10.88 2.67V10.16L6.5 10.16C6.18 10.16 5.89 10.33 5.75 10.6C5.61 10.88 5.68 11.23 5.92 11.45L13.17 21.05C13.38 21.32 13.73 21.43 14.05 21.32C14.37 21.21 14.56 20.91 14.56 20.55V13.06L18.88 13.06C19.2 13.06 19.49 12.89 19.63 12.62C19.77 12.34 19.7 11.99 19.46 11.77L12.21 2.17C12 2.06 11.75 2 11.5 2ZM12.29 11.4L17.27 17.84L15.34 17.84L15.34 11.4L12.29 11.4ZM8.73 10.84L13.71 4.4L13.71 10.84L8.73 10.84Z" fill="currentColor"/>
    </svg>
);

const SidebarLink = ({ href, icon, children }) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link 
            href={href}
            className={`flex items-center gap-3 rounded-lg px-3 py-2 transition-all duration-200 ${
                isActive 
                ? 'bg-white/10 text-white' 
                : 'text-white/60 hover:bg-white/5 hover:text-white'
            }`}
        >
            <span className="material-symbols-outlined text-xl">{icon}</span>
            <span className="text-sm font-medium">{children}</span>
        </Link>
    );
};


export default function DashboardLayout({ children }) {
  return (
    <div className="min-h-screen w-full grid lg:grid-cols-[280px_1fr]">
      {/* Sidebar */}
      <div className="hidden border-r border-white/10 bg-black/20 lg:block">
        <div className="flex h-full max-h-screen flex-col gap-2">
          <div className="flex h-[60px] items-center border-b border-white/10 px-6">
            <Link className="flex items-center gap-2 font-semibold text-white" href="/">
              <SeranexLogo />
              <span className="text-lg">Seranex</span>
            </Link>
          </div>
          <div className="flex-1 overflow-auto py-2 p-4">
            <nav className="grid items-start gap-1">
              <SidebarLink href="/dashboard" icon="dashboard">Dashboard</SidebarLink>
              <SidebarLink href="/dashboard/projects" icon="folder_managed">My Projects</SidebarLink>
              <SidebarLink href="/dashboard/files" icon="description">Files</SidebarLink>
              <SidebarLink href="/dashboard/invoices" icon="receipt_long">Invoices</SidebarLink>
              <SidebarLink href="#" icon="chat">Team Chat</SidebarLink>
            </nav>
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex flex-col">
        <header className="flex h-14 lg:h-[60px] items-center justify-end gap-4 border-b border-white/10 bg-background-dark/80 backdrop-blur-sm px-6">
            <UserButton afterSignOutUrl="/"/>
        </header>
        <main className="flex flex-1 flex-col gap-4 p-4 md:gap-8 md:p-6">
          {children}
        </main>
      </div>
    </div>
  );
}