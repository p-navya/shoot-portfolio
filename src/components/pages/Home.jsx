import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import heroImage from '../../assets/hero.png'
import T1Image from '../../assets/l1/T1.jpg'
import T2Image from '../../assets/l2/T2.JPG'
import T3Image from '../../assets/l3/T3.jpg'
import T4Image from '../../assets/l4/T4.jpg'
import T5Image from '../../assets/l5/T5.jpg'

function Home() {
  const navigate = useNavigate()
  const portfolioRef = useRef(null)

  const handleScrollDown = () => {
    portfolioRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContactClick = () => {
    navigate('/contact')
  }

  const handleTileClick = (folder) => {
    navigate(`/gallery?folder=${folder}`)
    // Scroll to top when navigating to gallery
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }

  return (
    <>
    <div 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="text-center">
        <h1 className="text-8xl md:text-12xl font-bold text-white text-center font-serif mb-8 ">
          Navya Dhriti
        </h1>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white text-lg font-semibold">
          {/* Instagram */}
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span>navya.dhriti</span>
          </div>
          
          <span className="hidden sm:block">|</span>
          
          {/* Gmail */}
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v.01L12 13l8-6.99V6H4zm0 12h16V8l-8 6L4 8v10z"/>
            </svg>
            <span>navyadhritii@gmail.com</span>
          </div>
          
          <span className="hidden sm:block">|</span>
          
          {/* Location */}
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span>Hyderabad, India</span>
          </div>
        </div>
      </div>
      
      {/* Down Arrow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <svg 
          onClick={handleScrollDown}
          className="w-8 h-8 text-white animate-bounce cursor-pointer" 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M19 14l-7 7m0 0l-7-7m7 7V3" 
          />
        </svg>
      </div>
    </div>

    {/* Portfolio Section */}
    <div
      id="portfolio"
      ref={portfolioRef}
      className="relative min-h-screen py-16 px-4 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* translucent overlay for readability */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      <div className="relative max-w-7xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="h-1 w-36 sm:w-64 md:w-96 bg-gradient-to-l from-white/60 to-transparent" />
          <h2 className="text-4xl md:text-6xl font-bold text-white text-center font-serif">
            Portfolio
          </h2>
          <div className="h-1 w-32 sm:w-64 md:w-96 bg-gradient-to-r from-white/60 to-transparent" />
        </div>
        
        {/* Tiles Grid */}
        <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-4">
          <div 
            onClick={() => handleTileClick('l1')}
            className="w-full max-w-xs mx-auto md:w-56 h-80 md:h-[32rem] bg-white/10 backdrop-blur-md rounded-3xl shadow-lg hover:bg-white/20 transition-all duration-300 overflow-hidden mt-8 md:mt-0 cursor-pointer group relative"
          >
              <img 
                src={T1Image} 
                alt="Portfolio Image 1" 
                className="w-full h-full object-cover object-[center_25%] rounded-3xl group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                  Explore Collection
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </div>
          </div>
          <div 
            onClick={() => handleTileClick('l2')}
            className="w-full max-w-xs mx-auto md:w-56 h-80 md:h-[32rem] bg-white/10 backdrop-blur-md rounded-3xl shadow-lg hover:bg-white/20 transition-all duration-300 overflow-hidden cursor-pointer group relative"
          >
            <img 
              src={T2Image} 
              alt="Portfolio Image 2" 
              className="w-full h-full object-cover object-[center_25%] rounded-3xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                Explore Collection
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
              </div>
            </div>
          </div>
          <div 
            onClick={() => handleTileClick('l3')}
            className="w-full max-w-xs mx-auto md:w-56 h-80 md:h-[32rem] bg-white/10 backdrop-blur-md rounded-3xl shadow-lg hover:bg-white/20 transition-all duration-300 overflow-hidden cursor-pointer group relative"
          >
            <img 
              src={T3Image} 
              alt="Portfolio Image 3" 
              className="w-full h-full object-cover object-[center_25%] rounded-3xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                Explore Collection
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
              </div>
            </div>
          </div>
          <div 
            onClick={() => handleTileClick('l4')}
            className="w-full max-w-xs mx-auto md:w-56 h-80 md:h-[32rem] bg-white/10 backdrop-blur-md rounded-3xl shadow-lg hover:bg-white/20 transition-all duration-300 overflow-hidden cursor-pointer group relative"
          >
            <img 
              src={T4Image} 
              alt="Portfolio Image 4" 
              className="w-full h-full object-cover object-[center_25%] rounded-3xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                Explore Collection
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
              </div>
            </div>
          </div>
          <div 
            onClick={() => handleTileClick('l5')}
            className="w-full max-w-xs mx-auto md:w-56 h-80 md:h-[32rem] bg-white/10 backdrop-blur-md rounded-3xl shadow-lg hover:bg-white/20 transition-all duration-300 overflow-hidden cursor-pointer group relative"
          >
            <img 
              src={T5Image} 
              alt="Portfolio Image 5" 
              className="w-full h-full object-cover object-[center_25%] rounded-3xl group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
              <div className="bg-white/20 backdrop-blur text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                Explore Collection
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home
