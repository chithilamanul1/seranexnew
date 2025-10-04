'use client';
import { useUser } from '@clerk/nextjs';

// Mock data for files
const files = [
    { name: "Brand_Logo_Final.svg", type: "Vector Graphic", size: "2.1 MB", lastModified: "2024-10-01" },
    { name: "Homepage_Mockup_V3.fig", type: "Figma Design", size: "15.8 MB", lastModified: "2024-09-28" },
    { name: "Project_Proposal.pdf", type: "PDF Document", size: "850 KB", lastModified: "2024-09-15" },
    { name: "marketing_assets.zip", type: "ZIP Archive", size: "45.2 MB", lastModified: "2024-09-25" },
];

const FileRow = ({ file }) => (
    <div className="grid grid-cols-4 items-center gap-4 py-4 px-2 border-b border-white/10 last:border-b-0">
        <div className="font-semibold text-white flex items-center gap-3">
            <span className="material-symbols-outlined text-white/60">description</span>
            {file.name}
        </div>
        <div className="text-sm text-white/70">{file.type}</div>
        <div className="text-sm text-white/70">{file.size}</div>
        <div className="text-right">
            <button className="text-sm font-semibold text-theme-blue hover:underline">Download</button>
        </div>
    </div>
);

export default function FilesPage() {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded || !isSignedIn) {
    return null; // or a loading spinner
  }

  return (
    <>
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-white">Project Files</h1>
        <p className="text-white/70 mt-1">All documents and assets related to your projects.</p>
      </div>
      
      <div className="rounded-xl border border-white/10 bg-white/5">
        <div className="grid grid-cols-4 gap-4 py-3 px-2 text-sm font-semibold text-white/60 border-b border-white/10">
            <div>Name</div>
            <div>Type</div>
            <div>Size</div>
            <div className="text-right">Actions</div>
        </div>
        {files.map((file, index) => (
            <FileRow key={index} file={file} />
        ))}
      </div>
    </>
  );
}