// app/estimate/page.tsx
// import EstimationForm from '@/components/estimator/EstimationForm';
// import PriceCalculator from '@/components/estimator/PriceCalculator';
// import ResultsSummary from '@/components/estimator/ResultsSummary';

export const metadata = {
  title: 'Price Estimator | YourBrand',
  description: 'Get accurate price estimates for your project in minutes.',
};

export default function EstimatePage() {
  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Price Estimator</h1>
      <p className="mb-8">Complete the form below to get an accurate price estimate.</p>
      
      {/* <div className="bg-white shadow-md rounded-lg p-6">
        <EstimationForm />
      </div> */}
    </main>
  );
}