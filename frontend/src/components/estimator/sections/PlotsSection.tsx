'use client';

export default function PlotsSection({ estimationData = {} }) {
  return (
    <div className="space-y-8 relative">
      <h2 className="text-2xl font-semibold text-gray-800">Visual Analysis</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Cost Breakdown Chart */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-64 relative overflow-hidden">
          <h3 className="text-lg font-medium mb-2">Cost Breakdown</h3>
          
          {/* Placeholder chart elements */}
          <div className="absolute bottom-0 left-0 w-full h-32 flex space-x-2 px-4 items-end opacity-20">
            <div className="w-1/5 bg-blue-500 h-full rounded-t-lg"></div>
            <div className="w-1/5 bg-green-500 h-3/4 rounded-t-lg"></div>
            <div className="w-1/5 bg-yellow-500 h-1/2 rounded-t-lg"></div>
            <div className="w-1/5 bg-purple-500 h-2/3 rounded-t-lg"></div>
            <div className="w-1/5 bg-red-500 h-1/4 rounded-t-lg"></div>
          </div>
          
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="bg-orange-500 text-white font-bold px-4 py-2 rounded-full mb-2">Coming Soon</div>
            <p className="text-gray-600 text-center max-w-xs">Interactive cost breakdown visualizations with detailed analysis</p>
          </div>
        </div>
        
        {/* Timeline Chart */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-64 relative overflow-hidden">
          <h3 className="text-lg font-medium mb-2">Project Timeline</h3>
          
          {/* Placeholder chart elements */}
          <div className="absolute top-12 left-0 w-full px-4 opacity-20">
            <div className="h-8 bg-orange-300 rounded-lg mb-2"></div>
            <div className="h-8 bg-orange-400 rounded-lg mb-2"></div>
            <div className="h-8 bg-orange-500 rounded-lg mb-2"></div>
            <div className="h-8 bg-orange-600 rounded-lg"></div>
          </div>
          
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="bg-orange-500 text-white font-bold px-4 py-2 rounded-full mb-2">Coming Soon</div>
            <p className="text-gray-600 text-center max-w-xs">Gantt charts and timeline projections for project planning</p>
          </div>
        </div>
        
        {/* Material Distribution */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-64 relative overflow-hidden">
          <h3 className="text-lg font-medium mb-2">Material Distribution</h3>
          
          {/* Placeholder chart elements */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20">
            <div className="w-32 h-32 rounded-full border-8 border-blue-500 border-t-orange-500 border-r-green-500 border-b-yellow-500"></div>
          </div>
          
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="bg-orange-500 text-white font-bold px-4 py-2 rounded-full mb-2">Coming Soon</div>
            <p className="text-gray-600 text-center max-w-xs">Visual breakdown of material allocation and costs</p>
          </div>
        </div>
        
        {/* Labor Analysis */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-64 relative overflow-hidden">
          <h3 className="text-lg font-medium mb-2">Labor Analysis</h3>
          
          {/* Placeholder chart elements */}
          <div className="absolute bottom-0 left-0 w-full h-32 flex px-4 items-end opacity-20">
            <div className="flex-1 bg-gradient-to-t from-orange-500 to-orange-300 h-full rounded-t-lg"></div>
          </div>
          
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="bg-orange-500 text-white font-bold px-4 py-2 rounded-full mb-2">Coming Soon</div>
            <p className="text-gray-600 text-center max-w-xs">Detailed labor cost projections and resource allocation</p>
          </div>
        </div>
      </div>
    </div>
  );
}