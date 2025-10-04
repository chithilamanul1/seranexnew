'use client';
import { useUser } from '@clerk/nextjs';
import Link from 'next/link';

// Mock data for projects. Later, this will come from your database.
const projects = [
    { id: 1, title: "E-commerce Platform", status: "In Progress", progress: 75 },
    { id: 2, title: "Mobile Fitness App", status: "In Progress", progress: 40 },
    { id: 3, title: "Company Rebranding", status: "Completed", progress: 100 },
];

const ProjectRow = ({ project }) => (
    <div className="grid grid-cols-4 items-center gap-4 py-4 px-2 border-b border-white/10 last:border-b-0">
        <div className="font-semibold text-white">{project.title}</div>
        <div>
            <div className="w-full bg-black/30 rounded-full h-2.5">
                <div className="bg-theme-blue h-2.5 rounded-full" style={{ width: `${project.progress}%` }}></div>
            </div>
            <p className="text-right text-xs text-white/50 mt-1">{project.progress}%</p>
        </div>
        <div>
            <span className={`text-xs font-semibold py-1 px-3 rounded-full ${project.status === 'In Progress' ? 'bg-blue-600/20 text-blue-400' : 'bg-green-600/20 text-green-400'}`}>
                {project.status}
            </span>
        </div>
        <div className="text-right">
            <Link href="#" className="text-sm font-semibold text-theme-blue hover:underline">View Details</Link>
        </div>
    </div>
);


export default function ProjectsPage() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null; // or a loading spinner
  }

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">My Projects</h1>
        <p className="text-white/70 mt-1">An overview of all your projects with Seranex.</p>
      </div>
      
      <div className="rounded-xl border border-white/10 bg-white/5">
        <div className="grid grid-cols-4 gap-4 py-3 px-2 text-sm font-semibold text-white/60 border-b border-white/10">
            <div>Project Name</div>
            <div>Progress</div>
            <div>Status</div>
            <div className="text-right">Actions</div>
        </div>
        {projects.map(project => (
            <ProjectRow key={project.id} project={project} />
        ))}
      </div>
    </>
  );
}