const CTA: React.FC = () => {
    return (
        <section className="py-16 bg-primary">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Streamline Your Estimating Process?
                </h2>
                <p className="text-xl text-white opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of trade professionals who are saving time and winning more bids.
                </p>
                <button className="bg-white hover:bg-gray-100 text-primary text-lg font-semibold py-3 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
                Start Using Our Estimator Today
                </button>
            </div>
        </section>
    );
};

export default CTA;