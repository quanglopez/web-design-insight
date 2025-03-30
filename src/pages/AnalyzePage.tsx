
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { toast } from "sonner";
import MainLayout from "@/layouts/MainLayout";
import { ArrowRight, Loader2 } from "lucide-react";
import UrlValidation from "@/components/UrlValidation";
import AnalysisProgress from "@/components/AnalysisProgress";
import PaymentSection from "@/components/PaymentSection";

const AnalyzePage = () => {
  const [yourWebsiteUrl, setYourWebsiteUrl] = useState("");
  const [competitorUrl, setCompetitorUrl] = useState("");
  const [stage, setStage] = useState<"input" | "validating" | "analyzing" | "payment" | "complete">("input");
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!yourWebsiteUrl || !competitorUrl) {
      toast.error("Please enter both URLs");
      return;
    }

    // Basic URL validation
    try {
      new URL(yourWebsiteUrl);
      new URL(competitorUrl);
    } catch (error) {
      toast.error("Please enter valid URLs");
      return;
    }

    setIsLoading(true);
    setStage("validating");
    
    // Simulate URL validation
    setTimeout(() => {
      setStage("analyzing");
      simulateAnalysis();
    }, 2000);
  };

  const simulateAnalysis = () => {
    const totalSteps = 100;
    let currentStep = 0;
    
    const interval = setInterval(() => {
      currentStep += 1;
      setProgress(Math.min(currentStep, totalSteps));
      
      if (currentStep >= totalSteps) {
        clearInterval(interval);
        setStage("complete"); // Thay đổi: đi thẳng đến complete thay vì payment
        setIsLoading(false);
        toast.success("Analysis complete! Your report is ready.");
      }
    }, 100);
  };

  const handlePayment = () => {
    setStage("complete");
    toast.success("Payment successful! Your report is ready.");
  };

  const skipPayment = () => {
    setStage("complete");
    toast.success("Analysis complete! Your report is ready.");
  };

  return (
    <MainLayout>
      <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
            Website Design Analysis
          </h1>
          <p className="mt-4 text-lg text-slate-500">
            Compare your website design with your competitors and get actionable insights.
          </p>
        </div>

        <Card className="mb-8">
          <CardContent className="pt-6">
            {stage === "input" && (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="your-website" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Website URL
                  </label>
                  <Input
                    id="your-website"
                    type="text"
                    placeholder="https://yourwebsite.com"
                    value={yourWebsiteUrl}
                    onChange={(e) => setYourWebsiteUrl(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="competitor-website" className="block text-sm font-medium text-slate-700 mb-1">
                    Competitor Website URL
                  </label>
                  <Input
                    id="competitor-website"
                    type="text"
                    placeholder="https://competitor.com"
                    value={competitorUrl}
                    onChange={(e) => setCompetitorUrl(e.target.value)}
                    className="w-full"
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Processing...
                    </>
                  ) : (
                    <>
                      Analyze Websites
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
            )}

            {stage === "validating" && (
              <UrlValidation 
                yourWebsiteUrl={yourWebsiteUrl} 
                competitorUrl={competitorUrl} 
              />
            )}

            {stage === "analyzing" && (
              <AnalysisProgress progress={progress} />
            )}

            {stage === "payment" && (
              <PaymentSection 
                onPaymentComplete={handlePayment} 
                onSkipPayment={skipPayment}
              />
            )}

            {stage === "complete" && (
              <div className="text-center py-8">
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
                  <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h2 className="text-lg font-medium text-slate-900 mb-2">Analysis Complete!</h2>
                <p className="text-slate-500 mb-6">Your detailed report is ready to download.</p>
                <Button className="mb-4">Download PDF Report</Button>
                <p className="text-sm text-slate-500">
                  We've also sent the report to your email for future reference.
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {stage === "input" && (
          <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
            <h3 className="text-lg font-medium text-blue-800 mb-2">What You'll Get:</h3>
            <ul className="space-y-2 text-slate-700">
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Detailed color palette analysis and comparison</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Typography and font usage insights</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Layout structure evaluation and responsive design check</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Actionable recommendations to improve your website design</span>
              </li>
              <li className="flex items-start">
                <svg className="h-5 w-5 text-blue-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Comprehensive PDF report with visual examples</span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default AnalyzePage;
