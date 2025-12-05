import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [slidesToShow, setSlidesToShow] = useState(3);

  const testimonials = [
    {
      text: "Dr. Shapiro is the most compassionate doctor I've ever met. He listens and involves me in every decision. The best experience I've ever had.",
      author: "Long-time Patient"
    },
    {
      text: "The family-like environment and same-day response to questions made all the difference in my treatment journey.",
      author: "Grateful Patient"
    },
    {
      text: "Finally found a psychiatrist who treats me as an equal and explains everything clearly. Highly recommend!",
      author: "Current Patient"
    },
    {
      text: "I have been seeing Dr Shapiro for years and he has helped me MUCH more than previous psychiatrists could.",
      author: "Long-term Patient"
    },
    {
      text: "Knows more about medicine than any other doctor I have ever met",
      author: "Impressed Patient"
    },
    {
      text: "He helped my daughter when everyone else had given up. We will be forever grateful",
      author: "Grateful Parent"
    },
    {
      text: "Dr. Shapiro found a very quick solution to my depression. His expertise and experience was very evident in my diagnosis and prognosis of my condition. Highly recommended.",
      author: "Recovered Patient"
    },
    {
      text: "I started taking my son to Dr. Shapiro when he was about 10. My son is now 35 with no issues with drugs/alcohol, truancy, no unexpected babies. He just purchased his first home completely on his own.",
      author: "Proud Mother"
    },
    {
      text: "Dr. Shapiro is PRIVATE and he is ABSOLUTELY POSITIVELY THE BEST TO HAVE ON YOUR SIDE. Every penny I spent I would have gladly paid twice as much. This is our doctor for life.",
      author: "Loyal Patient"
    },
    {
      text: "Professional, knowledgeable, and truly cares about his patients. Dr. Shapiro changed our lives for the better.",
      author: "Thankful Family"
    }
  ];

  // Responsive slides calculation
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1); // Mobile: 1 testimonial
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2); // Tablet: 2 testimonials
      } else {
        setSlidesToShow(3); // Desktop: 3 testimonials
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const maxIndex = testimonials.length - slidesToShow;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 5500); // Change slide every 5.5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length, slidesToShow]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - slidesToShow;
      return prevIndex >= maxIndex ? 0 : prevIndex + 1;
    });
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => {
      const maxIndex = testimonials.length - slidesToShow;
      return prevIndex === 0 ? maxIndex : prevIndex - 1;
    });
  };

  const slideWidth = 100 / slidesToShow;
  const maxDots = testimonials.length - slidesToShow + 1;

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 bg-background">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Patients Say</h2>
        <p className="text-muted-foreground text-lg">Real experiences from Cincinnati and Northern Kentucky patients</p>
      </div>

      <div className="relative px-12">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * slideWidth}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="px-3"
                style={{ minWidth: `${slideWidth}%` }}
              >
                <Card className="bg-card hover:shadow-xl transition-all duration-300 h-full border-2 hover:border-primary/50">
                  <CardContent className="p-6 md:p-8 flex flex-col justify-between h-full min-h-[280px]">
                    <div>
                      <Quote className="h-8 w-8 text-primary mx-auto mb-4 opacity-60" />
                      <p className="text-base md:text-lg text-foreground mb-6 italic leading-relaxed">
                        "{testimonial.text}"
                      </p>
                    </div>
                    <div className="flex items-center justify-center pt-4 border-t border-border">
                      <div className="h-px w-8 bg-primary/30 mr-2" />
                      <span className="text-sm text-muted-foreground font-semibold">
                        {testimonial.author}
                      </span>
                      <div className="h-px w-8 bg-primary/30 ml-2" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-background shadow-lg hover:bg-primary hover:text-primary-foreground z-10 h-12 w-12"
          onClick={goToPrevious}
          aria-label="Previous testimonials"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-background shadow-lg hover:bg-primary hover:text-primary-foreground z-10 h-12 w-12"
          onClick={goToNext}
          aria-label="Next testimonials"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxDots }).map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAutoPlaying(false);
              setCurrentIndex(index);
            }}
            className={`h-2.5 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'w-10 bg-primary' 
                : 'w-2.5 bg-primary/30 hover:bg-primary/50'
            }`}
            aria-label={`Go to testimonial group ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
