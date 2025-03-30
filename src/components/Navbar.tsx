
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-blue-600 font-bold text-xl">CompetitorAnalysisHQ</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-slate-700 hover:text-blue-600 font-medium">
              Home
            </Link>
            <Link to="/how-it-works" className="text-slate-700 hover:text-blue-600 font-medium">
              How It Works
            </Link>
            <Link to="/pricing" className="text-slate-700 hover:text-blue-600 font-medium">
              Pricing
            </Link>
            <Button asChild>
              <Link to="/analyze">Start Analysis</Link>
            </Button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-700 hover:text-blue-600 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      <div className={cn("md:hidden", isMenuOpen ? "block" : "hidden")}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-b border-slate-200">
          <Link
            to="/"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            to="/how-it-works"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-100"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </Link>
          <Link
            to="/pricing"
            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Pricing
          </Link>
          <Button
            asChild
            className="w-full mt-2"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link to="/analyze">Start Analysis</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
