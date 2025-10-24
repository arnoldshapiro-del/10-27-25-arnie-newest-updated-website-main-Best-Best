import React, { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, ChevronLeft, ChevronRight, X, Maximize } from "lucide-react";
import { Link } from "react-router-dom";

// Generate candidate images for any condition
const generateCandidateImages = (condition: string) => {
  const candidates = [];
  for (let i = 1; i <= 50; i++) {
    candidates.push(`/about-conditions/${condition}/Slide${i}.PNG`);
  }
  return candidates;
};

// Lazy-loaded thumbnail component with Intersection Observer
const LazyThumbnail = ({ src, idx, conditionName, onClick }: {
  src: string;
  idx: number;
  conditionName: string;
  onClick: () => void;
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load first 12 thumbnails immediately for instant display
    if (idx < 12) {
      setIsVisible(true);
      return;
    }
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '200px', // Larger margin for aggressive preloading
        threshold: 0
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [idx]);

  return (
    <div
      ref={imgRef}
      className="relative group cursor-pointer hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden border border-border bg-gray-100"
      onClick={onClick}
      style={{ minHeight: '200px' }}
    >
      {isVisible ? (
        <>
          <img
            src={src}
            alt={`${conditionName} Education Slide ${idx + 1}`}
            className={`w-full h-auto transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            decoding="async"
          />
          {!isLoaded && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-pulse text-gray-400">Loading...</div>
            </div>
          )}
        </>
      ) : (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="text-gray-400">Slide {idx + 1}</div>
        </div>
      )}
      
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
        <Maximize className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
        Slide {idx + 1}
      </div>
      <div className="absolute top-2 right-2 bg-blue-600/90 text-white px-2 py-1 rounded text-xs">
        Click to present
      </div>
    </div>
  );
};

export default function AdhdEducation() {
  const [currentCondition, setCurrentCondition] = useState('adhd');
  const [validImages, setValidImages] = useState<string[]>([]);
  const [currentSlide, setCurrentSlide] = useState<number | null>(null);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [preloadedSlides, setPreloadedSlides] = useState<Set<number>>(new Set());
  const observerRef = useRef<IntersectionObserver | null>(null);
  
  // Ultra-fast image validation - parallel checking with early bailout
  useEffect(() => {
    const candidates = generateCandidateImages(currentCondition);
    let cancelled = false;
    
    // Fast parallel check - no timeout, fail fast
    const checkBatch = (urls: string[]) => {
      return Promise.all(
        urls.map(src => 
          new Promise<string | null>((resolve) => {
            const img = new Image();
            img.onload = () => !cancelled && resolve(src);
            img.onerror = () => !cancelled && resolve(null);
            img.src = src;
          })
        )
      );
    };
    
    // Process all in larger batches for speed
    const loadFast = async () => {
      const batchSize = 25; // Larger batches = faster processing
      const allValid: string[] = [];
      
      for (let i = 0; i < candidates.length; i += batchSize) {
        if (cancelled) break;
        
        const batch = candidates.slice(i, i + batchSize);
        const results = await checkBatch(batch);
        const validBatch = results.filter(Boolean) as string[];
        allValid.push(...validBatch);
        
        // Early exit if no slides found in first batch
        if (i === 0 && validBatch.length === 0) break;
        
        // Only sort and update on first batch or final
        if (i === 0 || i + batchSize >= candidates.length) {
          const sorted = [...allValid].sort((a, b) => {
            const numA = parseInt(a.match(/Slide(\d+)\.PNG$/)?.[1] || '0');
            const numB = parseInt(b.match(/Slide(\d+)\.PNG$/)?.[1] || '0');
            return numA - numB;
          });
          setValidImages(sorted);
          
          // Preload first 3 slides immediately on first batch
          if (i === 0 && sorted.length > 0) {
            preloadImages(sorted.slice(0, 3));
          }
        }
      }
      
      // Final sorted update
      if (!cancelled && allValid.length > 0) {
        const finalSorted = [...allValid].sort((a, b) => {
          const numA = parseInt(a.match(/Slide(\d+)\.PNG$/)?.[1] || '0');
          const numB = parseInt(b.match(/Slide(\d+)\.PNG$/)?.[1] || '0');
          return numA - numB;
        });
        setValidImages(finalSorted);
      }
    };
    
    loadFast();
    
    return () => {
      cancelled = true;
    };
  }, [currentCondition]);
  
  // Preload images
  const preloadImages = (urls: string[]) => {
    urls.forEach(url => {
      const img = new Image();
      img.src = url;
    });
  };

  const conditions = [
    { id: 'adhd', name: 'ADHD', icon: '🧠' },
    { id: 'Generalized-Anxiety-Disorder', name: 'Generalized Anxiety Disorder', icon: '😟' },
    { id: 'Autism Spectrum Disorder', name: 'Autism Spectrum Disorder', icon: '🧩' },
    { id: 'PTSD', name: 'PTSD', icon: '🛡️' },
    { id: 'ocd', name: 'OCD', icon: '🔄' },
    { id: 'panic-disorder', name: 'Panic Disorder', icon: '💨' },
    { id: 'Sleep Disorders', name: 'Sleep Disorders', icon: '😴' },
    { id: 'Eating Disorders', name: 'Eating Disorders', icon: '🍽️' },
    { id: 'alcohol-use-disorder', name: 'Alcohol Use Disorder', icon: '🍺' },
    { id: 'cannabis-use-disorder', name: 'Cannabis Use Disorder', icon: '🌿' },
    { id: 'substance-use-disorder', name: 'Substance Use Disorder', icon: '🚫' },
    { id: 'Opioid-Use-Disorder', name: 'Opioid Use Disorder', icon: '💊' },
    { id: 'major-depressive-disorder', name: 'Major Depressive Disorder', icon: '🌧️' },
    { id: 'childhood-bipolar-disorder', name: 'Childhood Bipolar Disorder', icon: '🎭' },
    { id: 'Personality-Disorders', name: 'Personality Disorders', icon: '🎭' },
    { id: 'Antisocial-Personality-Disorder', name: 'Antisocial Personality Disorder', icon: '⚡' },
    { id: 'Borderline-Personality-Disorder', name: 'Borderline Personality Disorder', icon: '💔' },
    { id: 'Narcissistic-Personality-Disorder', name: 'Narcissistic Personality Disorder', icon: '👑' },
    { id: 'Social-Anxiety-Disorder', name: 'Social Anxiety Disorder', icon: '👥' },
    { id: 'Pediatric-Generalized-Anxiety-Disorder-GAD', name: 'Childhood GAD', icon: '😰' }
  ];

  const openSlide = (index: number) => {
    setCurrentSlide(index);
    setIsFullscreen(true);
    
    // Preload next 2 slides for smooth navigation
    const nextSlides = validImages.slice(index + 1, index + 3);
    preloadImages(nextSlides);
  };

  const closeSlide = () => {
    setIsFullscreen(false);
    setCurrentSlide(null);
  };

  const nextSlide = () => {
    if (currentSlide !== null && currentSlide < validImages.length - 1) {
      const newSlide = currentSlide + 1;
      setCurrentSlide(newSlide);
      
      // Preload next 2 slides for smooth navigation
      const nextSlides = validImages.slice(newSlide + 1, newSlide + 3);
      preloadImages(nextSlides);
    }
  };

  const prevSlide = () => {
    if (currentSlide !== null && currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') closeSlide();
    if (e.key === 'ArrowRight') nextSlide();
    if (e.key === 'ArrowLeft') prevSlide();
  };

  return (
    <main className="min-h-screen bg-background p-6">
      <div className="container max-w-6xl mx-auto">
        <div className="mb-6">
          <Link to="/">
            <Button variant="outline" className="flex items-center gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
        
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Mental Health Education Slideshows</h1>
          <p className="text-muted-foreground mb-6">
            Comprehensive educational materials about mental health conditions from Dr. Arnold G. Shapiro
          </p>
          
          {/* Crystal clear but subtle directions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6 max-w-2xl mx-auto">
            <p className="text-sm text-blue-800 font-medium mb-2">📖 How to Use:</p>
            <div className="text-sm text-blue-700 space-y-1">
              <p>• Click any slide thumbnail to start presentation mode</p>
              <p>• Click slide or → arrow to go to next slide</p>
              <p>• Press ESC or click X to exit presentation</p>
            </div>
          </div>
          
          <Button asChild className="mb-4">
            <a 
              href={`/about-conditions/${currentCondition}/${conditions.find(c => c.id === currentCondition)?.name}.pdf`} 
              download={`${conditions.find(c => c.id === currentCondition)?.name.replace(/\s+/g, '-')}-Education-Dr-Shapiro.pdf`}
              className="flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download {conditions.find(c => c.id === currentCondition)?.name} Education PDF
            </a>
          </Button>
        </div>

        {/* Working Condition Tabs */}
        <div className="mb-8">
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {conditions.map((condition) => (
              <Button
                key={condition.id}
                variant={currentCondition === condition.id ? "default" : "outline"}
                onClick={() => setCurrentCondition(condition.id)}
                className={currentCondition === condition.id ? "bg-primary text-primary-foreground" : ""}
              >
                {condition.icon} {condition.name}
              </Button>
            ))}
          </div>
          
          {validImages.length === 0 && (
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 max-w-4xl mx-auto">
              <p className="text-sm text-amber-800 font-medium mb-2">📁 No slides found for {conditions.find(c => c.id === currentCondition)?.name}</p>
              <div className="text-sm text-amber-700 space-y-1">
                <p><strong>To add slides:</strong></p>
                <p>1. Create folder: <code className="bg-amber-100 px-1 rounded">/public/about-conditions/{currentCondition}/</code></p>
                <p>2. Add slide images: <code className="bg-amber-100 px-1 rounded">Slide1.PNG, Slide2.PNG</code>, etc.</p>
                <p>3. Add PDF: <code className="bg-amber-100 px-1 rounded">{conditions.find(c => c.id === currentCondition)?.name}.pdf</code></p>
              </div>
            </div>
          )}
        </div>

        {/* Slide Grid */}
        <h2 className="text-2xl font-bold text-center mb-6">
          {conditions.find(c => c.id === currentCondition)?.icon} {conditions.find(c => c.id === currentCondition)?.name} Education Slides
          {validImages.length > 0 && <span className="text-muted-foreground ml-2">({validImages.length} slides)</span>}
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {validImages.map((src, idx) => (
            <LazyThumbnail
              key={src}
              src={src}
              idx={idx}
              conditionName={conditions.find(c => c.id === currentCondition)?.name || ''}
              onClick={() => openSlide(idx)}
            />
          ))}
        </div>

        {validImages.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Loading slides...</p>
          </div>
        )}

        {/* Fullscreen Slideshow Modal */}
        {isFullscreen && currentSlide !== null && (
          <div 
            className="fixed inset-0 bg-black z-50 flex items-center justify-center"
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close button */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/20 z-10"
              onClick={closeSlide}
            >
              <X className="h-6 w-6" />
            </Button>

            {/* Slide counter */}
            <div className="absolute top-4 left-4 text-white bg-black/50 px-3 py-1 rounded z-10">
              {currentSlide + 1} / {validImages.length}
            </div>

            {/* Previous button */}
            {currentSlide > 0 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-8 w-8" />
              </Button>
            )}

            {/* Next button */}
            {currentSlide < validImages.length - 1 && (
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:bg-white/20 z-10"
                onClick={nextSlide}
              >
                <ChevronRight className="h-8 w-8" />
              </Button>
            )}

            {/* Main slide */}
            <div className="w-full h-full flex items-center justify-center p-8">
              <img 
                src={validImages[currentSlide]} 
                alt={`${conditions.find(c => c.id === currentCondition)?.name} Education Slide ${currentSlide + 1}`}
                className="max-w-full max-h-full object-contain cursor-pointer"
                onClick={nextSlide}
                loading="eager"
                decoding="async"
              />
            </div>

            {/* Instructions */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white text-sm bg-black/50 px-4 py-2 rounded">
              Click slide or use arrow keys to navigate • ESC to close
            </div>
          </div>
        )}
        
        <div className="text-center mt-12 p-6 bg-muted/50 rounded-lg">
          <p className="text-muted-foreground text-sm">
            <strong>Disclaimer:</strong> This educational material is for informational purposes only and does not constitute medical advice. 
            Please consult with Dr. Arnold G. Shapiro or another qualified healthcare provider for proper evaluation and treatment.
          </p>
        </div>
      </div>
    </main>
  );
}