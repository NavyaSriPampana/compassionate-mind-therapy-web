import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="/videos/ocean.mp4.crdownload"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10"></div>

      {/* Top-left branding box */}
      <div className="absolute top-20 left-8 z-30 bg-black/50 backdrop-blur-sm px-5 py-3 rounded-md">
        <h1 className="text-2xl font-semibold text-white">Dr. Serena Blake</h1>
        <p className="text-sm text-blue-200">Clinical Psychologist, PsyD</p>
      </div>

      {/* Main centered content */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="max-w-3xl mx-auto text-center space-y-8 text-white">
          
          <h1 className="text-2xl md:text-3xl text-gray-100 leading-relaxed font-sans">
            Compassionate, evidence-based therapy to help you overcome anxiety, strengthen relationships, and heal from trauma.
          </h1>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={scrollToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
            >
              Schedule Consultation
            </Button>
            <div className="flex items-center gap-2 text-white">
              <Phone size={18} />
              <span>(323) 555-0192</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-8 pt-8 border-t border-white/30 mt-10">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-200">8+</div>
              <div className="text-sm text-white">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-200">500+</div>
              <div className="text-sm text-white">Client Sessions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-200">3</div>
              <div className="text-sm text-white">Specialties</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
