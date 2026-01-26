import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CONDITIONS } from "@/data/conditions";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConditionsDropdownOpen, setIsConditionsDropdownOpen] = useState(false);
  const [isConditionsExpanded, setIsConditionsExpanded] = useState(false);
  const location = useLocation();
  const pathname = location.pathname || '';
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownTriggerRef = useRef<HTMLButtonElement>(null);

  // Close dropdown on route change
  useEffect(() => {
    setIsConditionsDropdownOpen(false);
    setIsMenuOpen(false);
    setIsConditionsExpanded(false);
  }, [pathname]);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsConditionsDropdownOpen(false);
        dropdownTriggerRef.current?.focus();
      }
    };

    if (isConditionsDropdownOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isConditionsDropdownOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsConditionsDropdownOpen(false);
      }
    };

    if (isConditionsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isConditionsDropdownOpen]);

  const handleDropdownKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      setIsConditionsDropdownOpen(!isConditionsDropdownOpen);
    } else if (e.key === 'ArrowDown' && isConditionsDropdownOpen) {
      e.preventDefault();
      const firstLink = dropdownRef.current?.querySelector('a');
      firstLink?.focus();
    }
  };

  const isConditionActive = CONDITIONS.some(c => pathname === c.path) || pathname === '/disorders';

  return (
    <header className="bg-card shadow-soft sticky top-0 z-50">
      {/* Top contact bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-4 py-2">
          <div className="flex flex-wrap items-center justify-between text-primary-foreground text-sm">
            <div className="flex items-center space-x-6">
              <a href="tel:859-341-7453" className="flex items-center space-x-2 hover:text-primary-glow transition-colors">
                <Phone size={14} />
                <span>(859) 341-7453</span>
              </a>
            </div>
            <div className="flex items-center space-x-2 text-xs">
              <MapPin size={14} />
              <span>Cincinnati, OH & Fort Wright, KY</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">AS</span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-foreground">Arnold G. Shapiro MD</h1>
              <p className="text-sm text-muted-foreground">Psychiatric Practice</p>
            </div>
          </Link>

          {/* Desktop navigation */}
          <div className="hidden lg:flex items-center justify-center space-x-4 xl:space-x-6 flex-1">
            <Link 
              to="/" 
              className={`text-foreground hover:text-primary transition-colors text-sm whitespace-nowrap ${pathname === '/' ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`text-foreground hover:text-primary transition-colors text-sm whitespace-nowrap ${pathname === '/about' ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              About
            </Link>
            
            {/* Conditions Dropdown */}
            <div 
              className="relative"
              ref={dropdownRef}
              onMouseEnter={() => setIsConditionsDropdownOpen(true)}
              onMouseLeave={() => setIsConditionsDropdownOpen(false)}
            >
              <button
                ref={dropdownTriggerRef}
                className={`flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm whitespace-nowrap ${isConditionActive ? 'text-primary border-b-2 border-primary' : ''}`}
                onClick={() => window.location.href = '/disorders'}
                onKeyDown={handleDropdownKeyDown}
                aria-expanded={isConditionsDropdownOpen}
                aria-haspopup="true"
                aria-controls="conditions-dropdown"
              >
                Conditions
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-200 ${isConditionsDropdownOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </button>
              
              {/* Desktop Dropdown Menu */}
              {isConditionsDropdownOpen && (
                <div 
                  id="conditions-dropdown"
                  role="menu"
                  aria-label="Conditions submenu"
                  className="absolute top-full left-0 mt-1 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl py-4 px-5 min-w-[520px] max-w-[600px] z-50 animate-in fade-in slide-in-from-top-2 duration-150"
                >
                  <div className="grid grid-cols-2 gap-x-6 gap-y-1">
                    {CONDITIONS.map((condition) => (
                      <Link
                        key={condition.path}
                        to={condition.path}
                        role="menuitem"
                        className={`block px-3 py-2.5 text-sm rounded-md transition-colors hover:bg-gray-100 dark:hover:bg-gray-800 ${
                          pathname === condition.path 
                            ? 'text-primary bg-primary/10 font-medium' 
                            : 'text-gray-700 dark:text-gray-300'
                        }`}
                      >
                        {condition.shortName || condition.name}
                      </Link>
                    ))}
                  </div>
                  <div className="border-t border-gray-200 dark:border-gray-700 mt-3 pt-3">
                    <Link
                      to="/disorders"
                      role="menuitem"
                      className="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-primary hover:bg-primary/10 rounded-md transition-colors"
                    >
                      View All Conditions
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              to="/services" 
              className={`text-foreground hover:text-primary transition-colors text-sm whitespace-nowrap ${pathname === '/services' ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              Services
            </Link>
            <Link 
              to="/screening" 
              className={`text-foreground hover:text-primary transition-colors text-sm whitespace-nowrap ${pathname === '/screening' ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              Screening
            </Link>
            <Link 
              to="/forms" 
              className={`text-foreground hover:text-primary transition-colors text-sm whitespace-nowrap ${pathname === '/forms' ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              Forms
            </Link>
            <Link 
              to="/contact" 
              className={`text-foreground hover:text-primary transition-colors text-sm whitespace-nowrap ${pathname === '/contact' ? 'text-primary border-b-2 border-primary' : ''}`}
            >
              Contact
            </Link>
            <Button 
              variant="default" 
              size="sm"
              className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-sm px-3 py-1 text-xs whitespace-nowrap"
              asChild
            >
              <Link to="/contact">Schedule Evaluation</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-secondary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-1 pt-4">
              <Link 
                to="/" 
                className={`px-3 py-3 rounded-lg text-foreground hover:text-primary hover:bg-secondary/50 transition-colors font-medium ${pathname === '/' ? 'text-primary bg-primary/10 font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/about" 
                className={`px-3 py-3 rounded-lg text-foreground hover:text-primary hover:bg-secondary/50 transition-colors font-medium ${pathname === '/about' ? 'text-primary bg-primary/10 font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              
              {/* Mobile Conditions Accordion */}
              <div className="flex flex-col">
                <button
                  className={`flex items-center justify-between px-3 py-3 rounded-lg text-foreground hover:text-primary hover:bg-secondary/50 transition-colors font-medium w-full text-left ${isConditionActive ? 'text-primary bg-primary/10 font-bold' : ''}`}
                  onClick={() => setIsConditionsExpanded(!isConditionsExpanded)}
                  aria-expanded={isConditionsExpanded}
                  aria-controls="mobile-conditions-menu"
                >
                  <span>Conditions</span>
                  {isConditionsExpanded ? (
                    <ChevronUp size={18} className="text-muted-foreground" />
                  ) : (
                    <ChevronDown size={18} className="text-muted-foreground" />
                  )}
                </button>
                
                {isConditionsExpanded && (
                  <div 
                    id="mobile-conditions-menu"
                    className="flex flex-col ml-4 border-l-2 border-gray-200 dark:border-gray-700 pl-3 mt-1 mb-2 space-y-0.5"
                  >
                    {CONDITIONS.map((condition) => (
                      <Link
                        key={condition.path}
                        to={condition.path}
                        className={`px-3 py-2.5 rounded-lg text-sm transition-colors min-h-[44px] flex items-center ${
                          pathname === condition.path 
                            ? 'text-primary bg-primary/10 font-medium' 
                            : 'text-muted-foreground hover:text-foreground hover:bg-secondary/50'
                        }`}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsConditionsExpanded(false);
                        }}
                      >
                        {condition.shortName || condition.name}
                      </Link>
                    ))}
                    <Link
                      to="/disorders"
                      className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-semibold text-primary hover:bg-primary/10 transition-colors min-h-[44px] mt-1 border-t border-gray-200 dark:border-gray-700 pt-3"
                      onClick={() => {
                        setIsMenuOpen(false);
                        setIsConditionsExpanded(false);
                      }}
                    >
                      View All Conditions
                      <ArrowRight size={14} />
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/services" 
                className={`px-3 py-3 rounded-lg text-foreground hover:text-primary hover:bg-secondary/50 transition-colors font-medium ${pathname === '/services' ? 'text-primary bg-primary/10 font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/screening" 
                className={`px-3 py-3 rounded-lg text-foreground hover:text-primary hover:bg-secondary/50 transition-colors font-medium ${pathname === '/screening' ? 'text-primary bg-primary/10 font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Screening
              </Link>
              <Link 
                to="/forms" 
                className={`px-3 py-3 rounded-lg text-foreground hover:text-primary hover:bg-secondary/50 transition-colors font-medium ${pathname === '/forms' ? 'text-primary bg-primary/10 font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Forms
              </Link>
              <Link 
                to="/contact" 
                className={`px-3 py-3 rounded-lg text-foreground hover:text-primary hover:bg-secondary/50 transition-colors font-medium ${pathname === '/contact' ? 'text-primary bg-primary/10 font-bold' : ''}`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button 
                variant="default" 
                size="lg"
                className="bg-warm-accent hover:bg-warm-accent/90 text-warm-accent-foreground shadow-medium mt-4 mx-3"
                asChild
              >
                <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Schedule Your Evaluation</Link>
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
