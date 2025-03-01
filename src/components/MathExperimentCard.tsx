
import { Link } from 'react-router-dom';

interface Experiment {
  id: number;
  title: string;
  image: string;
  isBeta: boolean;
  path: string;
}

interface MathExperimentCardProps {
  experiment: Experiment;
}

const MathExperimentCard = ({ experiment }: MathExperimentCardProps) => {
  return (
    <Link to={experiment.path} className="block">
      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
        <div className="relative">
          <img 
            src={experiment.image} 
            alt={experiment.title} 
            className="w-full h-44 object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
            }}
          />
          {experiment.isBeta && (
            <div className="absolute -top-1 -left-1 w-20 h-20 overflow-hidden">
              <div className="absolute top-0 left-0 transform rotate-45 translate-y-4 -translate-x-6 bg-yellow-500 text-xs font-bold text-white py-1 px-6">
                BETA
              </div>
            </div>
          )}
        </div>
        <div className="p-4">
          <h3 className="text-sm font-medium text-center">{experiment.title}</h3>
        </div>
      </div>
    </Link>
  );
};

export default MathExperimentCard;
