import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import heroImage from '../../assets/hero.png'

// Import all images from l1 folder
import l1_image1 from '../../assets/l1/1.jpg'
import l1_image2 from '../../assets/l1/2.jpg'
import l1_image3 from '../../assets/l1/3.jpg'
import l1_image4 from '../../assets/l1/4.jpg'
import l1_image5 from '../../assets/l1/5.jpg'
import l1_image6 from '../../assets/l1/6.jpg'
import l1_image7 from '../../assets/l1/7.jpg'
import l1_image8 from '../../assets/l1/8.jpg'
import l1_image9 from '../../assets/l1/9.jpg'
import l1_image10 from '../../assets/l1/10.jpg'
import l1_T1Image from '../../assets/l1/T1.jpg'

// Import all images from l2 folder
import l2_image1 from '../../assets/l2/1.JPG'
import l2_image2 from '../../assets/l2/2.JPG'
import l2_image3 from '../../assets/l2/3.JPG'
import l2_image4 from '../../assets/l2/4.JPG'
import l2_image5 from '../../assets/l2/5.JPG'
import l2_image6 from '../../assets/l2/6.JPG'
import l2_image7 from '../../assets/l2/7.JPG'
import l2_image8 from '../../assets/l2/8.JPG'
import l2_image9 from '../../assets/l2/9.JPG'
import l2_image10 from '../../assets/l2/10.JPG'
import l2_T2Image from '../../assets/l2/T2.JPG'

// Import all images from l3 folder
import l3_image1 from '../../assets/l3/1.jpg'
import l3_image2 from '../../assets/l3/2.jpg'
import l3_image3 from '../../assets/l3/3.jpg'
import l3_image4 from '../../assets/l3/4.jpg'
import l3_image5 from '../../assets/l3/5.jpg'
import l3_image6 from '../../assets/l3/6.jpg'
import l3_image7 from '../../assets/l3/7.jpg'
import l3_image8 from '../../assets/l3/8.jpg'
import l3_image9 from '../../assets/l3/9.jpg'
import l3_image10 from '../../assets/l3/10.jpg'
import l3_image11 from '../../assets/l3/11.jpg'
import l3_T3Image from '../../assets/l3/T3.jpg'

// Import all images from l4 folder
import l4_image1 from '../../assets/l4/1.jpg'
import l4_image2 from '../../assets/l4/2.jpg'
import l4_image3 from '../../assets/l4/3.jpeg'
import l4_image4 from '../../assets/l4/4.jpg'
import l4_image5 from '../../assets/l4/5.jpg'
import l4_image6 from '../../assets/l4/6.jpg'
import l4_image7 from '../../assets/l4/7.jpg'
import l4_image8 from '../../assets/l4/8.jpg'
import l4_image9 from '../../assets/l4/9.jpg'
import l4_image10 from '../../assets/l4/10.jpg'
import l4_image11 from '../../assets/l4/11.jpg'
import l4_T4Image from '../../assets/l4/T4.jpg'

// Import all images from l5 folder
import l5_image1 from '../../assets/l5/1.jpg'
import l5_image2 from '../../assets/l5/2.jpg'
import l5_image3 from '../../assets/l5/3.jpg'
import l5_image4 from '../../assets/l5/4.jpg'
import l5_image5 from '../../assets/l5/5.jpg'
import l5_image6 from '../../assets/l5/6.jpg'
import l5_image7 from '../../assets/l5/7.jpg'
import l5_image8 from '../../assets/l5/8.jpg'
import l5_image9 from '../../assets/l5/9.jpg'
import l5_image10 from '../../assets/l5/10.jpg'
import l5_image11 from '../../assets/l5/11.jpg'
import l5_image12 from '../../assets/l5/12.jpg'
import l5_T5Image from '../../assets/l5/T5.jpg'

