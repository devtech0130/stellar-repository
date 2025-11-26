import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, User, ArrowLeft } from "lucide-react";

const BlogPost = () => {
  // This is a template - actual content would come from backend/CMS
  const post = {
    title: "5 Signs Your Business Needs Digital Transformation Now",
    date: "2024-03-15",
    category: "Technology",
    author: "Sarah Mitchell",
    authorTitle: "Chief Executive Officer"
  };

  const relatedPosts = [
    {
      id: 2,
      title: "How Data Analytics Reduced Costs by 30%",
      slug: "data-analytics-case-study",
      category: "Case Studies"
    },
    {
      id: 4,
      title: "Building a Data-Driven Culture",
      slug: "data-driven-culture",
      category: "Management"
    },
    {
      id: 5,
      title: "Cloud Migration Strategy",
      slug: "cloud-migration-strategy",
      category: "Technology"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <article className="pt-24 pb-16">
        {/* Back Button */}
        <div className="container mx-auto px-4 mb-8">
          <Link to="/blog" className="inline-flex items-center text-accent hover:underline">
            <ArrowLeft size={20} className="mr-2" />
            Back to Blog
          </Link>
        </div>

        {/* Hero */}
        <div className="container mx-auto px-4 mb-12">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                {post.category}
              </span>
              <span className="text-sm text-muted-foreground flex items-center gap-2">
                <Calendar size={16} />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  month: 'long', 
                  day: 'numeric', 
                  year: 'numeric' 
                })}
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{post.title}</h1>
            
            {/* Hero Image */}
            <div className="aspect-video bg-muted rounded-lg mb-8"></div>
          </div>
        </div>

        {/* Article Content */}
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="prose prose-lg max-w-none">
              {/* Placeholder content - would be replaced with actual article content */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                In today's rapidly evolving business landscape, digital transformation isn't just a
                buzzword—it's a necessity for staying competitive. But how do you know when your
                organization is ready for this critical shift? Here are five clear indicators that
                it's time to embark on your digital transformation journey.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">1. Legacy Systems Are Holding You Back</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                If your team spends more time working around your technology than working with it,
                that's a red flag. Legacy systems that can't integrate with modern tools create
                bottlenecks, increase errors, and frustrate employees. Modern cloud-based platforms
                offer flexibility, scalability, and seamless integration that can transform operations.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">2. Data Exists But Insights Don't</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Many organizations collect vast amounts of data but struggle to extract actionable
                insights. If your leadership team makes critical decisions based on gut feeling rather
                than data analysis, you're missing opportunities. Digital transformation includes
                implementing analytics platforms that turn raw data into strategic intelligence.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">3. Customer Expectations Are Changing</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Today's customers expect seamless digital experiences—instant responses, personalized
                service, and omnichannel accessibility. If your customer experience hasn't evolved with
                these expectations, competitors will capture your market share. Digital transformation
                puts customer experience at the center of your strategy.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">4. Manual Processes Dominate Operations</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When employees spend hours on repetitive manual tasks that could be automated, you're
                wasting valuable human capital. Process automation not only reduces errors and costs but
                also frees your team to focus on strategic, high-value work. If you're still relying
                heavily on manual processes, transformation is overdue.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">5. Growth Is Limited by Current Infrastructure</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Perhaps the clearest sign: your business goals exceed your operational capabilities. If
                scaling means exponentially increasing headcount or if new product launches are
                constrained by technical limitations, your infrastructure is the bottleneck. Digital
                transformation creates scalable foundations for sustainable growth.
              </p>

              <h2 className="text-3xl font-bold mt-12 mb-4">Taking the First Step</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Recognizing the need for transformation is the crucial first step. The next step is
                partnering with experts who can assess your current state, define clear objectives, and
                create a roadmap tailored to your organization's unique needs and constraints.
              </p>
            </div>

            {/* Author Info */}
            <Card className="mt-12 bg-secondary">
              <CardContent className="p-8">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-muted rounded-full flex-shrink-0"></div>
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <User size={16} className="text-accent" />
                      <p className="font-semibold">{post.author}</p>
                    </div>
                    <p className="text-sm text-accent mb-2">{post.authorTitle}</p>
                    <p className="text-sm text-muted-foreground">
                      Former McKinsey partner with 15+ years leading enterprise transformations. Sarah
                      specializes in digital strategy and organizational change management.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Related Articles */}
        <section className="mt-16 py-16 bg-secondary">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {relatedPosts.map((related) => (
                <Link key={related.id} to={`/blog/${related.slug}`}>
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="aspect-video bg-muted"></div>
                      <div className="p-6">
                        <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                          {related.category}
                        </span>
                        <h3 className="text-lg font-bold mt-3 hover:text-accent transition-colors">
                          {related.title}
                        </h3>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <Card className="bg-primary text-primary-foreground max-w-3xl mx-auto">
              <CardContent className="p-8 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Ready to Start Your Transformation?
                </h2>
                <p className="text-lg opacity-90 mb-6">
                  Schedule a free consultation to discuss your digital transformation strategy.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-accent hover:bg-accent/90">
                    Book Free Consultation
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </section>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
