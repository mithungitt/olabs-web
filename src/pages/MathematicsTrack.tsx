
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { ArrowRight } from 'lucide-react';
import MathExperimentCard from '@/components/MathExperimentCard';

const MathematicsTrack = () => {
  // Class 12 experiments
  const class12Experiments = [
    {
      id: 1,
      title: "Angle in a semicircle",
      image: "/assets/math/semicircle.png",
      isBeta: false,
      path: "/tracks/mathematics/semicircle"
    },
    {
      id: 2,
      title: "Distributive vector multiplication",
      image: "/assets/math/vector.png",
      isBeta: false,
      path: "/tracks/mathematics/vector-multiplication"
    },
    {
      id: 3,
      title: "Maximal area in rectangles with same perimeter",
      image: "/assets/math/rectangles.png",
      isBeta: false,
      path: "/tracks/mathematics/maximal-area"
    },
    {
      id: 4,
      title: "Function that is not one-one but is onto",
      image: "/assets/math/function-onto.png",
      isBeta: true,
      path: "/tracks/mathematics/function-onto"
    },
    {
      id: 5,
      title: "Limits",
      image: "/assets/math/limits.png",
      isBeta: true,
      path: "/tracks/mathematics/limits"
    },
    {
      id: 6,
      title: "Rolle's Theorem",
      image: "/assets/math/rolle.png",
      isBeta: true,
      path: "/tracks/mathematics/rolle-theorem"
    },
    {
      id: 7,
      title: "Angle between two planes",
      image: "/assets/math/angle-planes.png",
      isBeta: true,
      path: "/tracks/mathematics/angle-planes"
    },
    {
      id: 8,
      title: "Geometry: Graph of sin²x",
      image: "/assets/math/sin2x.png",
      isBeta: true,
      path: "/tracks/mathematics/sin2x-graph"
    },
    {
      id: 9,
      title: "To demonstrate a function which is one-one but not onto.",
      image: "/assets/math/function-one-one.png",
      isBeta: true,
      path: "/tracks/mathematics/function-one-one"
    }
  ];
  
  // Class 11 experiments (we don't have details from the image, so adding placeholders)
  const class11Experiments = [
    {
      id: 10,
      title: "Quadratic Equations",
      image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isBeta: true,
      path: "/tracks/mathematics/quadratic"
    },
    {
      id: 11,
      title: "Trigonometric Functions",
      image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isBeta: true,
      path: "/tracks/mathematics/trigonometry"
    },
    {
      id: 12,
      title: "Complex Numbers",
      image: "https://images.unsplash.com/photo-1635070036997-9e6e533d3030?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      isBeta: false,
      path: "/tracks/mathematics/complex-numbers"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SEO 
        title="Mathematics Track" 
        description="Learn advanced mathematical concepts with interactive 3D simulations and hands-on practice."
        keywords="mathematics, education, online learning, interactive, simulations, STEM"
      />
      <Navbar />
      
      <main className="flex-grow pt-20">
        {/* Breadcrumb */}
        <div className="bg-gray-100 py-2">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-sm text-gray-600">
              <Link to="/" className="hover:text-olabs-purple">Home</Link>
              <span className="mx-2">{'>'}</span>
              <span className="text-olabs-purple">Mathematics</span>
            </div>
          </div>
        </div>

        {/* Header */}
        <div className="container mx-auto px-4 md:px-6 py-8">
          <h1 className="text-3xl font-bold text-olabs-purple mb-2">Mathematics</h1>
          <p className="text-gray-600 max-w-3xl">
            Explore interactive mathematics experiments that help visualize complex concepts. 
            Our simulations provide hands-on practice with various mathematical topics from Class 11 and 12.
          </p>
        </div>

        {/* Class 12 Experiments */}
        <section className="container mx-auto px-4 md:px-6 py-4">
          <h2 className="text-xl font-semibold mb-2">Class 12</h2>
          <div className="h-1 w-full bg-olabs-light-blue mb-6"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {class12Experiments.map(experiment => (
              <MathExperimentCard key={experiment.id} experiment={experiment} />
            ))}
          </div>
        </section>

        {/* Class 11 Experiments */}
        <section className="container mx-auto px-4 md:px-6 py-8">
          <h2 className="text-xl font-semibold mb-2">Class 11</h2>
          <div className="h-1 w-full bg-olabs-light-blue mb-6"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {class11Experiments.map(experiment => (
              <MathExperimentCard key={experiment.id} experiment={experiment} />
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 md:px-6 py-12">
          <div className="bg-olabs-cream rounded-xl p-8 flex flex-col md:flex-row justify-between items-center">
            <div>
              <h3 className="text-2xl font-bold mb-2">Ready to start learning?</h3>
              <p className="text-gray-600 max-w-xl">
                Join our platform to access all mathematics experiments and track your progress.
              </p>
            </div>
            <Link 
              to="/signup" 
              className="mt-4 md:mt-0 flex items-center gap-2 bg-olabs-purple hover:bg-olabs-light-purple text-white px-6 py-3 rounded-md transition-colors"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default MathematicsTrack;
