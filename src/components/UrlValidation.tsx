
import { Progress } from "@/components/ui/progress";

interface UrlValidationProps {
  yourWebsiteUrl: string;
  competitorUrl: string;
}

const UrlValidation = ({ yourWebsiteUrl, competitorUrl }: UrlValidationProps) => {
  return (
    <div className="py-6">
      <h3 className="text-lg font-medium text-slate-900 mb-4 text-center">Validating URLs</h3>
      
      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm text-slate-500 mb-2">
            <span>Checking your website</span>
            <span className="font-medium">In progress...</span>
          </div>
          <div className="bg-slate-100 rounded-full h-4 overflow-hidden">
            <div className="h-full bg-blue-500 animate-pulse rounded-full" style={{ width: '60%' }}></div>
          </div>
          <p className="mt-1 text-sm text-slate-500 truncate">{yourWebsiteUrl}</p>
        </div>
        
        <div>
          <div className="flex justify-between text-sm text-slate-500 mb-2">
            <span>Checking competitor website</span>
            <span className="font-medium">Waiting...</span>
          </div>
          <div className="bg-slate-100 rounded-full h-4 overflow-hidden">
            <div className="h-full bg-slate-300 rounded-full" style={{ width: '10%' }}></div>
          </div>
          <p className="mt-1 text-sm text-slate-500 truncate">{competitorUrl}</p>
        </div>
      </div>
      
      <p className="text-center text-sm text-slate-500 mt-6">
        We're verifying that both websites are accessible for analysis.
      </p>
    </div>
  );
};

export default UrlValidation;
