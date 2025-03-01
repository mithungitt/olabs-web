
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import MathExperimentCard from '@/components/MathExperimentCard';

const MathematicsTrack = () => {
  const class11Experiments = [
    {
      id: 1,
      title: "Rolles' Theorem",
      image: "/assets/math/rolle.png",
      isBeta: false,
      path: "/experiments/rolles-theorem"
    },
    {
      id: 2,
      title: "Limit and Continuity",
      image: "/assets/math/limits.png",
      isBeta: true,
      path: "/experiments/limits-continuity"
    },
    {
      id: 3,
      title: "Angle Between Planes",
      image: "/assets/math/angle-planes.png",
      isBeta: false,
      path: "/experiments/angle-between-planes"
    },
    {
      id: 4,
      title: "Rectangular Parallelopied",
      image: "/assets/math/rectangles.png",
      isBeta: true,
      path: "/experiments/rectangular-parallelopied"
    }
  ];

  const class12Experiments = [
    {
      id: 5,
      title: "Vector Algebra",
      image: "/assets/math/vector.png",
      isBeta: false,
      path: "/experiments/vector-algebra"
    },
    {
      id: 6,
      title: "Function (One-One)",
      image: "/assets/math/function-one-one.png",
      isBeta: true,
      path: "/experiments/function-one-one"
    },
    {
      id: 7,
      title: "Function (Onto)",
      image: "/assets/math/function-onto.png",
      isBeta: false,
      path: "/experiments/function-onto"
    },
    {
      id: 8,
      title: "Semicircle Integration",
      image: "/assets/math/semicircle.png",
      isBeta: true,
      path: "/experiments/semicircle-integration"
    },
    {
      id: 9,
      title: "Sin2x Derivation",
      image: "/assets/math/sin2x.png",
      isBeta: false,
      path: "/experiments/sin2x-derivation"
    }
  ];

  return (
    <div className="min-h-screen bg-olabs-cream">
      <Navbar />
      
      {/* Added padding-top to fix overlap with navbar */}
      <div className="container mx-auto px-4 pt-20 py-8">
        <div className="flex items-center text-sm text-gray-500 mb-8">
          <Link to="/" className="hover:text-olabs-purple">Home</Link>
          <ChevronRight size={16} className="mx-1" />
          <Link to="/tracks" className="hover:text-olabs-purple">Tracks</Link>
          <ChevronRight size={16} className="mx-1" />
          <span className="text-olabs-purple font-medium">Mathematics</span>
        </div>
        
        <h1 className="text-3xl font-bold mb-2">Mathematics Track</h1>
        <p className="text-gray-600 mb-8">
          Interactive simulations and experiments to visualize and understand complex mathematical concepts
        </p>
        
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Class 11 Math Experiments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {class11Experiments.map(experiment => (
              <MathExperimentCard key={experiment.id} experiment={experiment} />
            ))}
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-semibold mb-4">Class 12 Math Experiments</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {class12Experiments.map(experiment => (
              <MathExperimentCard key={experiment.id} experiment={experiment} />
            ))}
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default MathematicsTrack;
