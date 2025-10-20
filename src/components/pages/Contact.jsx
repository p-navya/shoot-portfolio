import React, { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Format the message for WhatsApp
    const whatsappMessage = `Hello! I'm interested in your photography services.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email || 'Not provided'}
*Service Interested In:* ${formData.service || 'Not specified'}

*Message:*
${formData.message}

Looking forward to hearing from you!`
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage)
    
    // WhatsApp number (replace with actual WhatsApp number)
    const whatsappNumber = '918125165597' // +91 81251 65597
    
    // Create WhatsApp URL
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank')
    
    // Reset form after sending
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    })
  }

  return (
    <div className="min-h-screen bg-white">
    </div>
  )
}

export default Contact
