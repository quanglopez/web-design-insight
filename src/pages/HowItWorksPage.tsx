
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout";

const HowItWorksPage = () => {
  return (
    <MainLayout>
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-slate-900 sm:text-5xl">
              How Our Analysis Works
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500">
              Learn about our website design analysis process and what you'll receive.
            </p>
          </div>

          <div className="mt-16">
            <div className="lg:grid lg:grid-cols-3 lg:gap-8">
              <div>
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <span className="text-lg font-bold">1</span>
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg font-medium text-slate-900">Input Website URLs</h3>
                  <p className="mt-2 text-base text-slate-500">
                    Enter your website URL and your competitor's URL. Our system will validate both websites to ensure they're accessible for analysis.
                  </p>
                </div>
              </div>

              <div className="mt-10 lg:mt-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <span className="text-lg font-bold">2</span>
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg font-medium text-slate-900">Automated Analysis</h3>
                  <p className="mt-2 text-base text-slate-500">
                    Our technology captures screenshots, analyzes color schemes, evaluates typography, and assesses layout structure of both websites.
                  </p>
                </div>
              </div>

              <div className="mt-10 lg:mt-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mx-auto">
                  <span className="text-lg font-bold">3</span>
                </div>
                <div className="mt-5 text-center">
                  <h3 className="text-lg font-medium text-slate-900">Receive Detailed Report</h3>
                  <p className="mt-2 text-base text-slate-500">
                    After completing the $49 payment, you'll instantly receive a comprehensive PDF report with actionable insights and recommendations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h2 className="text-3xl font-extrabold text-slate-900 text-center">
              What's Included in Your Report
            </h2>

            <div className="mt-12 grid gap-8 lg:grid-cols-2">
              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-slate-900 mb-4">Color Palette Analysis</h3>
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-slate-100 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Color palette analysis example"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-slate-500">
                    We extract and analyze the primary and secondary colors used across both websites. The report includes:
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-500">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Detailed color swatches with hex codes</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Color usage frequency and placement analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Comparison of color harmony and contrast</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Recommendations for color scheme improvements</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-slate-900 mb-4">Typography Analysis</h3>
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-slate-100 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1566324684790-1832945fd5b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Typography analysis example"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-slate-500">
                    We identify and compare the fonts and text styles used throughout both websites. The report includes:
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-500">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Font family identification for headings and body text</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Font size, weight, and spacing analysis</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Text hierarchy and readability assessment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Typography improvement suggestions</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-slate-900 mb-4">Layout Structure Analysis</h3>
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-slate-100 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Layout structure analysis example"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-slate-500">
                    We evaluate the overall layout and structural patterns of both websites. The report includes:
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-500">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Grid analysis and column structure identification</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Element spacing and alignment assessment</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Visual hierarchy and content organization</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Layout optimization recommendations</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="bg-white overflow-hidden shadow rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                  <h3 className="text-lg font-medium text-slate-900 mb-4">Responsive Design Assessment</h3>
                  <div className="aspect-w-16 aspect-h-9 mb-4 bg-slate-100 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1483478550801-ceba5fe50e8e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Responsive design assessment example"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-slate-500">
                    We check how both websites adapt to different screen sizes. The report includes:
                  </p>
                  <ul className="mt-4 space-y-2 text-slate-500">
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Multi-device screenshots (mobile, tablet, desktop)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Breakpoint analysis and responsive behavior</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Mobile usability comparison</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-blue-500 mr-2">•</span>
                      <span>Responsive design improvement suggestions</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="inline-flex justify-center items-center">
              <span className="mr-3 text-slate-500">Ready to analyze your website?</span>
              <Button asChild size="lg">
                <Link to="/analyze">Start Analysis</Link>
              </Button>
            </div>
          </div>

          <div className="mt-20">
            <div className="bg-white shadow rounded-lg overflow-hidden">
              <div className="px-4 py-5 sm:p-6">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Sample Report Preview</h3>
                <p className="text-slate-500 mb-6">
                  Here's a glimpse of what your comprehensive report will look like. The actual report is a detailed PDF document with 15-20 pages of analysis.
                </p>
                <div className="bg-slate-100 rounded-lg p-6">
                  <div className="aspect-w-16 aspect-h-10">
                    <img
                      src="https://images.unsplash.com/photo-1613758077536-be43778941b8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
                      alt="Sample report"
                      className="object-cover rounded-lg shadow-sm"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HowItWorksPage;
