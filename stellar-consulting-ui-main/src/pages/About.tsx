import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Target, Users, Lightbulb, Award, Shield, TrendingUp } from "lucide-react";
import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={aboutHero}
            alt="Professional consulting team"
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Strategic Partners in <span className="text-accent">Your Success</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              We don't just consult—we transform. Built on data, driven by results, and committed to
              your long-term growth.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                The Stellar Service Co. was founded on a simple belief: mid-sized enterprises deserve
                the same caliber of strategic consulting that Fortune 500 companies receive. Too
                often, growing businesses are forced to choose between expensive enterprise
                consultancies or inexperienced generalists.
              </p>
              <p>
                We built our practice to fill that gap. Our team combines deep technical expertise
                with practical business acumen, delivering transformation that is both ambitious and
                achievable. We measure our success by one metric only: your measurable business
                growth.
              </p>
              <p>
                Today, we work with forward-thinking enterprises across multiple industries, helping
                them navigate digital transformation, optimize critical processes, and leverage data
                as a strategic asset. Every engagement is guided by our commitment to transparency,
                excellence, and quantifiable results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Vision & Values */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Mission, Vision & Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Data-Driven</h3>
                <p className="text-muted-foreground">
                  Every recommendation is backed by rigorous analysis and measurable metrics. We
                  replace guesswork with evidence.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Client-First</h3>
                <p className="text-muted-foreground">
                  Your success is our success. We align our fees with outcomes and maintain complete
                  transparency throughout every engagement.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Lightbulb className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously invest in emerging technologies and methodologies to ensure our
                  clients stay ahead of market trends.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Award className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Excellence</h3>
                <p className="text-muted-foreground">
                  We hold ourselves to the highest standards of quality, integrity, and
                  professionalism in every client interaction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Accountability</h3>
                <p className="text-muted-foreground">
                  We take ownership of outcomes and stand behind our recommendations with measurable
                  guarantees.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="text-accent" size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4">Long-Term Growth</h3>
                <p className="text-muted-foreground">
                  We build solutions designed for sustainability, not quick fixes. Your lasting
                  success is our ultimate goal.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-0">
                <div className="aspect-square bg-muted"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Mitchell</h3>
                  <p className="text-accent font-semibold mb-3">Chief Executive Officer</p>
                  <p className="text-sm text-muted-foreground">
                    Former McKinsey partner with 15+ years leading enterprise transformations. Sarah
                    specializes in digital strategy and organizational change management.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="aspect-square bg-muted"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">David Chen</h3>
                  <p className="text-accent font-semibold mb-3">Chief Data Officer</p>
                  <p className="text-sm text-muted-foreground">
                    PhD in Data Science with expertise in predictive analytics and machine learning.
                    David has built analytics platforms for Fortune 500 companies.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-0">
                <div className="aspect-square bg-muted"></div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Jennifer Rodriguez</h3>
                  <p className="text-accent font-semibold mb-3">VP of Operations</p>
                  <p className="text-sm text-muted-foreground">
                    Lean Six Sigma Master Black Belt with a track record of delivering measurable
                    efficiency gains across manufacturing and service industries.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Start Your Transformation?</h2>
            <p className="text-lg opacity-90 mb-8">
              Let's discuss how our team can help you achieve measurable, sustainable growth.
            </p>
            <Link to="/contact">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Schedule a Free Consultation
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
