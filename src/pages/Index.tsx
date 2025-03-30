
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import MainLayout from "@/layouts/MainLayout";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";

const Index = () => {
  const [email, setEmail] = useState("");

  const features = [
    {
      title: "Color Palette Analysis",
      description: "Discover the colors that make your competitors stand out and how your palette compares.",
      icon: "palette"
    },
    {
      title: "Typography Comparison",
      description: "Identify fonts that work best in your industry and how your typography stacks up.",
      icon: "type"
    },
    {
      title: "Layout Evaluation",
      description: "Analyze the structure and responsiveness of competitor sites versus your own design.",
      icon: "layout"
    },
    {
      title: "Detailed PDF Reports",
      description: "Get comprehensive reports with actionable recommendations to improve your design.",
      icon: "file"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director, TechStart",
      content: "The analysis helped us identify key design elements that were missing from our website. After implementing the recommendations, our conversion rate increased by 23%.",
      image: "https://randomuser.me/api/portraits/women/44.jpg"
    },
    {
      name: "David Wilson",
      role: "Founder, EcoProducts",
      content: "CompetitorAnalysisHQ gave us insights that would have cost thousands with a traditional agency. Worth every penny!",
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      name: "Michelle Rodriguez",
      role: "Digital Strategist, GrowthAgency",
      content: "We use this tool for all our new clients. It provides a solid foundation for our design strategy and helps justify our recommendations.",
      image: "https://randomuser.me/api/portraits/women/28.jpg"
    }
  ];

  return (
    <MainLayout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-teal-500 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                Outperform Your Competition with Design Intelligence
              </h1>
              <p className="mt-3 text-base text-blue-50 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                Analyze your competitors' website design and get actionable insights to improve your own. Professional reports for just $49.
              </p>
              <div className="mt-8 sm:mx-auto sm:max-w-lg sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <Button asChild size="lg" className="w-full sm:w-auto">
                    <Link to="/analyze" className="flex items-center justify-center">
                      Start Your Analysis
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Button asChild variant="outline" size="lg" className="w-full sm:w-auto bg-white hover:bg-blue-50 text-blue-600">
                    <Link to="/how-it-works">How It Works</Link>
                  </Button>
                </div>
              </div>
            </div>
            <div className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center">
              <div className="relative mx-auto w-full rounded-lg shadow-lg lg:max-w-md">
                <img
                  className="w-full rounded-lg"
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Dashboard screenshot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              Comprehensive Design Analysis
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
              Our tools analyze every aspect of website design to give you a competitive edge.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Process</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              How It Works
            </p>
            <p className="mt-4 max-w-2xl text-xl text-slate-500 lg:mx-auto">
              Three simple steps to get your comprehensive design analysis.
            </p>
          </div>

          <div className="mt-16">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-4">
                  1
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">Input URLs</h3>
                <p className="text-slate-500">
                  Enter your website URL and up to 3 competitor websites you want to analyze.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-4">
                  2
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">Analyze</h3>
                <p className="text-slate-500">
                  Our system analyzes color schemes, typography, layouts, and responsive design.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 text-xl font-bold mb-4">
                  3
                </div>
                <h3 className="text-xl font-medium text-slate-900 mb-2">Get Report</h3>
                <p className="text-slate-500">
                  Receive a detailed PDF report with actionable insights and recommendations.
                </p>
              </div>
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild size="lg">
                <Link to="/analyze">Start Your Analysis</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-16">
            <h2 className="text-base text-blue-600 font-semibold tracking-wide uppercase">Testimonials</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-slate-900 sm:text-4xl">
              What Our Customers Say
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                image={testimonial.image}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
              <span className="block">Ready to improve your website?</span>
              <span className="block text-blue-200">Start your analysis today for just $49.</span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="inline-flex rounded-md shadow">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
                  <Link to="/analyze">Start Analysis</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Index;
