import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Search, Calendar } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      id: 1,
      title: "5 Signs Your Business Needs Digital Transformation Now",
      excerpt: "Discover the key indicators that your organization is ready for strategic digital change...",
      category: "Technology",
      date: "2024-03-15",
      slug: "digital-transformation-signs"
    },
    {
      id: 2,
      title: "How Data Analytics Reduced Costs by 30% for Mid-Sized Manufacturers",
      excerpt: "A deep dive into our recent case study showing measurable cost reduction through data-driven insights...",
      category: "Case Studies",
      date: "2024-03-10",
      slug: "data-analytics-case-study"
    },
    {
      id: 3,
      title: "Process Optimization: The Low-Hanging Fruit Most Companies Miss",
      excerpt: "Simple changes that deliver immediate impact in operational efficiency...",
      category: "Management",
      date: "2024-03-05",
      slug: "process-optimization-basics"
    },
    {
      id: 4,
      title: "Building a Data-Driven Culture: Leadership's Role in Transformation",
      excerpt: "How executive buy-in shapes successful analytics adoption across the organization...",
      category: "Management",
      date: "2024-02-28",
      slug: "data-driven-culture"
    },
    {
      id: 5,
      title: "Cloud Migration Strategy: Avoiding Common Pitfalls",
      excerpt: "Essential planning steps to ensure a smooth transition to cloud infrastructure...",
      category: "Technology",
      date: "2024-02-20",
      slug: "cloud-migration-strategy"
    },
    {
      id: 6,
      title: "ROI Metrics That Matter: Measuring Consulting Success",
      excerpt: "Beyond vanity metrics—the KPIs that prove real business value from consulting engagements...",
      category: "Management",
      date: "2024-02-15",
      slug: "roi-metrics"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Insights & <span className="text-accent">Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Strategic thinking, case studies, and practical guidance from our consulting team.
            </p>

            {/* Search */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={20} />
              <Input
                placeholder="Search articles..."
                className="pl-12 py-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-3 justify-center">
            <Button variant="default" size="sm">All Posts</Button>
            <Button variant="outline" size="sm">Technology</Button>
            <Button variant="outline" size="sm">Management</Button>
            <Button variant="outline" size="sm">Case Studies</Button>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {posts.map((post) => (
              <Link key={post.id} to={`/blog/${post.slug}`}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted"></div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center gap-1">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString('en-US', { 
                            month: 'short', 
                            day: 'numeric', 
                            year: 'numeric' 
                          })}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 hover:text-accent transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {post.excerpt}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe to Our Insights
            </h2>
            <p className="text-lg opacity-90 mb-8">
              Get monthly strategic insights, case studies, and consulting tips delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Your email address"
                required
                className="bg-primary-foreground text-foreground flex-1"
              />
              <Button type="submit" className="bg-accent hover:bg-accent/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
