
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";
import { Check } from "lucide-react";

const PricingPage = () => {
  return (
    <MainLayout>
      <div className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Simple, Transparent Pricing
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-slate-500">
              Get professional website design analysis at a fraction of what agencies charge.
            </p>
          </div>

          <div className="mt-16 bg-white rounded-lg shadow-xl overflow-hidden lg:max-w-2xl lg:mx-auto">
            <div className="px-6 py-8 bg-white sm:p-10 sm:pb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-medium text-slate-900">
                    Website Design Analysis Report
                  </h3>
                  <div className="mt-4 flex items-baseline text-6xl font-extrabold">
                    $49
                    <span className="ml-1 text-2xl font-medium text-slate-500">
                      per report
                    </span>
                  </div>
                </div>
                <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              </div>
            </div>
            <div className="px-6 pt-6 pb-8 bg-white sm:p-10 sm:pt-6">
              <ul className="space-y-4">
                <FeatureItem text="Analysis of your website against 1 competitor" />
                <FeatureItem text="Comprehensive color palette analysis" />
                <FeatureItem text="Typography and font usage insights" />
                <FeatureItem text="Layout structure evaluation" />
                <FeatureItem text="Responsive design assessment" />
                <FeatureItem text="Detailed PDF report with screenshots" />
                <FeatureItem text="Actionable recommendations" />
                <FeatureItem text="One-time purchase, lifetime access" />
              </ul>
              <div className="mt-8">
                <Button asChild className="w-full">
                  <Link to="/analyze">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 max-w-2xl mx-auto text-center">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Compare Our Offering</h2>
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-left border-r border-slate-200 pr-4">
                  <h3 className="font-medium text-slate-900 mb-2">CompetitorAnalysisHQ</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-4">$49</p>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Automated Analysis</li>
                    <li>✓ 24-hour Turnaround</li>
                    <li>✓ Actionable Insights</li>
                    <li>✓ One-time Payment</li>
                  </ul>
                </div>
                <div className="text-left pl-4">
                  <h3 className="font-medium text-slate-900 mb-2">Design Agency</h3>
                  <p className="text-3xl font-bold text-slate-600 mb-4">$15,000+</p>
                  <ul className="space-y-2 text-sm">
                    <li>✓ Manual Analysis</li>
                    <li>✓ 2-4 Week Turnaround</li>
                    <li>✓ Custom Recommendations</li>
                    <li>✓ Ongoing Costs</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-2xl font-bold text-slate-900 text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <FaqItem 
                question="How long does the analysis take?" 
                answer="Our automated system completes the analysis within minutes. Once payment is made, you'll receive your report immediately." 
              />
              <FaqItem 
                question="Can I analyze multiple competitors?" 
                answer="The standard package includes analysis against one competitor. If you need to analyze multiple competitors, you can purchase additional reports." 
              />
              <FaqItem 
                question="How detailed is the report?" 
                answer="Each report is approximately 15-20 pages and includes detailed color analysis, typography insights, layout evaluation, and specific recommendations for improvement." 
              />
              <FaqItem 
                question="Is there a refund policy?" 
                answer="If you're not satisfied with your report, contact us within 7 days for a full refund. We stand by the quality of our analysis." 
              />
              <FaqItem 
                question="Can I see a sample report?" 
                answer="Yes! You can view a sample report on our How It Works page to get a feel for what you'll receive." 
              />
              <FaqItem 
                question="Do you offer custom analysis services?" 
                answer="For more comprehensive analysis needs, we offer custom packages. Contact us to discuss your specific requirements." 
              />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

interface FeatureItemProps {
  text: string;
}

const FeatureItem = ({ text }: FeatureItemProps) => {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0">
        <Check className="h-5 w-5 text-green-500" />
      </div>
      <p className="ml-3 text-base text-slate-700">{text}</p>
    </li>
  );
};

interface FaqItemProps {
  question: string;
  answer: string;
}

const FaqItem = ({ question, answer }: FaqItemProps) => {
  return (
    <div className="rounded-lg bg-white shadow p-6">
      <h3 className="text-lg font-medium text-slate-900 mb-2">{question}</h3>
      <p className="text-slate-500">{answer}</p>
    </div>
  );
};

export default PricingPage;
