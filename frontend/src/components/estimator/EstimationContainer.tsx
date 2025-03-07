'use client';

import { useState } from 'react';
import NavigationBar from './NavigationBar';
import DataEntrySection from './sections/DataEntrySection';
import PlotsSection from './sections/PlotsSection';
import PredictionSection from './sections/PredictionSection';
import { EstimationData } from './types'; // Import the type

export default function EstimationContainer() {
  const [activeSection, setActiveSection] = useState('dataEntry'); // 'dataEntry', 'plots', 'prediction'
  
  // Define the initial state with types
  const [estimationData, setEstimationData] = useState<EstimationData>({
    materials: { concrete: 0 },  // Initialize materials with concrete field
    labor: {},
    timeline: {},
  });

  // Function to update estimation data
  const updateEstimationData = (newData: Partial<EstimationData>) => {
    setEstimationData(prev => ({
      ...prev,
      ...newData,
    }));
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-20 relative min-h-[600px]">
      {/* Main content area with smooth transitions */}
      <div className="transition-all duration-300 ease-in-out">
        {activeSection === 'dataEntry' && (
          <DataEntrySection 
            estimationData={estimationData} 
            updateEstimationData={updateEstimationData} 
          />
        )}
        
        {activeSection === 'plots' && (
          <PlotsSection estimationData={estimationData} />
        )}
        
        {activeSection === 'prediction' && (
          <PredictionSection estimationData={estimationData} />
        )}
      </div>
      
      {/* Bottom navigation bar */}
      <NavigationBar 
        activeSection={activeSection} 
        setActiveSection={setActiveSection} 
      />
    </div>
  );
}
