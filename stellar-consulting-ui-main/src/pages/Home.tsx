import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { TrendingUp, Target, BarChart3, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Home = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder - backend will handle this
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Modern business analytics dashboard"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Stop Guessing. Start Growing.{" "}
              <span className="text-accent">Data-Driven Digital Transformation.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
              We help mid-sized enterprises achieve measurable growth through strategic consulting,
              process optimization, and advanced analytics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <Link to="/contact">
                <Button size="lg" className="text-lg">
                  Book Your Free Strategy Session
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </Link>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-lg">
                  View Our Services
                </Button>
              </Link>
            </div>

            {/* Social Proof */}
            <div className="mt-12 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Trusted by leading enterprises</p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-2xl font-bold">TechCorp</div>
                <div className="text-2xl font-bold">DataFlow Inc.</div>
                <div className="text-2xl font-bold">GlobalTech</div>
                <div className="text-2xl font-bold">InnovateCo</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Three Pillars of Excellence
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <Target className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Digital Strategy</h3>
                <p className="text-muted-foreground mb-6">
                  Transform your business with data-backed digital roadmaps designed to achieve
                  measurable ROI and competitive advantage.
                </p>
                <Link to="/services" className="text-accent hover:underline font-semibold inline-flex items-center">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <TrendingUp className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Process Optimization</h3>
                <p className="text-muted-foreground mb-6">
                  Streamline operations, eliminate waste, and boost efficiency with proven
                  methodologies that deliver immediate impact.
                </p>
                <Link to="/services" className="text-accent hover:underline font-semibold inline-flex items-center">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Link>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-6">
                  <BarChart3 className="text-accent" size={32} />
                </div>
                <h3 className="text-2xl font-bold mb-4">Data Analytics & Reporting</h3>
                <p className="text-muted-foreground mb-6">
                  Turn raw data into actionable insights with advanced analytics, dashboards, and
                  reporting systems tailored to your business.
                </p>
                <Link to="/services" className="text-accent hover:underline font-semibold inline-flex items-center">
                  Learn More <ArrowRight className="ml-2" size={16} />
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Quantifiable Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <div className="text-5xl font-bold mb-4 text-accent">30%</div>
                <h3 className="text-xl font-semibold mb-2">Cost Reduction</h3>
                <p className="opacity-90">
                  Average reduction in operating costs achieved for clients through process optimization
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <div className="text-5xl font-bold mb-4 text-accent">12</div>
                <h3 className="text-xl font-semibold mb-2">Week Rollout</h3>
                <p className="opacity-90">
                  Typical timeframe for complete digital transformation implementation
                </p>
              </CardContent>
            </Card>

            <Card className="text-center bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <div className="text-5xl font-bold mb-4 text-accent">$450k</div>
                <h3 className="text-xl font-semibold mb-2">Annual Savings</h3>
                <p className="opacity-90">
                  Average annual savings generated through our strategic consulting services
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Snippet */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Strategic Partners in Your Growth
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              At The Stellar Service Co., we believe in transformation through data. Our team of
              seasoned strategists, analysts, and consultants work alongside your leadership to
              build sustainable competitive advantages that drive long-term success.
            </p>
            <Link to="/about">
              <Button size="lg" variant="outline">
                Learn About Our Team
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Lead Capture */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-center text-lg opacity-90 mb-8">
              Schedule a free consultation to discover how we can help you achieve measurable growth.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  placeholder="Your Name"
                  required
                  className="bg-primary-foreground text-foreground"
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="bg-primary-foreground text-foreground"
                />
              </div>
              <Input
                placeholder="Company Name"
                required
                className="bg-primary-foreground text-foreground"
              />
              <Textarea
                placeholder="Tell us about your challenges..."
                rows={4}
                required
                className="bg-primary-foreground text-foreground"
              />
              <Button type="submit" size="lg" className="w-full bg-accent hover:bg-accent/90">
                Request Free Consultation
              </Button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
