import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Target, TrendingUp, BarChart3, CheckCircle2 } from "lucide-react";
import servicesHero from "@/assets/services-hero.jpg";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={servicesHero}
            alt="Digital transformation services"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Consulting Services That <span className="text-accent">Deliver Results</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Three core pillars designed to transform your business through strategic insight and
              data-driven execution.
            </p>
          </div>
        </div>
      </section>

      {/* Digital Strategy */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                <Target className="text-accent" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Digital Strategy</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Build a comprehensive digital roadmap that aligns technology investments with business
              objectives, ensuring every initiative drives measurable ROI.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">What We Deliver</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Comprehensive digital maturity assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Strategic technology roadmap (12-36 months)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Change management framework</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Competitive analysis and market positioning</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Business Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Clear alignment between IT and business goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Reduced technology investment risks</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Faster time-to-market for digital initiatives</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Enhanced competitive positioning</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link to="/contact">
              <Button size="lg">Get a Custom Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Process Optimization */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                <TrendingUp className="text-accent" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Process Optimization</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Eliminate inefficiencies, reduce costs, and accelerate throughput with lean methodologies
              and continuous improvement frameworks.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">What We Deliver</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>End-to-end process mapping and analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Waste identification and elimination strategies</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Automation opportunity assessment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Performance metrics and KPI framework</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Business Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>15-40% reduction in process cycle times</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Significant cost savings through waste elimination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Improved employee productivity and morale</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Higher customer satisfaction scores</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link to="/contact">
              <Button size="lg">Get a Custom Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Data Analytics */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center">
                <BarChart3 className="text-accent" size={32} />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold">Data Analytics & Reporting</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Transform raw data into strategic assets with advanced analytics platforms, custom
              dashboards, and actionable insights tailored to your business needs.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">What We Deliver</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Data architecture design and implementation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Custom dashboard and visualization development</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Predictive modeling and forecasting</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Executive reporting and business intelligence</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-4">Business Benefits</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Real-time visibility into business performance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Data-driven decision making at all levels</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Identification of new revenue opportunities</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Proactive problem identification and resolution</span>
                  </li>
                </ul>
              </div>
            </div>

            <Link to="/contact">
              <Button size="lg">Get a Custom Quote</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Flexible Engagement Models
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Choose the service tier that matches your organization's needs and budget.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Starter</h3>
                <p className="text-muted-foreground mb-6">
                  Perfect for small projects and initial assessments
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>4-6 week engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Single pillar focus</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Diagnostic report</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Recommended action plan</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">Contact for Quote</Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="border-accent border-2">
              <CardContent className="p-8">
                <div className="bg-accent text-accent-foreground text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold mb-4">Growth</h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive solutions for measurable transformation
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>12-16 week engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Multi-pillar integration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Implementation support</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Monthly performance reviews</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button className="w-full">Contact for Quote</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Enterprise</h3>
                <p className="text-muted-foreground mb-6">
                  Fully custom, long-term strategic partnerships
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Custom engagement timeline</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Dedicated team assignment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Ongoing optimization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span>Executive dashboard access</span>
                  </li>
                </ul>
                <Link to="/contact">
                  <Button variant="outline" className="w-full">Contact for Quote</Button>
                </Link>
              </CardContent>
            </Card>
          </div>

          <p className="text-center text-muted-foreground mt-8">
            All pricing is customized based on scope, complexity, and desired outcomes.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
