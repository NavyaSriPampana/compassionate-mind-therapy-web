
import { Phone, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-light mb-4">Dr. Serena Blake</h3>
            <p className="text-slate-300 mb-4">
              Licensed Clinical Psychologist providing compassionate, evidence-based therapy in Los Angeles, CA.
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-slate-300">
                <Phone size={16} />
                <span>(323) 555-0192</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail size={16} />
                <span>serena@blakepsychology.com</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Office Hours</h4>
            <div className="space-y-3 text-slate-300">
              <div>
                <div className="font-medium">In-Person Sessions</div>
                <div className="text-sm">Tue & Thu: 10 AM - 6 PM</div>
              </div>
              <div>
                <div className="font-medium">Virtual Sessions</div>
                <div className="text-sm">Mon, Wed & Fri: 1 PM - 5 PM</div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-medium mb-4">Services</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Anxiety & Stress Management</li>
              <li>Relationship Counseling</li>
              <li>Trauma Recovery</li>
              <li>Individual Therapy</li>
              <li>Couples Therapy</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <div className="text-slate-400 text-sm">
            <p>&copy; 2024 Dr. Serena Blake Psychology Practice. All rights reserved.</p>
            <p className="mt-2">Licensed Clinical Psychologist | Los Angeles, CA</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
