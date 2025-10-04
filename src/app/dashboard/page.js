'use client';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

const ProjectStatusCard = ({ title, status, progress, href }) => (
    <Link href={href} className="bg-white/5 p-6 rounded-xl border border-white/10 transition-all duration-300 hover:border-white/20 hover:bg-white/10">
        <div className="flex justify-between items-start">
            <div>
                <p className="text-sm text-white/60">Project</p>
                <h3 className="text-lg font-bold text-white mt-1">{title}</h3>
            </div>
            <span className={`text-xs font-semibold py-1 px-3 rounded-full ${status === 'In Progress' ? 'bg-blue-600/20 text-blue-400' : 'bg-green-600/20 text-green-400'}`}>
                {status}
            </span>
        </div>
        <div className="mt-4">
            <div className="w-full bg-black/30 rounded-full h-2.5">
                <div className="bg-theme-blue h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
            </div>
            <p className="text-right text-sm text-white/50 mt-1">{progress}% Complete</p>
        </div>
    </Link>
);


export default function DashboardPage() {
  const { isLoaded, isSignedIn, user } = useUser();

  // Mock data for projects. Later, this will come from your database.
  const projects = [
      { id: 1, title: "E-commerce Platform", status: "In Progress", progress: 75 },
      { id: 2, title: "Mobile Fitness App", status: "In Progress", progress: 40 },
      { id: 3, title: "Company Rebranding", status: "Completed", progress: 100 },
  ];

  if (!isLoaded || !isSignedIn) {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <p className="text-white/50">Loading Dashboard...</p>
        </div>
    );
  }

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">
          Welcome back, {user.firstName}!
        </h1>
        <p className="text-white/70 mt-1">Here's a summary of your active projects.</p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map(project => (
            <ProjectStatusCard 
                key={project.id}
                title={project.title}
                status={project.status}
                progress={project.progress}
                href="#" // Later this will link to the specific project page
            />
        ))}
      </div>
    </>
  );
}