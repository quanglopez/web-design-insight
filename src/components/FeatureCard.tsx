
import { cn } from "@/lib/utils";
import { FileText, Layout, Palette, Type } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

const FeatureCard = ({ title, description, icon }: FeatureCardProps) => {
  let IconComponent;

  switch (icon) {
    case "palette":
      IconComponent = Palette;
      break;
    case "type":
      IconComponent = Type;
      break;
    case "layout":
      IconComponent = Layout;
      break;
    case "file":
      IconComponent = FileText;
      break;
    default:
      IconComponent = FileText;
  }

  return (
    <div className="p-6 bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white mb-4">
        <IconComponent className="h-6 w-6" />
      </div>
      <h3 className="text-lg font-medium text-slate-900 mb-2">{title}</h3>
      <p className="text-slate-500">{description}</p>
    </div>
  );
};

export default FeatureCard;
