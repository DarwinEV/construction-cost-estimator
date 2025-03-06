const Features: React.FC = () => {

    const features = [
        {
        image: "https://images.unsplash.com/photo-1593672715438-d88a70629abe?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Unsplash image
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        ),
        title: "Completely Free",
        description: "No hidden costs, subscriptions, or fees. Our estimator is free to use for all your projects."
        },
        {
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Unsplash image
        icon: (
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
        ),
        title: "Lightning Fast",
        description: "Get accurate estimates in minutes, not days. Save time and respond to clients faster."
        }
        // {
        //   image: "https://source.unsplash.com/400x300/?construction,tools", // Unsplash image
        //   icon: (
        //     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
        //     </svg>
        //   ),
        //   title: "Trade-Specific Variables",
        //   description: "Our estimator accounts for the unique variables in your specific trade for maximum accuracy."
        // },
        // {
        //   image: "https://source.unsplash.com/400x300/?business,control", // Unsplash image
        //   icon: (
        //     <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        //       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
        //     </svg>
        //   ),
        //   title: "Local Control",
        //   description: "No need to outsource your estimating. Keep control of your process with our specialized tool."
        // }
    ];

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                Why Use Our Estimator?
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {features.map((feature, index) => (
                    <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
                    >
                    <img src={feature.image} alt={feature.title} className="w-full h-40 object-cover rounded-lg mb-4" />
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        {feature.title}
                    </h3>
                    <p className="text-gray-600">
                        {feature.description}
                    </p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default Features;