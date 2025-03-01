
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Book, RefreshCw, Tv, Monitor, QuestionMarkCircle, BookText, MessageSquare } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';
import { cn } from '@/lib/utils';

const tabs = [
  { id: 'theory', label: 'Theory', icon: <Book className="h-5 w-5" /> },
  { id: 'procedure', label: 'Procedure', icon: <RefreshCw className="h-5 w-5" /> },
  { id: 'animation', label: 'Animation', icon: <Tv className="h-5 w-5" /> },
  { id: 'simulator', label: 'Simulator', icon: <Monitor className="h-5 w-5" /> },
  { id: 'evaluation', label: 'Self Evaluation', icon: <QuestionMarkCircle className="h-5 w-5" /> },
  { id: 'reference', label: 'Reference', icon: <BookText className="h-5 w-5" /> },
  { id: 'feedback', label: 'Feedback', icon: <MessageSquare className="h-5 w-5" /> },
];

const RollesTheorem = () => {
  const [activeTab, setActiveTab] = useState('theory');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="min-h-screen bg-olabs-cream">
      <SEO 
        title="Rolle's Theorem"
        description="Learn about Rolle's Theorem, a fundamental theorem in calculus"
        keywords="rolle's theorem, calculus, mathematics, differential calculus, theorem"
      />
      <Navbar />
      
      {/* Main content with padding to prevent navbar overlap */}
      <div className="container mx-auto px-4 pt-20 pb-8">
        {/* Breadcrumb navigation */}
        <div className="flex items-center text-sm text-gray-500 mb-4">
          <Link to="/" className="hover:text-olabs-purple">Home</Link>
          <ChevronRight size={16} className="mx-1" />
          <Link to="/tracks" className="hover:text-olabs-purple">Tracks</Link>
          <ChevronRight size={16} className="mx-1" />
          <Link to="/tracks/mathematics" className="hover:text-olabs-purple">Mathematics</Link>
          <ChevronRight size={16} className="mx-1" />
          <Link to="/tracks/mathematics/class-11" className="hover:text-olabs-purple">Class 11</Link>
          <ChevronRight size={16} className="mx-1" />
          <span className="text-olabs-purple font-medium">Rolle's Theorem</span>
        </div>
        
        {/* Title */}
        <h1 className="text-3xl font-bold text-olabs-orange mb-8">Rolle's Theorem</h1>
        
        {/* Tabs */}
        <div className="flex flex-wrap border-b mb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={cn(
                "flex items-center gap-2 px-6 py-3 font-medium border-b-2 transition-colors -mb-[2px]",
                activeTab === tab.id
                  ? "border-olabs-orange text-olabs-orange"
                  : "border-transparent text-gray-600 hover:text-olabs-purple hover:border-gray-300"
              )}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </div>
        
        {/* Tab content */}
        <div className="bg-white p-6 rounded-lg shadow-sm">
          {activeTab === 'theory' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Objective</h2>
              <p className="mb-4">To verify Rolle's Theorem.</p>
              
              <h2 className="text-xl font-semibold mb-4">What is a Rolle's theorem?</h2>
              <p className="mb-4">
                The Rolle's Theorem is a fundamental theorem in calculus, named after the French mathematician Michel Rolle. 
                It is a theorem that applies to differentiable functions and is used to analyze the properties of the function's graph.
              </p>
              
              <h2 className="text-xl font-semibold mb-4">Rolle's theorem explanation</h2>
              <p className="mb-2">Let f: [a, b] → R be continuous on [a, b] and differentiable on (a, b), such that f(a) = f(b), where a and b are some real numbers. Then there exists some c in (a, b) such that f'(c) = 0.</p>
              
              <div className="my-6 flex justify-center">
                <img 
                  src="/lovable-uploads/43a73b66-d0f3-4ee6-a32c-fe2c4fd0a5fc.png" 
                  alt="Rolle's Theorem graph showing a wave-shaped function" 
                  className="max-w-full h-auto"
                />
              </div>
              
              <p className="text-center mb-6">Fig. 1: Represents wave-shaped function</p>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                <h3 className="font-semibold mb-2">Important conditions for Rolle's Theorem:</h3>
                <ul className="list-disc pl-6 space-y-2">
                  <li>The function f must be continuous on the closed interval [a, b].</li>
                  <li>The function f must be differentiable on the open interval (a, b).</li>
                  <li>The function values at the endpoints must be equal: f(a) = f(b).</li>
                </ul>
              </div>
              
              <h3 className="font-semibold mb-2">Geometric Interpretation:</h3>
              <p>
                Geometrically, Rolle's theorem states that if a smooth curve starts and ends at the same height, 
                then there must be at least one point where the tangent to the curve is horizontal 
                (i.e., the derivative is zero at that point).
              </p>
            </div>
          )}
          
          {activeTab === 'procedure' && (
            <div>
              <h2 className="text-xl font-semibold mb-4">Step-by-Step Procedure</h2>
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <strong>Verify the conditions</strong>: Check if the function f(x) satisfies all three conditions:
                  <ul className="list-disc pl-6 mt-2">
                    <li>Continuity on [a, b]</li>
                    <li>Differentiability on (a, b)</li>
                    <li>f(a) = f(b)</li>
                  </ul>
                </li>
                <li>
                  <strong>Find the derivative</strong>: Calculate f'(x) of the given function.
                </li>
                <li>
                  <strong>Solve for critical points</strong>: Set f'(x) = 0 and solve for x.
                </li>
                <li>
                  <strong>Check if the solution lies in the interval</strong>: Verify if the solution x = c is in the interval (a, b).
                </li>
                <li>
                  <strong>Verification</strong>: Substitute the value of c back into f'(x) to confirm that f'(c) = 0.
                </li>
              </ol>
              
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 my-6">
                <h3 className="font-semibold mb-2">Example:</h3>
                <p>For the function f(x) = x² - 4x + 3 on the interval [1, 3]:</p>
                <ol className="list-decimal pl-6 mt-2 space-y-2">
                  <li>f(x) = x² - 4x + 3 is continuous on [1, 3] and differentiable on (1, 3).</li>
                  <li>f(1) = 1² - 4(1) + 3 = 1 - 4 + 3 = 0</li>
                  <li>f(3) = 3² - 4(3) + 3 = 9 - 12 + 3 = 0</li>
                  <li>Since f(1) = f(3), the function satisfies all conditions for Rolle's Theorem.</li>
                  <li>f'(x) = 2x - 4</li>
                  <li>Solving f'(x) = 0: 2x - 4 = 0, so x = 2</li>
                  <li>Since c = 2 is in the interval (1, 3), and f'(2) = 0, Rolle's Theorem is verified.</li>
                </ol>
              </div>
            </div>
          )}
          
          {activeTab === 'animation' && (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
              <div className="text-center mb-8">
                <h2 className="text-xl font-semibold mb-4">Animation of Rolle's Theorem</h2>
                <p>This animation demonstrates how Rolle's Theorem applies to differentiable functions.</p>
              </div>
              
              <div className="w-full max-w-2xl h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Animation content will be displayed here</p>
              </div>
              
              <div className="mt-6">
                <p className="text-gray-700">
                  The animation shows how a function with equal values at endpoints must have at least one point 
                  where the derivative equals zero (horizontal tangent).
                </p>
              </div>
            </div>
          )}
          
          {activeTab === 'simulator' && (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
              <div className="text-center mb-8">
                <h2 className="text-xl font-semibold mb-4">Rolle's Theorem Simulator</h2>
                <p>Experiment with different functions to see Rolle's Theorem in action.</p>
              </div>
              
              <div className="w-full max-w-2xl h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <p className="text-gray-500">Simulator will be displayed here</p>
              </div>
              
              <div className="mt-6 w-full max-w-2xl">
                <p className="text-gray-700 mb-4">
                  This simulator lets you input different functions and intervals to visualize 
                  where Rolle's Theorem applies.
                </p>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mb-6">
                  <h3 className="font-semibold mb-2">Instructions:</h3>
                  <ol className="list-decimal pl-6 space-y-2">
                    <li>Enter a function in the input field</li>
                    <li>Specify the interval [a, b]</li>
                    <li>Click "Calculate" to find points where f'(x) = 0</li>
                    <li>Observe the visualization of the function and its critical points</li>
                  </ol>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'evaluation' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Self Evaluation</h2>
              
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold mb-3">Multiple Choice Questions:</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="mb-2">1. Which of the following is NOT a requirement for Rolle's Theorem?</p>
                      <div className="space-y-2 pl-6">
                        <div className="flex items-start">
                          <input type="radio" id="q1a" name="q1" className="mt-1 mr-2" />
                          <label htmlFor="q1a">The function must be continuous on [a, b]</label>
                        </div>
                        <div className="flex items-start">
                          <input type="radio" id="q1b" name="q1" className="mt-1 mr-2" />
                          <label htmlFor="q1b">The function must be differentiable on (a, b)</label>
                        </div>
                        <div className="flex items-start">
                          <input type="radio" id="q1c" name="q1" className="mt-1 mr-2" />
                          <label htmlFor="q1c">f(a) = f(b)</label>
                        </div>
                        <div className="flex items-start">
                          <input type="radio" id="q1d" name="q1" className="mt-1 mr-2" />
                          <label htmlFor="q1d">f(a) must be greater than f(b)</label>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <p className="mb-2">2. For the function f(x) = x² - 2x - 3 on [1, 3], what is the value of c where f'(c) = 0?</p>
                      <div className="space-y-2 pl-6">
                        <div className="flex items-start">
                          <input type="radio" id="q2a" name="q2" className="mt-1 mr-2" />
                          <label htmlFor="q2a">c = 0</label>
                        </div>
                        <div className="flex items-start">
                          <input type="radio" id="q2b" name="q2" className="mt-1 mr-2" />
                          <label htmlFor="q2b">c = 1</label>
                        </div>
                        <div className="flex items-start">
                          <input type="radio" id="q2c" name="q2" className="mt-1 mr-2" />
                          <label htmlFor="q2c">c = 2</label>
                        </div>
                        <div className="flex items-start">
                          <input type="radio" id="q2d" name="q2" className="mt-1 mr-2" />
                          <label htmlFor="q2d">c = 3</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <h3 className="font-semibold mb-3">Short Answer Questions:</h3>
                  
                  <div className="space-y-4">
                    <div>
                      <p className="mb-2">1. State Rolle's Theorem in your own words.</p>
                      <textarea rows={3} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                    </div>
                    
                    <div>
                      <p className="mb-2">2. Explain the geometric interpretation of Rolle's Theorem.</p>
                      <textarea rows={3} className="w-full p-2 border border-gray-300 rounded-md"></textarea>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'reference' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">References</h2>
              
              <div className="space-y-4">
                <div className="border-b pb-4">
                  <h3 className="font-semibold">Books:</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Stewart, J. (2015). Calculus: Early Transcendentals (8th ed.). Cengage Learning.</li>
                    <li>Thomas, G. B., Weir, M. D., & Hass, J. (2018). Thomas' Calculus (14th ed.). Pearson.</li>
                    <li>Apostol, T. M. (1991). Calculus, Volume 1 (2nd ed.). Wiley.</li>
                  </ul>
                </div>
                
                <div className="border-b pb-4">
                  <h3 className="font-semibold">Online Resources:</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li><a href="#" className="text-blue-600 hover:underline">Khan Academy: Rolle's Theorem</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Paul's Online Math Notes: Mean Value Theorem and Rolle's Theorem</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">MIT OpenCourseWare: Single Variable Calculus</a></li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="font-semibold">Research Papers:</h3>
                  <ul className="list-disc pl-6 space-y-2 mt-2">
                    <li>Rolle, M. (1691). "Méthode pour résoudre les égalitéz." Paris, France.</li>
                    <li>Boyer, C. B. (1959). "The History of the Calculus and Its Conceptual Development." Dover Publications.</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'feedback' && (
            <div>
              <h2 className="text-xl font-semibold mb-6">Feedback</h2>
              
              <p className="mb-4">We value your feedback! Please share your thoughts, suggestions, or any issues you encountered while using this learning module.</p>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="feedback" className="block text-sm font-medium text-gray-700 mb-1">Your Feedback</label>
                  <textarea 
                    id="feedback" 
                    rows={5} 
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="Please share your feedback, suggestions, or report any issues..."
                  ></textarea>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">How would you rate this module?</label>
                  <div className="flex space-x-4">
                    {[1, 2, 3, 4, 5].map((rating) => (
                      <div key={rating} className="flex items-center">
                        <input
                          type="radio"
                          id={`rating-${rating}`}
                          name="rating"
                          value={rating}
                          className="mr-1"
                        />
                        <label htmlFor={`rating-${rating}`}>{rating}</label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button
                  type="submit"
                  className="bg-olabs-purple hover:bg-olabs-light-purple text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Submit Feedback
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default RollesTheorem;
