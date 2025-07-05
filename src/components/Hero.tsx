
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-light text-slate-800 leading-tight">
                Dr. Serena Blake
              </h1>
              <h2 className="text-2xl text-blue-600 font-medium">
                Clinical Psychologist, PsyD
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed max-w-lg">
                Compassionate, evidence-based therapy to help you overcome anxiety, strengthen relationships, and heal from trauma.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                onClick={scrollToContact}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
              >
                Schedule Consultation
              </Button>
              <div className="flex items-center gap-4 text-slate-600">
                <div className="flex items-center gap-2">
                  <Phone size={18} />
                  <span>(323) 555-0192</span>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">8+</div>
                <div className="text-sm text-slate-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">500+</div>
                <div className="text-sm text-slate-600">Client Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">3</div>
                <div className="text-sm text-slate-600">Specialties</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-96 h-96 rounded-full overflow-hidden shadow-2xl">
                <img 
                  src="/lovable-uploads/684327bb-5fb7-4d3a-86c3-0dd36da00b8e.png"
                  alt="Dr. Serena Blake"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                <div className="text-sm font-medium">Licensed in CA</div>
                <div className="text-xs opacity-90">PsyD Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
