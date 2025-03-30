
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Download, FileImage, FileText, LayoutGrid, Palette } from "lucide-react";

interface AnalysisReportProps {
  yourWebsiteUrl: string;
  competitorUrl: string;
}

const AnalysisReport = ({ yourWebsiteUrl, competitorUrl }: AnalysisReportProps) => {
  // These would come from actual analysis in a real implementation
  const mockColorAnalysis = {
    yourSite: ["#3498db", "#2ecc71", "#e74c3c", "#f1c40f"],
    competitor: ["#2980b9", "#27ae60", "#c0392b", "#f39c12"],
    common: ["blue shades", "green shades"],
    unique: ["Your site uses brighter tones", "Competitor uses darker shades"],
  };

  const mockFontAnalysis = {
    yourSite: ["Roboto", "Open Sans", "Lato"],
    competitor: ["Montserrat", "Open Sans", "Poppins"],
    common: ["Sans-serif fonts", "Modern typefaces"],
    unique: ["Your site uses more weight variations", "Competitor uses larger headers"],
  };

  const mockLayoutAnalysis = {
    yourSite: {
      columns: "3-column grid on desktop",
      responsive: "Good mobile responsiveness",
      spacing: "Consistent padding and margins",
    },
    competitor: {
      columns: "2-column grid on desktop",
      responsive: "Excellent mobile responsiveness",
      spacing: "Generous whitespace",
    },
  };

  return (
    <div className="space-y-8 py-4">
      <div className="text-center">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4">
          <svg className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-slate-900 mb-2">Analysis Complete!</h2>
        <p className="text-slate-500 mb-6 max-w-md mx-auto">
          We've analyzed both websites and compiled our findings below. Download the full PDF for detailed recommendations.
        </p>
        <Button className="mb-8" size="lg">
          <Download className="mr-2" />
          Download PDF Report
        </Button>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <Palette className="text-blue-500" />
            <h3 className="text-lg font-medium">Color Palette Analysis</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-medium mb-2">Your Website</h4>
              <div className="flex gap-2 mb-3">
                {mockColorAnalysis.yourSite.map((color, index) => (
                  <div 
                    key={index} 
                    className="h-10 w-10 rounded-md border border-slate-200" 
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              <p className="text-sm text-slate-500">{yourWebsiteUrl}</p>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Competitor Website</h4>
              <div className="flex gap-2 mb-3">
                {mockColorAnalysis.competitor.map((color, index) => (
                  <div 
                    key={index} 
                    className="h-10 w-10 rounded-md border border-slate-200" 
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
              <p className="text-sm text-slate-500">{competitorUrl}</p>
            </div>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-md">
            <h4 className="font-medium mb-2">Key Findings</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-green-500">•</span>
                <span>Common elements: {mockColorAnalysis.common.join(", ")}</span>
              </li>
              {mockColorAnalysis.unique.map((finding, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <FileText className="text-blue-500" />
            <h3 className="text-lg font-medium">Typography Analysis</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-medium mb-2">Your Website</h4>
              <div className="space-y-2 mb-3">
                {mockFontAnalysis.yourSite.map((font, index) => (
                  <div key={index} className="text-md p-2 bg-slate-50 rounded">
                    {font}
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Competitor Website</h4>
              <div className="space-y-2 mb-3">
                {mockFontAnalysis.competitor.map((font, index) => (
                  <div key={index} className="text-md p-2 bg-slate-50 rounded">
                    {font}
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-4 rounded-md">
            <h4 className="font-medium mb-2">Key Findings</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span className="text-green-500">•</span>
                <span>Common elements: {mockFontAnalysis.common.join(", ")}</span>
              </li>
              {mockFontAnalysis.unique.map((finding, index) => (
                <li key={index} className="flex gap-2">
                  <span className="text-blue-500">•</span>
                  <span>{finding}</span>
                </li>
              ))}
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <LayoutGrid className="text-blue-500" />
            <h3 className="text-lg font-medium">Layout Structure Analysis</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-medium mb-2">Your Website</h4>
              <div className="bg-slate-50 p-4 rounded-md space-y-2">
                <p><strong>Columns:</strong> {mockLayoutAnalysis.yourSite.columns}</p>
                <p><strong>Responsiveness:</strong> {mockLayoutAnalysis.yourSite.responsive}</p>
                <p><strong>Spacing:</strong> {mockLayoutAnalysis.yourSite.spacing}</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Competitor Website</h4>
              <div className="bg-slate-50 p-4 rounded-md space-y-2">
                <p><strong>Columns:</strong> {mockLayoutAnalysis.competitor.columns}</p>
                <p><strong>Responsiveness:</strong> {mockLayoutAnalysis.competitor.responsive}</p>
                <p><strong>Spacing:</strong> {mockLayoutAnalysis.competitor.spacing}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-md text-blue-800">
            <h4 className="font-medium mb-2">Recommendations</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex gap-2">
                <span>•</span>
                <span>Consider testing a 2-column layout for better content focus on key pages</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Increase whitespace around CTA elements to improve conversion rates</span>
              </li>
              <li className="flex gap-2">
                <span>•</span>
                <span>Maintain your current responsive design approach which performs well</span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-2 mb-4">
            <FileImage className="text-blue-500" />
            <h3 className="text-lg font-medium">Visual Comparison</h3>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium mb-2">Your Website</h4>
              <div className="aspect-video bg-slate-100 rounded-md flex items-center justify-center">
                <p className="text-slate-400">Website screenshot would appear here</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Competitor Website</h4>
              <div className="aspect-video bg-slate-100 rounded-md flex items-center justify-center">
                <p className="text-slate-400">Website screenshot would appear here</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <div className="text-center mt-8">
        <Button size="lg">
          <Download className="mr-2" />
          Download PDF Report
        </Button>
        <p className="text-sm text-slate-500 mt-4">
          The PDF report includes additional recommendations and detailed analysis.
        </p>
      </div>
    </div>
  );
};

export default AnalysisReport;
