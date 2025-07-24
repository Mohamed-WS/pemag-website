import { useQuery } from "@tanstack/react-query";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import type { Testimonial } from "@shared/schema";

const partnerLogos = [
  { name: "SNIM", image: "/logos/snim.jpg" },
  { name: "MINISTÈRE DES MINES ET DE L'INDUSTRIE", image: "/logos/idm-industries.jpg" },
  { name: "MINISTÈRE DE L'ENERGIE ET DU PÉTROLE", image: "/logos/MEP.jpg" },
  { name: "AMC TRAVAUX", image: "/logos/amc-travaux.avif" },
  { name: "BRITISH SAFETY SERVICES", image: "/logos/ministry-mines-industry.jpg" },
  { name: "IDM INDUSTRIES", image: "/logos/british-safety-services.jpg" },
  { name: "SMH", image: "/logos/Logo-SMH.png" }
];

// Mock testimonials data for static deployment
const mockTestimonials: Testimonial[] = [
  {
    id: 1,
    name: "Khadija Mint Salem",
    role: "Mining Operations Supervisor",
    content: "The mining engineering and safety training at PEMAG provided me with the technical skills and safety knowledge essential for leading complex mining operations in challenging environments.",
    rating: 5,
    image: "/api/placeholder/150/150"
  },
  {
    id: 2,
    name: "Sidi Mohamed Ould Cheikh",
    role: "Energy Consultant",
    content: "PEMAG's energy transition training prepared me for the future of sustainable energy in Mauritania. The practical approach and industry connections have been invaluable for my consulting practice.",
    rating: 5,
    image: "/api/placeholder/150/150"
  },
  {
    id: 3,
    name: "Aminetou Mint Moctar",
    role: "Process Engineer",
    content: "The professional development programs at PEMAG enhanced both my technical capabilities and leadership skills. The training quality and instructor expertise are truly world-class.",
    rating: 5,
    image: "/api/placeholder/150/150"
  }
];

export default function TestimonialsSection() {
  // Use mock data for static deployment
  const testimonials = mockTestimonials;
  const isLoading = false;
  const error = null;

  if (error) {
    return (
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600">Unable to load testimonials. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-industrial-navy mb-6">What Our Clients Say</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from industry professionals who have transformed their careers through our training programs.
          </p>
        </div>

        {isLoading ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="animate-pulse">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gray-200 rounded-full mr-4"></div>
                    <div>
                      <div className="h-4 bg-gray-200 rounded mb-2 w-24"></div>
                      <div className="h-4 bg-gray-200 rounded w-32"></div>
                    </div>
                  </div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials?.map((testimonial) => (
              <Card key={testimonial.id} className="card-elevated">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <Avatar className="w-16 h-16 mr-4">
                      <AvatarImage src={testimonial.image} alt={testimonial.name} />
                      <AvatarFallback>
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="text-lg font-bold text-industrial-navy">{testimonial.name}</h4>
                      <p className="text-industrial-orange font-semibold">{testimonial.role}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    "{testimonial.content}"
                  </p>
                  <div className="flex text-industrial-orange">
                    {[...Array(testimonial.rating)].map((_, index) => (
                      <Star key={index} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        {/* Partner Logos Section */}
        <div className="mt-16 bg-industrial-navy rounded-xl p-8 text-white">
          <div className="text-center">
            <h3 className="heading-tertiary mb-8">Trusted by Industry Leaders</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-center">
              {partnerLogos.map((partner, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 h-24 flex items-center justify-center hover:scale-105 transition-all duration-200 shadow-lg border border-gray-200 overflow-hidden"
                >
                  <img
                    src={partner.image}
                    alt={partner.name}
                    className={`max-w-full object-contain filter brightness-110 contrast-110 ${
                      partner.name === "MINISTÈRE DE L'ENERGIE ET DU PÉTROLE" 
                        ? "max-h-20 scale-110" 
                        : partner.name === "MINISTÈRE DES MINES ET DE L'INDUSTRIE"
                        ? "max-h-20 scale-110"
                        : "max-h-16"
                    }`}
                    title={partner.name}
                    style={{ mixBlendMode: 'multiply' }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
