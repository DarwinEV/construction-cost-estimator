// DataEntrySection.tsx

import { EstimationData } from '../types'; // Adjust import path based on your project structure

export default function DataEntrySection({
  estimationData = { materials: { concrete: 0 }, labor: {}, timeline: {} },
  updateEstimationData = (_: any) => {}
}: {
  estimationData?: EstimationData;
  updateEstimationData?: (newData: any) => void;
}) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-800">Project Variables</h2>
      
      {/* Materials Section */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-lg font-medium mb-4">Materials</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Material input fields */}
          <div>
            <label className="block text-gray-700 mb-1">Concrete (cubic yards)</label>
            <input 
              type="number" 
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-300 focus:border-orange-500 outline-none" 
              placeholder="0"
              onChange={(e) => updateEstimationData({
                materials: {
                  ...estimationData.materials,
                  concrete: parseFloat(e.target.value) || 0
                }
              })}
              value={estimationData.materials.concrete || ''}
            />
          </div>
          
          {/* More material inputs can be added similarly */}
        </div>
      </div>
      
      {/* Labor Section */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-lg font-medium mb-4">Labor</h3>
        {/* Labor input fields */}
      </div>
      
      {/* Equipment Section */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-lg font-medium mb-4">Equipment</h3>
        {/* Equipment input fields */}
      </div>
      
      {/* Timeline Section */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
        <h3 className="text-lg font-medium mb-4">Project Timeline</h3>
        {/* Timeline input fields */}
      </div>
    </div>
  );
}
