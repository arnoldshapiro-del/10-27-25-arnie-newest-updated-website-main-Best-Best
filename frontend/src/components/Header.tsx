import { Button } from "@/components/ui/button";
import { Phone, MapPin, Menu, X, ChevronDown, ChevronUp } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { CONDITIONS, ADULT_CONDITIONS, PEDIATRIC_CONDITIONS } from "@/data/conditions";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isConditionsDropdownOpen, setIsConditionsDropdownOpen] = useState(false);
  const [isConditionsExpanded, setIsConditionsExpanded] = useState(false);
  const location = useLocation();
  const pathname = location.pathname || '';
  const closeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      }
    };

    if (isConditionsDropdownOpen) {
      document.addEventListener('keydown', handleKeyDown);
      return () => document.removeEventListener('keydown', handleKeyDown);
    }
  }, [isConditionsDropdownOpen]);

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Hover handlers with delay for smooth interaction
  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setIsConditionsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsConditionsDropdownOpen(false);
    }, 150);
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
              <span>Cincinnati, OH &amp; Fort Wright, KY</span>
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
            
            {/* Conditions Dropdown - WRAPPER with both trigger and dropdown inside */}
            <div 
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* The nav link/trigger */}
              <Link
                to="/disorders"
                className={`flex items-center gap-1 text-foreground hover:text-primary transition-colors text-sm whitespace-nowrap py-2 ${isConditionActive ? 'text-primary border-b-2 border-primary' : ''}`}
                aria-expanded={isConditionsDropdownOpen}
                aria-haspopup="true"
                aria-controls="conditions-dropdown"
              >
                Child and Adult Conditions We Treat
                <ChevronDown 
                  size={14} 
                  className={`transition-transform duration-200 ${isConditionsDropdownOpen ? 'rotate-180' : ''}`}
                  aria-hidden="true"
                />
              </Link>
              
              {/* Desktop Dropdown Menu - INSIDE the same wrapper */}
              {isConditionsDropdownOpen && (
                <div 
                  id="conditions-dropdown"
                  role="menu"
                  aria-label="Child and Adult Conditions We Treat submenu"
                  className="absolute top-full left-1/2 -translate-x-1/2 pt-2 z-50"
                  style={{ paddingTop: '8px' }}
                >
                  {/* Invisible bridge to prevent gap */}
                  <div 
                    className="absolute top-0 left-0 right-0 h-3 bg-transparent"
                    style={{ marginLeft: '-20px', marginRight: '-20px', width: 'calc(100% + 40px)' }}
                  />
                  
                  {/* The actual dropdown content - Two Column Layout */}
                  <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl shadow-xl py-5 px-6 min-w-[600px] max-w-[700px] animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="grid grid-cols-2 gap-x-8">
                      {/* Adult Conditions Column */}
                      <div className="flex flex-col">
                        <h3 className="text-xs font-semibold text-primary uppercase tracking-wider pb-2 mb-2 border-b border-primary/20">
                          Adult Conditions
                        </h3>
                        <div className="flex flex-col gap-0.5">
                          {ADULT_CONDITIONS.map((condition) => (
                            <Link
                              key={condition.path}
                              to={condition.path}
                              role="menuitem"
                              className={`block px-3 py-2 text-sm rounded-md transition-all duration-150 hover:bg-primary/10 hover:text-primary hover:translate-x-1 ${
                                pathname === condition.path 
                                  ? 'text-primary bg-primary/10 font-medium' 
                                  : 'text-gray-700 dark:text-gray-300'
                              }`}
                            >
                              {condition.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                      
                      {/* Pediatric Conditions Column */}
                      <div className="flex flex-col">
                        <h3 className="text-xs font-semibold text-primary uppercase tracking-wider pb-2 mb-2 border-b border-primary/20">
                          Pediatric Conditions
                        </h3>
                        <div className="flex flex-col gap-0.5">
                          {PEDIATRIC_CONDITIONS.map((condition) => (
                            <Link
                              key={`pediatric-${condition.path}`}
                              to={condition.path}
                              role="menuitem"
                              className={`block px-3 py-2 text-sm rounded-md transition-all duration-150 hover:bg-primary/10 hover:text-primary hover:translate-x-1 ${
                                pathname === condition.path 
                                  ? 'text-primary bg-primary/10 font-medium' 
                                  : 'text-gray-700 dark:text-gray-300'
                              }`}
                            >
                              {condition.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
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
                  <span>Child and Adult Conditions We Treat</span>
                  {isConditionsExpanded ? (
                    <ChevronUp size={18} className="text-muted-foreground" />
                  ) : (
                    <ChevronDown size={18} className="text-muted-foreground" />
                  )}
                </button>
                
                {isConditionsExpanded && (
                  <div 
                    id="mobile-conditions-menu"
                    className="flex flex-col ml-4 border-l-2 border-primary/30 pl-3 mt-1 mb-2"
                  >
                    {/* Adult Conditions Section */}
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider py-2 mt-1">
                      Adult Conditions
                    </h4>
                    {ADULT_CONDITIONS.map((condition) => (
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
                        {condition.name}
                      </Link>
                    ))}
                    
                    {/* Pediatric Conditions Section */}
                    <h4 className="text-xs font-semibold text-primary uppercase tracking-wider py-2 mt-3 border-t border-primary/20 pt-3">
                      Pediatric Conditions
                    </h4>
                    {PEDIATRIC_CONDITIONS.map((condition) => (
                      <Link
                        key={`mobile-pediatric-${condition.path}`}
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
                        {condition.name}
                      </Link>
                    ))}
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
