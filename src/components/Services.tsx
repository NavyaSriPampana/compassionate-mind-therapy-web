
const Services = () => {
  const services = [
    {
      
  title: "Anxiety & Stress Management",
  description: "Evidence-based techniques to help you manage anxiety, reduce stress, and develop healthy coping mechanisms for daily challenges.",
  image: "https://www.olympiabenefits.com/hubfs/Stress%20Management%20Resource%20List.png",
  price: "$200 / session"


    },
    {
      title: "Relationship Counseling",
      description: "Strengthen communication, rebuild trust, and develop deeper connections in your personal relationships through proven therapeutic approaches.",
      image: "https://ggie.berkeley.edu/wp-content/uploads/2019/04/School-Relationships_1410x820-705x410.jpg",
      price: "$240 / couples session"
    },
    {
      title: "Trauma Recovery",
      description: "Compassionate, specialized care to help you process traumatic experiences and develop resilience for healing and growth.",
      image: "https://images.squarespace-cdn.com/content/v1/616d95d51579966f3cdffb31/1659124726815-0C5P503JUBEN822VQ8ND/unsplash-image-Ya_UycADp28.jpg",
      price: "$200 / session"
    }
  ];

  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-light text-slate-800 mb-6">Services & Specialties</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Specialized therapeutic services tailored to your unique needs and goals
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="h-48 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{service.title}</h3>
                <p className="text-slate-600 mb-4 leading-relaxed">{service.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-medium text-slate-800 mb-6 text-center">Office Hours</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-blue-600 mb-3">In-Person Sessions</h4>
              <div className="space-y-2 text-slate-700">
                <div>Tuesday & Thursday</div>
                <div className="font-medium">10:00 AM - 6:00 PM</div>
                <div className="text-sm text-slate-500">1287 Maplewood Drive</div>
              </div>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-blue-600 mb-3">Virtual Sessions</h4>
              <div className="space-y-2 text-slate-700">
                <div>Monday, Wednesday & Friday</div>
                <div className="font-medium">1:00 PM - 5:00 PM</div>
                <div className="text-sm text-slate-500">Via Zoom</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
