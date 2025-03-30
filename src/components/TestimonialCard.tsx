
interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
}

const TestimonialCard = ({ name, role, content, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-slate-200">
      <div className="text-slate-500 italic mb-6">
        "{content}"
      </div>
      <div className="flex items-center">
        <img
          className="h-12 w-12 rounded-full mr-4"
          src={image}
          alt={name}
        />
        <div>
          <div className="font-medium text-slate-900">{name}</div>
          <div className="text-slate-500 text-sm">{role}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
