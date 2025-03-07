import EstimationContainer from '@/components/estimator/EstimationContainer';

export const metadata = {
  title: 'Construction Estimation Tool',
  description: 'Customize and generate construction cost estimates',
};

export default function EstimationSoftwarePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Construction Estimation Tool</h1>
      <p className="mb-8 text-gray-700">
        Create customized estimates with complete control over all variables.
      </p>
      
      <EstimationContainer />
    </main>
  );
}