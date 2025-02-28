
import { Monitor, Briefcase, Award } from 'lucide-react';

const FeaturesBox = () => {
  const features = [
    {
      icon: <Monitor size={28} className="text-white" />,
      title: "Learn The Latest Skills",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
    },
    {
      icon: <Briefcase size={28} className="text-white" />,
      title: "Get Ready For a Career",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
    },
    {
      icon: <Award size={28} className="text-white" />,
      title: "Earn a Certificate",
      description: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old."
    }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto -mt-20 z-10 relative px-4">
      <div className="bg-olabs-purple rounded-xl shadow-lg grid grid-cols-1 md:grid-cols-3 overflow-hidden">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className={`p-6 flex items-start space-x-4 ${
              index !== features.length - 1 ? 'md:border-r md:border-purple-700' : ''
            } fade-in ${`stagger-${index + 1}`}`}
          >
            <div className="flex-shrink-0 bg-olabs-light-purple p-3 rounded-lg">
              {feature.icon}
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">{feature.title}</h3>
              <p className="text-white/80 text-sm">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturesBox;
