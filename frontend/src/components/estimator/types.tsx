// types.ts
export interface EstimationData {
    materials: {
      concrete: number;
      // Add other material fields as needed
    };
    labor: Record<string, any>; // Define more specifically based on your data structure
    timeline: Record<string, any>; // Same here
    // Add other sections as needed
  }
  
export interface Materials {
  concrete: number;
  // Add more material fields as needed
}