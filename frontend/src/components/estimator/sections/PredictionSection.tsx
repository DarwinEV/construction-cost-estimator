'use client';

export default function PredictionSection({ estimationData = {} }) {
  return (
    <div className="space-y-8 relative">
      <h2 className="text-2xl font-semibold text-gray-800">Cost Predictions</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Prediction Card */}
        <div className="lg:col-span-3 bg-gradient-to-r from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200 relative overflow-hidden">
          <h3 className="text-xl font-medium mb-4">Total Project Estimate</h3>
          
          {/* Placeholder elements */}
          <div className="flex justify-between opacity-20">
            <div className="text-4xl font-bold text-orange-600">$0.00</div>
            <div className="text-sm text-gray-500">Based on current inputs</div>
          </div>
          
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="bg-orange-500 text-white font-bold px-4 py-2 rounded-full mb-2">Coming Soon</div>
            <p className="text-gray-600 text-center max-w-xs">AI-powered cost estimation based on your specific project variables</p>
          </div>
        </div>
        
        {/* Cost Range Prediction */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-64 relative overflow-hidden">
          <h3 className="text-lg font-medium mb-2">Cost Range Analysis</h3>
          
          {/* Placeholder elements */}
          <div className="w-full h-4 bg-gray-200 rounded-full mt-8 opacity-20">
            <div className="w-2/3 h-4 bg-gradient-to-r from-green-500 to-red-500 rounded-full"></div>
            <div className="w-2 h-8 bg-black absolute top-12 left-1/2 transform -translate-x-1/2"></div>
          </div>
          
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="bg-orange-500 text-white font-bold px-4 py-2 rounded-full mb-2">Coming Soon</div>
            <p className="text-gray-600 text-center max-w-xs">Statistical predictions with confidence intervals</p>
          </div>
        </div>
        
        {/* Risk Assessment */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-64 relative overflow-hidden">
          <h3 className="text-lg font-medium mb-2">Risk Assessment</h3>
          
          {/* Placeholder elements */}
          <div className="grid grid-cols-2 gap-2 mt-6 opacity-20">
            <div className="h-16 bg-green-100 rounded-lg border border-green-200"></div>
            <div className="h-16 bg-yellow-100 rounded-lg border border-yellow-200"></div>
            <div className="h-16 bg-orange-100 rounded-lg border border-orange-200"></div>
            <div className="h-16 bg-red-100 rounded-lg border border-red-200"></div>
          </div>
          
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="bg-orange-500 text-white font-bold px-4 py-2 rounded-full mb-2">Coming Soon</div>
            <p className="text-gray-600 text-center max-w-xs">Identify potential cost overruns and project risks</p>
          </div>
        </div>
        
        {/* Market Comparison */}
        <div className="bg-gray-50 p-6 rounded-xl border border-gray-200 h-64 relative overflow-hidden">
          <h3 className="text-lg font-medium mb-2">Market Comparison</h3>
          
          {/* Placeholder elements */}
          <div className="flex justify-between mt-8 opacity-20">
            <div className="h-16 w-16 rounded-full bg-orange-200 flex items-center justify-center">You</div>
            <div className="h-4 w-32 bg-gray-200 self-center rounded-full"></div>
            <div className="h-16 w-16 rounded-full bg-blue-200 flex items-center justify-center">Market</div>
          </div>
          
          {/* Coming Soon Overlay */}
          <div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center">
            <div className="bg-orange-500 text-white font-bold px-4 py-2 rounded-full mb-2">Coming Soon</div>
            <p className="text-gray-600 text-center max-w-xs">Compare your estimates against industry averages</p>
          </div>
        </div>
      </div>
    </div>
  );
}