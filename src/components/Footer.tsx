
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="mb-8 md:mb-0">
            <span className="text-white font-bold text-xl">CompetitorAnalysisHQ</span>
            <p className="mt-2 text-sm">
              Professional website design analysis that helps you outperform your competitors.
            </p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              <li><Link to="/analyze" className="text-sm hover:text-white">Website Analysis</Link></li>
              <li><Link to="/how-it-works" className="text-sm hover:text-white">How It Works</Link></li>
              <li><Link to="/pricing" className="text-sm hover:text-white">Pricing</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              <li><Link to="/about" className="text-sm hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-white">Contact</Link></li>
              <li><Link to="/faq" className="text-sm hover:text-white">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">
              Legal
            </h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-sm hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="text-sm hover:text-white">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-slate-700 pt-8">
          <p className="text-sm text-center">
            &copy; {new Date().getFullYear()} CompetitorAnalysisHQ. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
