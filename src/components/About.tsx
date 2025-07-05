const About = () => {
  return (
    <section id="about" className="py-20 bg-blue-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light text-slate-800 mb-6">About Dr. Serena</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT: Text content */}
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

              <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 mt-6">
                <h3 className="text-2xl font-medium text-slate-800 mb-4">Practice Details</h3>
                <div className="space-y-3">
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

            {/* RIGHT: Doctor image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl border-4 border-white">
                  <img
                    src="/images/doctor.jpg"
                    alt="Dr. Serena Blake"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm">
                  PsyD Certified • Licensed in CA
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
