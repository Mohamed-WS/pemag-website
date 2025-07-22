import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    id: 1,
    category: "PETROLEUM & MINING EXCELLENCE",
    title: "Engineering the Future of",
    highlight: "Energy",
    description: "Comprehensive training in drilling, reservoir engineering, safety HSE, production, and mining engineering with software training for PETREL, TECHLOG, SERPAC, SCADA, Eclipse.",
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    cta: "Explore Our Programs"
  },
  {
    id: 2,
    category: "SUSTAINABLE ENERGY SOLUTIONS",
    title: "Powering Tomorrow's",
    highlight: "Green",
    description: "Training covering energy transition, green hydrogen, climate sciences & low carbon, hydrology, wind & solar energy, electricity, hydropower, chemical energy, and radioactivity.",
    image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    cta: "Learn More"
  },
  {
    id: 3,
    category: "ARTIFICIAL INTELLIGENCE & IT",
    title: "Mastering",
    highlight: "Technology",
    description: "Cutting-edge training in artificial intelligence, machine learning, data science, and IT infrastructure for modern industrial applications and digital transformation.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    cta: "Discover Programs"
  },
  {
    id: 4,
    category: "PROFESSIONAL DEVELOPMENT",
    title: "Building Engineering",
    highlight: "Excellence",
    description: "Training plans aligned with national strategic transformation to improve the engineering profession in Mauritania and raise the quality and creativity of engineers.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    cta: "Start Your Journey"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const scrollToServices = () => {
    const element = document.getElementById('services');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50 hero-gradient" />
          
          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
            <div className="text-white max-w-4xl animate-fade-in-up">
              <p className="text-industrial-orange text-lg font-semibold mb-4 animate-slide-in">
                {slide.category}
              </p>
              <h1 className="heading-primary mb-6">
                {slide.title} <span className="text-industrial-orange">{slide.highlight}</span>
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed max-w-2xl">
                {slide.description}
              </p>
              <Button
                size="lg"
                className="btn-primary"
                onClick={scrollToServices}
              >
                {slide.cta}
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-200"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-3 transition-all duration-200"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>

      {/* Carousel Dots */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-4 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-4 h-4 rounded-full transition-all duration-200 ${
              index === currentSlide
                ? 'bg-industrial-orange'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
