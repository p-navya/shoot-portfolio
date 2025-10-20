import React, { useState, useEffect, useRef } from 'react'
import heroImage from '../../assets/hero.png'

function Work() {
  const [activeTab, setActiveTab] = useState('captures')
  const [isReelsOpen, setIsReelsOpen] = useState(false)
  const [isImageOpen, setIsImageOpen] = useState(false)
  const [imageIndex, setImageIndex] = useState(0)
  const openedByUserRef = useRef(false)

  const showNextImage = () => {
    setImageIndex((idx) => (idx + 1) % images.length)
  }

  const showPrevImage = () => {
    setImageIndex((idx) => (idx - 1 + images.length) % images.length)
  }

  useEffect(() => {
    const videos = Array.from(document.querySelectorAll('.reel-video'))
    if (videos.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const videoEl = entry.target
          if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
            if (videoEl && typeof videoEl.play === 'function') {
              videoEl.play().catch(() => {})
            }
          } else {
            if (videoEl && typeof videoEl.pause === 'function') {
              videoEl.pause()
            }
          }
        })
      },
      { threshold: [0, 0.6, 1] }
    )

    videos.forEach((v) => observer.observe(v))
    return () => {
      videos.forEach((v) => observer.unobserve(v))
      observer.disconnect()
    }
  }, [activeTab])

  // Manage modal open/close side-effects
  useEffect(() => {
    if (!isReelsOpen) return
    // Lock body scroll
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    // Autoplay visible reel in modal
    const modalVideos = Array.from(document.querySelectorAll('.reel-modal-video'))
    const modalObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target
          if (entry.isIntersecting && entry.intersectionRatio > 0.7) {
            if (v && typeof v.play === 'function') v.play().catch(() => {})
          } else {
            if (v && typeof v.pause === 'function') v.pause()
          }
        })
      },
      { threshold: [0, 0.7, 1] }
    )
    modalVideos.forEach((v) => modalObserver.observe(v))

    return () => {
      modalVideos.forEach((v) => modalObserver.unobserve(v))
      modalObserver.disconnect()
      document.body.style.overflow = previousOverflow
    }
  }, [isReelsOpen])

  const openReel = (index) => {
    openedByUserRef.current = true
    setIsReelsOpen(true)
    // Small timeout to ensure modal content is mounted before scrolling
    setTimeout(() => {
      const el = document.getElementById(`reel-slide-${index}`)
      if (el) el.scrollIntoView({ behavior: 'auto', block: 'center' })
    }, 0)
  }

  const closeReels = () => setIsReelsOpen(false)

  const images = [
    { src: image1, alt: 'Portfolio Image 1' },
    { src: image2, alt: 'Portfolio Image 2' },
    { src: image3, alt: 'Portfolio Image 3' },
    { src: image4, alt: 'Portfolio Image 4' },
    { src: image5, alt: 'Portfolio Image 5' },
    { src: image6, alt: 'Portfolio Image 6' },
    { src: image7, alt: 'Portfolio Image 7' },
    { src: image8, alt: 'Portfolio Image 8' },
    { src: image9, alt: 'Portfolio Image 9' },
    { src: image10, alt: 'Portfolio Image 10' },
    { src: image16, alt: 'Portfolio Image 16' },
    { src: image17, alt: 'Portfolio Image 17' },
    { src: image18, alt: 'Portfolio Image 18' },
    { src: image19, alt: 'Portfolio Image 19' },
    { src: image21, alt: 'Portfolio Image 21' },
    { src: image22, alt: 'Portfolio Image 22' },
    { src: image26, alt: 'Portfolio Image 26' },
    { src: image27, alt: 'Portfolio Image 27' },
    { src: image36, alt: 'Portfolio Image 36' },
    { src: image37, alt: 'Portfolio Image 37' },
    { src: image38, alt: 'Portfolio Image 38' },
    { src: image39, alt: 'Portfolio Image 39' },
    { src: image40, alt: 'Portfolio Image 40' },
    { src: image41, alt: 'Portfolio Image 41' },
    { src: image42, alt: 'Portfolio Image 42' },
    { src: image43, alt: 'Portfolio Image 43' },
    { src: image44, alt: 'Portfolio Image 44' },
    { src: image47, alt: 'Portfolio Image 47' },
    { src: image48, alt: 'Portfolio Image 48' }
  ]

  const videos = [
    { src: video1, alt: 'Portfolio Video 11' },
    { src: video2, alt: 'Portfolio Video 12' },
    { src: video3, alt: 'Portfolio Video 13' },
    { src: video4, alt: 'Portfolio Video 14' },
    { src: video5, alt: 'Portfolio Video 15' },
    { src: video6, alt: 'Portfolio Video 20' },
    { src: video7, alt: 'Portfolio Video 23' },
    { src: video8, alt: 'Portfolio Video 24' },
    { src: video9, alt: 'Portfolio Video 25' },
    { src: video10, alt: 'Portfolio Video 28' },
    { src: video11, alt: 'Portfolio Video 29' },
    { src: video12, alt: 'Portfolio Video 30' },
    { src: video13, alt: 'Portfolio Video 31' },
    { src: video14, alt: 'Portfolio Video 32' },
    { src: video15, alt: 'Portfolio Video 33' },
    { src: video16, alt: 'Portfolio Video 34' },
    { src: video17, alt: 'Portfolio Video 35' },
    { src: video18, alt: 'Portfolio Video 45' },
    { src: video19, alt: 'Portfolio Video 46' }
  ]

  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      {/* translucent overlay */}
      <div className="absolute inset-0 bg-black/20" />
      <div className="relative">
        {/* Portfolio content goes here */}
      </div>
    </div>
  )
}

export default Work
