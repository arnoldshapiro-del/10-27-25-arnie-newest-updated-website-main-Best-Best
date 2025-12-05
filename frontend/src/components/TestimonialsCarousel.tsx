import { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

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

  // Auto-scroll functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">What Our Patients Say</h2>
        <p className="text-muted-foreground">Real experiences from real patients</p>
      </div>

      <div className="relative">
        {/* Carousel Container */}
        <div className="overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="w-full flex-shrink-0 px-4"
              >
                <Card className="bg-card hover:shadow-lg transition-shadow min-h-[250px] flex items-center">
                  <CardContent className="p-8 text-center">
                    <Quote className="h-8 w-8 text-primary mx-auto mb-4 opacity-50" />
                    <p className="text-lg text-foreground mb-4 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center justify-center">
                      <div className="h-px w-12 bg-primary/30 mr-3" />
                      <span className="text-sm text-muted-foreground font-medium">
                        {testimonial.author}
                      </span>
                      <div className="h-px w-12 bg-primary/30 ml-3" />
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
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-background shadow-lg hover:bg-primary hover:text-primary-foreground"
          onClick={goToPrevious}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-background shadow-lg hover:bg-primary hover:text-primary-foreground"
          onClick={goToNext}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex 
                ? 'w-8 bg-primary' 
                : 'w-2 bg-primary/30 hover:bg-primary/50'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