function Gallery() {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const folder = searchParams.get('folder') || 'l1'
  const [selectedImageIndex, setSelectedImageIndex] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Scroll to top when component mounts or folder changes
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [folder])

  // Define image collections for each folder
  const imageCollections = {
    l1: [
      { src: l1_image1, alt: 'Gallery Image 1' },
      { src: l1_image2, alt: 'Gallery Image 2' },
      { src: l1_image3, alt: 'Gallery Image 3' },
      { src: l1_image4, alt: 'Gallery Image 4' },
      { src: l1_image5, alt: 'Gallery Image 5' },
      { src: l1_image6, alt: 'Gallery Image 6' },
      { src: l1_image7, alt: 'Gallery Image 7' },
      { src: l1_image8, alt: 'Gallery Image 8' },
      { src: l1_image9, alt: 'Gallery Image 9' },
      { src: l1_image10, alt: 'Gallery Image 10' },
      { src: l1_T1Image, alt: 'Gallery Image T1' }
    ],
    l2: [
      { src: l2_image1, alt: 'Gallery Image 1' },
      { src: l2_image2, alt: 'Gallery Image 2' },
      { src: l2_image3, alt: 'Gallery Image 3' },
      { src: l2_image4, alt: 'Gallery Image 4' },
      { src: l2_image5, alt: 'Gallery Image 5' },
      { src: l2_image6, alt: 'Gallery Image 6' },
      { src: l2_image7, alt: 'Gallery Image 7' },
      { src: l2_image8, alt: 'Gallery Image 8' },
      { src: l2_image9, alt: 'Gallery Image 9' },
      { src: l2_image10, alt: 'Gallery Image 10' },
      { src: l2_T2Image, alt: 'Gallery Image T2' }
    ],
    l3: [
      { src: l3_image1, alt: 'Gallery Image 1' },
      { src: l3_image2, alt: 'Gallery Image 2' },
      { src: l3_image3, alt: 'Gallery Image 3' },
      { src: l3_image4, alt: 'Gallery Image 4' },
      { src: l3_image5, alt: 'Gallery Image 5' },
      { src: l3_image6, alt: 'Gallery Image 6' },
      { src: l3_image7, alt: 'Gallery Image 7' },
      { src: l3_image8, alt: 'Gallery Image 8' },
      { src: l3_image9, alt: 'Gallery Image 9' },
      { src: l3_image10, alt: 'Gallery Image 10' },
      { src: l3_image11, alt: 'Gallery Image 11' },
      { src: l3_T3Image, alt: 'Gallery Image T3' }
    ],
    l4: [
      { src: l4_image1, alt: 'Gallery Image 1' },
      { src: l4_image2, alt: 'Gallery Image 2' },
      { src: l4_image3, alt: 'Gallery Image 3' },
      { src: l4_image4, alt: 'Gallery Image 4' },
      { src: l4_image5, alt: 'Gallery Image 5' },
      { src: l4_image6, alt: 'Gallery Image 6' },
      { src: l4_image7, alt: 'Gallery Image 7' },
      { src: l4_image8, alt: 'Gallery Image 8' },
      { src: l4_image9, alt: 'Gallery Image 9' },
      { src: l4_image10, alt: 'Gallery Image 10' },
      { src: l4_image11, alt: 'Gallery Image 11' },
      { src: l4_T4Image, alt: 'Gallery Image T4' }
    ],
    l5: [
      { src: l5_image1, alt: 'Gallery Image 1' },
      { src: l5_image2, alt: 'Gallery Image 2' },
      { src: l5_image3, alt: 'Gallery Image 3' },
      { src: l5_image4, alt: 'Gallery Image 4' },
      { src: l5_image5, alt: 'Gallery Image 5' },
      { src: l5_image6, alt: 'Gallery Image 6' },
      { src: l5_image7, alt: 'Gallery Image 7' },
      { src: l5_image8, alt: 'Gallery Image 8' },
      { src: l5_image9, alt: 'Gallery Image 9' },
      { src: l5_image10, alt: 'Gallery Image 10' },
      { src: l5_image11, alt: 'Gallery Image 11' },
      { src: l5_image12, alt: 'Gallery Image 12' },
      { src: l5_T5Image, alt: 'Gallery Image T5' }
    ]
  }

  const images = imageCollections[folder] || imageCollections.l1

  const handleBackClick = () => {
    navigate('/')
    // Scroll to portfolio section after navigation
    setTimeout(() => {
      const portfolioSection = document.getElementById('portfolio')
      if (portfolioSection) {
        portfolioSection.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  }

  const handleImageClick = (index) => {
    setSelectedImageIndex(index)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedImageIndex(null)
  }

  const handleNextImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    )
  }

  const handlePrevImage = () => {
    setSelectedImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    )
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      handleCloseModal()
    } else if (e.key === 'ArrowRight') {
      handleNextImage()
    } else if (e.key === 'ArrowLeft') {
      handlePrevImage()
    }
  }

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* translucent overlay with blur */}
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" />
      
      <div className="relative">
        {/* Back Button - Floating */}
        <button 
          onClick={handleBackClick}
          className="fixed top-4 left-4 z-50 bg-gray-900/80 backdrop-blur text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition-colors font-semibold flex items-center gap-2"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>

        {/* Instagram-like Grid */}
        <div className="max-w-7xl mx-auto px-4 pt-20 pb-16">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <div 
                key={index}
                onClick={() => handleImageClick(index)}
                className="aspect-square bg-white/10 backdrop-blur-md rounded-lg shadow-lg hover:bg-white/20 transition-all duration-300 overflow-hidden cursor-pointer group"
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Image Modal */}
        {isModalOpen && selectedImageIndex !== null && (
          <div 
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center overflow-hidden"
            onClick={handleCloseModal}
            onKeyDown={handleKeyDown}
            tabIndex={0}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-6 right-6 z-60 bg-white/10 backdrop-blur text-white p-3 rounded-full hover:bg-white/20 transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Previous Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handlePrevImage()
              }}
              className="absolute left-6 top-1/2 transform -translate-y-1/2 z-60 bg-white/10 backdrop-blur text-white p-4 rounded-full hover:bg-white/20 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Next Arrow */}
            <button
              onClick={(e) => {
                e.stopPropagation()
                handleNextImage()
              }}
              className="absolute right-6 top-1/2 transform -translate-y-1/2 z-60 bg-white/10 backdrop-blur text-white p-4 rounded-full hover:bg-white/20 transition-colors"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Image Container */}
            <div 
              className="w-full h-full flex items-center justify-center p-16"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={images[selectedImageIndex].src} 
                alt={images[selectedImageIndex].alt}
                className="max-w-full max-h-full object-contain"
              />
            </div>

            {/* Image Counter */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 bg-white/10 backdrop-blur text-white px-4 py-2 rounded-full text-sm">
              {selectedImageIndex + 1} / {images.length}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Gallery