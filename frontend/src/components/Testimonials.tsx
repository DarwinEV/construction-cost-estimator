const Testimonials: React.FC = () => {

    const testimonials = [
        {
          name: "John Doe",
          role: "Electrical Contractor",
          quote: "This estimator has saved me hours on each project. The level of detail and accuracy is impressive."
        },
        {
          name: "Sarah Davis",
          role: "Plumbing Company Owner",
          quote: "The trade-specific variables make all the difference. I can finally create estimates that account for the real complexities."
        },
        {
          name: "Mike Thomas",
          role: "General Contractor",
          quote: "I've increased my bid-to-win ratio by 30% since I started using this tool. The estimates are spot on."
        }
    ];

    return (
        <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                What Professionals Say
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                    <div 
                    key={index} 
                    className="bg-white p-6 rounded-lg shadow-md border border-gray-100"
                    >
                    <div className="flex items-center mb-4">
                        <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center text-xl font-bold text-white">
                        {testimonial.name.charAt(0) + testimonial.name.split(' ')[1].charAt(0)}
                        </div>
                        <div className="ml-4">
                        <h3 className="text-lg font-semibold">{testimonial.name}</h3>
                        <p className="text-gray-600">{testimonial.role}</p>
                        </div>
                    </div>
                    <p className="text-gray-700">"{testimonial.quote}"</p>
                    </div>
                ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;