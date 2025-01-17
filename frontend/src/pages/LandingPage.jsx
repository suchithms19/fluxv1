import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Page() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsVisible(true);
    }, 100);
  }, []);

  const handleBack = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-[#ffe05c] w-full sticky top-0 z-50">
        <button 
          className="flex items-center justify-center" 
          onClick={handleBack}
        >
          <span className="font-bold text-xl sm:text-2xl md:text-2xl">FLUX</span>
        </button>
      </header>

      <main className="flex-1 flex flex-col">
        <section className="w-full pt-6 sm:pt-12 md:pt-12 lg:pt-16 xl:pt-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className={`flex flex-col items-center text-center relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="space-y-6 max-w-5xl mx-auto">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter px-2">
                  Share Your Expertise, 
                  <span className="bg-[#ffd72c]/20 px-2 inline-block mt-2 sm:mt-0 sm:inline">
                    Change a Life
                  </span>
                </h1>
                
                <p className="text-gray-500 text-base sm:text-lg md:text-xl max-w-xl mx-auto px-4 sm:px-0">
                  Join our community of mentors today and start making an impact while building your professional brand
                </p>
              
                <div className="flex justify-center px-4 sm:px-0">
                  <button 
                    onClick={() => navigate('/mentorform')}
                    className="w-full sm:w-auto bg-[#ffe05c] text-black px-6 sm:px-8 py-3 rounded-lg font-medium hover:scale-105 transition-transform"
                  >
                    Become a Mentor
                  </button>
                </div>

                <div className="mt-8 sm:mt-12">
                  <h2 className="text-gray-600 mb-4 sm:mb-6 text-xs px-4 sm:px-0">
                    TO QUALIFY, YOU MUST HAVE:
                  </h2>
                  <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-8 px-4 sm:px-0">
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-gray-600 text-sm sm:text-base">A demonstratable track record</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <svg className="w-5 h-5 text-green-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span className="text-gray-600 text-sm sm:text-base">Willingness to share knowledge</span>
                    </div>
                  </div>

                  <div className="mt-12 px-4 sm:px-0">
                    <h2 className="text-gray-600 mb-6 text-xs">MENTORING ON FLUX</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
                      <div className="p-4 sm:p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-[#ffe05c] transition-all">
                        <h3 className="font-medium text-base sm:text-lg mb-2">Monetize Your Expertise</h3>
                        <p className="text-gray-500 text-xs sm:text-sm">
                          Turn your knowledge into income and get paid for every minute of your time.
                        </p>
                      </div>
                      
                      <div className="p-4 sm:p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-[#ffe05c] transition-all">
                        <h3 className="font-medium text-base sm:text-lg mb-2">Build Your Brand</h3>
                        <p className="text-gray-500 text-xs sm:text-sm">
                          Enhance your professional reputation through meaningful mentorship experiences.
                        </p>
                      </div>
                      
                      <div className="p-4 sm:p-6 rounded-xl bg-white/50 backdrop-blur-sm border border-gray-100 hover:border-[#ffe05c] transition-all">
                        <h3 className="font-medium text-base sm:text-lg mb-2">Flexible Schedule</h3>
                        <p className="text-gray-500 text-xs sm:text-sm">
                          Choose your own hours and availability. Work when it suits you best.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

