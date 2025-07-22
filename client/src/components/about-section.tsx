import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Award, Users, TrendingUp, Calendar, Building, BookOpen } from "lucide-react";
import type { Project } from "@shared/schema";

const iconMap = {
  'graduation-cap': BookOpen,
  'award': Award,
  'handshake': Users,
  'building': Building,
  'trending-up': TrendingUp,
  'calendar': Calendar,
  'settings': Users,
};

export default function AboutSection() {
  const { data: projects, isLoading } = useQuery<Project[]>({
    queryKey: ['/api/projects'],
  });

  const stats = projects?.slice(0, 4) || [];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-fade-in-up">
            <h2 className="heading-secondary text-industrial-navy mb-6">About PEMAG</h2>
            <h3 className="text-2xl font-semibold text-industrial-steel mb-6">
              Engineering Excellence in Mauritania's Strategic Transformation
            </h3>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              We have training plans aligned with the national strategic transformation to improve the engineering profession in Mauritania and raise the quality and creativity of engineers to qualify and lead.
            </p>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Our comprehensive programs span petroleum engineering, mining operations, sustainable energy solutions, and advanced agricultural technologies, preparing professionals for tomorrow's challenges.
            </p>
            <Button className="btn-primary" onClick={scrollToContact}>
              More Information
            </Button>
          </div>
          
          <div className="relative animate-fade-in-up">
            <img
              src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional engineers collaborating"
              className="rounded-xl shadow-lg w-full h-auto"
            />
            <div className="absolute -bottom-6 -left-6 bg-industrial-navy text-white p-6 rounded-lg shadow-xl">
              <div className="text-center">
                <p className="text-3xl font-bold text-industrial-orange">15+</p>
                <p className="text-sm text-gray-300">Years Experience</p>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {isLoading ? (
            // Loading skeleton
            [...Array(4)].map((_, index) => (
              <div key={index} className="text-center animate-pulse">
                <div className="h-12 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded"></div>
              </div>
            ))
          ) : (
            stats.map((stat) => {
              const IconComponent = iconMap[stat.icon as keyof typeof iconMap] || Award;
              return (
                <div key={stat.id} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-industrial-orange rounded-lg flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="counter" data-target={stat.completedCount}>
                    {stat.completedCount.toLocaleString()}
                  </div>
                  <p className="text-industrial-steel font-semibold">{stat.title}</p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </section>
  );
}
