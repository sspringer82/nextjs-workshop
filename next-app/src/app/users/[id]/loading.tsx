'use client';

import { ClockLoader, PacmanLoader } from 'react-spinners';
import { Skeleton } from '@/components/ui/skeleton';

const UserLoading: React.FC = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <PacmanLoader size="20" color="green" />
    </div>
  );
  // return (
  //   // Main Container - styled to match Steam's dark blue background
  //   <div className="w-full max-w-[600px] p-4 bg-[#1b2838] rounded-sm text-[#c6d4df] font-sans">
  //     {/* Header Image */}
  //     <Skeleton className="w-full h-[280px] mb-4 bg-slate-700/50 rounded-sm" />

  //     {/* Description Text Block */}
  //     <div className="space-y-2 mb-6">
  //       <Skeleton className="h-4 w-full bg-slate-700/50" />
  //       <Skeleton className="h-4 w-[98%] bg-slate-700/50" />
  //       <Skeleton className="h-4 w-[95%] bg-slate-700/50" />
  //       <Skeleton className="h-4 w-[90%] bg-slate-700/50" />
  //     </div>

  //     {/* Metadata Grid */}
  //     <div className="grid grid-cols-[170px_1fr] gap-y-2 mb-8 text-sm">
  //       {/* Row 1: Recent Reviews */}
  //       <div className="flex items-center">
  //         <Skeleton className="h-3 w-32 bg-slate-700/30" />
  //       </div>
  //       <div className="flex items-center gap-2">
  //         <Skeleton className="h-4 w-24 bg-slate-600" />
  //         <Skeleton className="h-4 w-12 bg-slate-700/30 rounded-full" />
  //       </div>

  //       {/* Row 2: All Reviews */}
  //       <div className="flex items-center">
  //         <Skeleton className="h-3 w-32 bg-slate-700/30" />
  //       </div>
  //       <div className="flex items-center gap-2">
  //         <Skeleton className="h-4 w-24 bg-slate-600" />
  //         <Skeleton className="h-4 w-12 bg-slate-700/30 rounded-full" />
  //       </div>

  //       {/* Spacer */}
  //       <div className="h-2 col-span-2"></div>

  //       {/* Row 3: Release Date */}
  //       <div className="flex items-center">
  //         <Skeleton className="h-3 w-28 bg-slate-700/30" />
  //       </div>
  //       <div className="flex items-center">
  //         <Skeleton className="h-4 w-24 bg-slate-700/50" />
  //       </div>

  //       {/* Spacer */}
  //       <div className="h-2 col-span-2"></div>

  //       {/* Row 4: Developer */}
  //       <div className="flex items-center">
  //         <Skeleton className="h-3 w-20 bg-slate-700/30" />
  //       </div>
  //       <div className="flex items-center">
  //         <Skeleton className="h-4 w-32 bg-blue-400/20" />{' '}
  //         {/* Blue tint for links */}
  //       </div>

  //       {/* Row 5: Publisher */}
  //       <div className="flex items-center">
  //         <Skeleton className="h-3 w-20 bg-slate-700/30" />
  //       </div>
  //       <div className="flex items-center">
  //         <Skeleton className="h-4 w-32 bg-blue-400/20" />
  //       </div>
  //     </div>

  //     {/* Tags Section */}
  //     <div className="mt-8">
  //       <Skeleton className="h-3 w-64 mb-2 bg-slate-700/30" />
  //       <div className="flex flex-wrap gap-1">
  //         <Skeleton className="h-6 w-32 bg-slate-700/40 rounded-sm" />
  //         <Skeleton className="h-6 w-28 bg-slate-700/40 rounded-sm" />
  //         <Skeleton className="h-6 w-20 bg-slate-700/40 rounded-sm" />
  //         <Skeleton className="h-6 w-10 bg-slate-700/40 rounded-sm" />
  //         <Skeleton className="h-6 w-8 bg-slate-700/40 rounded-sm" />
  //       </div>
  //     </div>
  //   </div>
  // );
};

export default UserLoading;
