
import { useEffect, useRef } from 'react';

const PremiumExperience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const children = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    children?.forEach(child => {
      observer.observe(child);
    });
    
    return () => {
      children?.forEach(child => {
        observer.unobserve(child);
      });
    };
  }, []);

  return (
    <section className="py-16 bg-white" ref={sectionRef}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="relative animate-on-scroll opacity-0">
            <img
              src="/lovable-uploads/2287d867-fac5-464b-bf1a-3558b35c58dc.png"
              alt="Student using computer"
              className="w-full max-w-lg mx-auto"
            />
            
            <div className="absolute -bottom-10 -left-10 w-20 h-20 bg-olabs-cream rounded-full animate-float hidden md:block" style={{animationDelay: '1.5s'}}>
              <img 
                src="data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80' fill='none'%3E%3Cpath d='M30.9959 1.16324C23.4671 11.5436 11.1378 26.0713 2.32484 26.0713C0.85999 26.0713 0.00291443 25.1927 0.00291443 23.9361C0.00291443 20.1243 9.84798 14.1069 22.1763 3.53279C9.41449 13.1478 0.00291443 19.0215 0.00291443 12.5244C0.00291443 9.37936 2.7611 7.48068 7.84834 7.48068C19.7463 7.48068 31.4293 -1.85823 30.9959 1.16324Z' fill='%23FF6B00'/%3E%3C/svg%3E" 
                alt="" 
                className="w-full h-full p-4"
              />
            </div>
          </div>
          
          <div className="animate-on-scroll opacity-0">
            <h2 className="text-3xl font-bold mb-2">
              Premium <span className="text-olabs-orange">Learning</span> <br/>
              Experience
            </h2>
            
            <div className="space-y-6 mt-8">
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-olabs-purple rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" fill="white"/>
                    <path d="M13 4.069V2H11V4.069C7.08 4.525 4 7.91 4 12C4 16.418 7.582 20 12 20C16.418 20 20 16.418 20 12C20 7.91 16.92 4.525 13 4.069ZM12 18C8.686 18 6 15.314 6 12C6 8.686 8.686 6 12 6C15.314 6 18 8.686 18 12C18 15.314 15.314 18 12 18Z" fill="white"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Easily Accessible</h3>
                  <p className="text-gray-600 text-sm">
                    Learning Will feel Very Comfortable With Courslab.
                  </p>
                </div>
              </div>
              
              <div className="flex gap-4 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-olabs-purple rounded-lg flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2C6.486 2 2 6.486 2 12C2 17.514 6.486 22 12 22C17.514 22 22 17.514 22 12C22 6.486 17.514 2 12 2ZM12 20C7.589 20 4 16.411 4 12C4 7.589 7.589 4 12 4C16.411 4 20 7.589 20 12C20 16.411 16.411 20 12 20Z" fill="white"/>
                    <path d="M9.99998 13.587L7.70698 11.293L6.29298 12.707L10 16.414L17.707 8.70697L16.293 7.29297L9.99998 13.587Z" fill="white"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Fun learning experience</h3>
                  <p className="text-gray-600 text-sm">
                    Learning Will feel Very Comfortable With Courslab.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PremiumExperience;
