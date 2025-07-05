
const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-800 mb-6">About Dr. Blake</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                Dr. Serena Blake is a licensed clinical psychologist (PsyD) based in Los Angeles, CA, with eight years of experience and over 500 client sessions.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                She blends evidence-based approaches—like cognitive-behavioral therapy and mindfulness—with compassionate, personalized care to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
              <p className="text-lg text-slate-700 leading-relaxed">
                Whether you meet in her Maplewood Drive office or connect virtually via Zoom, Dr. Blake is committed to creating a safe, supportive space for you to thrive.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
              <h3 className="text-2xl font-medium text-slate-800 mb-6">Practice Details</h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-slate-600">License</span>
                  <span className="font-medium">Clinical Psychologist, PsyD</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Experience</span>
                  <span className="font-medium">8+ Years</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Sessions Completed</span>
                  <span className="font-medium">500+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Location</span>
                  <span className="font-medium">Los Angeles, CA</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
