
import { Progress } from "@/components/ui/progress";

interface AnalysisProgressProps {
  progress: number;
}

const AnalysisProgress = ({ progress }: AnalysisProgressProps) => {
  const getStageStatus = (threshold: number) => {
    if (progress >= threshold) return "complete";
    if (progress >= threshold - 25) return "in-progress";
    return "pending";
  };

  return (
    <div className="py-6">
      <h3 className="text-lg font-medium text-slate-900 mb-4 text-center">
        Analyzing Websites
      </h3>
      
      <div className="mb-4">
        <Progress value={progress} className="h-2" />
        <div className="flex justify-between mt-2">
          <span className="text-sm text-slate-500">0%</span>
          <span className="text-sm font-medium text-blue-600">{progress}%</span>
          <span className="text-sm text-slate-500">100%</span>
        </div>
      </div>
      
      <div className="space-y-6 mt-8">
        <AnalysisStage 
          title="Capturing Screenshots" 
          status={getStageStatus(25)}
          description="Taking snapshots of both websites at different screen sizes."
        />
        
        <AnalysisStage 
          title="Analyzing Color Palettes" 
          status={getStageStatus(50)}
          description="Extracting and comparing color schemes from both websites."
        />
        
        <AnalysisStage 
          title="Evaluating Typography" 
          status={getStageStatus(75)}
          description="Identifying fonts and text styles used across websites."
        />
        
        <AnalysisStage 
          title="Assessing Layout Structure" 
          status={getStageStatus(100)}
          description="Analyzing layout patterns and responsive behavior."
        />
      </div>
    </div>
  );
};

interface AnalysisStageProps {
  title: string;
  status: "pending" | "in-progress" | "complete";
  description: string;
}

const AnalysisStage = ({ title, status, description }: AnalysisStageProps) => {
  return (
    <div className="flex">
      <div className="mr-4 flex-shrink-0">
        {status === "complete" && (
          <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
            <svg className="h-5 w-5 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
        )}
        
        {status === "in-progress" && (
          <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
            <svg className="h-5 w-5 text-blue-600 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
          </div>
        )}
        
        {status === "pending" && (
          <div className="h-8 w-8 rounded-full bg-slate-100 flex items-center justify-center">
            <svg className="h-5 w-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}
      </div>
      
      <div>
        <h4 className="text-base font-medium text-slate-900">
          {title}
          {status === "in-progress" && <span className="text-blue-600 ml-2">(in progress)</span>}
        </h4>
        <p className="mt-1 text-sm text-slate-500">{description}</p>
      </div>
    </div>
  );
};

export default AnalysisProgress;
