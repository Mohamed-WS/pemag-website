import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import type { BlogPost } from "@shared/schema";

const categories = [
  "All Categories",
  "Petroleum Engineering",
  "Energy & Sustainability", 
  "Agriculture Technology",
  "Mining Engineering",
  "Software Training",
  "Industry Updates"
];

export default function BlogSection() {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  
  const { data: blogPosts, isLoading, error } = useQuery<BlogPost[]>({
    queryKey: ['/api/blog-posts'],
  });

  const filteredPosts = blogPosts?.filter(post => 
    selectedCategory === "All Categories" || post.category === selectedCategory
  ) || [];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  if (error) {
    return (
      <section id="blog" className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-600">Unable to load blog posts. Please try again later.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="blog" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-industrial-navy mb-6">Industry Insights & Updates</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest developments in petroleum engineering, sustainable energy, and agricultural technology.
          </p>
        </div>

        {/* Blog Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category 
                ? "bg-industrial-orange text-white hover:bg-orange-600" 
                : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {isLoading ? (
          <div className="grid lg:grid-cols-3 gap-8">
            {[...Array(6)].map((_, index) => (
              <Card key={index} className="animate-pulse">
                <div className="h-64 bg-gray-200"></div>
                <CardContent className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-6 bg-gray-200 rounded mb-3"></div>
                  <div className="h-4 bg-gray-200 rounded"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : filteredPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No blog posts found for the selected category.</p>
          </div>
        ) : (
          <div className="grid lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <Card key={post.id} className="card-elevated group overflow-hidden">
                <div 
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${post.image})` }}
                />
                <CardContent className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <Badge 
                        variant="secondary"
                        className="bg-industrial-orange text-white hover:bg-orange-600"
                      >
                        {post.category}
                      </Badge>
                      {post.createdAt && (
                        <span className="text-gray-500 text-sm flex items-center">
                          <Calendar className="w-4 h-4 mr-1" />
                          {formatDate(post.createdAt)}
                        </span>
                      )}
                    </div>
                    <CardTitle className="text-xl font-bold text-industrial-navy mb-3 hover:text-industrial-orange transition-colors cursor-pointer line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardDescription className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                    {post.description}
                  </CardDescription>
                  <button className="text-industrial-orange font-semibold hover:text-orange-600 transition-colors group-hover:underline flex items-center">
                    Read More 
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </CardContent>
              </Card>
            ))}
          </div>
        )}

        <div className="text-center mt-12">
          <Button className="btn-primary">
            Go to Our Blog
          </Button>
        </div>
      </div>
    </section>
  );
}
